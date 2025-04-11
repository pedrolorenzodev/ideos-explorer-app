
import BottomNavigation from '@/components/BottomNavigation';
import FloatingButtons from '@/components/FloatingButtons';
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { useState } from 'react';

const VersusPage = () => {
  const [ideologia1, setIdeologia1] = useState('');
  const [ideologia2, setIdeologia2] = useState('');
  const [tema, setTema] = useState('');
  
  const ideologias = [
    'Liberalismo',
    'Marxismo',
    'Socialismo',
    'Capitalismo',
    'Conservadurismo',
    'AnarcoCapitalismo',
    'Mercantilismo',
    'Keynesianismo'
  ];
  
  const temas = [
    'Propiedad privada',
    'Rol del Estado',
    'Libertad individual',
    'Economía',
    'Desigualdad',
    'Educación',
    'Justicia'
  ];
  
  return (
    <div className="pb-20 animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-1">Versus de Ideas</h1>
          <p className="text-gray-600">Compara diferentes ideologías y sus posturas sobre un tema</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <p className="mb-2 font-medium">Primera ideología</p>
            <Select onValueChange={setIdeologia1} value={ideologia1}>
              <SelectTrigger>
                <SelectValue placeholder="Selecciona una ideología" />
              </SelectTrigger>
              <SelectContent>
                {ideologias.map((ideologia) => (
                  <SelectItem key={ideologia} value={ideologia}>
                    {ideologia}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <p className="mb-2 font-medium">Segunda ideología</p>
            <Select onValueChange={setIdeologia2} value={ideologia2}>
              <SelectTrigger>
                <SelectValue placeholder="Selecciona una ideología" />
              </SelectTrigger>
              <SelectContent>
                {ideologias.map((ideologia) => (
                  <SelectItem key={ideologia} value={ideologia}>
                    {ideologia}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="mb-8">
          <p className="mb-2 font-medium">Tema a comparar</p>
          <Select onValueChange={setTema} value={tema}>
            <SelectTrigger>
              <SelectValue placeholder="Selecciona un tema" />
            </SelectTrigger>
            <SelectContent>
              {temas.map((tema) => (
                <SelectItem key={tema} value={tema}>
                  {tema}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        {ideologia1 && ideologia2 && tema && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-5">
              <h3 className="text-xl font-medium mb-3">{ideologia1}</h3>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Postura de {ideologia1} sobre {tema.toLowerCase()}.
                </p>
                <p className="text-sm text-gray-500">
                  * Este es un espacio para mostrar la postura de la primera ideología seleccionada.
                </p>
              </div>
            </Card>
            
            <Card className="p-5">
              <h3 className="text-xl font-medium mb-3">{ideologia2}</h3>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Postura de {ideologia2} sobre {tema.toLowerCase()}.
                </p>
                <p className="text-sm text-gray-500">
                  * Este es un espacio para mostrar la postura de la segunda ideología seleccionada.
                </p>
              </div>
            </Card>
          </div>
        )}
      </div>
      
      <FloatingButtons />
      <BottomNavigation />
    </div>
  );
};

export default VersusPage;
