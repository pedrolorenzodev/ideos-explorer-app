
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface IdeologiaCardProps {
  nombre: string;
  icono: ReactNode;
  path: string;
  color?: string;
}

const IdeologiaCard = ({ nombre, path, color }: IdeologiaCardProps) => {
  // Map of ideologies to their flag background images
  const ideologyBackgrounds: Record<string, string> = {
    'Liberalismo': 'url(https://images.unsplash.com/photo-1524668951403-d44b28200ce0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Ymx1ZSUyMGZsYWd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60)',
    'Marxismo': 'url(https://images.unsplash.com/photo-1564509060744-634153c182a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVkJTIwZmxhZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60)',
    'Socialismo': 'url(https://images.unsplash.com/photo-1594749794743-25ba501fe508?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlZCUyMGZsYWd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60)',
    'Capitalismo': 'url(https://images.unsplash.com/photo-1544364631-99bbc8e0ed22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZW4lMjBmbGFnfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60)',
    'Conservadurismo': 'url(https://images.unsplash.com/photo-1587302912306-cf1ed9c33146?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmxhY2slMjBmbGFnfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60)',
    'AnarcoCapitalismo': 'url(https://images.unsplash.com/photo-1604796582067-b09e3d53f31c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8eWVsbG93JTIwYW5kJTIwYmxhY2slMjBmbGFnfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60)',
    'Mercantilismo': 'url(https://images.unsplash.com/photo-1599687351724-dfa3c4ff81b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHVycGxlJTIwZmxhZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60)',
    'Keynesianismo': 'url(https://images.unsplash.com/photo-1566041510639-8d95a2490bfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJsdWUlMjBmbGFnfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60)',
  };
  
  // Get background image for this ideology
  const backgroundImage = ideologyBackgrounds[nombre] || '';
  
  // Convert ideology name to lowercase for CSS classes
  const ideologyClass = nombre.toLowerCase();

  return (
    <Link to={path} className="group">
      <div 
        className={`rounded-lg p-6 flex flex-col items-center justify-center min-h-[180px] card-hover-${ideologyClass} overflow-hidden relative`}
        style={{ 
          backgroundImage: backgroundImage,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Overlay to make text readable */}
        <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-200 group-hover:bg-opacity-30"></div>
        
        {/* Card content */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <h3 className={`text-xl font-medium text-center text-black`}>
            {nombre}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default IdeologiaCard;
