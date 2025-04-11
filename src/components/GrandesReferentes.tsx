
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { BookOpen, Quote, Video, FileText, Headphones } from 'lucide-react';

interface GrandesReferentesProps {
  ideologia: string;
}

interface Autor {
  id: string;
  nombre: string;
  icono: string;
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
  
  // Datos para el liberalismo
  const autores: { [key: string]: Autor[] } = {
    'Liberalismo': [
      {
        id: 'adam-smith',
        nombre: 'Adam Smith',
        icono: '👨‍🏫',
        biografia: 'Filósofo y economista escocés del siglo XVIII. Considerado el padre de la economía moderna y del liberalismo económico. Su obra más importante estableció las bases del capitalismo de libre mercado.',
        libros: [
          {
            titulo: 'La Riqueza de las Naciones',
            portada: '/placeholder.svg',
            descripcion: 'Publicada en 1776, esta obra analiza la economía de mercado y establece las bases del liberalismo económico y el capitalismo moderno.'
          },
          {
            titulo: 'Teoría de los Sentimientos Morales',
            portada: '/placeholder.svg',
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
        icono: '🧠',
        biografia: 'Filósofo y médico inglés del siglo XVII, considerado el padre del liberalismo clásico. Sus ideas sobre la libertad, el derecho natural y el contrato social influenciaron las revoluciones liberales y constituciones modernas.',
        libros: [
          {
            titulo: 'Segundo Tratado sobre el Gobierno Civil',
            portada: '/placeholder.svg',
            descripcion: 'Publicado en 1689, establece la teoría del contrato social y los derechos naturales.'
          },
          {
            titulo: 'Ensayo sobre el Entendimiento Humano',
            portada: '/placeholder.svg',
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
        icono: '📚',
        biografia: 'Filósofo, economista y político británico del siglo XIX. Defensor del utilitarismo, la libertad individual y los derechos de las mujeres. Sus obras ampliaron el liberalismo clásico incorporando aspectos sociales.',
        libros: [
          {
            titulo: 'Sobre la Libertad',
            portada: '/placeholder.svg',
            descripcion: 'Ensayo de 1859 que defiende la libertad civil y política del individuo frente a la autoridad.'
          },
          {
            titulo: 'El Utilitarismo',
            portada: '/placeholder.svg',
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
          <TabsList className="grid grid-cols-3 w-full mb-6">
            {autoresIdeologia.map(autor => (
              <TabsTrigger 
                key={autor.id} 
                value={autor.id}
                onClick={() => setAutorSeleccionado(autor.id)}
                className={autorSeleccionado === autor.id ? `bg-ideologia-${ideologia.toLowerCase()} bg-opacity-10` : ''}
              >
                <span className="mr-2">{autor.icono}</span>
                {autor.nombre}
              </TabsTrigger>
            ))}
          </TabsList>
        </CardContent>
      </Card>
      
      {autorActual && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>
                <span className="text-4xl mr-3">{autorActual.icono}</span>
                <span className={`text-ideologia-${ideologia.toLowerCase()}`}>{autorActual.nombre}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{autorActual.biografia}</p>
            </CardContent>
          </Card>
          
          <Tabs defaultValue="libros" className="w-full">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="libros">
                <BookOpen className="h-4 w-4 mr-2" />
                Libros
              </TabsTrigger>
              <TabsTrigger value="frases">
                <Quote className="h-4 w-4 mr-2" />
                Frases célebres
              </TabsTrigger>
              <TabsTrigger value="recursos">
                <Video className="h-4 w-4 mr-2" />
                Recursos
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="libros">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {autorActual.libros.map((libro, index) => (
                  <Card key={index}>
                    <div className="flex p-4">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-24 h-36 bg-gray-200 rounded flex items-center justify-center">
                          <BookOpen className="h-10 w-10 text-gray-400" />
                        </div>
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
                      <Card className="h-64 flex items-center">
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
                <CarouselPrevious className="left-1" />
                <CarouselNext className="right-1" />
              </Carousel>
            </TabsContent>
            
            <TabsContent value="recursos">
              <div className="space-y-4">
                {autorActual.recursos.map((recurso, index) => (
                  <Card key={index}>
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
                          className={`text-sm text-ideologia-${ideologia.toLowerCase()} mt-2 inline-block hover:underline`}
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
