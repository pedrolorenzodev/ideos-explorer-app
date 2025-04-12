import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TestInteractivo from "./TestInteractivo";
import GrandesReferentes from "./GrandesReferentes";

interface ContenidoTabProps {
  ideologia: string;
}

const ContenidoTab = ({ ideologia }: ContenidoTabProps) => {
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
        <div className="p-4 rounded-lg bg-white/5 border border-white/20">
          <h3 className="text-lg font-semibold mb-2 text-white">Críticas Principales</h3>
          <p className="text-white/80">
            {ideologia === 'Liberalismo' && 'Se critica por aumentar la desigualdad económica y priorizar el beneficio individual sobre el bien común.'}
            {ideologia === 'Marxismo' && 'Se critica por su visión determinista de la historia y por los regímenes autoritarios que se han inspirado en él.'}
            {ideologia === 'Socialismo' && 'Se critica por la ineficiencia económica y la falta de incentivos individuales en sistemas de planificación central.'}
            {ideologia === 'Capitalismo' && 'Se critica por generar desigualdades sociales y por priorizar el crecimiento económico sobre la sostenibilidad.'}
            {ideologia === 'Conservadurismo' && 'Se critica por resistirse al cambio social y por mantener estructuras de poder tradicionales.'}
            {ideologia === 'AnarcoCapitalismo' && 'Se critica por su utopismo y por la posibilidad de que derive en formas de opresión privada.'}
            {ideologia === 'Mercantilismo' && 'Se critica por promover el proteccionismo y por su visión de suma cero en el comercio internacional.'}
            {ideologia === 'Keynesianismo' && 'Se critica por el endeudamiento público y por la posibilidad de generar inflación.'}
          </p>
        </div>
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
