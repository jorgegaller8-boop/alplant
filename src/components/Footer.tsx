import { Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center text-white font-bold text-lg">
                АП
              </div>
              <span className="text-xl font-bold text-white tracking-tight">АлПлант</span>
            </div>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Надежное вентиляционное оборудование и противопожарные клапаны от российского производителя. 15 лет на рынке.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-slate-500 shrink-0" />
                <span>г. Москва, ул. Производственная, д. 1<br/><span className="text-xs text-orange-500">*Требует уточнения</span></span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-5 h-5 text-slate-500 shrink-0" />
                <a href="tel:+74950000000" className="hover:text-white transition-colors">+7 (495) 000-00-00</a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-slate-500 shrink-0" />
                <a href="mailto:info@alplant.ru" className="hover:text-white transition-colors">info@alplant.ru</a>
              </div>
            </div>
          </div>

          {/* Catalog Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Продукция</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Клапаны противопожарные</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Клапаны воздушные</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Клапаны обратные</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Вентиляционные решетки</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Детали систем вентиляции</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Электроприводы</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Компания</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">О производстве</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Сертификаты и ГОСТ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Доставка и оплата</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Реализованные проекты</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>

          {/* Requisites */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Реквизиты</h3>
            <div className="text-sm space-y-2 text-slate-400 font-mono text-xs">
              <p>ООО «АлПлант»</p>
              <p>ИНН: 0000000000 <span className="text-orange-500">*</span></p>
              <p>ОГРН: 0000000000000 <span className="text-orange-500">*</span></p>
              <p>КПП: 000000000 <span className="text-orange-500">*</span></p>
              <p className="mt-4 text-orange-500/80 italic font-sans">
                * Юридические данные требуют верификации перед запуском
              </p>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} ООО «АлПлант». Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Пользовательское соглашение</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
