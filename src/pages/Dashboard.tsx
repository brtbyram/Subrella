"use client";

import { getAllSubscriptions } from "../services/subscriptions.js";
import { useDispatch, } from "react-redux";

import { useQuery } from "@tanstack/react-query";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, CreditCard, TrendingUp, AlertTriangle } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import moment from "moment";
import { openModal } from "../redux/appSlice";


const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

export default function Dashboard() {
  
  const userId = localStorage.getItem("userId");
  const dispatch = useDispatch();

  const { data } = useQuery({
    queryKey: ["subscriptions"],
    queryFn: () => getAllSubscriptions(userId),
    enabled: !!userId, // userId yoksa sorguyu çalıştırma
  });

  // Toplam abonelik sayısı
  const totalSub = data?.length || 0; 

  // Toplam aylık harcama
  const totalCost = data?.reduce((acc: number, subscription: any) => {
    return acc + subscription.price;
  }, 0).toFixed(2);  // toFixed ile virgülden sonra 2 basamak gösterilir

  // son 7 gün içinde ödemesi olan abonelikler
  const upcomingPayments = data?.filter((sub: any) => { 
    const nextPaymentDate = moment(sub.renewalDate); // Ödeme tarihi
    const today = moment(); // Bugünün tarihi
    const daysUntil = nextPaymentDate.diff(today, "days"); // Ödeme tarihine kaç gün kaldı diff fonksiyonu ile hesaplanır. diff 
    return daysUntil <= 7 && daysUntil >= 0; // Ödeme tarihi 7 gün içinde mi?
  })?.length;


  const lastSixMonths = Array.from({ length: 6 }, (_, i) =>
    moment().subtract(i, "months").format("MMM yyyy")
  ).reverse();

  const subscriptions = data || []; // Abonelik verisi

  // Her ay için harcama hesaplama
  const monthlySpend = lastSixMonths.map((month) => {
    const total = subscriptions.reduce((sum: number, sub: any) => {
      const subMonth = moment(sub.renewalDate).format("MMM yyyy");
      return subMonth === month ? sum + sub.price : sum;
    }, 0);

    return { month, amount: total };
  });

 // Aboneliklerin kategorilere göre dağılımı

  const categories = data?.map((subscription: any) => {
    return subscription.category;
  });

  const categorySet = new Set(categories);
  const categoryArray = Array.from(categorySet);
  const subscriptionData = categoryArray.map((category) => {
    const total = subscriptions.reduce((sum: number, sub: any) => {
      return sub.category === category ? sum + sub.price : sum;
    }, 0);
    return { name: category, price: total };
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Hoş Geldiniz,</h1>
          <p className="text-gray-500">
            Aboneliklerinizin genel durumunu buradan takip edebilirsiniz.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Toplam Abonelikler
            </CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalSub}</div>
            <p className="text-xs text-muted-foreground">+1 geçen aydan beri</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Aylık Harcama</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalCost} TL</div>
            <p className="text-xs text-muted-foreground">
              +5 TL geçen aydan beri
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Yaklaşan Ödemeler
            </CardTitle>
            <Bell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{upcomingPayments}</div>
            <p className="text-xs text-muted-foreground">
              Önümüzdeki 7 gün içinde
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Tasarruf Potansiyeli
            </CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45 TL</div>
            <p className="text-xs text-muted-foreground">
              Önerilen optimizasyonlarla
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Abonelik Dağılımı</CardTitle>
            <CardDescription>Aylık harcamalarınızın dağılımı</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={subscriptionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="price"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {subscriptionData?.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Son 6 Ay Harcama Trendi</CardTitle>
            <CardDescription>
              Aylık toplam abonelik harcamalarınız
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlySpend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="amount" fill="#112d5d" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Hızlı İşlemler</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Button
            className="w-full"
            onClick={() =>
              dispatch(
                openModal({
                  content: "AddSubModal",
                  isOpen: true,
                })
              )
            }
          >
            Yeni Abonelik Ekle
          </Button>
          <Button className="w-full" variant="outline">
            Abonelikleri Yönet
          </Button>
          <Button className="w-full" variant="secondary">
            Raporları Görüntüle
          </Button>
        </div>
      </div>
    </div>
  );
}
