import BottomNavigation from '@/components/BottomNavigation';
import FloatingButtons from '@/components/FloatingButtons';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Swords } from 'lucide-react';
import { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';

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

  // Representantes por ideología con imágenes
  const representantes = {
    Liberalismo: [
      { nombre: 'Adam Smith' },
      { nombre: 'John Locke' },
      { nombre: 'Friedrich Hayek' },
      { nombre: 'Milton Friedman' },
    ],
    Marxismo: [
      { nombre: 'Karl Marx' },
      { nombre: 'Friedrich Engels' },
      { nombre: 'Vladimir Lenin' },
      { nombre: 'Rosa Luxemburgo' },
    ],
    Socialismo: [
      { nombre: 'Jean Jaurès' },
      { nombre: 'Eugene V. Debs' },
      { nombre: 'Eduard Bernstein' },
      { nombre: 'George Orwell' },
    ],
    Capitalismo: [
      { nombre: 'Milton Friedman' },
      { nombre: 'Ayn Rand' },
      { nombre: 'Ludwig von Mises' },
      { nombre: 'Joseph Schumpeter' },
    ],
    Conservadurismo: [
      { nombre: 'Edmund Burke' },
      { nombre: 'Russell Kirk' },
      { nombre: 'Roger Scruton' },
      { nombre: 'Margaret Thatcher' },
    ],
    AnarcoCapitalismo: [
      { nombre: 'Murray Rothbard' },
      { nombre: 'David Friedman' },
      { nombre: 'Hans-Hermann Hoppe' },
      { nombre: 'Lysander Spooner' },
    ],
    Mercantilismo: [
      { nombre: 'Jean-Baptiste Colbert' },
      { nombre: 'Thomas Mun' },
      { nombre: 'Jean Bodin' },
      { nombre: 'Antoine de Montchrestien' },
    ],
    Keynesianismo: [
      { nombre: 'John Maynard Keynes' },
      { nombre: 'Paul Krugman' },
      { nombre: 'Joseph Stiglitz' },
      { nombre: 'John Kenneth Galbraith' },
    ],
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

  // Obtener datos del representante seleccionado
  const getRepresentanteData = (ideologia: string, nombre: string) => {
    if (!ideologia || !nombre) return null;
    return representantes[ideologia as keyof typeof representantes]?.find(
      (rep) => rep.nombre === nombre
    );
  };

  const representante1Data = getRepresentanteData(ideologia1, representante1);
  const representante2Data = getRepresentanteData(ideologia2, representante2);

  // Reset representante cuando cambia la ideología
  const handleIdeologia1Change = (value: string) => {
    setIdeologia1(value);
    setRepresentante1('');
  };

  const handleIdeologia2Change = (value: string) => {
    setIdeologia2(value);
    setRepresentante2('');
  };
  
  // Get background color based on ideology
  const getIdeologyBackgroundColor = (ideology: string): string => {
    const colors: Record<string, string> = {
      'Liberalismo': 'bg-gradient-to-b from-yellow-500 to-yellow-400', // Dorado
      'Marxismo': 'bg-gradient-to-b from-red-700 to-red-600', // Rojo metálico
      'Socialismo': 'bg-gradient-to-b from-red-400 to-pink-400', // Rojo rosado
      'Capitalismo': 'bg-gradient-to-b from-green-600 to-green-500', // Verde dólar
      'Conservadurismo': 'bg-gray-300', // Gris claro
      'AnarcoCapitalismo': 'bg-gradient-to-b from-yellow-400 to-black', // Mitad amarillo, mitad negro
      'Mercantilismo': 'bg-gradient-to-b from-yellow-500 to-gray-400', // Mitad dorado, mitad plateado
      'Keynesianismo': 'bg-gradient-to-b from-blue-300 to-blue-400', // Celeste azulado
    };
    
    return colors[ideology] || 'bg-gray-100';
  };
  
  return (
    <div className="min-h-screen pb-20 animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-2">
            <Swords className="mr-2 text-white" size={24} />
            <h1 className="text-2xl font-bold text-white">Batallas de Ideas</h1>
          </div>
          <p className="text-white/80">Compara diferentes ideologías y sus posturas sobre un tema</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-4">
            <p className="mb-2 font-medium text-white">Primera ideología</p>
            <Select onValueChange={handleIdeologia1Change} value={ideologia1}>
              <SelectTrigger className="transition-all border-white/20 bg-white/10 backdrop-blur-sm duration-200 hover:border-white/40 text-white">
                <SelectValue placeholder="Selecciona una ideología" />
              </SelectTrigger>
              <SelectContent className="bg-[#1a1a1a] border-white/20">
                {ideologias.map((ideologia) => (
                  <SelectItem key={ideologia} value={ideologia} className="cursor-pointer text-white hover:bg-white/10">
                    {ideologia}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            {ideologia1 && (
              <>
                <p className="mb-2 font-medium text-white">Representante</p>
                <div className={`p-4 rounded-lg ${getIdeologyBackgroundColor(ideologia1)} animate-fade-in`}>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {representantes[ideologia1 as keyof typeof representantes]?.map((representante) => (
                      <div 
                        key={representante.nombre}
                        className={`flex flex-col items-center p-3 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 ${
                          representante.nombre === representante1 
                            ? 'bg-white/30 shadow-lg ring-2 ring-white/50' 
                            : 'bg-white/10 hover:bg-white/20'
                        }`}
                        onClick={() => setRepresentante1(representante.nombre)}
                      >
                        <div className="w-16 h-16 rounded-full bg-white/10 mb-2 border-2 border-white/50 flex items-center justify-center">
                          <PersonIcon className="w-12 h-12 text-white/80" />
                        </div>
                        <span className="text-sm text-center font-medium text-white">{representante.nombre}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
          
          <div className="space-y-4">
            <p className="mb-2 font-medium text-white">Segunda ideología</p>
            <Select onValueChange={handleIdeologia2Change} value={ideologia2}>
              <SelectTrigger className="transition-all border-white/20 bg-white/10 backdrop-blur-sm duration-200 hover:border-white/40 text-white">
                <SelectValue placeholder="Selecciona una ideología" />
              </SelectTrigger>
              <SelectContent className="bg-[#1a1a1a] border-white/20">
                {ideologias.map((ideologia) => (
                  <SelectItem key={ideologia} value={ideologia} className="cursor-pointer text-white hover:bg-white/10">
                    {ideologia}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            {ideologia2 && (
              <>
                <p className="mb-2 font-medium text-white">Representante</p>
                <div className={`p-4 rounded-lg ${getIdeologyBackgroundColor(ideologia2)} animate-fade-in`}>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {representantes[ideologia2 as keyof typeof representantes]?.map((representante) => (
                      <div 
                        key={representante.nombre}
                        className={`flex flex-col items-center p-3 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 ${
                          representante.nombre === representante2 
                            ? 'bg-white/30 shadow-lg ring-2 ring-white/50' 
                            : 'bg-white/10 hover:bg-white/20'
                        }`}
                        onClick={() => setRepresentante2(representante.nombre)}
                      >
                        <div className="w-16 h-16 rounded-full bg-white/10 mb-2 border-2 border-white/50 flex items-center justify-center">
                          <PersonIcon className="w-12 h-12 text-white/80" />
                        </div>
                        <span className="text-sm text-center font-medium text-white">{representante.nombre}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        
        {ideologia1 && ideologia2 && representante1 && representante2 && (
          <div className="mb-8">
            <p className="mb-2 font-medium text-white">Tema a comparar</p>
            <Select onValueChange={setTema} value={tema}>
              <SelectTrigger className="transition-all border-white/20 bg-white/10 backdrop-blur-sm duration-200 hover:border-white/40 text-white">
                <SelectValue placeholder="Selecciona un tema" />
              </SelectTrigger>
              <SelectContent className="bg-[#1a1a1a] border-white/20">
                {temas.map((tema) => (
                  <SelectItem key={tema} value={tema} className="cursor-pointer text-white hover:bg-white/10">
                    {tema}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
        
        {ideologia1 && ideologia2 && representante1 && representante2 && tema && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`p-5 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg hover:scale-[1.01] ${getIdeologyBackgroundColor(ideologia1)}`}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-white/10 mr-3 border-2 border-white/50 flex items-center justify-center">
                  <PersonIcon className="w-10 h-10 text-white/80" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-1 text-white">{ideologia1}</h3>
                  <p className="text-sm text-white/80">Desde la perspectiva de {representante1}</p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-white/90">
                  Postura de {representante1} sobre {tema.toLowerCase()} según los principios del {ideologia1}.
                </p>
                <p className="text-sm text-white/70">
                  * Este contenido representa el pensamiento de {representante1} sobre este tema.
                </p>
              </div>
            </div>
            
            <div className={`p-5 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg hover:scale-[1.01] ${getIdeologyBackgroundColor(ideologia2)}`}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-white/10 mr-3 border-2 border-white/50 flex items-center justify-center">
                  <PersonIcon className="w-10 h-10 text-white/80" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-1 text-white">{ideologia2}</h3>
                  <p className="text-sm text-white/80">Desde la perspectiva de {representante2}</p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-white/90">
                  Postura de {representante2} sobre {tema.toLowerCase()} según los principios del {ideologia2}.
                </p>
                <p className="text-sm text-white/70">
                  * Este contenido representa el pensamiento de {representante2} sobre este tema.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <FloatingButtons />
      <BottomNavigation />
    </div>
  );
};

export default VersusPage;
