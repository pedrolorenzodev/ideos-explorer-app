
import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import BottomNavigation from '@/components/BottomNavigation';
import FloatingButtons from '@/components/FloatingButtons';
import ChatPersonaje from '@/components/ChatPersonaje';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';

const ChatPage = () => {
  const [searchParams] = useSearchParams();
  const ideologiaParam = searchParams.get('ideologia');
  
  const [personajeSeleccionado, setPersonajeSeleccionado] = useState<any>(null);
  
  // Lista de personajes filtrada por ideología si se proporciona una
  const personajes = [
    { nombre: 'Adam Smith', imagen: '/placeholder.svg', ideologia: 'Liberalismo' },
    { nombre: 'Karl Marx', imagen: '/placeholder.svg', ideologia: 'Marxismo' },
    { nombre: 'John Maynard Keynes', imagen: '/placeholder.svg', ideologia: 'Keynesianismo' },
    { nombre: 'Murray Rothbard', imagen: '/placeholder.svg', ideologia: 'AnarcoCapitalismo' },
    { nombre: 'Edmund Burke', imagen: '/placeholder.svg', ideologia: 'Conservadurismo' },
  ].filter(p => !ideologiaParam || p.ideologia.toLowerCase() === ideologiaParam.toLowerCase());

  return (
    <div className="pb-20 h-screen flex flex-col animate-fade-in">
      <div className="flex-1 max-w-4xl mx-auto px-4 py-8 w-full flex flex-col">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-black mb-2">
            <ArrowLeft size={18} className="mr-1" />
            <span>Volver</span>
          </Link>
          
          <h1 className="text-2xl font-bold">Chat con Personajes</h1>
          {ideologiaParam && (
            <p className="text-gray-600">
              Dialogando sobre {ideologiaParam.charAt(0).toUpperCase() + ideologiaParam.slice(1)}
            </p>
          )}
        </div>
        
        {!personajeSeleccionado ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {personajes.map((personaje) => (
              <Button 
                key={personaje.nombre}
                variant="outline" 
                className="p-4 h-auto flex flex-col items-center justify-center"
                onClick={() => setPersonajeSeleccionado(personaje)}
              >
                <div className="w-16 h-16 rounded-full bg-gray-200 mb-3 overflow-hidden">
                  <img 
                    src={personaje.imagen} 
                    alt={personaje.nombre} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <span className="font-medium">{personaje.nombre}</span>
                <span className="text-sm text-gray-500">{personaje.ideologia}</span>
              </Button>
            ))}
          </div>
        ) : (
          <div className="flex-1 flex flex-col">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 mr-3 overflow-hidden">
                  <img 
                    src={personajeSeleccionado.imagen} 
                    alt={personajeSeleccionado.nombre} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <h2 className="font-medium">{personajeSeleccionado.nombre}</h2>
                  <p className="text-sm text-gray-500">{personajeSeleccionado.ideologia}</p>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setPersonajeSeleccionado(null)}
              >
                Cambiar
              </Button>
            </div>
            
            <div className="flex-1 border rounded-lg overflow-hidden">
              <ChatPersonaje personaje={personajeSeleccionado} />
            </div>
          </div>
        )}
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default ChatPage;
