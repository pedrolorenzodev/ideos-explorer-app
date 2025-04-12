import { Home, Swords, MessageSquare, TestTube, UserCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const BottomNavigation = () => {
  const location = useLocation();
  
  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Swords, label: 'Batallas', path: '/versus' },
    { icon: MessageSquare, label: 'Chat', path: '/chat' },
    { icon: TestTube, label: 'Tests', path: '/tests' },
    { icon: UserCircle, label: 'Perfil', path: '/perfil' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#1a1a1a]/80 backdrop-blur-sm border-t border-white/20 z-[100] transition-all duration-300 will-change-transform">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link 
              key={item.label} 
              to={item.path} 
              className={`flex flex-col items-center justify-center w-full h-full relative group transition-all duration-300 ${
                isActive ? 'text-white' : 'text-white/60 hover:text-white/80'
              }`}
            >
              <div className={`absolute inset-0 transition-all duration-300 ${
                isActive ? 'bg-white/10' : 'group-hover:bg-white/5'
              }`} />
              <item.icon 
                size={20} 
                className={`transition-transform duration-300 ${
                  isActive ? 'scale-110' : 'group-hover:scale-105'
                }`} 
              />
              <span className={`text-xs mt-1 transition-all duration-300 ${
                isActive ? 'font-medium' : 'font-normal'
              }`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;
