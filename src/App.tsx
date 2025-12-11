import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { BottomNav } from './components/BottomNav';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Engage } from './pages/Engage';
import { Explore } from './pages/Explore';
import { Host } from './pages/Host';
import { Reconnect } from './pages/Reconnect';
import { Privacy } from './pages/Privacy';
import { Careers } from './pages/Careers';
import { Contact } from './pages/Contact';
import { Admin } from './pages/Admin';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0d0221]">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/preview_page.html" element={<Home />} />
          <Route path="/engage" element={<Engage />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/host" element={<Host />} />
          <Route path="/reconnect" element={<Reconnect />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
        <BottomNav />
      </div>
    </Router>
  );
}