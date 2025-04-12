
import { Link } from 'react-router-dom';

interface PerspectivaCardProps {
  nombre: string;
  ideologia: string;
  descripcion: string;
  color?: string;
}

const PerspectivaCard = ({ nombre, ideologia, descripcion, color }: PerspectivaCardProps) => {
  return (
    <Link to={`/ideologia/${ideologia}?perspectiva=${nombre}`} className="group">
      <div className="border border-gray-200 rounded-lg p-5 transition-all duration-200 hover:shadow-md hover:-translate-y-1 hover:scale-[1.02]">
        <h3 className={`text-lg font-medium mb-2 ${color} relative inline-block`}>
          {nombre}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current group-hover:w-full transition-all duration-300"></span>
        </h3>
        <p className="text-sm text-gray-600">{descripcion}</p>
      </div>
    </Link>
  );
};

export default PerspectivaCard;
