import BottomNavigation from '@/components/BottomNavigation';
import FloatingButtons from '@/components/FloatingButtons';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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

  // Representantes por ideología con imágenes
  const representantes = {
    Liberalismo: [
      { nombre: 'Adam Smith', imagen: 'https://images.unsplash.com/photo-1576500164142-0d80697ca67f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWRhbSUyMHNtaXRofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
      { nombre: 'John Locke', imagen: 'https://images.unsplash.com/photo-1541779408-c1f2192db618?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhpbG9zb3BoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' },
      { nombre: 'Friedrich Hayek', imagen: 'https://images.unsplash.com/photo-1569179482293-79dc48a5ee4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhpbG9zb3BoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' },
      { nombre: 'Milton Friedman', imagen: 'https://images.unsplash.com/photo-1568607689150-15a8a36c1096?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhpbG9zb3BoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' },
    ],
    Marxismo: [
      { nombre: 'Karl Marx', imagen: 'https://images.unsplash.com/photo-1578321279758-d61a19b8efcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGhpbG9zb3BoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' }, 
      { nombre: 'Friedrich Engels', imagen: 'https://images.unsplash.com/photo-1529599095404-bd6e0baa932f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGhpbG9zb3BoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' },
      { nombre: 'Vladimir Lenin', imagen: 'https://images.unsplash.com/photo-1600685714281-6c39138d1c48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhpbG9zb3BoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' },
      { nombre: 'Rosa Luxemburgo', imagen: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGhpbG9zb3BoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' },
    ],
    Socialismo: [
      { nombre: 'Jean Jaurès', imagen: 'https://images.unsplash.com/photo-1542992015-4a0b729b4cf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGhpbG9zb3BoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' },
      { nombre: 'Eugene V. Debs', imagen: 'https://images.unsplash.com/photo-1528143358888-6d3c7f67bd5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBoaWxvc29waGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
      { nombre: 'Eduard Bernstein', imagen: 'https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBoaWxvc29waGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
      { nombre: 'George Orwell', imagen: 'https://images.unsplash.com/photo-1590073844006-33659c7c9c180?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBoaWxvc29waGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
    ],
    Capitalismo: [
      { nombre: 'Milton Friedman', imagen: 'https://images.unsplash.com/photo-1568607689150-15a8a36c1096?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhpbG9zb3BoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' },
      { nombre: 'Ayn Rand', imagen: 'https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBoaWxvc29waGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
      { nombre: 'Ludwig von Mises', imagen: 'https://images.unsplash.com/photo-1517842264405-637007353224?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBoaWxvc29waGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
      { nombre: 'Joseph Schumpeter', imagen: 'https://images.unsplash.com/photo-1617209503124-c3fa43bbb366?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBoaWxvc29waGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
    ],
    Conservadurismo: [
      { nombre: 'Edmund Burke', imagen: 'https://images.unsplash.com/photo-1509011457661-797c3a0b238a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBoaWxvc29waGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
      { nombre: 'Russell Kirk', imagen: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBoaWxvc29waGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
      { nombre: 'Roger Scruton', imagen: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBoaWxvc29waGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
      { nombre: 'Margaret Thatcher', imagen: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBoaWxvc29waGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
    ],
    AnarcoCapitalismo: [
      { nombre: 'Murray Rothbard', imagen: 'https://images.unsplash.com/photo-1439778615639-28529f7628bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHBoaWxvc29waGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
      { nombre: 'David Friedman', imagen: 'https://images.unsplash.com/photo-1548372290-8b01db56211d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHBoaWxvc29waGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
      { nombre: 'Hans-Hermann Hoppe', imagen: 'https://images.unsplash.com/photo-1492562083143-e81e7a2c9349?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBoaWxvc29waGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
      { nombre: 'Lysander Spooner', imagen: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHBoaWxvc29waGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
    ],
    Mercantilismo: [
      { nombre: 'Jean-Baptiste Colbert', imagen: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHBoaWxvc29waGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
      { nombre: 'Thomas Mun', imagen: 'https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBoaWxvc29waGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
      { nombre: 'Jean Bodin', imagen: 'https://images.unsplash.com/photo-1590086782957-93c06ef21604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBoaWxvc29waGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
      { nombre: 'Antoine de Montchrestien', imagen: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHBoaWxvc29waGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
    ],
    Keynesianismo: [
      { nombre: 'John Maynard Keynes', imagen: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHBoaWxvc29waGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
      { nombre: 'Paul Krugman', imagen: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHBoaWxvc29waGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
      { nombre: 'Joseph Stiglitz', imagen: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHBoaWxvc29waGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
      { nombre: 'John Kenneth Galbraith', imagen: 'https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHBoaWxvc29waGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
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
    <div className="min-h-screen bg-orange-300 pb-20 animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-2">
            <Swords className="mr-2" size={24} />
            <h1 className="text-2xl font-bold">Batallas de Ideas</h1>
          </div>
          <p className="text-gray-700">Compara diferentes ideologías y sus posturas sobre un tema</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-4">
            <p className="mb-2 font-medium">Primera ideología</p>
            <Select onValueChange={handleIdeologia1Change} value={ideologia1}>
              <SelectTrigger className="transition-all border-transparent bg-white/70 backdrop-blur-sm duration-200 hover:border-gray-400">
                <SelectValue placeholder="Selecciona una ideología" />
              </SelectTrigger>
              <SelectContent>
                {ideologias.map((ideologia) => (
                  <SelectItem key={ideologia} value={ideologia} className="cursor-pointer">
                    {ideologia}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            {ideologia1 && (
              <>
                <p className="mb-2 font-medium">Representante</p>
                <Select onValueChange={setRepresentante1} value={representante1}>
                  <SelectTrigger className="transition-all border-transparent bg-white/70 backdrop-blur-sm duration-200 hover:border-gray-400">
                    <SelectValue placeholder="Selecciona un representante" />
                  </SelectTrigger>
                  <SelectContent>
                    {representantes[ideologia1 as keyof typeof representantes]?.map((representante) => (
                      <SelectItem key={representante.nombre} value={representante.nombre} className="cursor-pointer">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
                            <img 
                              src={representante.imagen} 
                              alt={representante.nombre}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span>{representante.nombre}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                {representante1 && (
                  <div className={`p-4 rounded-lg ${getIdeologyBackgroundColor(ideologia1)}`}>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {representantes[ideologia1 as keyof typeof representantes]?.map((representante) => (
                        <div 
                          key={representante.nombre}
                          className={`flex flex-col items-center p-2 rounded-lg cursor-pointer transition-all duration-200 hover:scale-105 ${
                            representante.nombre === representante1 ? 'bg-white/30 shadow-md' : 'bg-white/10'
                          }`}
                          onClick={() => setRepresentante1(representante.nombre)}
                        >
                          <Avatar className="h-12 w-12 mb-2">
                            <AvatarImage src={representante.imagen} alt={representante.nombre} />
                            <AvatarFallback>{representante.nombre.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span className="text-xs text-center font-medium">{representante.nombre}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
          
          <div className="space-y-4">
            <p className="mb-2 font-medium">Segunda ideología</p>
            <Select onValueChange={handleIdeologia2Change} value={ideologia2}>
              <SelectTrigger className="transition-all border-transparent bg-white/70 backdrop-blur-sm duration-200 hover:border-gray-400">
                <SelectValue placeholder="Selecciona una ideología" />
              </SelectTrigger>
              <SelectContent>
                {ideologias.map((ideologia) => (
                  <SelectItem key={ideologia} value={ideologia} className="cursor-pointer">
                    {ideologia}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            {ideologia2 && (
              <>
                <p className="mb-2 font-medium">Representante</p>
                <Select onValueChange={setRepresentante2} value={representante2}>
                  <SelectTrigger className="transition-all border-transparent bg-white/70 backdrop-blur-sm duration-200 hover:border-gray-400">
                    <SelectValue placeholder="Selecciona un representante" />
                  </SelectTrigger>
                  <SelectContent>
                    {representantes[ideologia2 as keyof typeof representantes]?.map((representante) => (
                      <SelectItem key={representante.nombre} value={representante.nombre} className="cursor-pointer">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
                            <img 
                              src={representante.imagen} 
                              alt={representante.nombre}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span>{representante.nombre}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                {representante2 && (
                  <div className={`p-4 rounded-lg ${getIdeologyBackgroundColor(ideologia2)}`}>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {representantes[ideologia2 as keyof typeof representantes]?.map((representante) => (
                        <div 
                          key={representante.nombre}
                          className={`flex flex-col items-center p-2 rounded-lg cursor-pointer transition-all duration-200 hover:scale-105 ${
                            representante.nombre === representante2 ? 'bg-white/30 shadow-md' : 'bg-white/10'
                          }`}
                          onClick={() => setRepresentante2(representante.nombre)}
                        >
                          <Avatar className="h-12 w-12 mb-2">
                            <AvatarImage src={representante.imagen} alt={representante.nombre} />
                            <AvatarFallback>{representante.nombre.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span className="text-xs text-center font-medium">{representante.nombre}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
        
        {ideologia1 && ideologia2 && representante1 && representante2 && (
          <div className="mb-8">
            <p className="mb-2 font-medium">Tema a comparar</p>
            <Select onValueChange={setTema} value={tema}>
              <SelectTrigger className="transition-all border-transparent bg-white/70 backdrop-blur-sm duration-200 hover:border-gray-400">
                <SelectValue placeholder="Selecciona un tema" />
              </SelectTrigger>
              <SelectContent>
                {temas.map((tema) => (
                  <SelectItem key={tema} value={tema} className="cursor-pointer">
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
                <Avatar className="h-12 w-12 mr-3 border-2 border-white/50">
                  <AvatarImage src={representante1Data?.imagen} alt={representante1} />
                  <AvatarFallback>{representante1.charAt(0)}</AvatarFallback>
                </Avatar>
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
                <Avatar className="h-12 w-12 mr-3 border-2 border-white/50">
                  <AvatarImage src={representante2Data?.imagen} alt={representante2} />
                  <AvatarFallback>{representante2.charAt(0)}</AvatarFallback>
                </Avatar>
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
