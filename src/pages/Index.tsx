
import IdeologiaCard from '@/components/IdeologiaCard';
import BottomNavigation from '@/components/BottomNavigation';
import FloatingButtons from '@/components/FloatingButtons';
import { ArrowRight, BookOpen, Coins, Landmark, Shield, Bird, DollarSign, Building, Brain, CircleDollarSign } from 'lucide-react';

const Index = () => {
  const ideologias = [
    { 
      nombre: 'Liberalismo', 
      icono: <Bird className="text-white" />, 
      path: '/perspectiva/liberalismo',
      background: 'bg-gradient-to-r from-yellow-500 to-yellow-400'
    },
    { 
      nombre: 'Marxismo', 
      icono: <BookOpen className="text-white" />, 
      path: '/perspectiva/marxismo',
      background: 'bg-gradient-to-r from-red-700 to-red-600'
    },
    { 
      nombre: 'Socialismo', 
      icono: <Brain className="text-white" />, 
      path: '/perspectiva/socialismo',
      background: 'bg-gradient-to-r from-red-400 to-pink-400'
    },
    { 
      nombre: 'Capitalismo', 
      icono: <DollarSign className="text-white" />, 
      path: '/perspectiva/capitalismo',
      background: 'bg-gradient-to-r from-green-600 to-green-500'
    },
    { 
      nombre: 'Conservadurismo', 
      icono: <Shield className="text-white" />, 
      path: '/perspectiva/conservadurismo',
      background: 'bg-gray-200'
    },
    { 
      nombre: 'AnarcoCapitalismo', 
      icono: <Coins className="text-white" />, 
      path: '/perspectiva/anarcocapitalismo',
      background: 'bg-gradient-to-r from-yellow-500 to-black'
    },
    { 
      nombre: 'Mercantilismo', 
      icono: <Building className="text-white" />, 
      path: '/perspectiva/mercantilismo',
      background: 'bg-gradient-to-r from-yellow-500 to-gray-400'
    },
    { 
      nombre: 'Keynesianismo', 
      icono: <CircleDollarSign className="text-white" />, 
      path: '/perspectiva/keynesianismo',
      background: 'bg-gradient-to-r from-blue-300 to-blue-400'
    },
  ];

  return (
    <div className="pb-20 animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Ideologías</h1>
          <h2 className="text-xl font-medium flex items-center justify-center gap-2">
            ¿Qué quieres aprender hoy?
            <ArrowRight className="inline-block ml-1" size={20} />
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ideologias.map((ideologia) => (
            <IdeologiaCard 
              key={ideologia.nombre} 
              nombre={ideologia.nombre} 
              icono={ideologia.icono}
              path={ideologia.path}
              background={ideologia.background}
            />
          ))}
        </div>
      </div>
      
      <FloatingButtons />
      <BottomNavigation />
    </div>
  );
};

export default Index;
