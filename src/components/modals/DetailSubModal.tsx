"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  DollarSign,
  CreditCard,
  Bell,
  Tag,
  TrendingUp,
  PieChart,
  Users,
  Smartphone,
  Laptop,
  Tv,
  ArrowUpCircle,
  ArrowDownCircle,
  Mail,
  MessageSquare,
} from "lucide-react";
import {
  LineChart,
  Line,
  PieChart as RechartsChartPie,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

interface SubscriptionDetailModalProps {
    userId: string;
    name: string;
    plan: string;
    price: number;
    currency: string;
    startDate: string;
    renewalDate: string;
    status: "active" | "cancelled";
    category: string;
    autoRenew: boolean;
    paymentHistory: Array<{
      date: string;
      amount: number;
      method: string;
      invoiceNumber: string;
    }>;
    notifications: Array<{
      type: string;
      message: string;
      date: string;
    }>;
    subNumber: string;
    renewalMethod: string;
    contractDuration: string;
    serviceLevel: string;
    usageLimits: string;
    region: string;
    languagePreference: string;
    paymentMethod: string;
    lastPaymentDate: string;
    nextPaymentDate: string;
    gracePeriod: string;
    earlyTerminationFee: number;
    upgradeOptions: string[];
    downgradeOptions: string[];
    relatedSubscriptions: string[];
    customFields: {
      profileCount: number;
      supportedDevices: string[];
    };
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

export default function DetailSubModal() {
  const subscription: SubscriptionDetailModalProps = {

      userId: "123456",
      name: "Spotify Premium",
      plan: "Family Plan",
      price: 89.99,
      currency: "TRY",
      startDate: "2024-01-15",
      renewalDate: "2024-02-15",
      status: "active",
      category: "Music Streaming",
      autoRenew: true,
      paymentHistory: [
        {
          date: "2024-01-15",
          amount: 89.99,
          method: "Credit Card",
          invoiceNumber: "INV-20240115-001",
        },
        {
          date: "2023-12-15",
          amount: 89.99,
          method: "Credit Card",
          invoiceNumber: "INV-20231215-002",
        },
      ],
      notifications: [
        {
          type: "email",
          message: "Your subscription has been renewed successfully.",
          date: "2024-01-15",
        },
        {
          type: "sms",
          message:
            "Reminder: Your Spotify subscription will renew on 2024-02-15.",
          date: "2024-02-10",
        },
      ],
      subNumber: "SUB-00112233",
      renewalMethod: "automatic",
      contractDuration: "1 month",
      serviceLevel: "Premium",
      usageLimits: "Unlimited Music Streaming",
      region: "Turkey",
      languagePreference: "tr",
      paymentMethod: "Credit Card",
      lastPaymentDate: "2024-01-15",
      nextPaymentDate: "2024-02-15",
      gracePeriod: "7 days",
      earlyTerminationFee: 0,
      upgradeOptions: ["Spotify Duo"],
      downgradeOptions: ["Spotify Individual"],
      relatedSubscriptions: ["Netflix Premium"],
      customFields: {
        profileCount: 6,
        supportedDevices: ["Smartphone", "Tablet", "Laptop", "Smart TV"],
      
    },
  };

  const monthlySpendingData =
    subscription?.paymentHistory?.map((payment) => ({
      name: payment.date.substring(0, 7),
      amount: payment.amount,
    })) || [];

  const deviceUsageData =
    subscription?.customFields?.supportedDevices?.map((device, index) => ({
      name: device,
      value: 100 / (subscription?.customFields?.supportedDevices?.length || 1),
    })) || [];

  if (!subscription) {
    return (
      <Card>
        <CardContent>
          <CardHeader>
            <CardTitle>Subscription Details</CardTitle>
          </CardHeader>
          <p>Subscription data is not available.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className=" h-[80vh] overflow-y-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            {subscription?.name || "Subscription Details"}
          </CardTitle>
        </CardHeader>
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Genel Bakış</TabsTrigger>
            <TabsTrigger value="details">Detaylar</TabsTrigger>
            <TabsTrigger value="payments">Ödemeler</TabsTrigger>
            <TabsTrigger value="analysis">Analiz</TabsTrigger>
            <TabsTrigger value="notifications">Bildirimler</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>Abonelik Özeti</CardTitle>
                <CardDescription>
                  {subscription.name} aboneliğinizin temel bilgileri
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex items-center space-x-4">
                  <Badge
                    variant={
                      subscription.status === "active" ? "default" : "secondary"
                    }
                  >
                    {subscription.status === "active"
                      ? "Aktif"
                      : "İptal Edildi"}
                  </Badge>
                  <Badge variant="outline">{subscription.plan}</Badge>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">
                      {subscription?.price} {subscription?.currency} /{" "}
                      {subscription?.contractDuration || "month"}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Tag className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">
                      {subscription.category}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">
                      Başlangıç: {subscription.startDate}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bell className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">
                      Yenileme: {subscription.renewalDate}
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">
                    Desteklenen Cihazlar
                  </h4>
                  <div className="flex space-x-2">
                    {subscription.customFields.supportedDevices.map(
                      (device, index) => (
                        <Badge key={index} variant="secondary">
                          {device === "Smart TV" && (
                            <Tv className="h-4 w-4 mr-1" />
                          )}
                          {device === "Mobile" && (
                            <Smartphone className="h-4 w-4 mr-1" />
                          )}
                          {device === "Laptop" && (
                            <Laptop className="h-4 w-4 mr-1" />
                          )}
                          {device}
                        </Badge>
                      )
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="details">
            <Card>
              <CardHeader>
                <CardTitle>Abonelik Detayları</CardTitle>
                <CardDescription>
                  {subscription.name} aboneliğinizin tüm detayları
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">
                      Abonelik Numarası
                    </h4>
                    <p className="text-sm">{subscription.subNumber}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">
                      Ödeme Yöntemi
                    </h4>
                    <div className="flex items-center space-x-2">
                      <CreditCard className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">
                        {subscription.paymentMethod}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">
                      Hizmet Seviyesi
                    </h4>
                    <p className="text-sm">{subscription.serviceLevel}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">
                      Kullanım Limitleri
                    </h4>
                    <p className="text-sm">{subscription.usageLimits}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">
                      Bölge
                    </h4>
                    <p className="text-sm">{subscription.region}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">
                      Dil Tercihi
                    </h4>
                    <p className="text-sm">{subscription.languagePreference}</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-1">
                    Yenileme Yöntemi
                  </h4>
                  <p className="text-sm">{subscription.renewalMethod}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-1">
                    Sözleşme Süresi
                  </h4>
                  <p className="text-sm">{subscription.contractDuration}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-1">
                    Ek Özellikler
                  </h4>
                  <p className="text-sm">
                    Profil Sayısı: {subscription.customFields.profileCount}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Bell className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">
                    Otomatik Yenileme:{" "}
                    {subscription.autoRenew ? "Açık" : "Kapalı"}
                  </span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="payments">
            <Card>
              <CardHeader>
                <CardTitle>Ödeme Geçmişi</CardTitle>
                <CardDescription>
                  Geçmiş ödemeleriniz ve gelecek ödemeler
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">
                      Geçmiş Ödemeler
                    </h4>
                    <ul className="space-y-2">
                      {subscription?.paymentHistory?.map((payment, index) => (
                        <li
                          key={index}
                          className="flex justify-between items-center text-sm"
                        >
                          <span>{payment.date}</span>
                          <span>
                            {payment.amount} {subscription.currency}
                          </span>
                          <span>{payment.method}</span>
                          <span className="text-muted-foreground">
                            {payment.invoiceNumber}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">
                      Gelecek Ödemeler
                    </h4>
                    <div className="flex justify-between items-center text-sm">
                      <span>Sonraki Ödeme Tarihi</span>
                      <span>{subscription.nextPaymentDate}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm mt-1">
                      <span>Ödeme Tutarı</span>
                      <span>
                        {subscription.price} {subscription.currency}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="analysis">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Aylık Harcama Trendi</CardTitle>
                  <CardDescription>
                    Son ödemelerin aylık dağılımı
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={monthlySpendingData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="amount"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Cihaz Kullanım Analizi</CardTitle>
                  <CardDescription>
                    Desteklenen cihazların dağılımı
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <RechartsChartPie>
                      <Pie
                        data={deviceUsageData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) =>
                          `${name} ${(percent * 100).toFixed(0)}%`
                        }
                      >
                        {deviceUsageData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                    </RechartsChartPie>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Abonelik İstatistikleri</CardTitle>
                  <CardDescription>Genel abonelik verileri</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">
                        Son Ödeme Tarihi:
                      </span>
                      <span className="text-sm">
                        {subscription.lastPaymentDate}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">
                        Sonraki Ödeme Tarihi:
                      </span>
                      <span className="text-sm">
                        {subscription.nextPaymentDate}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Ödeme Tutarı:</span>
                      <span className="text-sm">
                        {subscription.price} {subscription.currency}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">
                        Erken İptal Ücreti:
                      </span>
                      <span className="text-sm">
                        {subscription.earlyTerminationFee}{" "}
                        {subscription.currency}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Plan Değişiklik Seçenekleri</CardTitle>
                  <CardDescription>
                    Yükseltme ve düşürme seçenekleri
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2 flex items-center">
                        <ArrowUpCircle className="h-4 w-4 mr-2 text-green-500" />
                        Yükseltme Seçenekleri
                      </h4>
                      <ul className="list-disc list-inside text-sm space-y-1">
                        {subscription.upgradeOptions.map((option, index) => (
                          <li key={index}>{option}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2 flex items-center">
                        <ArrowDownCircle className="h-4 w-4 mr-2 text-yellow-500" />
                        Düşürme Seçenekleri
                      </h4>
                      <ul className="list-disc list-inside text-sm space-y-1">
                        {subscription.downgradeOptions.map((option, index) => (
                          <li key={index}>{option}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Bildirimler</CardTitle>
                <CardDescription>
                  Aboneliğinizle ilgili son bildirimler
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {subscription?.notifications?.map((notification, index) => (
                    <li
                      key={index}
                      className="border-b pb-4 last:border-b-0 last:pb-0"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium flex items-center">
                          {notification.type === "email" ? (
                            <Mail className="h-4 w-4 mr-2 text-blue-500" />
                          ) : (
                            <MessageSquare className="h-4 w-4 mr-2 text-green-500" />
                          )}
                          {notification.type === "email" ? "E-posta" : "SMS"}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {notification.date}
                        </span>
                      </div>
                      <p className="text-sm mt-1">{notification.message}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
