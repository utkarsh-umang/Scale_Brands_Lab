import React from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container mx-auto px-4 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to scale your brand? Get in touch with us and let's start your growth journey today.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors"
                      placeholder="+91 12345 67890"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="services">Services Information</option>
                      <option value="pricing">Pricing & Packages</option>
                      <option value="support">Support</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors"
                    placeholder="Tell us about your brand goals and how we can help you..."
                  />
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              
              {/* Business Information */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Business Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-gray-900 font-semibold mb-2">Address</h3>
                      <p className="text-gray-600">
                        245 Pocket 1 DDA SFS Flat<br />
                        South West Delhi, Dwarka Sec-6<br />
                        Sector 5 Dwarka, Dwarka Sec-6<br />
                        Delhi, India - 110075
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-gray-900 font-semibold mb-2">Email</h3>
                      <p className="text-gray-600">growth@scalebrandslab.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-gray-900 font-semibold mb-2">Phone</h3>
                      <p className="text-gray-600">Available upon request</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-gray-900 font-semibold mb-2">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                        Saturday: 10:00 AM - 4:00 PM IST<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Proprietor Information */}
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Proprietor</h3>
                <p className="text-blue-800 font-medium text-lg">UTKARSH KUMAR</p>
                <p className="text-blue-700 text-sm mt-1">Founder & CEO, ScaleBrandsLab</p>
              </div>

              {/* Quick Response */}
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">Quick Response</h3>
                <p className="text-green-800">
                  We typically respond to all inquiries within 24 hours during business days.
                  For urgent matters, please mention "URGENT" in your subject line.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}