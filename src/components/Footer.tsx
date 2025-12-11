import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import tappdLogo from 'figma:asset/6a8c3c8d7d3ce772c15bdaa21f53b8508b4a18b8.png';

export function Footer() {
  return (
    <footer className="bg-[#0a0118] border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img src={tappdLogo} alt="TAPPD" className="h-8 mb-4" />
            <p className="text-white/60 text-sm">
              The next-generation phygital platform connecting people in real life.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-white mb-4">Platform</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/engage" className="text-white/60 hover:text-[#e91e8c] transition-colors text-sm">
                  Engage
                </Link>
              </li>
              <li>
                <Link to="/explore" className="text-white/60 hover:text-[#e91e8c] transition-colors text-sm">
                  Explore
                </Link>
              </li>
              <li>
                <Link to="/host" className="text-white/60 hover:text-[#e91e8c] transition-colors text-sm">
                  Host Events
                </Link>
              </li>
              <li>
                <Link to="/reconnect" className="text-white/60 hover:text-[#e91e8c] transition-colors text-sm">
                  Reconnect
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/careers" className="text-white/60 hover:text-[#e91e8c] transition-colors text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/60 hover:text-[#e91e8c] transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-white/60 hover:text-[#e91e8c] transition-colors text-sm">
                  Privacy & Policies
                </Link>
              </li>
              <li>
                <Link to="/admin" className="text-white/60 hover:text-[#e91e8c] transition-colors text-sm">
                  Admin
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/60 text-sm">
                <Mail className="w-4 h-4 text-[#e91e8c]" />
                support@tappd.co.in
              </li>
              <li className="flex items-center gap-2 text-white/60 text-sm">
                <Phone className="w-4 h-4 text-[#e91e8c]" />
                +91 XXXXX XXXXX
              </li>
              <li className="flex items-center gap-2 text-white/60 text-sm">
                <MapPin className="w-4 h-4 text-[#e91e8c]" />
                New Delhi, India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2025 TAPPD Private Limited. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-white/40 hover:text-[#e91e8c] transition-colors text-sm">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-white/40 hover:text-[#e91e8c] transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/privacy" className="text-white/40 hover:text-[#e91e8c] transition-colors text-sm">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}