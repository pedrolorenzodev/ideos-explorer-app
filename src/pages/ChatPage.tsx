
import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import BottomNavigation from '@/components/BottomNavigation';
import FloatingButtons from '@/components/FloatingButtons';
import PersonIcon from '@mui/icons-material/Person';
import { ideologiaColores } from '@/data/colores';

const ChatPage = () => {
  const [searchParams] = useSearchParams();
  const ideologia = searchParams.get('ideologia');
  const [personajeSeleccionado, setPersonajeSeleccionado] = useState<any>(null);
  const [mensaje, setMensaje] = useState('');
  const [mensajes, setMensajes] = useState<Array<{texto: string, esUsuario: boolean}>>([]);
  const [isLoading, setIsLoading] = useState(false);

  const personajes = [
    {
      nombre: 'Karl Marx',
      ideologia: 'Marxismo',
      mensajeBienvenida: 'Saludos, soy Karl Marx. ¿Te interesa entender las contradicciones del capitalismo o la lucha de clases? Pregunta lo que quieras.',
      ejemploRespuesta: 'Ah, la plusvalía... ese es el corazón del sistema capitalista. Es, en resumen, el valor que el trabajador produce pero que no se le paga: se lo apropia el capitalista. Es la base de la explotación. Si querés, puedo explicártelo con un ejemplo concreto.'
    },
    {
      nombre: 'Adam Smith',
      ideologia: 'Liberalismo',
      mensajeBienvenida: 'Hola, soy Adam Smith, autor de La riqueza de las naciones. ¿Querés entender cómo funciona realmente el mercado?',
      ejemploRespuesta: 'La "mano invisible" es una forma de decir que, al perseguir nuestros propios intereses, muchas veces terminamos beneficiando a toda la sociedad, aunque no sea esa nuestra intención directa. Es un principio que observé al analizar los mercados.'
    },
    {
      nombre: 'Ludwig von Mises',
      ideologia: 'Liberalismo',
      mensajeBienvenida: 'Soy Ludwig von Mises. Estoy aquí para hablarte sobre el poder de la acción humana en una economía libre. ¿En qué estás pensando?',
      ejemploRespuesta: 'Porque solo en un mercado libre los precios transmiten información real. Cualquier interferencia estatal distorsiona el proceso de coordinación. La planificación central no puede reemplazar al orden espontáneo del mercado.'
    },
    {
      nombre: 'Murray Rothbard',
      ideologia: 'AnarcoCapitalismo',
      mensajeBienvenida: 'Soy Murray Rothbard. Si estás listo para cuestionarlo todo —especialmente al Estado—, acá estoy.',
      ejemploRespuesta: 'Porque el Estado es, en esencia, una institución coercitiva que vive del robo legalizado —es decir, los impuestos. No necesitamos al Estado para vivir en sociedad ni para cooperar. De hecho, estamos mejor sin él.'
    },
    {
      nombre: 'Javier Milei',
      ideologia: 'AnarcoCapitalismo',
      mensajeBienvenida: '¡Hola! Soy Javier Milei. Si venís a charlar sobre economía, libertad y terminar con la casta, ¡mandale!',
      ejemploRespuesta: 'Porque se financia por la fuerza, vía impuestos, sin que vos puedas elegir. Es como si te apuntaran con un arma y te dijeran: "Pagá o vas preso". Eso es coerción, no libertad.'
    },
    {
      nombre: 'John Maynard Keynes',
      ideologia: 'Keynesianismo',
      mensajeBienvenida: 'Hola, soy John Maynard Keynes. Si te interesa hablar sobre cómo estabilizar una economía inestable, estás en el lugar correcto.',
      ejemploRespuesta: 'Porque los mercados, aunque útiles, no siempre se autorregulan de forma eficiente. En épocas de crisis, el Estado debe actuar para estimular la demanda y evitar que el desempleo se dispare. Dejar que todo se arregle solo es una apuesta muy riesgosa.'
    },
    {
      nombre: 'Friedrich Engels',
      ideologia: 'Marxismo',
      mensajeBienvenida: 'Saludos, soy Friedrich Engels. Colaboré con Marx en la crítica al capitalismo. ¿Querés conversar sobre eso o sobre la lucha de clases?',
      ejemploRespuesta: 'La familia, tal como existe bajo el capitalismo, refuerza estructuras de propiedad y opresión. En "El origen de la familia", analizo cómo cambia según las formas de producción. No es algo eterno ni natural, sino una construcción histórica.'
    },
    {
      nombre: 'George Orwell',
      ideologia: 'Socialismo',
      mensajeBienvenida: 'Hola, soy George Orwell. He visto cómo las ideologías pueden convertirse en tiranías. Si querés hablar de libertad, poder y lenguaje, acá estoy.',
      ejemploRespuesta: 'Porque vi de cerca cómo los totalitarismos deforman la verdad, el lenguaje y la libertad individual. 1984 fue una advertencia, no una predicción. Quise mostrar lo que pasa cuando el poder ya no tiene límites.'
    },
    {
      nombre: 'Vladimir Lenin',
      ideologia: 'Marxismo',
      mensajeBienvenida: 'Saludos, soy Vladimir Ilich Lenin. Si te interesa comprender la revolución proletaria y la lucha de clases, estoy aquí para dialogar contigo.',
      ejemploRespuesta: 'La dictadura del proletariado es la transición necesaria del capitalismo al comunismo. Es el poder político ejercido por la clase trabajadora para suprimir a la burguesía y reorganizar la sociedad sin clases. No se trata de una dictadura en el sentido burgués, sino del control democrático de la mayoría sobre la minoría explotadora.'
    }
  ];

  const handleSelectPersonaje = (personaje: any) => {
    setPersonajeSeleccionado(personaje);
    setMensajes([{
      texto: personaje.mensajeBienvenida,
      esUsuario: false
    }]);
  };

  const handleEnviarMensaje = async () => {
    if (!mensaje.trim()) return;
    
    const mensajeUsuario = mensaje;
    setMensaje('');
    setMensajes(prev => [...prev, { texto: mensajeUsuario, esUsuario: true }]);
    
    setIsLoading(true);
    
    // Simular delay de respuesta
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setMensajes(prev => [...prev, { 
      texto: personajeSeleccionado.ejemploRespuesta,
      esUsuario: false 
    }]);
    
    setIsLoading(false);
  };

  // Get background color based on ideology using the ideologiaColores object
  const getIdeologyBackground = (ideologyName: string): string => {
    // Use the capitalized version for lookup
    const formattedName = ideologyName.charAt(0).toUpperCase() + ideologyName.slice(1);
    return ideologiaColores[formattedName as keyof typeof ideologiaColores] || '';
  };

  // Set a background gradient for the page
  const pageBackground = ideologia 
    ? `linear-gradient(to bottom, rgba(30, 30, 30, 1) 0%, rgba(20, 20, 20, 0.95) 100%)`
    : 'bg-background';

  return (
    <div className="pb-20 h-screen flex flex-col animate-fade-in" style={{ background: pageBackground }}>
      <div className="flex-1 max-w-4xl mx-auto px-4 py-8 w-full flex flex-col">
        <div className="mb-6">
          {personajeSeleccionado ? (
            <button 
              onClick={() => setPersonajeSeleccionado(null)} 
              className="inline-flex items-center text-white/80 hover:text-white mb-2"
            >
              <ArrowLeft size={18} className="mr-1" />
              <span>Volver</span>
            </button>
          ) : (
            <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-2">
              <ArrowLeft size={18} className="mr-1" />
              <span>Volver</span>
            </Link>
          )}
          
          <div 
            className="p-4 rounded-lg mb-4"
            style={{ 
              background: ideologia ? getIdeologyBackground(ideologia) : 'transparent' 
            }}
          >
            <h1 className="text-2xl font-bold text-white">Chat con Personajes</h1>
            {ideologia && (
              <p className="text-white/80">
                Dialogando sobre {ideologia.charAt(0).toUpperCase() + ideologia.slice(1)}
              </p>
            )}
          </div>
        </div>
        
        {!personajeSeleccionado ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {personajes
              .filter(p => !ideologia || p.ideologia.toLowerCase() === ideologia.toLowerCase())
              .map((personaje) => (
                <div 
                  key={personaje.nombre}
                  className="p-4 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105"
                  style={{ 
                    background: getIdeologyBackground(personaje.ideologia) 
                  }}
                  onClick={() => handleSelectPersonaje(personaje)}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 mb-3 overflow-hidden border-2 border-white/50 flex items-center justify-center">
                      <PersonIcon className="w-12 h-12 text-white/80" />
                    </div>
                    <h3 className="text-lg font-medium text-white">{personaje.nombre}</h3>
                    <p className="text-sm text-white/80">{personaje.ideologia}</p>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div className="flex-1 flex flex-col">
            <div className="flex-1 space-y-4 overflow-y-auto mb-4">
              {mensajes.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex ${msg.esUsuario ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] p-3 rounded-lg ${
                      msg.esUsuario 
                        ? 'bg-white/10 text-white' 
                        : 'bg-white/20 text-white'
                    }`}
                  >
                    {msg.texto}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] p-3 rounded-lg bg-white/20 text-white">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Escribe tu mensaje..."
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleEnviarMensaje()}
                className="flex-1 bg-white/5 border-white/20 text-white placeholder:text-white/60"
              />
              <Button 
                onClick={handleEnviarMensaje}
                className="bg-white/10 hover:bg-white/20 text-white"
              >
                <Send size={18} />
              </Button>
            </div>
          </div>
        )}
      </div>
      
      <FloatingButtons ideologia={ideologia || undefined} />
      <BottomNavigation />
    </div>
  );
};

export default ChatPage;
