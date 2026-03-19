import { Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">

          {/* Company Info */}
          <div className="md:col-span-5">
            <h3 className="text-white font-bold text-lg mb-4">ScaleBrandsLab</h3>
            <p className="text-gray-400 mb-4">
              Turn Your Expertise Into Audience, Authority, and Leads by Telling Better Stories.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
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
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="/refund-policy" className="text-gray-400 hover:text-white transition-colors">Refund Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-blue-400" />
                <a
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                  href="mailto:team@scalebrandslab.com"
                >
                  team@scalebrandslab.com
                </a>
              </div>
              <a
                href="https://www.linkedin.com/company/scale-brands-lab/"
                target="_blank"
                rel="noreferrer"
                aria-label="ScaleBrandsLab on LinkedIn"
                className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
              >
                <Linkedin className="h-4 w-4 text-[#2563eb]" />
                LinkedIn
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-400 transition-colors"
              >
                Get in touch
              </a>
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