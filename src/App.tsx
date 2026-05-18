import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { usePageAnalytics } from './hooks/usePageAnalytics';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter';
import WhyUs from './components/WhyUs';
import FAQ from './components/FAQ';
import CreatorCaseStudy from './components/CreatorCaseStudy';
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
import ScrollToTop from './components/ScrollToTop';
import PodcastLeadMagnet from './components/PodcastLeadMagnet';
import SampleRobert from './components/SampleRobert';

function HomePage() {
  usePageAnalytics('home');
  return (
    <>
      <main>
        <Hero />
        <BeforeAfter />
        <WhyUs />
        <Services />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

function MainLayout() {
  return (
    <>
      <Header />
      <div className="bg-white min-h-screen">
        <Outlet />
      </div>
    </>
  );
}

function AppContent() {
  return (
    <Routes>
      <Route path="/sample-robert-1" element={<SampleRobert sample={1} />} />
      <Route path="/sample-robert-2" element={<SampleRobert sample={2} />} />
      <Route element={<MainLayout />}>
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
        <Route path="/audit-report" element={<div className="bg-white"><PodcastLeadMagnet /><Footer /></div>} />
        <Route path="/case-study/:creatorId" element={<CreatorCaseStudy />} />
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
