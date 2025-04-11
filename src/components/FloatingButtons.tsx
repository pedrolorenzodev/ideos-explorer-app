
import { Compass, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FloatingButtonsProps {
  ideologia?: string;
}

const FloatingButtons = ({ ideologia }: FloatingButtonsProps) => {
  return (
    <div className="fixed right-4 bottom-20 flex flex-col gap-3 z-40">
      {ideologia && (
        <Link 
          to={`/perspectiva/${ideologia}`} 
          className="bg-black text-white rounded-full p-3 shadow-lg"
          aria-label="Cambiar perspectiva"
        >
          <Compass size={24} />
        </Link>
      )}
      
      <Link 
        to={`/chat${ideologia ? `?ideologia=${ideologia}` : ''}`} 
        className="bg-black text-white rounded-full p-3 shadow-lg"
        aria-label="Chat con personajes"
      >
        <MessageCircle size={24} />
      </Link>
    </div>
  );
};

export default FloatingButtons;
