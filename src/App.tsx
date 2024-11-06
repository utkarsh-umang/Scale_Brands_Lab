import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Results from './components/Results';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Results />
        <FAQ />
      </main>
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} ScaleBrandLabs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;