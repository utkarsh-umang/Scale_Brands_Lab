import React from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
        setIsMenuOpen(false); // Close mobile menu when hiding
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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
    <header
      className={`fixed w-full bg-[#1a1a1a] text-white z-50 transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
    >
      <nav className="px-[60px] py-5 max-md:px-8 max-md:py-4">
        <div className="flex items-center justify-between">
          {/* Left Navigation */}
          <div className="hidden md:flex gap-[35px] items-center flex-1">
            <a
              href="#home"
              onClick={(e) => handleNavigation(e, '#home')}
              className="text-white/85 hover:text-white transition-all text-[15px] font-medium max-md:text-sm"
            >
              Home
            </a>
            <a
              href="#services"
              onClick={(e) => handleNavigation(e, '#services')}
              className="text-white/85 hover:text-white transition-all text-[15px] font-medium max-md:text-sm"
            >
              Resources
            </a>
            <a
              href="#faq"
              onClick={(e) => handleNavigation(e, '#faq')}
              className="text-white/85 hover:text-white transition-all text-[15px] font-medium max-md:text-sm"
            >
              FAQ
            </a>
          </div>

          {/* Center Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer md:absolute md:left-1/2 md:-translate-x-1/2"
            onClick={handleLogoClick}
          >
            <Rocket className="h-6 w-6" />
            <span className="text-lg font-extrabold tracking-wide uppercase">ScaleBrandsLab</span>
          </div>

          {/* Right CTA */}
          <div className="hidden md:flex flex-1 justify-end">
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
            className="md:hidden flex items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
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