
import { useState } from 'react';
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SendHorizontal } from 'lucide-react';

interface ChatPersonajeProps {
  personaje: {
    nombre: string;
    imagen: string;
    ideologia: string;
  };
}

const ChatPersonaje = ({ personaje }: ChatPersonajeProps) => {
  const [mensajes, setMensajes] = useState([
    {
      tipo: 'recibido',
      texto: `Hola, soy ${personaje.nombre}. ¿Qué te gustaría saber sobre ${personaje.ideologia}?`,
    },
  ]);
  const [nuevoMensaje, setNuevoMensaje] = useState('');

  const enviarMensaje = () => {
    if (!nuevoMensaje.trim()) return;
    
    // Añadir mensaje del usuario
    setMensajes([...mensajes, { tipo: 'enviado', texto: nuevoMensaje }]);
    
    // Simular respuesta (en una aplicación real, esto sería una llamada a API)
    setTimeout(() => {
      setMensajes(prev => [
        ...prev, 
        { 
          tipo: 'recibido', 
          texto: `Gracias por tu pregunta sobre "${nuevoMensaje}". Como representante de las ideas de ${personaje.ideologia}, puedo decirte que este es un tema complejo que requiere análisis.` 
        }
      ]);
    }, 1000);
    
    setNuevoMensaje('');
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {mensajes.map((mensaje, index) => (
          <div 
            key={index}
            className={`flex ${mensaje.tipo === 'enviado' ? 'justify-end' : 'justify-start'}`}
          >
            {mensaje.tipo === 'recibido' && (
              <Avatar className="h-8 w-8 mr-2">
                <img src={personaje.imagen || "/placeholder.svg"} alt={personaje.nombre} />
              </Avatar>
            )}
            <div 
              className={`rounded-lg px-4 py-2 max-w-[80%] ${
                mensaje.tipo === 'enviado' 
                  ? 'bg-black text-white' 
                  : 'bg-gray-100 text-black'
              }`}
            >
              {mensaje.texto}
            </div>
          </div>
        ))}
      </div>
      
      <div className="border-t p-4 flex gap-2">
        <Input
          value={nuevoMensaje}
          onChange={(e) => setNuevoMensaje(e.target.value)}
          placeholder={`Pregunta algo a ${personaje.nombre}...`}
          onKeyDown={(e) => e.key === 'Enter' && enviarMensaje()}
          className="flex-1"
        />
        <Button variant="default" size="icon" onClick={enviarMensaje}>
          <SendHorizontal size={18} />
        </Button>
      </div>
    </div>
  );
};

export default ChatPersonaje;
