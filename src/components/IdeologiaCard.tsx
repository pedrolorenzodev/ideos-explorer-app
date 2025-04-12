
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface IdeologiaCardProps {
  nombre: string;
  icono: ReactNode;
  path: string;
  color?: string;
}

const IdeologiaCard = ({ nombre, path }: IdeologiaCardProps) => {
  // Map of ideologies to their background images
  const ideologyBackgrounds: Record<string, string> = {
    'Liberalismo': 'url(/lovable-uploads/4181f1bc-e159-459e-9c40-242c22f2b362.png)',
    'Marxismo': 'url(/lovable-uploads/1462e5d5-f7b2-49b5-b8f9-dbc2883b2105.png)',
    'Socialismo': 'url(/lovable-uploads/682e8587-1731-4014-836b-33c2de5ed5fb.png)',
    'Capitalismo': 'url(/lovable-uploads/bc10989c-1b5d-4f36-8246-64f275725897.png)',
    'Conservadurismo': 'url(/lovable-uploads/e05079d9-dc3c-44ff-bb15-29054e4a0f9f.png)',
    'AnarcoCapitalismo': 'url(/lovable-uploads/9193583a-7be4-4492-9b0b-b801e554b11a.png)',
    'Mercantilismo': 'url(/lovable-uploads/a4c4b819-c6bf-460c-a646-b85b3a510b3b.png)',
    'Keynesianismo': 'url(/lovable-uploads/1b600820-d276-4227-9116-bc0ee5f9db74.png)',
  };
  
  // Get background image for this ideology
  const backgroundImage = ideologyBackgrounds[nombre] || '';
  
  // Determine text color based on ideology (for best contrast)
  const getTextColor = (ideologyName: string): string => {
    // Darker backgrounds need white text, lighter backgrounds need black text
    const darkBackgrounds = ['Marxismo', 'Socialismo', 'Mercantilismo', 'Keynesianismo'];
    return darkBackgrounds.includes(ideologyName) ? 'text-white' : 'text-black';
  };

  // Convert ideology name to lowercase for CSS classes
  const ideologyClass = nombre.toLowerCase();

  return (
    <Link to={path} className="group">
      <div 
        className={`rounded-lg p-6 flex flex-col items-center justify-center min-h-[180px] overflow-hidden relative transition-all duration-200 hover:shadow-md hover:-translate-y-1 hover:scale-[1.02] hover:brightness-110`}
        style={{ 
          backgroundImage: backgroundImage,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-200 group-hover:bg-opacity-30"></div>
        
        {/* Card content */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <h3 className={`text-2xl font-medium text-center ${getTextColor(nombre)} group-hover:scale-105 transition-transform duration-200 text-shadow`}>
            {nombre}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default IdeologiaCard;
