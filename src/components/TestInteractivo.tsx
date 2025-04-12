import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle } from 'lucide-react';

interface TestInteractivoProps {
  ideologia: string;
}

interface Pregunta {
  id: number;
  texto: string;
  opciones: { id: string; texto: string; esCorrecta: boolean }[];
}

interface Resultado {
  mensaje: string;
  tipo: 'success' | 'warning' | 'error';
  recursoAdicional?: string;
  urlRecurso?: string;
}

const TestInteractivo = ({ ideologia }: TestInteractivoProps) => {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuestasSeleccionadas, setRespuestasSeleccionadas] = useState<{[key: number]: string}>({});
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const [resultadoFinal, setResultadoFinal] = useState<Resultado | null>(null);
  const [preguntasIdeologia, setPreguntasIdeologia] = useState<Pregunta[]>([]);
  
  // Preguntas para cada ideología
  const preguntas: { [key: string]: Pregunta[] } = {
    'Liberalismo': [
      {
        id: 1,
        texto: '¿Cuál es uno de los principios fundamentales del liberalismo?',
        opciones: [
          { id: 'a', texto: ' La intervención estatal en la economía', esCorrecta: false },
          { id: 'b', texto: ' La libertad individual', esCorrecta: true },
          { id: 'c', texto: ' La propiedad colectiva', esCorrecta: false },
          { id: 'd', texto: ' La planificación centralizada', esCorrecta: false }
        ]
      },
      {
        id: 2,
        texto: '¿Quién es considerado uno de los padres del liberalismo clásico?',
        opciones: [
          { id: 'a', texto: ' Karl Marx', esCorrecta: false },
          { id: 'b', texto: ' John Maynard Keynes', esCorrecta: false },
          { id: 'c', texto: ' John Locke', esCorrecta: true },
          { id: 'd', texto: ' Vladimir Lenin', esCorrecta: false }
        ]
      },
      {
        id: 3,
        texto: '¿Qué obra es fundamental para entender el liberalismo económico?',
        opciones: [
          { id: 'a', texto: ' El Capital', esCorrecta: false },
          { id: 'b', texto: ' La Riqueza de las Naciones', esCorrecta: true },
          { id: 'c', texto: ' El Manifiesto Comunista', esCorrecta: false },
          { id: 'd', texto: ' El Príncipe', esCorrecta: false }
        ]
      }
    ],
    'Marxismo': [
      {
        id: 1,
        texto: '¿Cuál es uno de los conceptos centrales del marxismo?',
        opciones: [
          { id: 'a', texto: 'El mercado libre', esCorrecta: false },
          { id: 'b', texto: 'La lucha de clases', esCorrecta: true },
          { id: 'c', texto: 'La mano invisible', esCorrecta: false },
          { id: 'd', texto: 'El equilibrio fiscal', esCorrecta: false }
        ]
      },
      {
        id: 2,
        texto: '¿Quién escribió junto a Marx "El Manifiesto Comunista"?',
        opciones: [
          { id: 'a', texto: 'Adam Smith', esCorrecta: false },
          { id: 'b', texto: 'Friedrich Engels', esCorrecta: true },
          { id: 'c', texto: 'Murray Rothbard', esCorrecta: false },
          { id: 'd', texto: 'Milton Friedman', esCorrecta: false }
        ]
      },
      {
        id: 3,
        texto: '¿Qué entiende el marxismo por "plusvalía"?',
        opciones: [
          { id: 'a', texto: 'El ahorro del capitalista', esCorrecta: false },
          { id: 'b', texto: 'La ganancia obtenida por especulación financiera', esCorrecta: false },
          { id: 'c', texto: 'El valor excedente creado por el trabajador y apropiado por el capitalista', esCorrecta: true },
          { id: 'd', texto: 'Un impuesto al trabajo', esCorrecta: false }
        ]
      }
    ],
    'Socialismo': [
      {
        id: 1,
        texto: '¿Qué propone el socialismo respecto a los medios de producción?',
        opciones: [
          { id: 'a', texto: 'Que estén en manos privadas exclusivamente', esCorrecta: false },
          { id: 'b', texto: 'Propiedad colectiva o estatal de los medios de producción', esCorrecta: true },
          { id: 'c', texto: 'Propiedad compartida entre empresas y consumidores', esCorrecta: false },
          { id: 'd', texto: 'Desregulación absoluta del mercado', esCorrecta: false }
        ]
      },
      {
        id: 2,
        texto: '¿Qué figura histórica es representativa del socialismo democrático?',
        opciones: [
          { id: 'a', texto: 'Karl Marx', esCorrecta: false },
          { id: 'b', texto: 'Eduard Bernstein', esCorrecta: true },
          { id: 'c', texto: 'Ludwig von Mises', esCorrecta: false },
          { id: 'd', texto: 'Thomas Hobbes', esCorrecta: false }
        ]
      },
      {
        id: 3,
        texto: '¿Cuál es uno de los objetivos del socialismo?',
        opciones: [
          { id: 'a', texto: 'Maximizar el lucro individual', esCorrecta: false },
          { id: 'b', texto: 'Eliminar el Estado', esCorrecta: false },
          { id: 'c', texto: 'Reducir la desigualdad social y económica', esCorrecta: true },
          { id: 'd', texto: 'Privatizar todos los servicios públicos', esCorrecta: false }
        ]
      }
    ],
    'Capitalismo': [
      {
        id: 1,
        texto: '¿Qué principio económico caracteriza al capitalismo?',
        opciones: [
          { id: 'a', texto: 'La planificación centralizada', esCorrecta: false },
          { id: 'b', texto: 'La propiedad privada de los medios de producción', esCorrecta: true },
          { id: 'c', texto: 'La autarquía comercial', esCorrecta: false },
          { id: 'd', texto: 'El trueque como sistema de intercambio', esCorrecta: false }
        ]
      },
      {
        id: 2,
        texto: '¿Qué economista es asociado con la idea de la "mano invisible"?',
        opciones: [
          { id: 'a', texto: 'Karl Marx', esCorrecta: false },
          { id: 'b', texto: 'John Maynard Keynes', esCorrecta: false },
          { id: 'c', texto: 'Adam Smith', esCorrecta: true },
          { id: 'd', texto: 'David Ricardo', esCorrecta: false }
        ]
      },
      {
        id: 3,
        texto: '¿Qué sistema económico defiende la libre competencia y el mercado abierto?',
        opciones: [
          { id: 'a', texto: 'El socialismo', esCorrecta: false },
          { id: 'b', texto: 'El capitalismo', esCorrecta: true },
          { id: 'c', texto: 'El comunismo', esCorrecta: false },
          { id: 'd', texto: 'El feudalismo', esCorrecta: false }
        ]
      }
    ],
    'Conservadurismo': [
      {
        id: 1,
        texto: '¿Cuál es una característica clave del pensamiento conservador?',
        opciones: [
          { id: 'a', texto: 'La ruptura total con la tradición', esCorrecta: false },
          { id: 'b', texto: 'El cambio constante como valor', esCorrecta: false },
          { id: 'c', texto: 'El respeto por las instituciones y la tradición', esCorrecta: true },
          { id: 'd', texto: 'El rechazo absoluto del orden', esCorrecta: false }
        ]
      },
      {
        id: 2,
        texto: '¿Qué filósofo político es conocido por su defensa del conservadurismo tras la Revolución Francesa?',
        opciones: [
          { id: 'a', texto: 'Jean-Jacques Rousseau', esCorrecta: false },
          { id: 'b', texto: 'Edmund Burke', esCorrecta: true },
          { id: 'c', texto: 'Karl Popper', esCorrecta: false },
          { id: 'd', texto: 'Friedrich Engels', esCorrecta: false }
        ]
      },
      {
        id: 3,
        texto: '¿Qué actitud tiene el conservadurismo frente al cambio social?',
        opciones: [
          { id: 'a', texto: 'Impulso revolucionario', esCorrecta: false },
          { id: 'b', texto: 'Cambio moderado y prudente', esCorrecta: true },
          { id: 'c', texto: 'Rechazo del orden social', esCorrecta: false },
          { id: 'd', texto: 'Apoyo incondicional a nuevas ideologías', esCorrecta: false }
        ]
      }
    ],
    'AnarcoCapitalismo': [
      {
        id: 1,
        texto: '¿Qué propone el anarcocapitalismo respecto al Estado?',
        opciones: [
          { id: 'a', texto: 'Que regule fuertemente la economía', esCorrecta: false },
          { id: 'b', texto: 'Que sea reducido a su mínima expresión', esCorrecta: false },
          { id: 'c', texto: 'La abolición total del Estado', esCorrecta: true },
          { id: 'd', texto: 'Un Estado mundial centralizado', esCorrecta: false }
        ]
      },
      {
        id: 2,
        texto: '¿Qué autor es una de las figuras más importantes del anarcocapitalismo?',
        opciones: [
          { id: 'a', texto: 'Murray Rothbard', esCorrecta: true },
          { id: 'b', texto: 'Milton Friedman', esCorrecta: false },
          { id: 'c', texto: 'Friedrich Hayek', esCorrecta: false },
          { id: 'd', texto: 'Karl Marx', esCorrecta: false }
        ]
      },
      {
        id: 3,
        texto: '¿Qué rol tiene el mercado en el anarcocapitalismo?',
        opciones: [
          { id: 'a', texto: 'Debe ser supervisado por el Estado', esCorrecta: false },
          { id: 'b', texto: 'Debe ser completamente libre y sin intervención', esCorrecta: true },
          { id: 'c', texto: 'Solo sirve como complemento del Estado', esCorrecta: false },
          { id: 'd', texto: 'Es sustituido por trueques comunitarios', esCorrecta: false }
        ]
      }
    ],
    'Mercantilismo': [
      {
        id: 1,
        texto: '¿Cuál es el objetivo principal del mercantilismo?',
        opciones: [
          { id: 'a', texto: 'Promover el libre comercio internacional', esCorrecta: false },
          { id: 'b', texto: 'Acumular metales preciosos mediante superávit comercial', esCorrecta: true },
          { id: 'c', texto: 'Eliminar todas las regulaciones estatales', esCorrecta: false },
          { id: 'd', texto: 'Fomentar la competencia libre entre naciones', esCorrecta: false }
        ]
      },
      {
        id: 2,
        texto: '¿Qué rol tenía el Estado en el modelo mercantilista?',
        opciones: [
          { id: 'a', texto: 'No tenía participación', esCorrecta: false },
          { id: 'b', texto: 'Intervenía activamente para proteger la economía nacional', esCorrecta: true },
          { id: 'c', texto: 'Solo garantizaba derechos individuales', esCorrecta: false },
          { id: 'd', texto: 'Actuaba como árbitro neutral entre empresas', esCorrecta: false }
        ]
      },
      {
        id: 3,
        texto: '¿En qué siglos fue dominante el pensamiento mercantilista?',
        opciones: [
          { id: 'a', texto: 'Del siglo XIX al XXI', esCorrecta: false },
          { id: 'b', texto: 'Durante la Edad Media', esCorrecta: false },
          { id: 'c', texto: 'Del siglo XVI al XVIII', esCorrecta: true },
          { id: 'd', texto: 'En la prehistoria', esCorrecta: false }
        ]
      }
    ],
    'Keynesianismo': [
      {
        id: 1,
        texto: '¿Cuál es una idea central del keynesianismo?',
        opciones: [
          { id: 'a', texto: 'La autosuficiencia del mercado para autorregularse', esCorrecta: false },
          { id: 'b', texto: 'El pleno empleo como resultado del libre mercado', esCorrecta: false },
          { id: 'c', texto: 'La intervención estatal para estimular la demanda agregada', esCorrecta: true },
          { id: 'd', texto: 'El trueque como sistema ideal de intercambio', esCorrecta: false }
        ]
      },
      {
        id: 2,
        texto: '¿Qué obra escribió John Maynard Keynes?',
        opciones: [
          { id: 'a', texto: 'El Capital', esCorrecta: false },
          { id: 'b', texto: 'La Riqueza de las Naciones', esCorrecta: false },
          { id: 'c', texto: 'Teoría General del Empleo, el Interés y el Dinero', esCorrecta: true },
          { id: 'd', texto: 'Camino de servidumbre', esCorrecta: false }
        ]
      },
      {
        id: 3,
        texto: '¿Qué política es típica en tiempos de crisis según el keynesianismo?',
        opciones: [
          { id: 'a', texto: 'Reducir el gasto público para equilibrar el presupuesto', esCorrecta: false },
          { id: 'b', texto: 'Subir impuestos para frenar la economía', esCorrecta: false },
          { id: 'c', texto: 'Aumentar el gasto público para estimular la economía', esCorrecta: true },
          { id: 'd', texto: 'Dejar actuar al mercado sin intervención', esCorrecta: false }
        ]
      }
    ]
  };
  
  // Actualizar las preguntas cuando cambie la ideología
  useEffect(() => {
    console.log('Ideología recibida:', ideologia);
    
    // Normalizar la ideología para que coincida con las claves del objeto preguntas
    const ideologiaNormalizada = ideologia === 'AnarcoCapitalismo' ? 'AnarcoCapitalismo' : ideologia;
    
    if (preguntas[ideologiaNormalizada]) {
      console.log('Usando preguntas para:', ideologiaNormalizada);
      setPreguntasIdeologia(preguntas[ideologiaNormalizada]);
      // Reiniciar el estado cuando cambie la ideología
      setPreguntaActual(0);
      setRespuestasSeleccionadas({});
      setMostrarResultados(false);
      setResultadoFinal(null);
    } else {
      console.error(`No se encontraron preguntas para la ideología: ${ideologiaNormalizada}`);
      // En lugar de usar Liberalismo como fallback, mostrar un mensaje de error
      setPreguntasIdeologia([]);
    }
  }, [ideologia]);
  
  // Debug para verificar la ideología y las preguntas seleccionadas
  useEffect(() => {
    console.log('Ideología seleccionada:', ideologia);
    console.log('Preguntas disponibles:', Object.keys(preguntas));
    console.log('Preguntas seleccionadas:', preguntasIdeologia);
  }, [ideologia, preguntasIdeologia]);
  
  const seleccionarRespuesta = (idPregunta: number, idOpcion: string) => {
    setRespuestasSeleccionadas({
      ...respuestasSeleccionadas,
      [idPregunta]: idOpcion
    });
  };
  
  const avanzarPregunta = () => {
    if (preguntaActual < preguntasIdeologia.length - 1) {
      setPreguntaActual(preguntaActual + 1);
    } else {
      calcularResultado();
      setMostrarResultados(true);
    }
  };
  
  const calcularResultado = () => {
    let aciertos = 0;
    
    preguntasIdeologia.forEach(pregunta => {
      const respuestaSeleccionada = respuestasSeleccionadas[pregunta.id];
      const esCorrecta = pregunta.opciones.find(opc => opc.id === respuestaSeleccionada)?.esCorrecta;
      
      if (esCorrecta) {
        aciertos++;
      }
    });
    
    const porcentaje = (aciertos / preguntasIdeologia.length) * 100;
    
    if (porcentaje >= 75) {
      setResultadoFinal({
        mensaje: `¡Excelente! Tienes un gran conocimiento sobre el ${ideologia.toLowerCase()}.`,
        tipo: 'success',
        recursoAdicional: getRecursoRecomendado(ideologia, 'avanzado'),
        urlRecurso: '#'
      });
    } else if (porcentaje >= 50) {
      setResultadoFinal({
        mensaje: `Buen trabajo. Tienes conocimientos sólidos sobre el ${ideologia.toLowerCase()}, pero aún puedes aprender más.`,
        tipo: 'warning',
        recursoAdicional: getRecursoRecomendado(ideologia, 'intermedio'),
        urlRecurso: '#'
      });
    } else {
      setResultadoFinal({
        mensaje: `Sigue aprendiendo. El ${ideologia.toLowerCase()} tiene muchos conceptos interesantes por descubrir.`,
        tipo: 'error',
        recursoAdicional: getRecursoRecomendado(ideologia, 'basico'),
        urlRecurso: '#'
      });
    }
  };
  
  const getRecursoRecomendado = (ideologia: string, nivel: 'basico' | 'intermedio' | 'avanzado') => {
    const recursos: { [key: string]: { [key: string]: string } } = {
      'Liberalismo': {
        basico: 'Comienza con: "Sobre la libertad" de John Stuart Mill',
        intermedio: 'Te recomendamos: "El liberalismo político" de John Rawls',
        avanzado: 'Para profundizar más: "La constitución de la libertad" de Friedrich Hayek'
      },
      'Marxismo': {
        basico: 'Comienza con: "El Manifiesto Comunista" de Karl Marx y Friedrich Engels',
        intermedio: 'Te recomendamos: "El Capital" de Karl Marx',
        avanzado: 'Para profundizar más: "La ideología alemana" de Karl Marx'
      },
      'Socialismo': {
        basico: 'Comienza con: "¿Qué es el socialismo?" de Michael Harrington',
        intermedio: 'Te recomendamos: "Las premisas del socialismo" de Eduard Bernstein',
        avanzado: 'Para profundizar más: "Socialismo y democracia" de Tony Judt'
      },
      'Capitalismo': {
        basico: 'Comienza con: "La riqueza de las naciones" de Adam Smith',
        intermedio: 'Te recomendamos: "Capitalismo y libertad" de Milton Friedman',
        avanzado: 'Para profundizar más: "La acción humana" de Ludwig von Mises'
      },
      'Conservadurismo': {
        basico: 'Comienza con: "Reflexiones sobre la revolución en Francia" de Edmund Burke',
        intermedio: 'Te recomendamos: "La sociedad abierta y sus enemigos" de Karl Popper',
        avanzado: 'Para profundizar más: "La tradición conservadora" de Russell Kirk'
      },
      'AnarcoCapitalismo': {
        basico: 'Comienza con: "La ética de la libertad" de Murray Rothbard',
        intermedio: 'Te recomendamos: "Por una nueva libertad" de Murray Rothbard',
        avanzado: 'Para profundizar más: "La anatomía del Estado" de Murray Rothbard'
      },
      'Mercantilismo': {
        basico: 'Comienza con: "El mercantilismo" de Eli Heckscher',
        intermedio: 'Te recomendamos: "Riqueza y poder" de Fernand Braudel',
        avanzado: 'Para profundizar más: "El sistema mercantilista" de Charles Wilson'
      },
      'Keynesianismo': {
        basico: 'Comienza con: "Teoría general del empleo, el interés y el dinero" de John Maynard Keynes',
        intermedio: 'Te recomendamos: "La economía keynesiana" de Paul Samuelson',
        avanzado: 'Para profundizar más: "Keynes: la biografía definitiva" de Robert Skidelsky'
      }
    };

    return recursos[ideologia]?.[nivel] || 'Recurso no disponible';
  };
  
  const reiniciarTest = () => {
    setPreguntaActual(0);
    setRespuestasSeleccionadas({});
    setMostrarResultados(false);
    setResultadoFinal(null);
  };
  
  return (
    <div className="space-y-6">
      {preguntasIdeologia.length > 0 ? (
        <>
          {!mostrarResultados ? (
            <div className="space-y-6">
              <div className="mb-10">
                <h3 className="text-lg font-medium mb-2">
                  Pregunta {preguntaActual + 1} de {preguntasIdeologia.length}
                </h3>
                <p className="text-white/90">{preguntasIdeologia[preguntaActual].texto}</p>
              </div>
              
              <div className="space-y-3">
                {preguntasIdeologia[preguntaActual].opciones.map((opcion) => (
                  <div 
                    key={opcion.id}
                    className={`border border-white/20 p-3 rounded-md cursor-pointer transition-all duration-200 ${
                      respuestasSeleccionadas[preguntasIdeologia[preguntaActual].id] === opcion.id 
                      ? 'bg-white/10 border-white/40'
                      : 'bg-white/5 hover:bg-white/10'
                    }`}
                    onClick={() => seleccionarRespuesta(preguntasIdeologia[preguntaActual].id, opcion.id)}
                  >
                    <span className="font-medium text-white">{opcion.id.toUpperCase()}.</span> 
                    <span className="text-white/80">{opcion.texto}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between pt-4">
                <Button 
                  variant="outline" 
                  onClick={reiniciarTest}
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Reiniciar
                </Button>
                <Button 
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20"
                  onClick={avanzarPregunta}
                  disabled={!respuestasSeleccionadas[preguntasIdeologia[preguntaActual].id]}
                >
                  {preguntaActual < preguntasIdeologia.length - 1 ? 'Siguiente' : 'Ver resultado'}
                </Button>
              </div>
            </div>
          ) : (
            <div className="text-center py-6">
              {resultadoFinal && (
                <>
                  <div className="mb-4">
                    {resultadoFinal.tipo === 'success' && <CheckCircle className="mx-auto h-16 w-16 text-white/80 mb-2" />}
                    {resultadoFinal.tipo === 'warning' && <CheckCircle className="mx-auto h-16 w-16 text-white/60 mb-2" />}
                    {resultadoFinal.tipo === 'error' && <XCircle className="mx-auto h-16 w-16 text-white/40 mb-2" />}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-white">Tu resultado</h3>
                  <p className="text-lg mb-4 text-white/80">{resultadoFinal.mensaje}</p>
                  
                  {resultadoFinal.recursoAdicional && (
                    <div className="mt-4 p-3 bg-white/5 border border-white/20 rounded-md">
                      <p className="font-medium text-white">Recurso recomendado:</p>
                      <p className="text-white/80">
                        {resultadoFinal.recursoAdicional}
                      </p>
                    </div>
                  )}
                  
                  <Button 
                    className="mt-6 bg-white/10 hover:bg-white/20 text-white border border-white/20"
                    onClick={reiniciarTest}
                  >
                    Realizar el test nuevamente
                  </Button>
                </>
              )}
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-8">
          <h3 className="text-xl font-bold mb-2 text-white">Test no disponible</h3>
          <p className="text-white/80 mb-4">
            No hay preguntas disponibles para la ideología "{ideologia}" en este momento.
          </p>
          <p className="text-white/60 text-sm">
            Por favor, selecciona otra ideología o vuelve más tarde.
          </p>
        </div>
      )}
    </div>
  );
};

export default TestInteractivo;
