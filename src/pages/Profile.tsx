"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";




export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8 h-screen pt-28">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Avatar className="w-20 h-20">
              <AvatarImage
                src="/placeholder.svg?height=80&width=80"
                alt="Profil Resmi"
              />
              <AvatarFallback>AY</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-2xl">Ahmet Yılmaz</CardTitle>
              <CardDescription>Üyelik Başlangıcı: 15 Ocak 2023</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="personal-info" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="personal-info">Kişisel Bilgiler</TabsTrigger>
              <TabsTrigger value="account">Hesap</TabsTrigger>
              <TabsTrigger value="subscriptions">Abonelikler</TabsTrigger>
              <TabsTrigger value="notifications">Bildirimler</TabsTrigger>
            </TabsList>
            <TabsContent value="personal-info">
              <Card>
                <CardHeader>
                  <CardTitle>Kişisel Bilgiler</CardTitle>
                  <CardDescription>
                    Kişisel bilgilerinizi güncelleyin
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Ad Soyad</Label>
                      <Input
                        id="fullName"
                        defaultValue="Ahmet Yılmaz"
                        readOnly={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-posta</Label>
                      <Input
                        id="email"
                        type="email"
                        defaultValue="ahmet.yilmaz@example.com"
                        readOnly={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon</Label>
                      <Input
                        id="phone"
                        type="tel"
                        defaultValue="+90 555 123 4567"
                        readOnly={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="birthdate">Doğum Tarihi</Label>
                      <Input
                        id="birthdate"
                        type="date"
                        defaultValue="1990-01-01"
                        readOnly={!isEditing}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Adres</Label>
                    <Input
                      id="address"
                      defaultValue="Atatürk Cad. No:123, 34000 İstanbul"
                      readOnly={!isEditing}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={() => setIsEditing(!isEditing)}>
                    {isEditing ? "Kaydet" : "Düzenle"}
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="account">
              <Card>
                <CardHeader>
                  <CardTitle>Hesap Ayarları</CardTitle>
                  <CardDescription>Hesap güvenliğinizi yönetin</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-between mb-2 mx-5 p-4 bg-blue-50 rounded-lg">
                  <div className="space-y-0.5">
                    <Label className="text-base">
                      İki Faktörlü Kimlik Doğrulama
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Hesabınızı daha güvenli hale getirin
                    </p>
                  </div>
                  <Switch />
                </CardContent>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Mevcut Şifre</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">Yeni Şifre</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">
                      Yeni Şifre (Tekrar)
                    </Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Şifreyi Değiştir</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="subscriptions">
              <Card>
                <CardHeader>
                  <CardTitle>Aboneliklerim</CardTitle>
                  <CardDescription>
                    Aktif aboneliklerinizi yönetin
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        name: "Netflix",
                        price: "₺49.90/ay",
                        renewalDate: "15 Haziran 2023",
                      },
                      {
                        name: "Spotify",
                        price: "₺29.90/ay",
                        renewalDate: "1 Temmuz 2023",
                      },
                      {
                        name: "Adobe Creative Cloud",
                        price: "₺149.90/ay",
                        renewalDate: "10 Temmuz 2023",
                      },
                    ].map((subscription, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-muted rounded-lg"
                      >
                        <div>
                          <h3 className="font-semibold">{subscription.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {subscription.price}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm">
                            Yenileme: {subscription.renewalDate}
                          </p>
                          <Button variant="link" className="text-sm">
                            İptal Et
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="notifications">
              <Card>
                <CardHeader>
                  <CardTitle>Bildirim Ayarları</CardTitle>
                  <CardDescription>
                    Bildirim tercihlerinizi yönetin
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">E-posta Bildirimleri</Label>
                      <p className="text-sm text-muted-foreground">
                        Abonelik güncellemeleri ve özel teklifler hakkında bilgi
                        alın
                      </p>
                    </div>
                    <Switch />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">SMS Bildirimleri</Label>
                      <p className="text-sm text-muted-foreground">
                        Önemli bildirimler için SMS alın
                      </p>
                    </div>
                    <Switch />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
