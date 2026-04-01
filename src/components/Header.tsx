import { Building2, ChevronDown, FileText, Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';

export function Header({ currentPage, setCurrentPage }: { currentPage: string, setCurrentPage: (page: string) => void }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Главная' },
    { id: 'catalog', label: 'Каталог продукции' },
    { id: 'production', label: 'Производство' },
    { id: 'docs', label: 'Документация' },
    { id: 'contacts', label: 'Контакты' },
  ];

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-slate-900 text-slate-300 py-2 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-slate-400" />
              ООО «АлПлант» — Производство вентиляционного оборудования
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href="mailto:info@alplant.ru" className="hover:text-white transition-colors">info@alplant.ru</a>
            <span className="text-slate-500">|</span>
            <a href="tel:+70000000000" className="flex items-center gap-2 text-white font-medium hover:text-orange-400 transition-colors">
              <Phone className="w-4 h-4 text-orange-500" />
              +7 (495) 000-00-00
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            <div className="w-10 h-10 bg-orange-600 rounded flex items-center justify-center text-white font-bold text-xl">
              АП
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 leading-none">АлПлант</span>
              <span className="text-xs text-slate-500 font-medium tracking-wider uppercase mt-1">Вентиляция</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => setCurrentPage(link.id)}
                className={`text-sm font-medium transition-colors hover:text-orange-600 ${
                  currentPage === link.id ? 'text-orange-600' : 'text-slate-700'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded text-sm font-medium transition-colors shadow-sm">
              Запросить КП
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setCurrentPage(link.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium ${
                  currentPage === link.id ? 'bg-orange-50 text-orange-600' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 mt-2 border-t border-slate-100">
              <button className="w-full bg-orange-600 text-white px-5 py-3 rounded-md text-base font-medium text-center">
                Запросить КП
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
