
import { Link } from 'react-router-dom';

interface PerspectivaCardProps {
  nombre: string;
  ideologia: string;
  descripcion: string;
}

const PerspectivaCard = ({ nombre, ideologia, descripcion }: PerspectivaCardProps) => {
  return (
    <Link to={`/ideologia/${ideologia}?perspectiva=${nombre}`} className="group">
      <div className="border border-gray-200 rounded-lg p-5 card-hover">
        <h3 className="text-lg font-medium mb-2">{nombre}</h3>
        <p className="text-sm text-gray-600">{descripcion}</p>
      </div>
    </Link>
  );
};

export default PerspectivaCard;
