import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import InvestorsPage from './pages/InvestorsPage';
import JoinPage from './pages/JoinPage';
import AboutPage from './pages/AboutPage';
import InsightsPage from './pages/InsightsPage';
import InsightPostPage from './pages/InsightPostPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminEditorPage from './pages/AdminEditorPage';
import { AuthProvider } from './contexts/AuthContext';
import { usePageTracking } from './hooks/usePageTracking';

// AppContent component to use hooks inside Router
function AppContent() {
  usePageTracking(); // Track page views on route changes

  return (
    <Routes>
      {/* Admin routes without navbar */}
      <Route path="/admin/login" element={<AdminLoginPage />} />
      <Route path="/admin/editor" element={<AdminEditorPage />} />

      {/* Main site routes with navbar */}
      <Route path="/*" element={
        <div className="min-h-screen bg-midnight-black">
          <Navbar />
          <div className="pt-20"> {/* Padding to account for fixed navbar */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/investors" element={<InvestorsPage />} />
              <Route path="/join" element={<JoinPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/insights" element={<InsightsPage />} />
              <Route path="/insights/:slug" element={<InsightPostPage />} />
            </Routes>
          </div>
        </div>
      } />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;