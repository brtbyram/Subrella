
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() : any {

    const [abonelikler, setAbonelikler] = useState([
        { id: 1, ad: "Netflix", fiyat: 99.99, yenilenmeTarihi: "2025-02-01" },
        { id: 2, ad: "Spotify", fiyat: 59.99, yenilenmeTarihi: "2025-02-15" }
      ]);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-6">Aboneliklerim</h1>
            <div className="space-y-4">
                {abonelikler.map((abonelik) => (
                    <Card key={abonelik.id} className="p-4 shadow-md">
                        <CardContent>
                            <h2 className="text-lg font-semibold">{abonelik.ad}</h2>
                            <p className="text-gray-500">Fiyat: {abonelik.fiyat} TL</p>
                            <p className="text-gray-500">Yenilenme: {abonelik.yenilenmeTarihi}</p>
                            <Button variant="outline" className="mt-2">Detayları Gör</Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

