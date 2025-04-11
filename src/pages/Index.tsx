
import IdeologiaCard from '@/components/IdeologiaCard';
import BottomNavigation from '@/components/BottomNavigation';
import FloatingButtons from '@/components/FloatingButtons';
import { ArrowRight, BookOpen, Coins, LandPlot, Scale, Building, Landmark, BrainCircuit, CircleDollarSign, Bird } from 'lucide-react';

const Index = () => {
  const ideologias = [
    { nombre: 'Liberalismo', icono: <Bird />, path: '/perspectiva/liberalismo' },
    { nombre: 'Marxismo', icono: <BookOpen />, path: '/perspectiva/marxismo' },
    { nombre: 'Socialismo', icono: <BrainCircuit />, path: '/perspectiva/socialismo' },
    { nombre: 'Capitalismo', icono: <CircleDollarSign />, path: '/perspectiva/capitalismo' },
    { nombre: 'Conservadurismo', icono: <Landmark />, path: '/perspectiva/conservadurismo' },
    { nombre: 'AnarcoCapitalismo', icono: <Coins />, path: '/perspectiva/anarcocapitalismo' },
    { nombre: 'Mercantilismo', icono: <Building />, path: '/perspectiva/mercantilismo' },
    { nombre: 'Keynesianismo', icono: <LandPlot />, path: '/perspectiva/keynesianismo' },
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
