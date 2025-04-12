import { Link } from 'react-router-dom';
interface PerspectivaCardProps {
  nombre: string;
  ideologia: string;
  descripcion: string;
  color?: string;
}
const PerspectivaCard = ({
  nombre,
  ideologia,
  descripcion,
  color
}: PerspectivaCardProps) => {
  // Get ideology-specific background gradient
  const getIdeologyGradient = (ideologyName: string): string => {
    const gradients: Record<string, string> = {
      'Liberalismo': 'bg-gradient-to-r from-yellow-500 to-yellow-400',
      'Marxismo': 'bg-gradient-to-r from-red-700 to-red-600',
      'Socialismo': 'bg-gradient-to-r from-red-400 to-pink-400',
      'Capitalismo': 'bg-gradient-to-r from-green-600 to-green-500',
      'Conservadurismo': 'bg-gray-200',
      'AnarcoCapitalismo': 'bg-gradient-to-r from-yellow-500 to-black',
      'Mercantilismo': 'bg-gradient-to-r from-yellow-500 to-gray-400',
      'Keynesianismo': 'bg-gradient-to-r from-blue-300 to-blue-400'
    };
    return gradients[ideologyName] || 'bg-gray-100';
  };

  // Determine text color based on background (for Conservadurismo which has a light background)
  const getTextColor = (ideologyName: string): string => {
    return ideologyName === 'Conservadurismo' ? 'text-gray-800' : 'text-white';
  };
  const textColor = getTextColor(ideologia);
  return <Link to={`/ideologia/${ideologia}?perspectiva=${nombre}`} className="group">
      <div className="\n\n\nbg-transparent px-[10px] py-[15px] rounded-[8px] border border-zinc-300 hover:scale-[1.02] hover:shadow-md transition-transform duration-200\n">
        <h3 className="text-blue-500 font-semibold">
          {nombre}
          <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${textColor === 'text-white' ? 'bg-white' : 'bg-gray-800'} group-hover:w-full transition-all duration-300`}></span>
        </h3>
        <p className={`text-sm ${textColor === 'text-white' ? 'text-white/90' : 'text-gray-700'}`}>{descripcion}</p>
      </div>
    </Link>;
};
export default PerspectivaCard;