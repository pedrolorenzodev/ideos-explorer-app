import { useParams, useSearchParams, Link } from 'react-router-dom';
import BottomNavigation from '@/components/BottomNavigation';
import FloatingButtons from '@/components/FloatingButtons';
import ContenidoTab from '@/components/ContenidoTab';
import { ArrowLeft } from 'lucide-react';

const IdeologiaPage = () => {
  const { ideologia } = useParams<{ ideologia: string }>();
  const [searchParams] = useSearchParams();
  const perspectiva = searchParams.get('perspectiva') || 'Neutra / Histórica';
  
  // Capitalize first letter of the ideology or handle special cases
  const ideologiaCapitalizada = ideologia ? 
    (ideologia === 'anarcocapitalismo' ? 'AnarcoCapitalismo' : 
     ideologia.charAt(0).toUpperCase() + ideologia.slice(1)) : '';
  
  // Get ideology color based on the name
  const getIdeologiaColor = (name: string) => {
    const colorKey = name.toLowerCase();
    return `text-ideologia-${colorKey}`;
  };

  return (
    <div className="pb-20 animate-fade-in">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to={`/perspectiva/${ideologia}`} className="inline-flex items-center text-gray-600 hover:text-black mb-4">
            <ArrowLeft size={18} className="mr-1" />
            <span>Volver</span>
          </Link>
          
          <h1 className={`text-2xl font-bold mb-1 ${getIdeologiaColor(ideologia || '')}`}>
            {ideologiaCapitalizada}
          </h1>
          <div className="flex items-center mb-6">
            <span className="font-medium">Perspectiva:</span>
            <span className="ml-2 bg-white/10 px-3 py-1 rounded-full text-sm text-white/80">{perspectiva}</span>
          </div>
        </div>
        
        <ContenidoTab ideologia={ideologiaCapitalizada} />
      </div>
      
      <FloatingButtons ideologia={ideologia} />
      <BottomNavigation />
    </div>
  );
};

export default IdeologiaPage;
