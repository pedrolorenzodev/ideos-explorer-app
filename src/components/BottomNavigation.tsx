
import { Home, Swords, MessageSquare, TestTube, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const BottomNavigation = () => {
  const location = useLocation();
  
  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Swords, label: 'Batallas', path: '/versus' },
    { icon: MessageSquare, label: 'Chat', path: '/chat' },
    { icon: TestTube, label: 'Tests', path: '/tests' },
    { icon: User, label: 'Perfil', path: '/perfil' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link 
              key={item.label} 
              to={item.path} 
              className={`flex flex-col items-center justify-center w-full h-full ${
                isActive ? 'text-black font-medium' : 'text-gray-500'
              }`}
            >
              <item.icon size={20} />
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;
