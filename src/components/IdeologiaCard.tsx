
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface IdeologiaCardProps {
  nombre: string;
  icono: ReactNode;
  path: string;
  color?: string;
}

const IdeologiaCard = ({ nombre, icono, path, color }: IdeologiaCardProps) => {
  return (
    <Link to={path} className="group">
      <div className="border border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center min-h-[180px] card-hover">
        <div className={`text-3xl mb-4 ${color}`}>{icono}</div>
        <h3 className={`text-lg font-medium text-center ${color}`}>{nombre}</h3>
      </div>
    </Link>
  );
};

export default IdeologiaCard;
