import FloatingButtons from '@/components/FloatingButtons';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Swords } from 'lucide-react';
import { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import { ideologiaColores } from '@/data/colores';
import representantLeft from '../../assets/Representant-Left.png';
import representantRight from '../../assets/Representant-Right.png';

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
      { nombre: 'Juan Ramón Rallo' },
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
      { nombre: 'Javier Gerardo Milei' },
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
  
  // Get background color based on ideology using the ideologiaColores object
  const getIdeologyBackground = (ideology: string): string => {
    const color = ideologiaColores[ideology as keyof typeof ideologiaColores] || '';
    // Convert vertical gradient to horizontal gradient
    return color.replace('linear-gradient(180deg', 'linear-gradient(90deg');
  };
  
  return (
    <div className="min-h-screen pb-20 animate-fade-in relative flex">
      {/* Contenedor izquierdo */}
      <div className="w-[430px] h-screen flex flex-col items-center relative">
        <div className="absolute top-[120px] flex flex-col gap-3 z-10 justify-center items-center">
          <div className="flex justify-center">
            <Select onValueChange={handleIdeologia1Change} value={ideologia1}>
              <SelectTrigger className={`transition-all duration-300 ease-in-out transform hover:scale-105 border border-[#d4d4d4]/26 bg-gradient-to-r from-[#D9D9D9]/7 to-[#737373]/7 backdrop-blur-sm hover:border-[#d4d4d4]/40 text-[#d4d4d4] flex items-center justify-center px-[30px] ${ideologia1 ? 'w-[140px] animate-pulse-once' : 'w-[280px]'}`} style={ideologia1 ? { background: getIdeologyBackground(ideologia1), width: 'fit-content', transition: 'all 0.3s ease-in-out' } : undefined}>
                {ideologia1 || "Selecciona una ideología"}
              </SelectTrigger>
              <SelectContent className="bg-[#1a1a1a] border-white/20">
                {ideologias.map((ideologia) => (
                  <SelectItem key={ideologia} value={ideologia} className="cursor-pointer text-white hover:bg-white/10">
                    {ideologia}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex justify-center items-center">
            <Select 
              onValueChange={setRepresentante1} 
              value={representante1}
              disabled={!ideologia1}
            >
              <SelectTrigger className={`${ideologia1 ? 'transition-all duration-300 ease-in-out transform hover:scale-105' : ''} border border-[#d4d4d4]/26 bg-gradient-to-r from-[#D9D9D9]/7 to-[#737373]/7 backdrop-blur-sm hover:border-[#d4d4d4]/40 text-[#d4d4d4] flex items-center justify-center ${ideologia1 ? 'h-[50px] px-[30px]' : 'h-[35px] px-[10px] text-[9px] font-light'}`} style={{background: (ideologia1 && representante1) ? getIdeologyBackground(ideologia1) : undefined, width: 'fit-content', transition: ideologia1 ? 'all 0.3s ease-in-out' : 'none' }}>
                {representante1 || "Selecciona un representante"}
              </SelectTrigger>
              <SelectContent className="bg-[#1a1a1a] border-white/20">
                {ideologia1 && representantes[ideologia1 as keyof typeof representantes]?.map((representante) => (
                  <SelectItem key={representante.nombre} value={representante.nombre} className="cursor-pointer text-white hover:bg-white/10">
                    {representante.nombre}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* Imagen representante izquierdo */}
        <div className="absolute bottom-[-4rem] right-[0.7rem] w-[450px] h-auto">
          <img 
            src={representantLeft}
            alt="Representante Izquierdo"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Contenedor central */}
      <div className="flex-1 h-screen flex flex-col items-center relative">
        {/* Título y subtítulo centrados */}
        <div className="text-center mt-8 mb-8">
          <div className="flex items-center justify-center mb-2">
            <Swords className="mr-2 text-white" size={24} />
            <h1 className="text-2xl font-bold text-white">Batallas de Ideas</h1>
          </div>
          <p className="text-white/80">Figuras Históricas, Discusiones Actuales. Tú eliges el tema.</p>
        </div>

        {/* Chat container */}
        <div className="absolute bottom-16 inset-x-0 bg-[#1A1A1A] min-h-[550px] rounded-t-[32px] shadow-[0px_-4px_24px_rgba(0,0,0,0.25)] flex flex-col">
          <div className="flex-1 p-6 flex items-center justify-center">
            {ideologia1 && ideologia2 && representante1 && representante2 && (
              <div className="mb-6 w-full">
                <Select onValueChange={setTema} value={tema}>
                  <SelectTrigger className="w-full transition-all border-[#d4d4d4]/26 bg-gradient-to-r from-[#D9D9D9]/7 to-[#737373]/7 backdrop-blur-sm duration-250 hover:border-[#d4d4d4]/40 text-[#d4d4d4]">
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
            
            {ideologia1 && ideologia2 && representante1 && representante2 && tema ? (
              <div className="flex-1 flex flex-col justify-between w-full">
                <div className="space-y-4">
                  <div className="p-4 rounded-lg" style={{ background: getIdeologyBackground(ideologia1) }}>
                    <p className="text-[#B6B6B6]/90" style={{ textShadow: 'rgba(0, 0, 0, 0.5) 0px 2px 4px' }}>
                      Postura de {representante1} sobre {tema.toLowerCase()} según los principios del {ideologia1}.
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-lg" style={{ background: getIdeologyBackground(ideologia2) }}>
                    <p className="text-[#B6B6B6]/90" style={{ textShadow: 'rgba(0, 0, 0, 0.5) 0px 2px 4px' }}>
                      Postura de {representante2} sobre {tema.toLowerCase()} según los principios del {ideologia2}.
                    </p>
                  </div>
                </div>
                
                <div className="mt-4 text-xs text-[#B6B6B6]/70 text-center" style={{ textShadow: 'rgba(0, 0, 0, 0.5) 0px 2px 4px' }}>
                  * Este contenido representa el pensamiento de los representantes sobre este tema.
                </div>
              </div>
            ) : (
              <div className="text-[#B6B6B6]/60 text-center" style={{ textShadow: 'rgba(0, 0, 0, 0.5) 0px 2px 4px' }}>
                {!ideologia1 || !ideologia2 
                  ? "Selecciona dos ideologías para comenzar" 
                  : !representante1 || !representante2 
                    ? "Selecciona representantes para cada ideología" 
                    : "Selecciona un tema para comparar las posturas"}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Contenedor derecho */}
      <div className="w-[430px] h-screen flex flex-col items-center relative">
        <div className="absolute top-[120px] flex flex-col gap-3 z-10 justify-center items-center">
          <div className={`flex ${ideologia2 ? 'justify-center' : ''}`}>
            <Select onValueChange={handleIdeologia2Change} value={ideologia2}>
              <SelectTrigger className={`transition-all duration-300 ease-in-out transform hover:scale-105 border border-[#d4d4d4]/26 bg-gradient-to-r from-[#D9D9D9]/7 to-[#737373]/7 backdrop-blur-sm hover:border-[#d4d4d4]/40 text-[#d4d4d4] flex items-center justify-center px-[30px] ${ideologia2 ? 'w-[140px] animate-pulse-once' : 'w-[280px]'}`} style={ideologia2 ? { background: getIdeologyBackground(ideologia2), width: 'fit-content', transition: 'all 0.3s ease-in-out' } : undefined}>
                {ideologia2 || "Selecciona una ideología"}
              </SelectTrigger>
              <SelectContent className="bg-[#1a1a1a] border-white/20">
                {ideologias.map((ideologia) => (
                  <SelectItem key={ideologia} value={ideologia} className="cursor-pointer text-white hover:bg-white/10">
                    {ideologia}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex justify-center items-center">
            <Select 
              onValueChange={setRepresentante2} 
              value={representante2}
              disabled={!ideologia2}
            >
              <SelectTrigger className={`${ideologia2 ? 'transition-all duration-300 ease-in-out transform hover:scale-105' : ''} border border-[#d4d4d4]/26 bg-gradient-to-r from-[#D9D9D9]/7 to-[#737373]/7 backdrop-blur-sm hover:border-[#d4d4d4]/40 text-[#d4d4d4] flex items-center justify-center ${ideologia2 ? 'h-[50px] px-[30px]' : 'h-[35px] px-[10px] text-[9px] font-light'}`} style={{background: (ideologia2 && representante2) ? getIdeologyBackground(ideologia2) : undefined, width: 'fit-content', transition: ideologia2 ? 'all 0.3s ease-in-out' : 'none' }}>
                {representante2 || "Selecciona un representante"}
              </SelectTrigger>
              <SelectContent className="bg-[#1a1a1a] border-white/20">
                {ideologia2 && representantes[ideologia2 as keyof typeof representantes]?.map((representante) => (
                  <SelectItem key={representante.nombre} value={representante.nombre} className="cursor-pointer text-white hover:bg-white/10">
                    {representante.nombre}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* Imagen representante derecho */}
        <div className="absolute bottom-[-2.9rem] left-[3.3rem] w-[445px] h-auto">
          <img 
            src={representantRight}
            alt="Representante Derecho"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      <FloatingButtons />
    </div>
  );
};

export default VersusPage;
