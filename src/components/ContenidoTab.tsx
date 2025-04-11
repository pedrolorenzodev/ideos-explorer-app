
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TestInteractivo from "./TestInteractivo";
import GrandesReferentes from "./GrandesReferentes";

interface ContenidoTabProps {
  ideologia: string;
  perspectiva: string;
}

const ContenidoTab = ({ ideologia, perspectiva }: ContenidoTabProps) => {
  return (
    <Tabs defaultValue="conceptos" className="w-full">
      <TabsList className="grid grid-cols-5 mb-6">
        <TabsTrigger value="conceptos">Conceptos Clave</TabsTrigger>
        <TabsTrigger value="ideas">Ideas Principales</TabsTrigger>
        <TabsTrigger value="criticas">Críticas</TabsTrigger>
        <TabsTrigger value="test">¿Cuánto aprendiste?</TabsTrigger>
        <TabsTrigger value="referentes">Grandes Referentes</TabsTrigger>
      </TabsList>
      
      <TabsContent value="conceptos" className="animate-fade-in">
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="text-lg font-medium mb-3">Conceptos Clave de {ideologia}</h3>
          <p className="text-gray-700">
            Aquí se mostrarán los conceptos fundamentales de {ideologia} desde la perspectiva {perspectiva.toLowerCase()}.
          </p>
          <ul className="mt-3 space-y-2 list-disc pl-5">
            <li>Concepto fundamental 1</li>
            <li>Concepto fundamental 2</li>
            <li>Concepto fundamental 3</li>
          </ul>
        </div>
      </TabsContent>
      
      <TabsContent value="ideas" className="animate-fade-in">
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="text-lg font-medium mb-3">Ideas Principales de {ideologia}</h3>
          <p className="text-gray-700">
            Aquí se mostrarán las ideas principales de {ideologia} desde la perspectiva {perspectiva.toLowerCase()}.
          </p>
        </div>
      </TabsContent>
      
      <TabsContent value="criticas" className="animate-fade-in">
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="text-lg font-medium mb-3">Críticas a {ideologia}</h3>
          <p className="text-gray-700">
            Aquí se mostrarán las críticas principales a {ideologia} desde la perspectiva {perspectiva.toLowerCase()}.
          </p>
        </div>
      </TabsContent>
      
      <TabsContent value="test" className="animate-fade-in">
        <TestInteractivo ideologia={ideologia} />
      </TabsContent>
      
      <TabsContent value="referentes" className="animate-fade-in">
        <GrandesReferentes ideologia={ideologia} />
      </TabsContent>
    </Tabs>
  );
};

export default ContenidoTab;
