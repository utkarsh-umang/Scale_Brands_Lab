import { Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">ScaleBrandsLab</h3>
            <p className="text-gray-400 mb-4">
              Boost Clients, Grow Followers, Maximize Exposure with our viral content formula.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-blue-400" />
                <span className="text-sm">Delhi, India</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-blue-400" />
                <span className="text-sm">growth@ScaleBrandsLab.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="/clips" className="text-gray-400 hover:text-white transition-colors">Results</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="/refund-policy" className="text-gray-400 hover:text-white transition-colors">Refund Policy</a></li>
            </ul>
          </div>

          {/* Business Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Business Information</h4>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-400">Proprietor:</p>
                <p className="text-white font-medium">UTKARSH KUMAR</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Address:</p>
                <p className="text-white text-sm">
                  245 Pocket 1 DDA SFS Flat<br />
                  South West Delhi, Dwarka Sec-6<br />
                  Sector 5 Dwarka, Dwarka Sec-6<br />
                  Delhi, India - 110075
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} ScaleBrandsLab. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy
              </a>
              <a href="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms
              </a>
              <a href="/refund-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Refunds
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}