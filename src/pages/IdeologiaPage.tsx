
import { useParams, Link } from 'react-router-dom';
import BottomNavigation from '@/components/BottomNavigation';
import FloatingButtons from '@/components/FloatingButtons';
import ContenidoTab from '@/components/ContenidoTab';
import { ArrowLeft } from 'lucide-react';
import { ideologiaColores } from '@/data/colores';

const IdeologiaPage = () => {
  const { ideologia } = useParams<{ ideologia: string }>();
  
  // Capitalize first letter of the ideology or handle special cases
  const ideologiaCapitalizada = ideologia ? 
    (ideologia === 'anarcocapitalismo' ? 'AnarcoCapitalismo' : 
     ideologia.charAt(0).toUpperCase() + ideologia.slice(1)) : '';
  
  // Get ideology color based on the name
  const getIdeologiaColor = (name: string) => {
    // Convert to capitalized format for lookup in ideologiaColores
    const lookupName = name === 'anarcocapitalismo' ? 'AnarcoCapitalismo' : 
                      name.charAt(0).toUpperCase() + name.slice(1);
    return ideologiaColores[lookupName] || '';
  };

  // Determine text color based on background (for contrast)
  const getTextColor = (name: string) => {
    const darkBackgrounds = ["marxismo", "socialismo", "capitalismo", "conservadurismo", "anarcocapitalismo", "mercantilismo", "keynesianismo"];
    return darkBackgrounds.includes(name.toLowerCase()) ? "text-white" : "text-black";
  };

  return (
    <div className="pb-20 animate-fade-in">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-black mb-4">
            <ArrowLeft size={18} className="mr-1" />
            <span>Volver</span>
          </Link>
          
          <div 
            className="p-4 rounded-lg"
            style={{ background: getIdeologiaColor(ideologia || '') }}
          >
            <h1 className={`text-2xl font-bold mb-1 ${getTextColor(ideologia || '')}`}>
              {ideologiaCapitalizada}
            </h1>
            <div className="flex items-center">
              <span className={`font-medium ${getTextColor(ideologia || '')}`}>Perspectiva:</span>
              <span className={`ml-2 bg-white/10 px-3 py-1 rounded-full text-sm ${getTextColor(ideologia || '')}/80`}>Neutra / Histórica</span>
            </div>
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
