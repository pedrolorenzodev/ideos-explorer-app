import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SendHorizontal } from 'lucide-react';
import PersonIcon from '@mui/icons-material/Person';

interface ChatPersonajeProps {
  personaje: {
    nombre: string;
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
    
    setMensajes([...mensajes, { tipo: 'enviado', texto: nuevoMensaje }]);
    
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
            className={`flex ${mensaje.tipo === 'enviado' ? 'justify-end' : 'justify-start'} items-start gap-2`}
          >
            {mensaje.tipo === 'recibido' && (
              <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                <PersonIcon className="w-5 h-5 text-white/80" />
              </div>
            )}
            <div 
              className={`rounded-lg px-4 py-2 max-w-[80%] ${
                mensaje.tipo === 'enviado' 
                  ? 'bg-white/10 text-white border border-white/20' 
                  : 'bg-white/5 text-white border border-white/10'
              }`}
            >
              {mensaje.texto}
            </div>
          </div>
        ))}
      </div>
      
      <div className="border-t border-white/10 p-4 flex gap-2">
        <Input
          value={nuevoMensaje}
          onChange={(e) => setNuevoMensaje(e.target.value)}
          placeholder={`Pregunta algo a ${personaje.nombre}...`}
          onKeyDown={(e) => e.key === 'Enter' && enviarMensaje()}
          className="flex-1 bg-white/5 border-white/20 text-white placeholder:text-white/40"
        />
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={enviarMensaje}
          className="bg-white/5 hover:bg-white/10 border border-white/20"
        >
          <SendHorizontal className="h-4 w-4 text-white" />
        </Button>
      </div>
    </div>
  );
};

export default ChatPersonaje;
