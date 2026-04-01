import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Simple router for the prototype
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'catalog':
        return (
          <div className="min-h-[60vh] flex items-center justify-center bg-slate-50">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Каталог продукции</h2>
              <p className="text-slate-600">Раздел находится в стадии наполнения.</p>
              <button 
                onClick={() => setCurrentPage('home')}
                className="mt-6 text-orange-600 font-medium hover:underline"
              >
                Вернуться на главную
              </button>
            </div>
          </div>
        );
      case 'production':
      case 'docs':
      case 'contacts':
        return (
          <div className="min-h-[60vh] flex items-center justify-center bg-slate-50">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Раздел в разработке</h2>
              <p className="text-slate-600">Страница "{currentPage}" скоро появится здесь.</p>
              <button 
                onClick={() => setCurrentPage('home')}
                className="mt-6 text-orange-600 font-medium hover:underline"
              >
                Вернуться на главную
              </button>
            </div>
          </div>
        );
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="flex-grow">
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
}
