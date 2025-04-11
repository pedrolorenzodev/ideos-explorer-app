
import BottomNavigation from '@/components/BottomNavigation';
import FloatingButtons from '@/components/FloatingButtons';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from 'react';

const TestsPage = () => {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuestas, setRespuestas] = useState<string[]>([]);
  const [mostrarResultado, setMostrarResultado] = useState(false);
  
  const preguntas = [
    {
      texto: "¿Cuál de estas frases se acerca más a tu forma de pensar?",
      opciones: [
        "La libertad individual debe ser la principal prioridad de un país",
        "La igualdad económica debe ser la principal prioridad de un país",
        "El orden y la tradición deben ser la principal prioridad de un país",
        "No tengo una postura clara al respecto"
      ]
    },
    {
      texto: "¿Cómo crees que debería organizarse la economía?",
      opciones: [
        "Libre mercado con mínima intervención estatal",
        "Economía planificada dirigida por el Estado",
        "Economía mixta con regulación estatal moderada",
        "No tengo una postura clara al respecto"
      ]
    },
    {
      texto: "¿Cuál es tu postura sobre la propiedad privada?",
      opciones: [
        "Es un derecho fundamental que debe ser protegido",
        "Debe limitarse para garantizar el bienestar social",
        "Los medios de producción deberían ser de propiedad colectiva",
        "No tengo una postura clara al respecto"
      ]
    }
  ];
  
  const handleSeleccionarRespuesta = (respuesta: string) => {
    const nuevasRespuestas = [...respuestas];
    nuevasRespuestas[preguntaActual] = respuesta;
    setRespuestas(nuevasRespuestas);
  };
  
  const handleSiguientePregunta = () => {
    if (preguntaActual < preguntas.length - 1) {
      setPreguntaActual(preguntaActual + 1);
    } else {
      setMostrarResultado(true);
    }
  };
  
  const resetTest = () => {
    setPreguntaActual(0);
    setRespuestas([]);
    setMostrarResultado(false);
  };
  
  return (
    <div className="pb-20 animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-1">Tests Interactivos</h1>
          <p className="text-gray-600">Descubre qué ideologías se alinean más con tu forma de pensar</p>
        </div>
        
        {!mostrarResultado ? (
          <Card className="p-6">
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm text-gray-500">Pregunta {preguntaActual + 1} de {preguntas.length}</span>
              <div className="flex gap-1">
                {preguntas.map((_, index) => (
                  <div 
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      index === preguntaActual 
                        ? 'bg-black' 
                        : index < preguntaActual 
                          ? 'bg-gray-400' 
                          : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <h2 className="text-lg font-medium mb-4">
              {preguntas[preguntaActual].texto}
            </h2>
            
            <RadioGroup 
              value={respuestas[preguntaActual] || ''}
              onValueChange={handleSeleccionarRespuesta}
              className="space-y-4"
            >
              {preguntas[preguntaActual].opciones.map((opcion, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <RadioGroupItem 
                    value={opcion} 
                    id={`option-${index}`} 
                    className="mt-1"
                  />
                  <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                    {opcion}
                  </Label>
                </div>
              ))}
            </RadioGroup>
            
            <div className="mt-8 flex justify-end">
              <Button 
                onClick={handleSiguientePregunta}
                disabled={!respuestas[preguntaActual]}
              >
                {preguntaActual < preguntas.length - 1 ? 'Siguiente' : 'Ver resultado'}
              </Button>
            </div>
          </Card>
        ) : (
          <Card className="p-6">
            <h2 className="text-xl font-medium mb-6">Tu resultado</h2>
            
            <div className="mb-8 space-y-4">
              <div className="flex justify-between items-center">
                <span>Liberalismo</span>
                <div className="w-2/3 h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-black" 
                    style={{ width: '65%' }}
                  />
                </div>
                <span className="ml-2 font-medium">65%</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span>Socialismo</span>
                <div className="w-2/3 h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-black" 
                    style={{ width: '30%' }}
                  />
                </div>
                <span className="ml-2 font-medium">30%</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span>Conservadurismo</span>
                <div className="w-2/3 h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-black" 
                    style={{ width: '45%' }}
                  />
                </div>
                <span className="ml-2 font-medium">45%</span>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6">
              Basado en tus respuestas, tus ideas se alinean más con el Liberalismo, 
              aunque también muestras afinidad con el Conservadurismo en algunos aspectos.
            </p>
            
            <div className="flex justify-center">
              <Button onClick={resetTest}>
                Reiniciar test
              </Button>
            </div>
          </Card>
        )}
      </div>
      
      <FloatingButtons />
      <BottomNavigation />
    </div>
  );
};

export default TestsPage;
