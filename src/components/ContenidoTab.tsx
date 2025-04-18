import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TestInteractivo from "./TestInteractivo";
import GrandesReferentes from "./GrandesReferentes";
import { ArrowLeft } from "lucide-react";
import criticas from "../data/criticas";
import { ideologiaColores } from "../data/colores";
import { ideologiaContenido } from "../data/contenido";
import criticasData from "../data/criticas";
const { criticismsSubTitle } = criticasData;
import { Loader } from "lucide-react";

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
  const [videosVisibles, setVideosVisibles] = useState<{ [key: number]: boolean }>({});
  const [videosCargados, setVideosCargados] = useState<{ [key: number]: boolean }>({});
  const [videosLoading, setVideosLoading] = useState<{ [key: number]: boolean }>({});
  
  // Get background gradient for the selected ideology
  const getBackgroundGradient = (ideologia: string) => {
    const color = ideologiaColores[ideologia as keyof typeof ideologiaColores] || '';
    return color.replace('linear-gradient(180deg', 'linear-gradient(90deg');
  };
  
  // Add a new function for specific opacity values
  const getBackgroundWithOpacity = (ideologiaNombre: string, opacity: number) => {
    if (ideologiaNombre === 'Marxismo') {
      return `linear-gradient(to bottom right, rgba(118, 7, 7, ${opacity}), rgba(192, 78, 78, ${opacity}))`;
    }
    if (ideologiaNombre === 'Liberalismo') {
      return `linear-gradient(to bottom right, rgba(109, 76, 20, ${opacity}), rgba(205, 173, 88, ${opacity}))`;
    }
    
    const color = ideologiaColores[ideologiaNombre] || "";
    if (color.startsWith('#')) {
      const r = parseInt(color.slice(1, 3), 16);
      const g = parseInt(color.slice(3, 5), 16);
      const b = parseInt(color.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }
    return color;
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
    return [];
  };
  
  const renderCriticasGrid = () => {
    return (
      <div className="mt-4">
        <h1 className="text-2xl font-light text-center text-[#B6B6B6] mb-3" style={{ textShadow: 'rgba(0, 0, 0, 0.5) 0px 2px 4px' }}>{ideologia}</h1>
        <h3 className="text-lg font-light text-center text-[#B6B6B6]/80 mb-6" style={{ textShadow: 'rgba(0, 0, 0, 0.5) 0px 2px 4px' }}>¿Desde qué perspectiva quieres analizarla?</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ideologiasCritica.map((item) => (
            <div 
              key={item.nombre}
              className={`p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-all duration-200 hover:-translate-y-1`}
              style={{ background: item.background }}
              onClick={() => setCriticaSeleccionada(item.nombre)}
            >
              <h3 className={`text-lg font-light mb-2 text-[#B6B6B6]`} style={{ textShadow: 'rgba(0, 0, 0, 0.5) 0px 2px 4px' }}>{item.nombre}</h3>
              <p className={`text-sm text-[#B6B6B6]/90`} style={{ textShadow: 'rgba(0, 0, 0, 0.5) 0px 2px 4px' }}>{item.descripcion}</p>
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
    
    const criticasArray = getCriticaContent(criticaSeleccionada);
    
    return (
      <div className="mt-8">
        <button 
          onClick={() => setCriticaSeleccionada(null)}
          className="flex items-center text-blue-400 hover:text-blue-500 mb-6"
        >
          <ArrowLeft size={18} className="mr-1" />
          <span>Volver a todas las críticas</span>
        </button>
        
        <div className="p-3 rounded-lg shadow-md">
          <div 
            className="p-4 rounded-lg mb-4"
            style={{ 
              background: 'rgb(255 255 255 / 0.05)',
              borderColor: 'rgb(255 255 255 / 0.2)',
              borderWidth: '1px',
            }}
          >
            <h3 className={`text-lg text-[#B6B6B6]`} style={{ textShadow: 'rgba(0, 0, 0, 0.5) 0px 2px 4px', fontWeight: 400, color: '#fff' }}>Crítica al {ideologia} desde el {criticaSeleccionada}</h3>
          </div>

          <div className="relative rounded-lg overflow-hidden p-3" style={{ 
            background: 'rgb(255 255 255 / 0.05)',
            borderColor: 'rgb(255 255 255 / 0.2)',
            borderWidth: '1px',
          }}>
            <div className="relative z-10 space-y-6">
              {criticasArray.map((critica, index) => (
                <div key={index} className="space-y-2" style={{ marginTop: index > 0 ? '32px' : '0' }}>
                  <h4 className="font-semibold text-white" style={{ fontWeight: 600, color: '#fff', textShadow: 'rgba(0,0,0,0.5) 0px 1px 4px' }}>
                    {critica.subtitulo}
                  </h4>
                  <p className="text-justify font-light text-[#B6B6B6]" style={{ textShadow: 'rgba(0, 0, 0, 0.5) 0px 1px 4px', marginTop: '5px' }}>
                    {critica.descripcion}
                  </p>
                </div>
              ))}
            </div>
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
          style={{ 
            background: 'rgb(255 255 255 / 0.05)',
            borderColor: 'rgb(255 255 255 / 0.2)',
            borderWidth: '1px',
          }}
        >
          <h3 className={`text-lg text-[#B6B6B6]`} style={{ textShadow: 'rgba(0, 0, 0, 0.5) 0px 2px 4px', fontWeight: 400, color: '#fff' }}>Conceptos Clave</h3>
        </div>
        
        <div className="relative rounded-lg overflow-hidden p-3" style={{ 
            background: 'rgb(255 255 255 / 0.05)',
            borderColor: 'rgb(255 255 255 / 0.2)',
            borderWidth: '1px',
          }}>
          <ol className="relative z-10 list-decimal pl-6 space-y-4">
            {conceptos.map((concepto, index) => (
              <li key={index} className="font-light text-[#B6B6B6]" style={{ 
                textShadow: 'rgba(0, 0, 0, 0.5) 0px 1px 4px'
              }}>
                <span className="font-light">{concepto.titulo}:</span> {concepto.descripcion}
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  };

  const renderIdeasPrincipales = () => {
    const ideas = ideologiaContenido[ideologia]?.ideasPrincipales || [];
    
    return (
      <div className="p-4 rounded-lg border border-white/20">
        <div 
          className="p-4 rounded-lg mb-4"
          style={{ 
            background: 'rgb(255 255 255 / 0.05)',
            borderColor: 'rgb(255 255 255 / 0.2)',
            borderWidth: '1px',
          }}
        >
          <h3 className={`text-lg text-[#B6B6B6]`} style={{ textShadow: 'rgba(0, 0, 0, 0.5) 0px 2px 4px', fontWeight: 400, color: '#fff' }}>Ideas Principales</h3>
        </div>
        
        <div className="relative rounded-lg overflow-hidden p-3" style={{ 
            background: 'rgb(255 255 255 / 0.05)',
            borderColor: 'rgb(255 255 255 / 0.2)',
            borderWidth: '1px',
          }}>
          <div className="relative z-10 space-y-4">
            {ideas.map((idea, index) => (
              <p key={index} className="text-justify font-light text-[#B6B6B6]" style={{ 
                textShadow: 'rgba(0, 0, 0, 0.5) 0px 1px 4px'
              }}>
                {idea}
              </p>
            ))}
          </div>
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
