
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TestInteractivo from "./TestInteractivo";
import GrandesReferentes from "./GrandesReferentes";
import { ArrowLeft } from "lucide-react";

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
  
  const todasIdeologias: IdeologiaCritica[] = [
    { 
      nombre: 'Liberalismo', 
      descripcion: 'Análisis desde la perspectiva del liberalismo clásico y moderno.',
      background: 'bg-gradient-to-r from-yellow-500 to-yellow-400'
    },
    { 
      nombre: 'Marxismo', 
      descripcion: 'Visión desde el materialismo dialéctico y la crítica marxista.',
      background: 'bg-gradient-to-r from-red-700 to-red-600'
    },
    { 
      nombre: 'Socialismo', 
      descripcion: 'Enfoque socialista sobre las relaciones económicas y sociales.',
      background: 'bg-gradient-to-r from-red-400 to-pink-400'
    },
    { 
      nombre: 'Capitalismo', 
      descripcion: 'Perspectiva basada en los principios del mercado libre y la competencia.',
      background: 'bg-gradient-to-r from-green-600 to-green-500'
    },
    { 
      nombre: 'Conservadurismo', 
      descripcion: 'Perspectiva basada en valores tradicionales y conservadores.',
      background: 'bg-gray-200'
    },
    { 
      nombre: 'AnarcoCapitalismo', 
      descripcion: 'Crítica desde la abolición del Estado y el mercado absoluto.',
      background: 'bg-gradient-to-r from-yellow-500 to-black'
    },
    { 
      nombre: 'Mercantilismo', 
      descripcion: 'Enfoque proteccionista y nacionalista del mercantilismo.',
      background: 'bg-gradient-to-r from-yellow-500 to-gray-400'
    },
    { 
      nombre: 'Keynesianismo', 
      descripcion: 'Análisis keynesiano centrado en la intervención estatal.',
      background: 'bg-gradient-to-r from-blue-300 to-blue-400'
    },
  ];
  
  // Filter out the current ideology from the criticism options
  const ideologiasCritica = todasIdeologias.filter(
    (item) => item.nombre !== ideologia
  );

  // Get criticism content when an ideology is selected
  const getCriticaContent = (desde: string) => {
    return `Crítica al ${ideologia} desde la perspectiva del ${desde}. Aquí se mostraría un análisis detallado de las debilidades y contradicciones del ${ideologia} según la visión del ${desde}.`;
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
              className={`${item.background} p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-all duration-200 hover:-translate-y-1`}
              onClick={() => setCriticaSeleccionada(item.nombre)}
            >
              <h3 className="text-lg font-semibold mb-2 text-white">{item.nombre}</h3>
              <p className="text-sm text-white/90">{item.descripcion}</p>
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
    
    return (
      <div className="mt-4">
        <button 
          onClick={() => setCriticaSeleccionada(null)}
          className="flex items-center text-blue-400 hover:text-blue-500 mb-4"
        >
          <ArrowLeft size={18} className="mr-1" />
          <span>Volver a todas las críticas</span>
        </button>
        
        <div className={`${ideologiaSeleccionada.background} p-6 rounded-lg shadow-md`}>
          <h2 className="text-xl font-bold mb-3 text-white">
            Crítica al {ideologia} desde el {criticaSeleccionada}
          </h2>
          <p className="text-white/90">
            {getCriticaContent(criticaSeleccionada)}
          </p>
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
        <div className="p-4 rounded-lg bg-white/5 border border-white/20">
          <h3 className="text-lg font-semibold mb-2 text-white">Conceptos Clave</h3>
          <p className="text-white/80">
            {ideologia === 'Liberalismo' && 'El liberalismo es una filosofía política y económica que defiende la libertad individual, la propiedad privada y la limitación del poder del Estado.'}
            {ideologia === 'Marxismo' && 'El marxismo es una teoría social, económica y política que analiza el capitalismo y propone una sociedad sin clases.'}
            {ideologia === 'Socialismo' && 'El socialismo es un sistema económico y social que busca la propiedad colectiva de los medios de producción.'}
            {ideologia === 'Capitalismo' && 'El capitalismo es un sistema económico basado en la propiedad privada de los medios de producción y la libre empresa.'}
            {ideologia === 'Conservadurismo' && 'El conservadurismo es una filosofía política que busca preservar las instituciones tradicionales y los valores sociales establecidos.'}
            {ideologia === 'AnarcoCapitalismo' && 'El anarcocapitalismo es una filosofía política que propone la eliminación del Estado y la organización de la sociedad mediante el mercado libre.'}
            {ideologia === 'Mercantilismo' && 'El mercantilismo es una teoría económica que promueve la intervención gubernamental en la economía para aumentar el poder nacional.'}
            {ideologia === 'Keynesianismo' && 'El keynesianismo es una teoría económica que aboga por la intervención del Estado en la economía para mantener el pleno empleo.'}
          </p>
        </div>
      </TabsContent>
      <TabsContent value="ideas" className="mt-4">
        <div className="p-4 rounded-lg bg-white/5 border border-white/20">
          <h3 className="text-lg font-semibold mb-2 text-white">Ideas Principales</h3>
          <p className="text-white/80">
            {ideologia === 'Liberalismo' && 'La libertad individual, el libre mercado, la propiedad privada y el Estado limitado son los pilares del liberalismo.'}
            {ideologia === 'Marxismo' && 'La lucha de clases, la plusvalía, la dictadura del proletariado y la abolición de la propiedad privada son conceptos centrales.'}
            {ideologia === 'Socialismo' && 'La igualdad social, la propiedad colectiva, la planificación económica y la justicia distributiva son principios fundamentales.'}
            {ideologia === 'Capitalismo' && 'El libre mercado, la competencia, la iniciativa privada y la acumulación de capital son elementos esenciales.'}
            {ideologia === 'Conservadurismo' && 'La tradición, el orden social, la autoridad y los valores morales tradicionales son valores centrales.'}
            {ideologia === 'AnarcoCapitalismo' && 'La libertad absoluta, la propiedad privada, el mercado libre y la eliminación del Estado son principios fundamentales.'}
            {ideologia === 'Mercantilismo' && 'El proteccionismo, la balanza comercial favorable, la acumulación de metales preciosos y el poder estatal son elementos clave.'}
            {ideologia === 'Keynesianismo' && 'La intervención estatal, el gasto público, la política fiscal y el pleno empleo son conceptos centrales.'}
          </p>
        </div>
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
