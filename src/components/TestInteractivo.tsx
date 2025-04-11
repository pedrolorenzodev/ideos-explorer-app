
import { useState } from 'react';
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
  
  // Preguntas para el Liberalismo
  const preguntas: { [key: string]: Pregunta[] } = {
    'Liberalismo': [
      {
        id: 1,
        texto: '¿Cuál es uno de los principios fundamentales del liberalismo?',
        opciones: [
          { id: 'a', texto: 'La intervención estatal en la economía', esCorrecta: false },
          { id: 'b', texto: 'La libertad individual', esCorrecta: true },
          { id: 'c', texto: 'La propiedad colectiva', esCorrecta: false },
          { id: 'd', texto: 'La planificación centralizada', esCorrecta: false }
        ]
      },
      {
        id: 2,
        texto: '¿Quién es considerado uno de los padres del liberalismo clásico?',
        opciones: [
          { id: 'a', texto: 'Karl Marx', esCorrecta: false },
          { id: 'b', texto: 'John Maynard Keynes', esCorrecta: false },
          { id: 'c', texto: 'John Locke', esCorrecta: true },
          { id: 'd', texto: 'Vladimir Lenin', esCorrecta: false }
        ]
      },
      {
        id: 3,
        texto: '¿Qué obra es fundamental para entender el liberalismo económico?',
        opciones: [
          { id: 'a', texto: 'El Capital', esCorrecta: false },
          { id: 'b', texto: 'La Riqueza de las Naciones', esCorrecta: true },
          { id: 'c', texto: 'El Manifiesto Comunista', esCorrecta: false },
          { id: 'd', texto: 'El Príncipe', esCorrecta: false }
        ]
      }
    ],
    // Se pueden agregar más ideologías con sus respectivas preguntas
  };
  
  // Usar la ideología correspondiente o por defecto la primera
  const preguntasIdeologia = preguntas[ideologia] || preguntas.Liberalismo;
  
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
        mensaje: '¡Excelente! Tienes un gran conocimiento sobre el liberalismo.',
        tipo: 'success',
        recursoAdicional: 'Para profundizar más: "Sobre la libertad" de John Stuart Mill',
        urlRecurso: '#'
      });
    } else if (porcentaje >= 50) {
      setResultadoFinal({
        mensaje: 'Buen trabajo. Tienes conocimientos sólidos, pero aún puedes aprender más.',
        tipo: 'warning',
        recursoAdicional: 'Te recomendamos: "El liberalismo político" de John Rawls',
        urlRecurso: '#'
      });
    } else {
      setResultadoFinal({
        mensaje: 'Sigue aprendiendo. El liberalismo tiene muchos conceptos interesantes por descubrir.',
        tipo: 'error',
        recursoAdicional: 'Comienza con: "¿Qué es el liberalismo?" de Ludwig von Mises',
        urlRecurso: '#'
      });
    }
  };
  
  const reiniciarTest = () => {
    setPreguntaActual(0);
    setRespuestasSeleccionadas({});
    setMostrarResultados(false);
    setResultadoFinal(null);
  };
  
  if (!preguntasIdeologia.length) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Test no disponible</CardTitle>
          <CardDescription>
            No hay preguntas disponibles para esta ideología en este momento.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }
  
  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle className={`text-ideologia-${ideologia.toLowerCase()}`}>
          ¿Cuánto sabes de {ideologia}?
        </CardTitle>
        <CardDescription>
          Pon a prueba tus conocimientos con este test interactivo.
        </CardDescription>
      </CardHeader>
      
      {!mostrarResultados ? (
        <>
          <CardContent>
            <div className="mb-4">
              <h3 className="text-lg font-medium mb-2">
                Pregunta {preguntaActual + 1} de {preguntasIdeologia.length}
              </h3>
              <p className="text-gray-800">{preguntasIdeologia[preguntaActual].texto}</p>
            </div>
            
            <div className="space-y-3">
              {preguntasIdeologia[preguntaActual].opciones.map((opcion) => (
                <div 
                  key={opcion.id}
                  className={`border p-3 rounded-md cursor-pointer transition-colors ${
                    respuestasSeleccionadas[preguntasIdeologia[preguntaActual].id] === opcion.id 
                    ? `bg-ideologia-${ideologia.toLowerCase()} bg-opacity-10 border-ideologia-${ideologia.toLowerCase()}`
                    : 'hover:bg-gray-50'
                  }`}
                  onClick={() => seleccionarRespuesta(preguntasIdeologia[preguntaActual].id, opcion.id)}
                >
                  <span className="font-medium">{opcion.id.toUpperCase()}.</span> {opcion.texto}
                </div>
              ))}
            </div>
          </CardContent>
          
          <CardFooter className="flex justify-between">
            <Button 
              variant="outline" 
              onClick={reiniciarTest}
            >
              Reiniciar
            </Button>
            <Button 
              className={`bg-ideologia-${ideologia.toLowerCase()} hover:bg-opacity-90`}
              onClick={avanzarPregunta}
              disabled={!respuestasSeleccionadas[preguntasIdeologia[preguntaActual].id]}
            >
              {preguntaActual < preguntasIdeologia.length - 1 ? 'Siguiente' : 'Ver resultado'}
            </Button>
          </CardFooter>
        </>
      ) : (
        <CardContent>
          {resultadoFinal && (
            <div className="text-center py-6">
              <div className="mb-4">
                {resultadoFinal.tipo === 'success' && <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-2" />}
                {resultadoFinal.tipo === 'warning' && <CheckCircle className="mx-auto h-16 w-16 text-amber-500 mb-2" />}
                {resultadoFinal.tipo === 'error' && <XCircle className="mx-auto h-16 w-16 text-red-500 mb-2" />}
              </div>
              
              <h3 className="text-xl font-bold mb-2">Tu resultado</h3>
              <p className="text-lg mb-4">{resultadoFinal.mensaje}</p>
              
              {resultadoFinal.recursoAdicional && (
                <div className="mt-4 p-3 bg-gray-50 rounded-md">
                  <p className="font-medium">Recurso recomendado:</p>
                  <p className="text-ideologia-liberalismo">
                    {resultadoFinal.recursoAdicional}
                  </p>
                </div>
              )}
              
              <Button 
                className={`mt-6 bg-ideologia-${ideologia.toLowerCase()} hover:bg-opacity-90`}
                onClick={reiniciarTest}
              >
                Realizar el test nuevamente
              </Button>
            </div>
          )}
        </CardContent>
      )}
    </Card>
  );
};

export default TestInteractivo;
