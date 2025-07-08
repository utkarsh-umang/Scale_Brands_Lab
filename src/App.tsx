import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Results from './components/Results';
import FAQ from './components/FAQ';
import Watch from './components/Watch';
import QuickOverview from './components/QuickOverview';
import ContactPage from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import RefundPolicy from './components/RefundPolicy';
import Footer from './components/Footer';

function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <Results />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="bg-white min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/quick-overview" element={<QuickOverview />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;