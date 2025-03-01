export default function Footer(): any {
  return (
    <footer className="bg-[#F3F4F6] text-[#1E293B] py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Subrella</h3>
            <p className="text-sm">
              Aboneliklerinizi kolayca yönetin ve finansal kontrolünüzü elinizde
              tutun.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#2563EB] hover:underline">
                  Gizlilik Politikası
                </a>
              </li>
              <li>
                <a href="#" className="text-[#2563EB] hover:underline">
                  Kullanım Şartları
                </a>
              </li>
              <li>
                <a href="#" className="text-[#2563EB] hover:underline">
                  SSS
                </a>
              </li>
              <li>
                <a href="#" className="text-[#2563EB] hover:underline">
                  İletişim
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Bize Ulaşın</h3>
            <p className="text-sm">
              E-posta: destek@subrella.com
              <br />
              Telefon: (123) 456-7890
              <br />
              Adres: 123 Tech Street, Dijital Şehir, 34000
            </p>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-300 text-center text-sm">
          <p>&copy; 2024 Subrella. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
