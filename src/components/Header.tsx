import React from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (isHomePage) {
      const element = document.querySelector(path);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      // Wait for navigation to complete then scroll
      setTimeout(() => {
        const element = document.querySelector(path);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMenuOpen(false);
    navigate('/contact');
  };

  return (
    <header className="fixed w-full bg-[#1a1a1a] text-white z-50">
      <nav className="px-[60px] py-5 max-md:px-8 max-md:py-4">
        <div className="flex items-center justify-between max-md:flex-wrap">
          {/* Left Navigation */}
          <div className="flex gap-[35px] items-center flex-1 max-md:flex-none max-md:order-2 max-md:w-full max-md:justify-center max-md:mt-4 max-md:gap-5">
            <a
              href="#home"
              onClick={(e) => handleNavigation(e, '#home')}
              className="text-white/85 hover:text-white transition-all text-[15px] font-medium max-md:text-sm"
            >
              Home
            </a>
            <a
              href="#results"
              onClick={(e) => handleNavigation(e, '#results')}
              className="text-white/85 hover:text-white transition-all text-[15px] font-medium max-md:text-sm"
            >
              Our Work
            </a>
            <a
              href="#services"
              onClick={(e) => handleNavigation(e, '#services')}
              className="text-white/85 hover:text-white transition-all text-[15px] font-medium max-md:text-sm"
            >
              Resources
            </a>
          </div>

          {/* Center Logo */}
          <div
            className="absolute left-1/2 -translate-x-1/2 cursor-pointer max-md:relative max-md:left-auto max-md:transform-none max-md:order-1 flex items-center gap-2"
            onClick={handleLogoClick}
          >
            <Rocket className="h-6 w-6" />
            <span className="text-lg font-extrabold tracking-wide uppercase">ScaleBrandsLab</span>
          </div>

          {/* Right CTA */}
          <div className="flex-1 flex justify-end max-md:flex-none max-md:order-3 max-md:mt-4">
            <a
              href="/contact"
              onClick={handleContactClick}
              className="bg-transparent text-white px-[30px] py-[11px] rounded-full font-semibold text-sm border-[1.5px] border-white/30 hover:bg-white hover:text-[#1a1a1a] hover:border-white transition-all"
            >
              Start Today
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden absolute right-8 top-5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-4">
              <a
                href="#home"
                onClick={(e) => handleNavigation(e, '#home')}
                className="text-white/85 hover:text-white transition-colors py-2"
              >
                Home
              </a>
              <a
                href="#services"
                onClick={(e) => handleNavigation(e, '#services')}
                className="text-white/85 hover:text-white transition-colors py-2"
              >
                Services
              </a>
              <a
                href="#results"
                onClick={(e) => handleNavigation(e, '#results')}
                className="text-white/85 hover:text-white transition-colors py-2"
              >
                Results
              </a>
              <a
                href="#faq"
                onClick={(e) => handleNavigation(e, '#faq')}
                className="text-white/85 hover:text-white transition-colors py-2"
              >
                FAQ
              </a>
              <a
                href="/contact"
                onClick={handleContactClick}
                className="bg-transparent text-white px-4 py-2 rounded-full border-[1.5px] border-white/30 hover:bg-white hover:text-[#1a1a1a] transition-all text-center"
              >
                Start Today
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}