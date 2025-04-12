import IdeologiaCard from '@/components/IdeologiaCard';
import BottomNavigation from '@/components/BottomNavigation';
import FloatingButtons from '@/components/FloatingButtons';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const Index = () => {
  const ideologias = [
    { 
      nombre: 'Liberalismo', 
      path: '/perspectiva/liberalismo',
      background: 'bg-gradient-to-r from-[#F59E0B] to-[#FBBF24]'
    },
    { 
      nombre: 'Marxismo', 
      path: '/perspectiva/marxismo',
      background: 'bg-gradient-to-r from-[#870E0E] to-[#DC2626]'
    },
    { 
      nombre: 'Socialismo', 
      path: '/perspectiva/socialismo',
      background: 'bg-gradient-to-r from-[#B93737] to-[#C16597]'
    },
    { 
      nombre: 'Capitalismo', 
      path: '/perspectiva/capitalismo',
      background: 'bg-gradient-to-r from-[#27613C] to-[#00FF5E]'
    },
    { 
      nombre: 'Conservadurismo', 
      path: '/perspectiva/conservadurismo',
      background: 'bg-gradient-to-r from-[#E7DEDE] to-[#5F5F5F]'
    },
    { 
      nombre: 'AnarcoCapitalismo', 
      path: '/perspectiva/anarcocapitalismo',
      background: 'bg-gradient-to-r from-[#F59E0B] to-[#000000]'
    },
    { 
      nombre: 'Mercantilismo', 
      path: '/perspectiva/mercantilismo',
      background: 'bg-gradient-to-r from-[#F59E0B] to-[#9CA3AF]'
    },
    { 
      nombre: 'Keynesianismo', 
      path: '/perspectiva/keynesianismo',
      background: 'bg-gradient-to-r from-[#93C5FD] to-[#60A5FA]'
    },
  ];

  return (
    <div className="pb-20 animate-fade-in">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Ideologías</h1>
          <h2 className="text-xl font-medium flex items-center justify-center gap-2">
            ¿Qué quieres aprender hoy?
            <ArrowRight className="inline-block ml-1" size={20} />
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-4">
          {ideologias.map((ideologia) => (
            <IdeologiaCard 
              key={ideologia.nombre} 
              nombre={ideologia.nombre} 
              path={ideologia.path}
              background={ideologia.background}
            />
          ))}
        </div>

        <div className="hidden lg:block">
          <div className="grid grid-cols-3 gap-4">
            {ideologias.slice(0, 6).map((ideologia) => (
              <IdeologiaCard 
                key={ideologia.nombre} 
                nombre={ideologia.nombre} 
                path={ideologia.path}
                background={ideologia.background}
              />
            ))}
          </div>
          <div className="mt-4 flex justify-center gap-4">
            {ideologias.slice(6).map((ideologia) => (
              <div key={ideologia.nombre} className="w-[calc(33.333%-1rem)]">
                <IdeologiaCard 
                  nombre={ideologia.nombre} 
                  path={ideologia.path}
                  background={ideologia.background}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <FloatingButtons />
      <BottomNavigation />
    </div>
  );
};

export default Index;
