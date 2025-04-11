
import BottomNavigation from '@/components/BottomNavigation';
import FloatingButtons from '@/components/FloatingButtons';
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Swords } from 'lucide-react';
import { useState } from 'react';

const VersusPage = () => {
  const [ideologia1, setIdeologia1] = useState('');
  const [ideologia2, setIdeologia2] = useState('');
  const [representante1, setRepresentante1] = useState('');
  const [representante2, setRepresentante2] = useState('');
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

  // Representantes por ideología
  const representantes = {
    Liberalismo: ['Adam Smith', 'John Locke', 'Friedrich Hayek', 'Milton Friedman'],
    Marxismo: ['Karl Marx', 'Friedrich Engels', 'Vladimir Lenin', 'Rosa Luxemburgo'],
    Socialismo: ['Jean Jaurès', 'Eugene V. Debs', 'Eduard Bernstein', 'George Orwell'],
    Capitalismo: ['Milton Friedman', 'Ayn Rand', 'Ludwig von Mises', 'Joseph Schumpeter'],
    Conservadurismo: ['Edmund Burke', 'Russell Kirk', 'Roger Scruton', 'Margaret Thatcher'],
    AnarcoCapitalismo: ['Murray Rothbard', 'David Friedman', 'Hans-Hermann Hoppe', 'Lysander Spooner'],
    Mercantilismo: ['Jean-Baptiste Colbert', 'Thomas Mun', 'Jean Bodin', 'Antoine de Montchrestien'],
    Keynesianismo: ['John Maynard Keynes', 'Paul Krugman', 'Joseph Stiglitz', 'John Kenneth Galbraith']
  };
  
  const temas = [
    'Propiedad privada',
    'Rol del Estado',
    'Libertad individual',
    'Economía',
    'Desigualdad',
    'Educación',
    'Justicia'
  ];

  // Reset representante cuando cambia la ideología
  const handleIdeologia1Change = (value: string) => {
    setIdeologia1(value);
    setRepresentante1('');
  };

  const handleIdeologia2Change = (value: string) => {
    setIdeologia2(value);
    setRepresentante2('');
  };
  
  return (
    <div className="pb-20 animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-2">
            <Swords className="mr-2" size={24} />
            <h1 className="text-2xl font-bold">Batallas de Ideas</h1>
          </div>
          <p className="text-gray-600">Compara diferentes ideologías y sus posturas sobre un tema</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-4">
            <div>
              <p className="mb-2 font-medium">Primera ideología</p>
              <Select onValueChange={handleIdeologia1Change} value={ideologia1}>
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
            
            {ideologia1 && (
              <div>
                <p className="mb-2 font-medium">Representante</p>
                <Select onValueChange={setRepresentante1} value={representante1}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona un representante" />
                  </SelectTrigger>
                  <SelectContent>
                    {representantes[ideologia1 as keyof typeof representantes]?.map((representante) => (
                      <SelectItem key={representante} value={representante}>
                        {representante}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>
          
          <div className="space-y-4">
            <div>
              <p className="mb-2 font-medium">Segunda ideología</p>
              <Select onValueChange={handleIdeologia2Change} value={ideologia2}>
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
            
            {ideologia2 && (
              <div>
                <p className="mb-2 font-medium">Representante</p>
                <Select onValueChange={setRepresentante2} value={representante2}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona un representante" />
                  </SelectTrigger>
                  <SelectContent>
                    {representantes[ideologia2 as keyof typeof representantes]?.map((representante) => (
                      <SelectItem key={representante} value={representante}>
                        {representante}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
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
        
        {ideologia1 && ideologia2 && representante1 && representante2 && tema && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-5">
              <h3 className="text-xl font-medium mb-1">{ideologia1}</h3>
              <p className="text-sm text-gray-500 mb-3">Desde la perspectiva de {representante1}</p>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Postura de {representante1} sobre {tema.toLowerCase()} según los principios del {ideologia1}.
                </p>
                <p className="text-sm text-gray-500">
                  * Este contenido representa el pensamiento de {representante1} sobre este tema.
                </p>
              </div>
            </Card>
            
            <Card className="p-5">
              <h3 className="text-xl font-medium mb-1">{ideologia2}</h3>
              <p className="text-sm text-gray-500 mb-3">Desde la perspectiva de {representante2}</p>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Postura de {representante2} sobre {tema.toLowerCase()} según los principios del {ideologia2}.
                </p>
                <p className="text-sm text-gray-500">
                  * Este contenido representa el pensamiento de {representante2} sobre este tema.
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
