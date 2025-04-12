
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
  
  // Map of ideologies to their gradient backgrounds
  const ideologyGradients: Record<string, string> = {
    'Liberalismo': 'bg-gradient-to-b from-yellow-500 to-yellow-400', // Dorado
    'Marxismo': 'bg-gradient-to-b from-red-700 to-red-600', // Rojo metálico
    'Socialismo': 'bg-gradient-to-b from-red-400 to-pink-400', // Rojo rosado
    'Capitalismo': 'bg-gradient-to-b from-green-600 to-green-500', // Verde dólar
    'Conservadurismo': 'bg-gray-300', // Gris claro (no gradient)
    'AnarcoCapitalismo': 'bg-gradient-to-b from-yellow-400 to-black', // Mitad amarillo, mitad negro
    'Mercantilismo': 'bg-gradient-to-b from-yellow-500 to-gray-400', // Mitad dorado, mitad plateado
    'Keynesianismo': 'bg-gradient-to-b from-blue-300 to-blue-400', // Celeste azulado
  };
  
  // Get gradient background class for this ideology
  const gradientClass = ideologyGradients[nombre] || 'bg-gray-100';
  
  // Use consistent styling for all texts
  const textColor = 'text-white';

  return (
    <Link to={path} className="group">
      <div 
        className={`rounded-lg p-6 flex flex-col items-center justify-center min-h-[180px] overflow-hidden relative transition-all duration-200 hover:shadow-md hover:-translate-y-1 hover:scale-[1.02] hover:brightness-110 ${gradientClass}`}
        style={{ 
          backgroundImage: backgroundImage ? backgroundImage : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-200 group-hover:bg-opacity-30"></div>
        
        {/* Card content */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <h3 className={`text-2xl font-medium text-center ${textColor} group-hover:scale-105 transition-transform duration-200 text-shadow`}>
            {nombre}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default IdeologiaCard;
