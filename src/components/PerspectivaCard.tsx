
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
      <div className="border border-gray-200 rounded-lg p-5 card-hover transition-all duration-200">
        <h3 className={`text-lg font-medium mb-2 ${color} title-hover`}>{nombre}</h3>
        <p className="text-sm text-gray-600">{descripcion}</p>
      </div>
    </Link>
  );
};

export default PerspectivaCard;
