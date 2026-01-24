import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Results from './components/Results';
import FAQ from './components/FAQ';
import Watch from './components/Watch';
import QuickOverview from './components/QuickOverview';
import ClaimVideo from './components/ClaimVideo';
import ContactPage from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import RefundPolicy from './components/RefundPolicy';
import Footer from './components/Footer';
import SimplePayUButton from './components/PayuPayment';
import Clips from './components/Clips';

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

function AppContent() {
  const location = useLocation();
  const isClipsPage = location.pathname === '/clips';

  return (
    <>
      <div style={{ display: isClipsPage ? 'none' : 'block' }}>
        <Header />
      </div>
      <div className={isClipsPage ? "" : "bg-white min-h-screen"}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/quick-overview" element={<QuickOverview />} />
          <Route path="/claimvideo" element={<ClaimVideo />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/pay" element={<SimplePayUButton />} />
          <Route path="/clips" element={<Clips />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;