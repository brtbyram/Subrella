"use client";

import MissionSection from "./components/MissionSection";
import HeroSection from "./components/HeroSection";
import JourneySection from "./components/JourneySection";
import ValuesSection from "./components/ValuesSection";
import TeamSection from "./components/TeamSection";
import VisionSection from "./components/VisionSection";


export default function AboutUsPage() {
  return (
    // <div className="container mx-auto px-4 py-8 bg-gray-50 min-h-screen pt-28">
    //   <motion.h1
    //     className="text-4xl font-bold text-center mb-8 text-gray-800"
    //     initial={{ opacity: 0, y: -20 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.5 }}
    //   >
    //     Subrella Hakkında
    //   </motion.h1>

    //   <motion.div
    //     initial={{ opacity: 0, y: 20 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.5, delay: 0.2 }}
    //   >
    //     <Card className="mb-8">
    //       <CardHeader>
    //         <CardTitle className="text-2xl text-blue-600">Hikayemiz</CardTitle>
    //       </CardHeader>
    //       <CardContent>
    //         <p className="text-gray-700 mb-4">
    //           Subrella, 2020 yılında abonelik yönetimini basitleştirme vizyonuyla kuruldu. Kendi aboneliklerimizi yönetmekte zorlandığımızı fark ettiğimizde, bu sorunu çözmek için yola çıktık. Bugün, binlerce kullanıcıya hizmet veren güvenilir bir platform haline geldik.
    //         </p>
    //         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
    //           <Card>
    //             <CardHeader>
    //               <CardTitle className="text-xl">Misyonumuz</CardTitle>
    //             </CardHeader>
    //             <CardContent>
    //               <p className="text-gray-600">Kullanıcılarımızın dijital hayatlarını basitleştirmek ve finansal özgürlüklerini artırmak.</p>
    //             </CardContent>
    //           </Card>
    //           <Card>
    //             <CardHeader>
    //               <CardTitle className="text-xl">Vizyonumuz</CardTitle>
    //             </CardHeader>
    //             <CardContent>
    //               <p className="text-gray-600">Abonelik yönetiminde global lider olmak ve kullanıcılarımıza maksimum değer sunmak.</p>
    //             </CardContent>
    //           </Card>
    //           <Card>
    //             <CardHeader>
    //               <CardTitle className="text-xl">Değerlerimiz</CardTitle>
    //             </CardHeader>
    //             <CardContent>
    //               <ul className="list-disc list-inside text-gray-600">
    //                 <li>Kullanıcı odaklılık</li>
    //                 <li>Şeffaflık</li>
    //                 <li>Sürekli inovasyon</li>
    //                 <li>Veri güvenliği</li>
    //               </ul>
    //             </CardContent>
    //           </Card>
    //         </div>
    //       </CardContent>
    //     </Card>
    //   </motion.div>

    //   <motion.div
    //     initial={{ opacity: 0, y: 20 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.5, delay: 0.4 }}
    //   >
    //     <Card className="mb-8">
    //       <CardHeader>
    //         <CardTitle className="text-2xl text-blue-600">Ekibimiz</CardTitle>
    //         <CardDescription>Subrella'ı harika yapan insanlarla tanışın</CardDescription>
    //       </CardHeader>
    //       <CardContent>
    //         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    //           {teamMembers.map((member, index) => (
    //             <motion.div
    //               key={member.name}
    //               className="text-center"
    //               whileHover={{ scale: 1.05 }}
    //               transition={{ type: "spring", stiffness: 300 }}
    //             >
    //               <Avatar className="w-24 h-24 mx-auto mb-2">
    //                 <AvatarImage src={member.image} alt={member.name} />
    //                 <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
    //               </Avatar>
    //               <h3 className="font-semibold text-gray-800">{member.name}</h3>
    //               <p className="text-sm text-gray-600">{member.role}</p>
    //             </motion.div>
    //           ))}
    //         </div>
    //       </CardContent>
    //     </Card>
    //   </motion.div>

    //   <motion.div
    //     initial={{ opacity: 0, y: 20 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.5, delay: 0.6 }}
    //   >
    //     <Card className="mb-8">
    //       <CardHeader>
    //         <CardTitle className="text-2xl text-blue-600">Müşteri Yorumları</CardTitle>
    //         <CardDescription>Kullanıcılarımız Subrella hakkında ne diyor?</CardDescription>
    //       </CardHeader>
    //       <CardContent>
    //         <ScrollArea className="h-[300px] w-full rounded-md border p-4">
    //           {testimonials.map((testimonial, index) => (
    //             <Card key={index} className="mb-4">
    //               <CardContent className="pt-4">
    //                 <p className="text-gray-700 mb-2">"{testimonial.text}"</p>
    //                 <div className="flex items-center justify-between">
    //                   <div>
    //                     <p className="font-semibold text-gray-800">{testimonial.name}</p>
    //                     <p className="text-sm text-gray-600">{testimonial.company}</p>
    //                   </div>
    //                   <Badge variant="secondary">Memnun Müşteri</Badge>
    //                 </div>
    //               </CardContent>
    //             </Card>
    //           ))}
    //         </ScrollArea>
    //       </CardContent>
    //     </Card>
    //   </motion.div>

    //   <motion.div
    //     initial={{ opacity: 0, y: 20 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.5, delay: 0.8 }}
    //   >
    //     <Card className="mb-8">
    //       <CardHeader>
    //         <CardTitle className="text-2xl text-blue-600">Subrella'ı Keşfedin</CardTitle>
    //       </CardHeader>
    //       <CardContent>
    //         <Tabs defaultValue="features" className="w-full">
    //           <TabsList className="grid w-full grid-cols-3">
    //             <TabsTrigger value="features">Özellikler</TabsTrigger>
    //             <TabsTrigger value="how-it-works">Nasıl Çalışır</TabsTrigger>
    //             <TabsTrigger value="pricing">Fiyatlandırma</TabsTrigger>
    //           </TabsList>
    //           <TabsContent value="features">
    //             <Card>
    //               <CardHeader>
    //                 <CardTitle>Öne Çıkan Özellikler</CardTitle>
    //               </CardHeader>
    //               <CardContent className="space-y-2">
    //                 <p className="text-gray-700">• Tüm aboneliklerinizi tek bir panelde yönetin</p>
    //                 <p className="text-gray-700">• Akıllı hatırlatıcılar ve bildirimler</p>
    //                 <p className="text-gray-700">• Detaylı raporlar ve analizler</p>
    //                 <p className="text-gray-700">• Güvenli veri şifreleme</p>
    //                 <Button className="mt-4">Tüm Özellikleri Gör <ArrowRight className="ml-2 h-4 w-4" /></Button>
    //               </CardContent>
    //             </Card>
    //           </TabsContent>
    //           <TabsContent value="how-it-works">
    //             <Card>
    //               <CardHeader>
    //                 <CardTitle>Subrella Nasıl Çalışır?</CardTitle>
    //               </CardHeader>
    //               <CardContent className="space-y-2">
    //                 <p className="text-gray-700">1. Hesabınızı oluşturun</p>
    //                 <p className="text-gray-700">2. Aboneliklerinizi ekleyin</p>
    //                 <p className="text-gray-700">3. Otomatik takip ve analizlerden yararlanın</p>
    //                 <p className="text-gray-700">4. Tasarruf önerilerini değerlendirin</p>
    //                 <Button className="mt-4">Detaylı Bilgi Al <ArrowRight className="ml-2 h-4 w-4" /></Button>
    //               </CardContent>
    //             </Card>
    //           </TabsContent>
    //           <TabsContent value="pricing">
    //             <Card>
    //               <CardHeader>
    //                 <CardTitle>Fiyatlandırma Planları</CardTitle>
    //               </CardHeader>
    //               <CardContent className="space-y-2">
    //                 <p className="text-gray-700">• Ücretsiz: Temel özelliklerle başlayın</p>
    //                 <p className="text-gray-700">• Pro: Gelişmiş analizler ve sınırsız abonelik</p>
    //                 <p className="text-gray-700">• Kurumsal: Özel çözümler ve destek</p>
    //                 <Button className="mt-4">Planları İncele <ArrowRight className="ml-2 h-4 w-4" /></Button>
    //               </CardContent>
    //             </Card>
    //           </TabsContent>
    //         </Tabs>
    //       </CardContent>
    //     </Card>
    //   </motion.div>

    //   <motion.div
    //     initial={{ opacity: 0 }}
    //     animate={{ opacity: 1 }}
    //     transition={{ duration: 0.5, delay: 1 }}
    //     className="text-center mt-8"
    //   >
    //     <h2 className="text-2xl font-semibold text-gray-800 mb-4">Bizi Takip Edin</h2>
    //     <div className="flex justify-center space-x-4">
    //       <Button variant="outline" size="icon">
    //         <Facebook className="h-4 w-4" />
    //       </Button>
    //       <Button variant="outline" size="icon">
    //         <Twitter className="h-4 w-4" />
    //       </Button>
    //       <Button variant="outline" size="icon">
    //         <Linkedin className="h-4 w-4" />
    //       </Button>
    //       <Button variant="outline" size="icon">
    //         <Instagram className="h-4 w-4" />
    //       </Button>
    //     </div>
    //   </motion.div>

    //   <motion.div
    //     initial={{ opacity: 0 }}
    //     animate={{ opacity: 1 }}
    //     transition={{ duration: 0.5, delay: 1.2 }}
    //     className="mt-8 text-center text-sm text-gray-600"
    //   >
    //     <p>
    //       © 2024 Subrella. Tüm hakları saklıdır. |{" "}
    //       <a href="#" className="underline hover:text-gray-800 transition-colors">Gizlilik Politikası</a> |{" "}
    //       <a href="#" className="underline hover:text-gray-800 transition-colors">Kullanım Koşulları</a>
    //     </p>
    //   </motion.div>
    // </div>

    <main className="min-h-screen flex flex-col">
      <HeroSection />
      <div className="container mx-auto flex max-md:flex-col-reverse justify-center items-center gap-x-20 py-4 bg-white">
        <div className="md:basis-1/2 flex flex-col justify-center text-5xl p-4">
          <p>Hey!</p>
          <h1 className="pb-5">We're Subrella</h1>
          <p className="text-gray-600 text-xl leading-relaxed">
          We are a global organization, located in different geographies around the world.
            innovative subscription management that meets their needs and that they will love
            dedicated to developing solutions, an optimistic and grateful remote
            working team. Subrella makes subscription management simple and effective.
            aims to make users' lives easier. To realize this vision, our team
            He works passionately and learns new things every day.
          </p>
          <p></p>
        </div>
        <div className="md:basis-1/2">
          <img src="/public/about-us-banner.png" className="basis-1/2" alt="" />
        </div>
      </div>
      <MissionSection />
      <JourneySection />
      <TeamSection />
      <VisionSection />
      <ValuesSection />
    </main>
  );
}
