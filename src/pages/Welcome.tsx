"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, Star, Users, BarChart, HelpCircle } from 'lucide-react'
import { Link } from 'react-router'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

export default function WelcomePage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)

  const userName = useSelector((state: RootState) => state.auth.user?.name)


  const steps = [
    { title: "Profilini Tamamla", icon: Users, description: "Kişisel bilgilerini ekleyerek deneyimini özelleştir." },
    { title: "İlk Aboneliğini Ekle", icon: Star, description: "Takip etmek istediğin ilk aboneliği ekle ve yönetmeye başla." },
    { title: "Hedeflerini Belirle", icon: BarChart, description: "Finansal hedeflerini belirle ve takip et." },
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(prevProgress => {
        if (prevProgress >= 100) {
          return 0
        }
        return prevProgress + 25
      })
    }, 500)

    return () => clearTimeout(timer)
  }, [progress])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E293B] to-[#334155] text-white p-8 pt-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-6">Hoş geldin, {userName}!</h1>
        <p className="text-xl mb-8">Subrella'ya katıldığın için mutluyuz. Hadi başlayalım!</p>

        <div className="bg-[#475569] bg-opacity-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Neden Subrella?</h2>
          <ul className="space-y-2">
            <li className="flex items-center"><ChevronRight className="mr-2 text-[#60A5FA]" /> Tüm aboneliklerini tek bir yerden yönet</li>
            <li className="flex items-center"><ChevronRight className="mr-2 text-[#60A5FA]" /> Gereksiz harcamalardan kaçın ve bütçeni kontrol et</li>
            <li className="flex items-center"><ChevronRight className="mr-2 text-[#60A5FA]" /> Ödemelerini hiç kaçırma</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Hızlı Başlangıç Rehberi</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-[#475569] bg-opacity-50 rounded-lg p-4 cursor-pointer transition-all duration-200 ${currentStep === index ? 'ring-2 ring-[#60A5FA]' : ''}`}
                onClick={() => setCurrentStep(index)}
              >
                <step.icon className="w-8 h-8 mb-2 text-[#60A5FA]" />
                <h3 className="font-semibold mb-1">{step.title}</h3>
                <p className="text-sm text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-[#475569] bg-opacity-50 rounded-lg p-6 mb-8"
          >
            <h3 className="text-xl font-semibold mb-4">{steps[currentStep].title}</h3>
            <p className="mb-4">{steps[currentStep].description}</p>
            <Button className="bg-[#3B82F6] hover:bg-[#2563EB] transition-colors duration-200">
              Başla
            </Button>
          </motion.div>
        </AnimatePresence>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Özel Teklif</h2>
          <div className="bg-[#475569] bg-opacity-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">İlk 3 ay %50 indirim!</h3>
            <p className="mb-4">Yeni üyelerimize özel, premium özelliklerimizden 3 ay boyunca yarı fiyatına yararlanın.</p>
            <Button className="bg-[#3B82F6] hover:bg-[#2563EB] transition-colors duration-200">
              Teklifi Kullan
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 mb-8">
          <div className="bg-[#475569] bg-opacity-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Topluluğumuza Katıl</h3>
            <p className="mb-4">Diğer kullanıcılarla etkileşimde bulun, ipuçları paylaş ve sorular sor.</p>
            <Link to="/community" className="text-[#60A5FA] hover:underline">Topluluğa Katıl →</Link>
          </div>
          <div className="bg-[#475569] bg-opacity-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Yardıma mı İhtiyacın Var?</h3>
            <p className="mb-4">Sorularınız için destek ekibimiz her zaman hazır.</p>
            <div className="flex items-center">
              <HelpCircle className="w-5 h-5 mr-2 text-[#60A5FA]" />
              <Link to="/support" className="text-[#60A5FA] hover:underline">Yardım Merkezi</Link>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="mb-2">Kurulumunu Tamamla</p>
          <Progress value={progress} className="w-full h-2 bg-[#475569]"  />
        </div>
      </motion.div>
    </div>
  )
}