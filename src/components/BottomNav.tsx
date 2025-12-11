import { Link, useLocation } from 'react-router-dom';
import { Home, Heart, Search, Calendar, User } from 'lucide-react';

export function BottomNav() {
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Engage', path: '/engage', icon: Heart },
    { name: 'Explore', path: '/explore', icon: Search },
    { name: 'Host', path: '/host', icon: Calendar },
    { name: 'Reconnect', path: '/reconnect', icon: User },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-[#e91e8c] to-[#c81e87] py-4 px-6">
      <div className="flex items-center justify-between max-w-lg mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className="flex flex-col items-center gap-1"
            >
              <div className={`p-2 rounded-2xl transition-all ${
                isActive ? 'bg-white/30' : 'bg-transparent'
              }`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <span className="text-xs text-white">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
