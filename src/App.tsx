import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import InvestorsPage from './pages/InvestorsPage';
import JoinPage from './pages/JoinPage';
import AboutPage from './pages/AboutPage';
import { usePageTracking } from './hooks/usePageTracking';

// AppContent component to use hooks inside Router
function AppContent() {
  usePageTracking(); // Track page views on route changes

  return (
    <div className="min-h-screen bg-midnight-black">
      <Navbar />
      <div className="pt-20"> {/* Padding to account for fixed navbar */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/investors" element={<InvestorsPage />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;