import { ArrowRight, CheckCircle2, Clock, Factory, FileText, ShieldCheck, Truck, UploadCloud } from 'lucide-react';

// Import images from assets for guaranteed reliability
import fireValveImg from '../assets/images/fire-valve.jpg';
import airValveImg from '../assets/images/air-valve.jpg';
import backdraftValveImg from '../assets/images/backdraft-valve.jpg';
import grilleImg from '../assets/images/grille.jpg';
import ventilationPartsImg from '../assets/images/ventilation-parts.jpg';
import actuatorImg from '../assets/images/actuator.jpg';
import heroImg from '../assets/images/hero.jpg';
import productionImg from '../assets/images/production.jpg';

export function Home({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  const categories = [
    { name: 'Клапаны противопожарные', count: '12 серий', image: fireValveImg },
    { name: 'Клапаны воздушные регулирующие', count: '8 серий', image: airValveImg },
    { name: 'Клапаны обратные', count: '5 серий', image: backdraftValveImg },
    { name: 'Вентиляционные решетки', count: '24 вида', image: grilleImg },
    { name: 'Детали систем вентиляции', count: 'Более 100 наименований', image: ventilationPartsImg },
    { name: 'Электроприводы', count: 'В наличии', image: actuatorImg },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <img 
          src={heroImg} 
          alt="Industrial Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-orange-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            Российский производитель
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl leading-tight">
            Производство вентиляционного оборудования и противопожарных клапанов
          </h1>
          <p className="mt-6 text-xl text-slate-300 max-w-2xl leading-relaxed">
            Собственная производственная база 2000 м². Доставка по всей России. Более 15 лет на рынке. Оборудование для проектных, строительных и монтажных организаций.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => setCurrentPage('catalog')}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-md font-medium transition-colors text-lg shadow-lg shadow-orange-600/20"
            >
              Перейти в каталог
            </button>
            <button className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white px-8 py-4 rounded-md font-medium transition-colors text-lg flex items-center justify-center gap-2">
              <FileText className="w-5 h-5" />
              Скачать технический каталог
            </button>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-slate-800 text-slate-300 py-8 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center gap-4">
              <Clock className="w-10 h-10 text-orange-500 shrink-0" />
              <div>
                <div className="text-white font-bold text-lg">15+ лет</div>
                <div className="text-sm text-slate-400">на рынке РФ</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Factory className="w-10 h-10 text-orange-500 shrink-0" />
              <div>
                <div className="text-white font-bold text-lg">3 цеха (2000 м²)</div>
                <div className="text-sm text-slate-400">собственное производство</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Truck className="w-10 h-10 text-orange-500 shrink-0" />
              <div>
                <div className="text-white font-bold text-lg">Доставка по РФ</div>
                <div className="text-sm text-slate-400">надежная логистика</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <ShieldCheck className="w-10 h-10 text-orange-500 shrink-0" />
              <div>
                <div className="text-white font-bold text-lg">ГОСТ и ISO</div>
                <div className="text-sm text-slate-400">сертифицированная продукция</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Каталог продукции</h2>
              <p className="mt-4 text-lg text-slate-600 max-w-2xl">
                Полный спектр оборудования для систем вентиляции, кондиционирования и дымоудаления.
              </p>
            </div>
            <button 
              onClick={() => setCurrentPage('catalog')}
              className="hidden md:flex items-center gap-2 text-orange-600 font-medium hover:text-orange-700 transition-colors"
            >
              Смотреть весь каталог <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, idx) => (
              <div key={idx} className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-orange-200 transition-all duration-300 cursor-pointer flex flex-col">
                <div className="h-48 overflow-hidden bg-slate-100 relative">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">{category.name}</h3>
                    <p className="text-slate-500 text-sm font-mono">{category.count}</p>
                  </div>
                  <div className="mt-6 flex items-center text-sm font-medium text-slate-700 group-hover:text-orange-600 transition-colors">
                    Перейти в раздел <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={() => setCurrentPage('catalog')}
            className="mt-8 w-full md:hidden flex justify-center items-center gap-2 bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-md font-medium hover:bg-slate-50 transition-colors"
          >
            Смотреть весь каталог <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Production Capabilities */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-sm font-semibold rounded-full mb-6">
                О компании
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                Собственная производственная база
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Мы контролируем качество на каждом этапе в трех специализированных цехах общей площадью более 2000 кв.м. Это позволяет нам предлагать оборудование без дилерских наценок и строго соблюдать сроки поставки для строительных и монтажных организаций.
              </p>
              <ul className="space-y-5 mb-10">
                <li className="flex items-start gap-4">
                  <div className="bg-orange-100 p-1 rounded-full shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <span className="block font-semibold text-slate-900">Современный станочный парк</span>
                    <span className="text-slate-600 text-sm">Высокоточная металлообработка и лазерная резка.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-orange-100 p-1 rounded-full shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <span className="block font-semibold text-slate-900">Участок порошковой покраски</span>
                    <span className="text-slate-600 text-sm">Надежная антикоррозийная защита изделий.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-orange-100 p-1 rounded-full shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <span className="block font-semibold text-slate-900">Склад готовой продукции</span>
                    <span className="text-slate-600 text-sm">Постоянное наличие стандартных позиций для быстрых отгрузок.</span>
                  </div>
                </li>
              </ul>
              <button 
                onClick={() => setCurrentPage('production')}
                className="text-orange-600 font-semibold hover:text-orange-700 flex items-center gap-2 text-lg"
              >
                Подробнее о производстве <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={productionImg} 
                alt="Производство АлПлант" 
                className="object-cover w-full h-full" 
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-8">
                <div className="text-white font-bold text-2xl mb-1">Цех металлообработки</div>
                <div className="text-slate-300">Площадь: 800 м²</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-orange-600/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Есть готовый проект или спецификация?</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Загрузите файл, и наши инженеры подготовят точную смету с учетом актуальных цен и сроков производства в течение одного рабочего дня.
            </p>
          </div>
          
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl border border-slate-200">
            <form className="space-y-6 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Имя / Организация <span className="text-orange-600">*</span></label>
                  <input 
                    type="text" 
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-shadow" 
                    placeholder="ООО Инжиниринг" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Телефон или E-mail <span className="text-orange-600">*</span></label>
                  <input 
                    type="text" 
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-shadow" 
                    placeholder="info@example.com" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Комментарий (опционально)</label>
                <textarea 
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-shadow" 
                  rows={3} 
                  placeholder="Укажите требования к огнестойкости, сроки или другие детали..."
                ></textarea>
              </div>
              
              <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:bg-slate-50 hover:border-orange-400 transition-colors cursor-pointer group">
                <UploadCloud className="w-10 h-10 text-slate-400 mx-auto mb-3 group-hover:text-orange-500 transition-colors" />
                <span className="block text-base text-slate-700 mb-1">Перетащите файл спецификации сюда или <span className="text-orange-600 font-medium">выберите на компьютере</span></span>
                <div className="text-sm text-slate-500 font-mono">PDF, DOCX, XLSX, DWG (до 20 МБ)</div>
              </div>
              
              <div className="pt-2">
                <button type="button" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-lg transition-colors text-lg shadow-lg shadow-orange-600/20">
                  Отправить проект на расчет
                </button>
                <p className="text-xs text-slate-500 text-center mt-4">
                  Нажимая кнопку, вы соглашаетесь с <a href="#" className="underline hover:text-slate-700">политикой обработки персональных данных</a>.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
