import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { RegressionTherapy } from './pages/RegressionTherapy';
import { FamilyConstellation } from './pages/FamilyConstellation';
import { SubconsciousPatternHealing } from './pages/SubconsciousPatternHealing';
import { Popup } from './components/Popup';
import { ScrollProgress, FloatingCTA } from './components/UI';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Shikha Tripathi",
    "image": "https://lh3.googleusercontent.com/d/1M469rJ_bx_cEZMLRwS6Tgfy3yVebSTdr",
    "jobTitle": ["Internationally Certified Regression Therapist", "Family Constellation Facilitator", "Psychologist", "Psychotherapist"],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "addressCountry": "India"
    },
    "url": window.location.origin,
    "description": "Internationally certified Regression Therapist & Family Constellation Facilitator based in Pune, India. Expert Psychologist and Psychotherapist."
  };

  return (
    <HelmetProvider>
      <Router>
        <Helmet>
          <title>Shikha Tripathi | Internationally Certified Regression Therapist</title>
          <meta name="description" content="Internationally certified Regression Therapist & Family Constellation Facilitator. Transform your inner world with expert psychological and systemic healing." />
          <script type="application/ld+json">
            {JSON.stringify(schemaMarkup)}
          </script>
        </Helmet>
        <ScrollToTop />
        <ScrollProgress />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/subconscious-pattern-healing" element={<SubconsciousPatternHealing />} />
              <Route path="/regression-therapy" element={<RegressionTherapy />} />
              <Route path="/family-constellation" element={<FamilyConstellation />} />
            </Routes>
          </main>
          <Footer />
          <Popup />
          <FloatingCTA />
        </div>
      </Router>
    </HelmetProvider>
  );
}
