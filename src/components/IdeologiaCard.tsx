import { Link } from 'react-router-dom';

interface IdeologiaCardProps {
  nombre: string;
  path: string;
  background?: string;
  color?: string;
}

const IdeologiaCard = ({
  nombre,
  path,
  background
}: IdeologiaCardProps) => {
  // Use black text for all ideologies
  const getTextColor = (ideologia: string) => {
    return "text-black";
  };

  const textColor = getTextColor(nombre);

  return (
    <Link to={path} className="group">
      <div 
        className={`rounded-lg p-6 flex flex-col items-center justify-center min-h-[180px] min-w-[280px] overflow-hidden relative transition-all duration-200 hover:shadow-md hover:-translate-y-1 hover:scale-[1.02] hover:brightness-110`}
        style={{ background }}
      >
        {/* Card content */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <h3 className={`text-[22.5px] font-light text-center text-[#B6B6B6] group-hover:scale-105 transition-transform duration-200`} style={{ textShadow: 'rgba(0, 0, 0, 0.5) 0px 2px 4px' }}>
            {nombre}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default IdeologiaCard;
