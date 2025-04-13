
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TestInteractivo from "./TestInteractivo";
import GrandesReferentes from "./GrandesReferentes";
import { ArrowLeft } from "lucide-react";
import criticas from "../data/criticas";
import { ideologiaColores } from "../data/colores";
import { ideologiaContenido } from "../data/contenido";

interface ContenidoTabProps {
  ideologia: string;
}

interface IdeologiaCritica {
  nombre: string;
  descripcion: string;
  background: string;
}

const ContenidoTab = ({ ideologia }: ContenidoTabProps) => {
  const [criticaSeleccionada, setCriticaSeleccionada] = useState<string | null>(null);
  
  // Get background gradient for the selected ideology
  const getBackgroundGradient = (ideologiaNombre: string) => {
    return ideologiaColores[ideologiaNombre] || "";
  };
  
  // Determine text color based on background (for contrast)
  const getTextColor = (ideologiaNombre: string) => {
    const darkBackgrounds = ["Marxismo", "Socialismo", "Capitalismo", "Conservadurismo", "AnarcoCapitalismo", "Mercantilismo", "Keynesianismo"];
    return darkBackgrounds.includes(ideologiaNombre) ? "text-white" : "text-black";
  };
  
  const todasIdeologias: IdeologiaCritica[] = [
    { 
      nombre: 'Liberalismo', 
      descripcion: 'Análisis desde la perspectiva del liberalismo clásico y moderno.',
      background: getBackgroundGradient('Liberalismo')
    },
    { 
      nombre: 'Marxismo', 
      descripcion: 'Visión desde el materialismo dialéctico y la crítica marxista.',
      background: getBackgroundGradient('Marxismo')
    },
    { 
      nombre: 'Socialismo', 
      descripcion: 'Enfoque socialista sobre las relaciones económicas y sociales.',
      background: getBackgroundGradient('Socialismo')
    },
    { 
      nombre: 'Capitalismo', 
      descripcion: 'Perspectiva basada en los principios del mercado libre y la competencia.',
      background: getBackgroundGradient('Capitalismo')
    },
    { 
      nombre: 'Conservadurismo', 
      descripcion: 'Perspectiva basada en valores tradicionales y conservadores.',
      background: getBackgroundGradient('Conservadurismo')
    },
    { 
      nombre: 'AnarcoCapitalismo', 
      descripcion: 'Crítica desde la abolición del Estado y el mercado absoluto.',
      background: getBackgroundGradient('AnarcoCapitalismo')
    },
    { 
      nombre: 'Mercantilismo', 
      descripcion: 'Enfoque proteccionista y nacionalista del mercantilismo.',
      background: getBackgroundGradient('Mercantilismo')
    },
    { 
      nombre: 'Keynesianismo', 
      descripcion: 'Análisis keynesiano centrado en la intervención estatal.',
      background: getBackgroundGradient('Keynesianismo')
    },
  ];
  
  // Filter out the current ideology from the criticism options
  const ideologiasCritica = todasIdeologias.filter(
    (item) => item.nombre !== ideologia
  );

  // Get criticism content when an ideology is selected using the criticas object
  const getCriticaContent = (desde: string) => {
    if (
      criticas[ideologia] && 
      criticas[ideologia][desde]
    ) {
      return criticas[ideologia][desde];
    }
    return `Crítica al ${ideologia} desde la perspectiva del ${desde} no disponible.`;
  };
  
  const renderCriticasGrid = () => {
    return (
      <div className="mt-4">
        <h1 className="text-2xl font-bold text-center text-white mb-3">{ideologia}</h1>
        <h3 className="text-lg font-medium text-center text-white/80 mb-6">¿Desde qué perspectiva quieres analizarla?</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ideologiasCritica.map((item) => (
            <div 
              key={item.nombre}
              className={`p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-all duration-200 hover:-translate-y-1`}
              style={{ background: item.background }}
              onClick={() => setCriticaSeleccionada(item.nombre)}
            >
              <h3 className={`text-lg font-semibold mb-2 ${getTextColor(item.nombre)}`}>{item.nombre}</h3>
              <p className={`text-sm ${getTextColor(item.nombre)}/90`}>{item.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  const renderCriticaDetalle = () => {
    const ideologiaSeleccionada = todasIdeologias.find(
      (item) => item.nombre === criticaSeleccionada
    );
    
    if (!ideologiaSeleccionada) return null;
    
    // Format the criticism text - split by periods to create paragraphs
    const criticaTexto = getCriticaContent(criticaSeleccionada);
    const parrafos = criticaTexto.split('. ').filter(Boolean);
    
    return (
      <div className="mt-4">
        <button 
          onClick={() => setCriticaSeleccionada(null)}
          className="flex items-center text-blue-400 hover:text-blue-500 mb-4"
        >
          <ArrowLeft size={18} className="mr-1" />
          <span>Volver a todas las críticas</span>
        </button>
        
        <div style={{ background: ideologiaSeleccionada.background }} className="p-6 rounded-lg shadow-md">
          <h2 className={`text-xl font-bold mb-3 ${getTextColor(ideologiaSeleccionada.nombre)}`}>
            Crítica al {ideologia} desde el {criticaSeleccionada}
          </h2>
          <div className={`${getTextColor(ideologiaSeleccionada.nombre)}/90 space-y-4`}>
            {parrafos.map((parrafo, index) => (
              <p key={index} className="text-justify">
                {parrafo}{index < parrafos.length - 1 ? '.' : ''}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderConceptosClave = () => {
    const conceptos = ideologiaContenido[ideologia]?.conceptosClave || [];
    
    return (
      <div className="p-4 rounded-lg border border-white/20">
        <div 
          className="p-4 rounded-lg mb-4"
          style={{ background: getBackgroundGradient(ideologia) }}
        >
          <h3 className={`text-lg font-semibold mb-2 ${getTextColor(ideologia)}`}>Conceptos Clave</h3>
        </div>
        
        <ol className="list-decimal pl-6 space-y-4">
          {conceptos.map((concepto, index) => (
            <li key={index} className="text-white/90">
              <span className="font-bold">{concepto.titulo}:</span> {concepto.descripcion}
            </li>
          ))}
        </ol>
      </div>
    );
  };

  const renderIdeasPrincipales = () => {
    const ideas = ideologiaContenido[ideologia]?.ideasPrincipales || [];
    
    return (
      <div className="p-4 rounded-lg border border-white/20">
        <div 
          className="p-4 rounded-lg mb-4"
          style={{ background: getBackgroundGradient(ideologia) }}
        >
          <h3 className={`text-lg font-semibold mb-2 ${getTextColor(ideologia)}`}>Ideas Principales</h3>
        </div>
        
        <div className="space-y-4">
          {ideas.map((idea, index) => (
            <p key={index} className="text-white/90 text-justify">
              {idea}
            </p>
          ))}
        </div>
      </div>
    );
  };

  return (
    <Tabs defaultValue="conceptos" className="w-full">
      <TabsList className="grid w-full grid-cols-5 bg-black/40 border border-white/20">
        <TabsTrigger 
          value="conceptos" 
          className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/60 hover:text-white/80 transition-colors"
        >
          Conceptos
        </TabsTrigger>
        <TabsTrigger 
          value="ideas" 
          className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/60 hover:text-white/80 transition-colors"
        >
          Ideas
        </TabsTrigger>
        <TabsTrigger 
          value="criticas" 
          className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/60 hover:text-white/80 transition-colors"
        >
          Críticas
        </TabsTrigger>
        <TabsTrigger 
          value="test" 
          className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/60 hover:text-white/80 transition-colors"
        >
          Test
        </TabsTrigger>
        <TabsTrigger 
          value="referencias" 
          className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/60 hover:text-white/80 transition-colors"
        >
          Referencias
        </TabsTrigger>
      </TabsList>
      <TabsContent value="conceptos" className="mt-4">
        {renderConceptosClave()}
      </TabsContent>
      <TabsContent value="ideas" className="mt-4">
        {renderIdeasPrincipales()}
      </TabsContent>
      <TabsContent value="criticas" className="mt-4">
        {criticaSeleccionada ? renderCriticaDetalle() : renderCriticasGrid()}
      </TabsContent>
      <TabsContent value="test" className="mt-4">
        <TestInteractivo ideologia={ideologia} />
      </TabsContent>
      <TabsContent value="referencias" className="mt-4">
        <GrandesReferentes ideologia={ideologia} />
      </TabsContent>
    </Tabs>
  );
};

export default ContenidoTab;
