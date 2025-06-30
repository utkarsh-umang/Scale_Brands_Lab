import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Results from './components/Results';
import FAQ from './components/FAQ';
import Watch from './components/Watch';
import QuickOverview from './components/QuickOverview';

function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <Results />
        <FAQ />
      </main>
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} ScaleBrandsLab. All rights reserved.</p>
        </div>
      </footer>
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
          <Route path="/quick-overview" element={<QuickOverview />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;