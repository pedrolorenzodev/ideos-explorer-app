
import { Link } from 'react-router-dom';

interface PerspectivaCardProps {
  nombre: string;
  ideologia: string;
  descripcion: string;
  color?: string;
}

const PerspectivaCard = ({ nombre, ideologia, descripcion, color }: PerspectivaCardProps) => {
  // Get ideology-specific background gradient
  const getIdeologyGradient = (ideologyName: string): string => {
    const gradients: Record<string, string> = {
      'Liberalismo': 'from-yellow-500 to-yellow-400', // Dorado
      'Marxismo': 'from-red-700 to-red-600', // Rojo metálico
      'Socialismo': 'from-red-400 to-pink-400', // Rojo rosado
      'Capitalismo': 'from-green-600 to-green-500', // Verde dólar
      'Conservadurismo': 'bg-gray-300', // Gris claro (no gradient)
      'AnarcoCapitalismo': 'from-yellow-400 to-black', // Mitad amarillo, mitad negro
      'Mercantilismo': 'from-yellow-500 to-gray-400', // Mitad dorado, mitad plateado
      'Keynesianismo': 'from-blue-300 to-blue-400', // Celeste azulado
    };
    
    const gradient = gradients[ideologyName];
    return gradient && !gradient.startsWith('bg-') ? `bg-gradient-to-b ${gradient}` : (gradient || 'bg-gray-100');
  };

  return (
    <Link to={`/ideologia/${ideologia}?perspectiva=${nombre}`} className="group">
      <div className={`rounded-lg p-5 transition-all duration-200 hover:shadow-md hover:-translate-y-1 hover:scale-[1.02] hover:brightness-110 ${getIdeologyGradient(ideologia)}`}>
        <h3 className="text-lg font-medium mb-2 text-white relative inline-block">
          {nombre}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
        </h3>
        <p className="text-sm text-white/90">{descripcion}</p>
      </div>
    </Link>
  );
};

export default PerspectivaCard;
