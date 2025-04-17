
import IdeologiaCard from '@/components/IdeologiaCard';
import BottomNavigation from '@/components/BottomNavigation';
import FloatingButtons from '@/components/FloatingButtons';
import { ArrowRight } from 'lucide-react';
import { ideologiaColores } from '@/data/colores';

const Index = () => {
  const ideologias = [
    { 
      nombre: 'Liberalismo', 
      path: '/ideologia/liberalismo',
      background: ideologiaColores.Liberalismo
    },
    { 
      nombre: 'Marxismo', 
      path: '/ideologia/marxismo',
      background: ideologiaColores.Marxismo
    },
    { 
      nombre: 'Socialismo', 
      path: '/ideologia/socialismo',
      background: ideologiaColores.Socialismo
    },
    { 
      nombre: 'Capitalismo', 
      path: '/ideologia/capitalismo',
      background: ideologiaColores.Capitalismo
    },
    { 
      nombre: 'Conservadurismo', 
      path: '/ideologia/conservadurismo',
      background: ideologiaColores.Conservadurismo
    },
    { 
      nombre: 'AnarcoCapitalismo', 
      path: '/ideologia/anarcocapitalismo',
      background: ideologiaColores.AnarcoCapitalismo
    },
    { 
      nombre: 'Mercantilismo', 
      path: '/ideologia/mercantilismo',
      background: ideologiaColores.Mercantilismo
    },
    { 
      nombre: 'Keynesianismo', 
      path: '/ideologia/keynesianismo',
      background: ideologiaColores.Keynesianismo
    },
  ];

  return (
    <div className="pb-20 animate-fade-in min-h-screen">
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
