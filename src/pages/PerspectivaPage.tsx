
import { useParams } from 'react-router-dom';
import BottomNavigation from '@/components/BottomNavigation';
import FloatingButtons from '@/components/FloatingButtons';
import PerspectivaCard from '@/components/PerspectivaCard';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PerspectivaPage = () => {
  const { ideologia } = useParams<{ ideologia: string }>();
  
  const perspectivas = [
    { 
      nombre: 'Liberal', 
      descripcion: 'Análisis desde la perspectiva del liberalismo clásico y moderno.' 
    },
    { 
      nombre: 'Marxista', 
      descripcion: 'Visión desde el materialismo dialéctico y la crítica marxista.' 
    },
    { 
      nombre: 'Socialista', 
      descripcion: 'Enfoque socialista sobre las relaciones económicas y sociales.' 
    },
    { 
      nombre: 'Conservadora', 
      descripcion: 'Perspectiva basada en valores tradicionales y conservadores.' 
    },
    { 
      nombre: 'Neutra / Histórica', 
      descripcion: 'Análisis histórico y factual con enfoque académico neutral.' 
    },
    { 
      nombre: 'Personalizada', 
      descripcion: 'Combina diferentes perspectivas según tus intereses.' 
    },
  ];
  
  // Capitalizar primera letra de la ideología para mostrarla
  const ideologiaCapitalizada = ideologia ? ideologia.charAt(0).toUpperCase() + ideologia.slice(1) : '';
  
  // Get ideology color based on the name
  const getIdeologiaColor = (name: string) => {
    const colorKey = name.toLowerCase();
    return `text-ideologia-${colorKey}`;
  };

  return (
    <div className="pb-20 animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-black mb-4">
            <ArrowLeft size={18} className="mr-1" />
            <span>Volver</span>
          </Link>
          
          <h1 className={`text-2xl font-bold mb-1 ${getIdeologiaColor(ideologia || '')}`}>
            {ideologiaCapitalizada}
          </h1>
          <h2 className="text-lg font-medium mb-6">
            ¿Desde qué perspectiva quieres analizarla?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {perspectivas.map((perspectiva) => (
            <PerspectivaCard
              key={perspectiva.nombre}
              nombre={perspectiva.nombre}
              descripcion={perspectiva.descripcion}
              ideologia={ideologia || ''}
              color={getIdeologiaColor(ideologia || '')}
            />
          ))}
        </div>
      </div>
      
      <FloatingButtons ideologia={ideologia} />
      <BottomNavigation />
    </div>
  );
};

export default PerspectivaPage;
