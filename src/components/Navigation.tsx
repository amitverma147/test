import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bot, Settings } from 'lucide-react';
import { motion } from 'motion/react';
import { SettingsDialog } from './SettingsDialog';
import { TAPPDYChat } from './TAPPDYChat';
import tappdLogo from 'figma:asset/6a8c3c8d7d3ce772c15bdaa21f53b8508b4a18b8.png';

export function Navigation() {
  const location = useLocation();
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [tappdyOpen, setTappdyOpen] = useState(false);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Engage', path: '/engage' },
    { name: 'Explore', path: '/explore' },
    { name: 'Host', path: '/host' },
    { name: 'Reconnect', path: '/reconnect' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d0221]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img src={tappdLogo} alt="TAPPD" className="h-8" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative text-white/70 hover:text-white transition-colors"
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#e91e8c] to-[#ff6b9d]"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setTappdyOpen(true)}
                className="text-white/70 hover:text-white transition-colors flex items-center gap-2"
                title="Ask TAPPDY"
              >
                <Bot className="w-5 h-5" />
                <span className="hidden sm:inline text-sm">TAPPDY</span>
              </button>
              <button 
                onClick={() => setSettingsOpen(true)}
                className="text-white/70 hover:text-white transition-colors"
              >
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <SettingsDialog open={settingsOpen} onOpenChange={setSettingsOpen} />
      <TAPPDYChat open={tappdyOpen} onOpenChange={setTappdyOpen} />
    </>
  );
}