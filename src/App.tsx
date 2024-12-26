import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Features from './pages/Features';
import Solutions from './pages/Solutions';
import Contact from './pages/Contact';
import GradientBackground from './components/ui/GradientBackground';

function App() {
  return (
    <Router>
      <GradientBackground>
        <div className="min-h-screen">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </GradientBackground>
    </Router>
  );
}

export default App;