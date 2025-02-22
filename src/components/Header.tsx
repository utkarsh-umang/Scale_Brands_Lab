import React from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isWatchPage = location.pathname === '/watch';

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    if (isWatchPage) {
      // If on watch page, navigate to home first
      navigate('/');
      // Wait for navigation to complete then scroll
      setTimeout(() => {
        const element = document.querySelector(path);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // If already on home page, just scroll
      const element = document.querySelector(path);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed w-full bg-white/95 text-gray-900 z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center space-x-2 cursor-pointer" 
            onClick={() => navigate('/')}
          >
            <Rocket className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold">ScaleBrandsLab</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" onClick={(e) => handleNavigation(e, '#home')} className="hover:text-blue-600 transition-colors">
              Home
            </a>
            <a href="#services" onClick={(e) => handleNavigation(e, '#services')} className="hover:text-blue-600 transition-colors">
              Services
            </a>
            <a href="#results" onClick={(e) => handleNavigation(e, '#results')} className="hover:text-blue-600 transition-colors">
              Results
            </a>
            <a href="#faq" onClick={(e) => handleNavigation(e, '#faq')} className="hover:text-blue-600 transition-colors">
              FAQ
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-4">
              <a href="#home" onClick={(e) => handleNavigation(e, '#home')} className="hover:text-blue-600 transition-colors">
                Home
              </a>
              <a href="#services" onClick={(e) => handleNavigation(e, '#services')} className="hover:text-blue-600 transition-colors">
                Services
              </a>
              <a href="#results" onClick={(e) => handleNavigation(e, '#results')} className="hover:text-blue-600 transition-colors">
                Results
              </a>
              <a href="#faq" onClick={(e) => handleNavigation(e, '#faq')} className="hover:text-blue-600 transition-colors">
                FAQ
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}