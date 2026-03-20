import React from 'react';
import { Menu, X, Rocket, ChevronDown, FileText, Image } from 'lucide-react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsMenuOpen(false);
        setIsResourcesOpen(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest('.resources-dropdown')) {
        setIsResourcesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    setIsResourcesOpen(false);
    if (isHomePage) {
      const element = document.querySelector(path);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
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

            {/* Resources Dropdown */}
            <div
              className="relative resources-dropdown py-2" // Added padding to create a hover bridge
              onMouseEnter={() => setIsResourcesOpen(true)}
              onMouseLeave={() => setIsResourcesOpen(false)}
            >
              <button
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full transition-all text-[15px] font-medium max-md:text-sm group ${isResourcesOpen ? 'bg-white/10 text-white' : 'text-white/85 hover:text-white'
                  }`}
              >
                Resources
                <ChevronDown className={`h-4 w-4 transition-transform duration-500 ${isResourcesOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isResourcesOpen && (
                <div className="absolute top-[85%] left-0 mt-2 w-64 bg-[#1a1a1a]/95 backdrop-blur-xl rounded-[24px] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden animate-dropdown-lush origin-top-left z-50">
                  <div className="p-3">
                    <Link
                      to="/clips"
                      onClick={() => setIsResourcesOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                        <Image className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-medium">Our portfolio</span>
                    </Link>
                    <Link
                      to="/audit-report"
                      onClick={() => setIsResourcesOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-all">
                        <FileText className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-medium">Audit report</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

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
            <span className="text-lg font-extrabold tracking-wide">ScaleBrandsLab</span>
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
            <div className="flex flex-col space-y-2">
              <a
                href="#home"
                onClick={(e) => handleNavigation(e, '#home')}
                className="text-white/85 hover:text-white transition-colors py-3 px-4 rounded-xl hover:bg-white/5"
              >
                Home
              </a>

              {/* Mobile Resources Accordion */}
              <div className="px-4 py-2">
                <div className="text-xs font-bold text-white/40 uppercase tracking-widest mb-2">Resources</div>
                <div className="grid grid-cols-1 gap-1">
                  <Link
                    to="/clips"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 py-3 text-white/85 hover:text-white"
                  >
                    <Image className="h-4 w-4 text-blue-400" />
                    Our portfolio
                  </Link>
                  <Link
                    to="/audit-report"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 py-3 text-white/85 hover:text-white"
                  >
                    <FileText className="h-4 w-4 text-orange-400" />
                    Audit report
                  </Link>
                </div>
              </div>

              <a
                href="#faq"
                onClick={(e) => handleNavigation(e, '#faq')}
                className="text-white/85 hover:text-white transition-colors py-3 px-4 rounded-xl hover:bg-white/5"
              >
                FAQ
              </a>
              <a
                href="/contact"
                onClick={handleContactClick}
                className="mt-4 bg-white text-[#1a1a1a] px-4 py-3 rounded-full font-bold transition-all text-center"
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
