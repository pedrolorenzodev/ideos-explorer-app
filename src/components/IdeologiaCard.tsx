
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
  // Use consistent styling for all texts based on ideology
  // For dark backgrounds, use white text; for light backgrounds, use black text
  const getTextColor = (ideologia: string) => {
    const darkBackgrounds = ["marxismo", "socialismo", "capitalismo", "conservadurismo", "anarcocapitalismo", "mercantilismo", "keynesianismo"];
    return darkBackgrounds.includes(ideologia.toLowerCase()) ? "text-white" : "text-black";
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
          <h3 className={`text-2xl font-medium text-center ${textColor} group-hover:scale-105 transition-transform duration-200 text-shadow`}>
            {nombre}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default IdeologiaCard;
