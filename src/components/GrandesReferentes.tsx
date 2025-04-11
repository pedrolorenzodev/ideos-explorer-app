
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BookOpen, Quote, Video, FileText, Headphones, ChevronLeft, ChevronRight } from 'lucide-react';

interface GrandesReferentesProps {
  ideologia: string;
}

interface Autor {
  id: string;
  nombre: string;
  imagen: string;
  biografia: string;
  libros: Array<{
    titulo: string;
    portada: string;
    descripcion: string;
  }>;
  frases: Array<{
    texto: string;
    contexto?: string;
  }>;
  recursos: Array<{
    tipo: 'video' | 'articulo' | 'podcast';
    titulo: string;
    url: string;
    descripcion?: string;
  }>;
}

const GrandesReferentes = ({ ideologia }: GrandesReferentesProps) => {
  const [autorSeleccionado, setAutorSeleccionado] = useState<string | null>(null);
  
  // Datos para las ideologías con imágenes reales
  const autores: { [key: string]: Autor[] } = {
    'Liberalismo': [
      {
        id: 'adam-smith',
        nombre: 'Adam Smith',
        imagen: 'https://images.unsplash.com/photo-1576500164142-0d80697ca67f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWRhbSUyMHNtaXRofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        biografia: 'Filósofo y economista escocés del siglo XVIII. Considerado el padre de la economía moderna y del liberalismo económico. Su obra más importante estableció las bases del capitalismo de libre mercado.',
        libros: [
          {
            titulo: 'La Riqueza de las Naciones',
            portada: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            descripcion: 'Publicada en 1776, esta obra analiza la economía de mercado y establece las bases del liberalismo económico y el capitalismo moderno.'
          },
          {
            titulo: 'Teoría de los Sentimientos Morales',
            portada: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            descripcion: 'Publicada en 1759, explora cómo la moral y el auto-interés pueden coexistir en la sociedad.'
          }
        ],
        frases: [
          {
            texto: 'No es de la benevolencia del carnicero, del cervecero o del panadero de donde esperamos nuestra comida, sino de sus miras al interés propio.',
            contexto: 'La Riqueza de las Naciones (1776)'
          },
          {
            texto: 'El gran secreto para conseguir la felicidad no consiste en disfrutar, ni en sufrir, sino en hacer.',
            contexto: 'Teoría de los Sentimientos Morales (1759)'
          },
          {
            texto: 'Los hombres civilizados han alcanzado el convencimiento de que sus intereses están relacionados con la prosperidad de la sociedad y con el mantenimiento del orden.',
            contexto: 'La Riqueza de las Naciones (1776)'
          }
        ],
        recursos: [
          {
            tipo: 'video',
            titulo: 'Adam Smith en 10 minutos',
            url: '#',
            descripcion: 'Una introducción concisa a las ideas principales de Adam Smith.'
          },
          {
            tipo: 'articulo',
            titulo: 'La mano invisible explicada',
            url: '#',
            descripcion: 'Análisis del concepto más famoso de Adam Smith.'
          },
          {
            tipo: 'podcast',
            titulo: 'El legado de Adam Smith',
            url: '#',
            descripcion: 'Conversación sobre la influencia de Smith en la economía moderna.'
          }
        ]
      },
      {
        id: 'john-locke',
        nombre: 'John Locke',
        imagen: 'https://images.unsplash.com/photo-1541779408-c1f2192db618?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhpbG9zb3BoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        biografia: 'Filósofo y médico inglés del siglo XVII, considerado el padre del liberalismo clásico. Sus ideas sobre la libertad, el derecho natural y el contrato social influenciaron las revoluciones liberales y constituciones modernas.',
        libros: [
          {
            titulo: 'Segundo Tratado sobre el Gobierno Civil',
            portada: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            descripcion: 'Publicado en 1689, establece la teoría del contrato social y los derechos naturales.'
          },
          {
            titulo: 'Ensayo sobre el Entendimiento Humano',
            portada: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            descripcion: 'Obra de 1690 que estudia el origen y alcance del conocimiento humano.'
          }
        ],
        frases: [
          {
            texto: 'Todo hombre tiene la propiedad de su propia persona. Nadie tiene derecho alguno a ella, excepto él mismo.',
            contexto: 'Segundo Tratado sobre el Gobierno Civil (1689)'
          },
          {
            texto: 'La mente en todos los casos es como un papel en blanco, vacío de caracteres, sin ideas.',
            contexto: 'Ensayo sobre el Entendimiento Humano (1690)'
          }
        ],
        recursos: [
          {
            tipo: 'video',
            titulo: 'John Locke y los derechos naturales',
            url: '#',
            descripcion: 'Explicación de la teoría política de Locke y su impacto.'
          },
          {
            tipo: 'articulo',
            titulo: 'La separación de poderes según Locke',
            url: '#',
            descripcion: 'Análisis de sus ideas sobre la organización del Estado.'
          }
        ]
      },
      {
        id: 'john-stuart-mill',
        nombre: 'John Stuart Mill',
        imagen: 'https://images.unsplash.com/photo-1569179482293-79dc48a5ee4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhpbG9zb3BoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        biografia: 'Filósofo, economista y político británico del siglo XIX. Defensor del utilitarismo, la libertad individual y los derechos de las mujeres. Sus obras ampliaron el liberalismo clásico incorporando aspectos sociales.',
        libros: [
          {
            titulo: 'Sobre la Libertad',
            portada: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            descripcion: 'Ensayo de 1859 que defiende la libertad civil y política del individuo frente a la autoridad.'
          },
          {
            titulo: 'El Utilitarismo',
            portada: 'https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            descripcion: 'Obra de 1863 que desarrolla la teoría ética utilitarista.'
          }
        ],
        frases: [
          {
            texto: 'Sobre sí mismo, sobre su propio cuerpo y mente, el individuo es soberano.',
            contexto: 'Sobre la Libertad (1859)'
          },
          {
            texto: 'Es mejor ser un ser humano insatisfecho que un cerdo satisfecho; mejor ser Sócrates insatisfecho que un necio satisfecho.',
            contexto: 'El Utilitarismo (1863)'
          }
        ],
        recursos: [
          {
            tipo: 'podcast',
            titulo: 'Mill y la libertad de expresión',
            url: '#',
            descripcion: 'Análisis de sus argumentos sobre la libertad de expresión y su relevancia actual.'
          },
          {
            tipo: 'articulo',
            titulo: 'El feminismo de John Stuart Mill',
            url: '#',
            descripcion: 'Exploración de sus ideas sobre la igualdad de género.'
          }
        ]
      }
    ],
    // Se pueden agregar más ideologías con sus respectivos autores
  };
  
  // Usar la ideología correspondiente o por defecto la primera
  const autoresIdeologia = autores[ideologia] || autores.Liberalismo;
  
  // Si no hay un autor seleccionado, seleccionar el primero por defecto
  if (autoresIdeologia.length > 0 && !autorSeleccionado) {
    setAutorSeleccionado(autoresIdeologia[0].id);
  }
  
  const autorActual = autoresIdeologia.find(autor => autor.id === autorSeleccionado);
  
  if (!autoresIdeologia.length) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Información no disponible</CardTitle>
        </CardHeader>
        <CardContent>
          No hay información de referentes para esta ideología en este momento.
        </CardContent>
      </Card>
    );
  }
  
  return (
    <div className="space-y-6 animate-fade-in">
      <Card>
        <CardHeader>
          <CardTitle className={`text-ideologia-${ideologia.toLowerCase()}`}>
            Grandes Referentes del {ideologia}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex overflow-x-auto pb-4 gap-4 md:grid md:grid-cols-3 md:overflow-x-visible">
            {autoresIdeologia.map(autor => (
              <div 
                key={autor.id}
                onClick={() => setAutorSeleccionado(autor.id)}
                className={`cursor-pointer min-w-[200px] flex-shrink-0 rounded-lg p-4 transition-all duration-200 
                  ${autorSeleccionado === autor.id 
                    ? `bg-ideologia-${ideologia.toLowerCase()} bg-opacity-10 border border-ideologia-${ideologia.toLowerCase()}`
                    : 'bg-white hover:bg-gray-50'}`}
              >
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12 border image-hover">
                    <AvatarImage src={autor.imagen} alt={autor.nombre} />
                    <AvatarFallback>{autor.nombre.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{autor.nombre}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      {autorActual && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar className="w-16 h-16 border-2 border-gray-200">
                  <AvatarImage src={autorActual.imagen} alt={autorActual.nombre} />
                  <AvatarFallback>{autorActual.nombre.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className={`text-ideologia-${ideologia.toLowerCase()}`}>
                    {autorActual.nombre}
                  </CardTitle>
                  <p className="text-gray-600 mt-1">{autorActual.biografia}</p>
                </div>
              </div>
            </CardHeader>
          </Card>
          
          <Tabs defaultValue="libros" className="w-full">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="libros" className="transition-all duration-200">
                <BookOpen className="h-4 w-4 mr-2" />
                Libros
              </TabsTrigger>
              <TabsTrigger value="frases" className="transition-all duration-200">
                <Quote className="h-4 w-4 mr-2" />
                Frases célebres
              </TabsTrigger>
              <TabsTrigger value="recursos" className="transition-all duration-200">
                <Video className="h-4 w-4 mr-2" />
                Recursos
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="libros">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {autorActual.libros.map((libro, index) => (
                  <Card key={index} className="card-hover">
                    <div className="flex p-4">
                      <div className="flex-shrink-0 mr-4 image-hover rounded overflow-hidden">
                        <img 
                          src={libro.portada} 
                          alt={libro.titulo} 
                          className="w-24 h-36 object-cover"
                        />
                      </div>
                      <div>
                        <h4 className={`font-bold text-ideologia-${ideologia.toLowerCase()}`}>{libro.titulo}</h4>
                        <p className="text-sm text-gray-600 mt-1">{libro.descripcion}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="frases">
              <Carousel className="w-full">
                <CarouselContent>
                  {autorActual.frases.map((frase, index) => (
                    <CarouselItem key={index}>
                      <Card className="h-64 flex items-center card-hover">
                        <CardContent className="p-6 text-center flex flex-col justify-center h-full">
                          <Quote className={`h-8 w-8 mx-auto mb-4 text-ideologia-${ideologia.toLowerCase()}`} />
                          <p className="text-lg font-medium italic mb-4">"{frase.texto}"</p>
                          {frase.contexto && (
                            <p className="text-sm text-gray-500">{frase.contexto}</p>
                          )}
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center gap-2 mt-4">
                  <CarouselPrevious className="static transform-none mx-1" />
                  <CarouselNext className="static transform-none mx-1" />
                </div>
              </Carousel>
            </TabsContent>
            
            <TabsContent value="recursos">
              <div className="space-y-4">
                {autorActual.recursos.map((recurso, index) => (
                  <Card key={index} className="card-hover">
                    <div className="p-4 flex items-start">
                      <div className="mr-4 mt-1">
                        {recurso.tipo === 'video' && <Video className={`h-6 w-6 text-ideologia-${ideologia.toLowerCase()}`} />}
                        {recurso.tipo === 'articulo' && <FileText className={`h-6 w-6 text-ideologia-${ideologia.toLowerCase()}`} />}
                        {recurso.tipo === 'podcast' && <Headphones className={`h-6 w-6 text-ideologia-${ideologia.toLowerCase()}`} />}
                      </div>
                      <div>
                        <h4 className="font-medium">{recurso.titulo}</h4>
                        {recurso.descripcion && (
                          <p className="text-sm text-gray-600 mt-1">{recurso.descripcion}</p>
                        )}
                        <a 
                          href={recurso.url} 
                          className={`text-sm text-ideologia-${ideologia.toLowerCase()} mt-2 inline-block hover:underline transition-all duration-200`}
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Ver {
                            recurso.tipo === 'video' ? 'video' : 
                            recurso.tipo === 'articulo' ? 'artículo' : 'podcast'
                          }
                        </a>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      )}
    </div>
  );
};

export default GrandesReferentes;
