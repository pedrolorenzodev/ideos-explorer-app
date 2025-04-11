
import IdeologiaCard from '@/components/IdeologiaCard';
import BottomNavigation from '@/components/BottomNavigation';
import FloatingButtons from '@/components/FloatingButtons';
import { ArrowRight, BookOpen, Coins, Landmark, Shield, Bird, DollarSign, Building, Brain, CircleDollarSign } from 'lucide-react';

const Index = () => {
  const ideologias = [
    { 
      nombre: 'Liberalismo', 
      icono: <Bird className="text-ideologia-liberalismo" />, 
      path: '/perspectiva/liberalismo',
      color: 'text-ideologia-liberalismo'
    },
    { 
      nombre: 'Marxismo', 
      icono: <BookOpen className="text-ideologia-marxismo" />, 
      path: '/perspectiva/marxismo',
      color: 'text-ideologia-marxismo'
    },
    { 
      nombre: 'Socialismo', 
      icono: <Brain className="text-ideologia-socialismo" />, 
      path: '/perspectiva/socialismo',
      color: 'text-ideologia-socialismo'
    },
    { 
      nombre: 'Capitalismo', 
      icono: <DollarSign className="text-ideologia-capitalismo" />, 
      path: '/perspectiva/capitalismo',
      color: 'text-ideologia-capitalismo'
    },
    { 
      nombre: 'Conservadurismo', 
      icono: <Shield className="text-ideologia-conservadurismo" />, 
      path: '/perspectiva/conservadurismo',
      color: 'text-ideologia-conservadurismo'
    },
    { 
      nombre: 'AnarcoCapitalismo', 
      icono: <Coins className="text-ideologia-anarcocapitalismo" />, 
      path: '/perspectiva/anarcocapitalismo',
      color: 'text-ideologia-anarcocapitalismo'
    },
    { 
      nombre: 'Mercantilismo', 
      icono: <Building className="text-ideologia-mercantilismo" />, 
      path: '/perspectiva/mercantilismo',
      color: 'text-ideologia-mercantilismo'
    },
    { 
      nombre: 'Keynesianismo', 
      icono: <CircleDollarSign className="text-ideologia-keynesianismo" />, 
      path: '/perspectiva/keynesianismo',
      color: 'text-ideologia-keynesianismo'
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
              color={ideologia.color}
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
