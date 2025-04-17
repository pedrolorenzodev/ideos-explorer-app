import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BookOpen, Quote, Video, FileText, Headphones, ChevronLeft, ChevronRight } from 'lucide-react';
import PersonIcon from '@mui/icons-material/Person';
import VideoPlayer from '@/components/VideoPlayer';

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
  const [videosVisibles, setVideosVisibles] = useState<{ [key: number]: boolean }>({});
  const [videosCargados, setVideosCargados] = useState<{ [key: number]: boolean }>({});
  const [tabActivo, setTabActivo] = useState<string>('libros');
  
  // Datos para las ideologías con imágenes reales
  const autores: { [key: string]: Autor[] } = {
    'Marxismo': [
      {
        id: 'karl-marx',
        nombre: 'Karl Marx',
        imagen: 'https://images.unsplash.com/photo-1576500164142-0d80697ca67f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWRhbSUyMHNtaXRofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        biografia: 'Principal fundador del marxismo, autor de El Capital y El Manifiesto Comunista. Desarrolló la teoría de la lucha de clases y la plusvalía.',
        libros: [
          {
            titulo: 'El Capital',
            portada: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            descripcion: 'Obra fundamental que analiza el funcionamiento del capitalismo y la explotación del trabajo asalariado.'
          },
          {
            titulo: 'El Manifiesto Comunista',
            portada: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            descripcion: 'Publicado en 1848 junto a Friedrich Engels, expone los principios del comunismo y la lucha de clases.'
          }
        ],
        frases: [
          {
            texto: 'Los filósofos no han hecho más que interpretar de diversos modos el mundo, pero de lo que se trata es de transformarlo.',
            contexto: 'Tesis sobre Feuerbach (1845)'
          },
          {
            texto: 'La historia de todas las sociedades hasta nuestros días es la historia de la lucha de clases.',
            contexto: 'El Manifiesto Comunista (1848)'
          }
        ],
        recursos: [
          {
            tipo: 'video',
            titulo: 'Karl Marx en 10 minutos',
            url: '#',
            descripcion: 'Una introducción concisa a las ideas principales de Karl Marx.'
          },
          {
            tipo: 'articulo',
            titulo: 'La teoría de la plusvalía explicada',
            url: '#',
            descripcion: 'Análisis del concepto central de la teoría económica de Marx.'
          }
        ]
      },
      {
        id: 'friedrich-engels',
        nombre: 'Friedrich Engels',
        imagen: 'https://images.unsplash.com/photo-1541779408-c1f2192db618?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhpbG9zb3BoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        biografia: 'Colaborador clave de Marx, coautor del Manifiesto Comunista. Contribuyó significativamente al desarrollo de la teoría marxista.',
        libros: [
          {
            titulo: 'El Manifiesto Comunista',
            portada: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            descripcion: 'Publicado en 1848 junto a Karl Marx, expone los principios del comunismo y la lucha de clases.'
          },
          {
            titulo: 'La situación de la clase obrera en Inglaterra',
            portada: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            descripcion: 'Obra de 1845 que analiza las condiciones de vida de los trabajadores durante la Revolución Industrial.'
          }
        ],
        frases: [
          {
            texto: 'La libertad es el reconocimiento de la necesidad.',
            contexto: 'Anti-Dühring (1878)'
          },
          {
            texto: 'El Estado no es abolido, se extingue.',
            contexto: 'Del socialismo utópico al socialismo científico (1880)'
          }
        ],
        recursos: [
          {
            tipo: 'video',
            titulo: 'Friedrich Engels y su contribución al marxismo',
            url: '#',
            descripcion: 'Análisis de la obra y pensamiento de Engels.'
          },
          {
            tipo: 'articulo',
            titulo: 'La colaboración entre Marx y Engels',
            url: '#',
            descripcion: 'Exploración de la relación intelectual entre ambos pensadores.'
          }
        ]
      },
      {
        id: 'vladimir-lenin',
        nombre: 'Vladimir Lenin',
        imagen: 'https://images.unsplash.com/photo-1569179482293-79dc48a5ee4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhpbG9zb3BoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        biografia: 'Adaptó el marxismo al contexto ruso, desarrollando el marxismo-leninismo. Líder de la Revolución de Octubre y fundador de la Unión Soviética.',
        libros: [
          {
            titulo: 'El Estado y la Revolución',
            portada: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            descripcion: 'Obra de 1917 que analiza el papel del Estado en la transición al socialismo.'
          },
          {
            titulo: '¿Qué hacer?',
            portada: 'https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            descripcion: 'Publicado en 1902, expone la teoría de la organización revolucionaria.'
          }
        ],
        frases: [
          {
            texto: 'La libertad es un valor precioso, tan precioso que debe ser racionado.',
            contexto: 'Sobre la libertad de prensa'
          },
          {
            texto: 'La revolución no es un invitado que espera a que se le abra la puerta.',
            contexto: 'Cartas desde lejos (1917)'
          }
        ],
        recursos: [
          {
            tipo: 'podcast',
            titulo: 'Lenin y la Revolución de Octubre',
            url: '#',
            descripcion: 'Análisis de la contribución de Lenin a la teoría marxista.'
          },
          {
            tipo: 'articulo',
            titulo: 'El leninismo hoy',
            url: '#',
            descripcion: 'Reflexión sobre la relevancia actual del pensamiento de Lenin.'
          }
        ]
      }
    ],
    'Socialismo': [
      {
        id: 'eduard-bernstein',
        nombre: 'Eduard Bernstein',
        imagen: 'https://images.unsplash.com/photo-1576500164142-0d80697ca67f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWRhbSUyMHNtaXRofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        biografia: 'Fundador del socialismo democrático; propuso una revisión del marxismo. Defendió la vía parlamentaria hacia el socialismo.',
        libros: [
          {
            titulo: 'Las premisas del socialismo',
            portada: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            descripcion: 'Publicada en 1899, esta obra establece las bases del revisionismo marxista y el socialismo democrático.'
          }
        ],
        frases: [
          {
            texto: 'El movimiento lo es todo, el objetivo final nada.',
            contexto: 'Las premisas del socialismo (1899)'
          }
        ],
        recursos: [
          {
            tipo: 'video',
            titulo: 'Bernstein y el socialismo democrático',
            url: '#',
            descripcion: 'Introducción al pensamiento de Eduard Bernstein.'
          }
        ]
      },
      {
        id: 'rosa-luxemburgo',
        nombre: 'Rosa Luxemburgo',
        imagen: 'https://images.unsplash.com/photo-1541779408-c1f2192db618?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhpbG9zb3BoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        biografia: 'Defensora del socialismo revolucionario y crítica del reformismo. Teórica marxista y activista política.',
        libros: [
          {
            titulo: 'Reforma o Revolución',
            portada: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            descripcion: 'Publicado en 1900, critica las posiciones reformistas dentro del movimiento socialista.'
          }
        ],
        frases: [
          {
            texto: 'La libertad es siempre la libertad de quien piensa diferente.',
            contexto: 'La revolución rusa (1918)'
          }
        ],
        recursos: [
          {
            tipo: 'articulo',
            titulo: 'El legado de Rosa Luxemburgo',
            url: '#',
            descripcion: 'Análisis de su contribución al pensamiento socialista.'
          }
        ]
      },
      {
        id: 'salvador-allende',
        nombre: 'Salvador Allende',
        imagen: 'https://images.unsplash.com/photo-1569179482293-79dc48a5ee4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhpbG9zb3BoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        biografia: 'Referente político del socialismo democrático en América Latina. Presidente de Chile entre 1970 y 1973.',
        libros: [
          {
            titulo: 'La vía chilena al socialismo',
            portada: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            descripcion: 'Recopilación de discursos y escritos sobre su proyecto político.'
          }
        ],
        frases: [
          {
            texto: 'Sigan ustedes sabiendo que, mucho más temprano que tarde, de nuevo se abrirán las grandes alamedas por donde pase el hombre libre para construir una sociedad mejor.',
            contexto: 'Último discurso (11 de septiembre de 1973)'
          }
        ],
        recursos: [
          {
            tipo: 'video',
            titulo: 'Allende y la vía chilena al socialismo',
            url: '#',
            descripcion: 'Documental sobre su proyecto político y su legado.'
          }
        ]
      }
    ],
    'Capitalismo': [
      {
        id: 'adam-smith',
        nombre: 'Adam Smith',
        imagen: 'https://images.unsplash.com/photo-1576500164142-0d80697ca67f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWRhbSUyMHNtaXRofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        biografia: 'Padre del capitalismo moderno, autor de La riqueza de las naciones. Estableció las bases del liberalismo económico.',
        libros: [
          {
            titulo: 'La Riqueza de las Naciones',
            portada: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            descripcion: 'Publicada en 1776, esta obra analiza la economía de mercado y establece las bases del capitalismo moderno.'
          }
        ],
        frases: [
          {
            texto: 'No es de la benevolencia del carnicero, del cervecero o del panadero de donde esperamos nuestra comida, sino de sus miras al interés propio.',
            contexto: 'La Riqueza de las Naciones (1776)'
          }
        ],
        recursos: [
          {
            tipo: 'video',
            titulo: 'La mano invisible explicada',
            url: 'https://www.youtube.com/watch?v=80OW2F59iEQ',
            descripcion: 'Análisis del concepto más famoso de Adam Smith.'
          },
          {
            tipo: 'video',
            titulo: 'El legado de Adam Smith',
            url: 'https://www.youtube.com/watch?v=nvx4gona9ZY',
            descripcion: 'Conversación sobre la influencia de Smith en la economía moderna.'
          }
        ]
      },
      {
        id: 'milton-friedman',
        nombre: 'Milton Friedman',
        imagen: 'https://images.unsplash.com/photo-1541779408-c1f2192db618?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhpbG9zb3BoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        biografia: 'Defensor del libre mercado, Nobel de Economía. Figura central de la Escuela de Chicago y el monetarismo.',
        libros: [
          {
            titulo: 'Capitalismo y Libertad',
            portada: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            descripcion: 'Publicado en 1962, defiende la relación entre libertad económica y libertad política.'
          }
        ],
        frases: [
          {
            texto: 'La inflación es siempre y en todas partes un fenómeno monetario.',
            contexto: 'A Monetary History of the United States (1963)'
          }
        ],
        recursos: [
          {
            tipo: 'video',
            titulo: 'Libertad para elegir - Capítulo 1: El poder del mercado',
            url: 'https://youtu.be/sSA-dd_Biek?si=9Ok4pKnZZdWDvlZ2',
            descripcion: 'Primer capítulo de la serie documental "Libertad para elegir" de Milton Friedman.'
          },
          {
            tipo: 'video',
            titulo: 'Libertad para elegir - Capítulo 2: El tirano en casa',
            url: 'https://www.youtube.com/watch?v=gt0hQ2qCS4U&list=PLphYT2X99fYajlOnkRY2Fom-m-oz_OTaz&index=2',
            descripcion: 'Segundo capítulo de la serie documental "Libertad para elegir" de Milton Friedman.'
          },
          {
            tipo: 'video',
            titulo: 'Milton Friedman sobre la división del trabajo',
            url: 'https://www.youtube.com/watch?v=MLOx07hJRio',
            descripcion: 'Milton Friedman explicando la importancia de la división del trabajo y su papel fundamental en la economía de mercado.'
          }
        ]
      },
      {
        id: 'friedrich-hayek',
        nombre: 'Friedrich Hayek',
        imagen: 'https://images.unsplash.com/photo-1569179482293-79dc48a5ee4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhpbG9zb3BoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        biografia: 'Crítico del intervencionismo estatal, autor de Camino de servidumbre. Nobel de Economía y defensor del liberalismo clásico.',
        libros: [
          {
            titulo: 'Camino de servidumbre',
            portada: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            descripcion: 'Publicado en 1944, advierte sobre los peligros del colectivismo y la planificación centralizada.'
          }
        ],
        frases: [
          {
            texto: 'El sistema de precios es el mecanismo más eficiente para transmitir información.',
            contexto: 'El uso del conocimiento en la sociedad (1945)'
          }
        ],
        recursos: [
          {
            tipo: 'articulo',
            titulo: 'Hayek y la crítica al socialismo',
            url: 'https://mises.org/es/friday-philosophy/el-argumento-politico-de-hayek-contra-el-socialismo',
            descripcion: 'Análisis de sus argumentos contra la planificación centralizada.'
          }
        ]
      }
    ],
    'Conservadurismo': [
      {
        id: 'edmund-burke',
        nombre: 'Edmund Burke',
        imagen: 'https://images.unsplash.com/photo-1576500164142-0d80697ca67f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWRhbSUyMHNtaXRofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        biografia: 'Padre del conservadurismo moderno, crítico de la Revolución Francesa. Defensor de la tradición y las instituciones establecidas.',
        libros: [
          {
            titulo: 'Reflexiones sobre la Revolución en Francia',
            portada: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            descripcion: 'Publicado en 1790, critica los excesos de la Revolución Francesa y defiende la tradición.'
          }
        ],
        frases: [
          {
            texto: 'La sociedad es un contrato entre los vivos, los muertos y los que están por nacer.',
            contexto: 'Reflexiones sobre la Revolución en Francia (1790)'
          }
        ],
        recursos: [
          {
            tipo: 'articulo',
            titulo: 'Burke: la base del conservadurismo',
            url: 'https://www.nuevatribuna.es/articulo/cultura---ocio/burke-base-conservadurismo/20240714150545228881.html',
            descripcion: 'Análisis del pensamiento conservador de Edmund Burke y su influencia en la política occidental.'
          }
        ]
      },
      {
        id: 'russell-kirk',
        nombre: 'Russell Kirk',
        imagen: 'https://images.unsplash.com/photo-1541779408-c1f2192db618?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhpbG9zb3BoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        biografia: 'Intelectual clave del conservadurismo norteamericano del siglo XX. Defensor de la tradición y los valores morales.',
        libros: [
          {
            titulo: 'La mente conservadora',
            portada: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            descripcion: 'Publicado en 1953, establece los principios fundamentales del conservadurismo moderno.'
          }
        ],
        frases: [
          {
            texto: 'El conservador aprende a vivir con el misterio y la incertidumbre.',
            contexto: 'La mente conservadora (1953)'
          }
        ],
        recursos: [
          {
            tipo: 'articulo',
            titulo: '¿Qué es el conservadurismo?',
            url: 'https://mises.org/es/mises-wire/que-es-el-conservadurismo',
            descripcion: 'Análisis histórico y filosófico del movimiento conservador y su evolución.'
          }
        ]
      },
      {
        id: 'roger-scruton',
        nombre: 'Roger Scruton',
        imagen: 'https://images.unsplash.com/photo-1569179482293-79dc48a5ee4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhpbG9zb3BoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        biografia: 'Filósofo británico contemporáneo, defensor del pensamiento conservador. Crítico del relativismo y el multiculturalismo.',
        libros: [
          {
            titulo: 'Cómo ser conservador',
            portada: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            descripcion: 'Publicado en 2014, expone los principios del conservadurismo para el siglo XXI.'
          }
        ],
        frases: [
          {
            texto: 'La belleza es una necesidad, no un lujo.',
            contexto: 'Beauty: A Very Short Introduction (2009)'
          }
        ],
        recursos: [
          {
            tipo: 'video',
            titulo: 'Roger Scruton: Por qué la belleza importa',
            url: '#',
            descripcion: 'Documental sobre su visión de la belleza y la cultura.'
          }
        ]
      }
    ],
    'AnarcoCapitalismo': [
      {
        id: 'murray-rothbard',
        nombre: 'Murray Rothbard',
        imagen: 'https://images.unsplash.com/photo-1576500164142-0d80697ca67f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWRhbSUyMHNtaXRofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        biografia: 'Fundador del anarcocapitalismo moderno. Teórico libertario que defendió la eliminación del Estado y la organización social mediante el mercado libre.',
        libros: [
          {
            titulo: 'La Ética de la Libertad',
            portada: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            descripcion: 'Publicado en 1982, establece los fundamentos éticos del anarcocapitalismo.'
          }
        ],
        frases: [
          {
            texto: 'El Estado es la organización de la banda de ladrones más grande de la historia.',
            contexto: 'La Ética de la Libertad (1982)'
          }
        ],
        recursos: [
          {
            tipo: 'video',
            titulo: 'Murray Rothbard y el anarcocapitalismo',
            url: 'https://www.youtube.com/watch?v=Hoj6SZ8GFtM',
            descripcion: 'Introducción a su pensamiento político y económico.'
          }
        ]
      },
      {
        id: 'david-friedman',
        nombre: 'David Friedman',
        imagen: 'https://images.unsplash.com/photo-1569179482293-79dc48a5ee4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhpbG9zb3BoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        biografia: 'Hijo de Milton Friedman, defensor de un anarcocapitalismo pragmático. Economista y teórico político libertario.',
        libros: [
          {
            titulo: 'La maquinaria de la libertad',
            portada: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            descripcion: 'Publicado en 1973, presenta argumentos prácticos para una sociedad sin Estado.'
          }
        ],
        frases: [
          {
            texto: 'El mercado es un proceso de descubrimiento.',
            contexto: 'La maquinaria de la libertad (1973)'
          }
        ],
        recursos: [
          {
            tipo: 'video',
            titulo: 'David Friedman: Anarcocapitalismo en la práctica',
            url: '#',
            descripcion: 'Conferencia sobre cómo funcionaría una sociedad anarcocapitalista.'
          },
          {
            tipo: 'video',
            titulo: 'Entrevista a David Friedman sobre Anarcocapitalismo',
            url: 'https://www.youtube.com/watch?v=Q8ewn2X5ejc',
            descripcion: 'Entrevista explicando los fundamentos y funcionamiento del anarcocapitalismo. (Ingles Subtitulada)'
          }
        ]
      },
      {
        id: 'javier-milei',
        nombre: 'Javier Gerardo Milei',
        imagen: 'https://images.unsplash.com/photo-1541779408-c1f2192db618?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhpbG9zb3BoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        biografia: 'Economista y político argentino, presidente de Argentina desde 2023. Conocido por su estilo confrontativo y su defensa del anarcocapitalismo, propone una drástica reducción del Estado y la adopción de políticas económicas de libre mercado. Ha ganado notoriedad por sus discursos apasionados y su crítica al establishment político.',
        libros: [
          {
            titulo: 'El fin de la inflación',
            portada: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            descripcion: 'Publicado en 2023, analiza las causas y soluciones de la inflación.'
          },
          {
            titulo: 'Capitalismo, socialismo y la trampa neoclásica',
            portada: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            descripcion: 'Publicado en 2024, critica las bases teóricas del socialismo y el neoclasicismo.'
          }
        ],
        frases: [
          {
            texto: 'Para mí, los impuestos son un robo.',
            contexto: 'Discurso político'
          }
        ],
        recursos: [
          {
            tipo: 'video',
            titulo: 'Conferencia: La estruendosa superioridad del capitalismo',
            url: 'https://www.youtube.com/watch?v=jEEQ4bevw1Q',
            descripcion: 'Análisis de las ventajas del sistema capitalista.'
          },
          {
            tipo: 'video',
            titulo: 'Conferencia: Crecimiento, monopolios y los valores del capitalismo',
            url: 'https://www.youtube.com/watch?v=JMbWuV6enTk',
            descripcion: 'Explicación sobre el funcionamiento del mercado y los monopolios.'
          },
          {
            tipo: 'video',
            titulo: 'Explicación: Milei explica qué es el "mercado"',
            url: 'https://www.youtube.com/watch?v=cCI9z9TbnOI',
            descripcion: 'Definición y explicación del concepto de mercado.'
          },
          {
            tipo: 'video',
            titulo: 'Análisis: Por qué la inflación es un fenómeno monetario',
            url: 'https://www.youtube.com/watch?v=sItbZoHw9Uk',
            descripcion: 'Análisis de las causas monetarias de la inflación.'
          },
          {
            tipo: 'video',
            titulo: 'Discurso: Impuestos, robo y la verdadera grieta',
            url: 'https://www.youtube.com/watch?v=MPyl-3C4VQA',
            descripcion: 'Análisis sobre la naturaleza de los impuestos y la división social.'
          }
        ]
      }
    ],
    'Mercantilismo': [
      {
        id: 'jean-baptiste-colbert',
        nombre: 'Jean-Baptiste Colbert',
        imagen: 'https://images.unsplash.com/photo-1576500164142-0d80697ca67f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWRhbSUyMHNtaXRofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        biografia: 'Ministro de Finanzas de Luis XIV, gran impulsor del mercantilismo francés. Implementó políticas proteccionistas y de fomento a la industria nacional.',
        libros: [
          {
            titulo: 'Memorias sobre el comercio',
            portada: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            descripcion: 'Recopilación de sus escritos sobre política económica y comercial.'
          }
        ],
        frases: [
          {
            texto: 'La economía es el arte de satisfacer las necesidades ilimitadas de los hombres con recursos limitados.',
            contexto: 'Memorias sobre el comercio'
          }
        ],
        recursos: [
          {
            tipo: 'video',
            titulo: 'Colbert y el mercantilismo francés',
            url: '#',
            descripcion: 'Documental sobre su política económica.'
          }
        ]
      },
      {
        id: 'thomas-mun',
        nombre: 'Thomas Mun',
        imagen: 'https://images.unsplash.com/photo-1541779408-c1f2192db618?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhpbG9zb3BoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        biografia: 'Escritor inglés que defendió el superávit comercial como fuente de riqueza. Figura clave en el desarrollo del pensamiento mercantilista.',
        libros: [
          {
            titulo: 'La riqueza de Inglaterra por el comercio exterior',
            portada: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            descripcion: 'Publicado en 1664, expone los principios del mercantilismo inglés.'
          }
        ],
        frases: [
          {
            texto: 'El comercio exterior es la riqueza del príncipe, el honor del reino, la noble profesión del comerciante.',
            contexto: 'La riqueza de Inglaterra por el comercio exterior (1664)'
          }
        ],
        recursos: [
          {
            tipo: 'articulo',
            titulo: 'Thomas Mun y el mercantilismo inglés',
            url: '#',
            descripcion: 'Análisis de su contribución al pensamiento económico.'
          }
        ]
      },
      {
        id: 'antonio-serra',
        nombre: 'Antonio Serra',
        imagen: 'https://images.unsplash.com/photo-1569179482293-79dc48a5ee4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhpbG9zb3BoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        biografia: 'Primer teórico conocido del mercantilismo italiano. Analizó las causas de la riqueza y pobreza de las naciones.',
        libros: [
          {
            titulo: 'Breve tratado sobre las causas que pueden hacer abundar el oro y la plata en los reinos que no tienen minas',
            portada: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            descripcion: 'Publicado en 1613, es considerado el primer tratado sistemático de economía política.'
          }
        ],
        frases: [
          {
            texto: 'La industria es la fuente de la riqueza.',
            contexto: 'Breve tratado sobre las causas... (1613)'
          }
        ],
        recursos: [
          {
            tipo: 'video',
            titulo: 'Antonio Serra: El primer teórico mercantilista',
            url: '#',
            descripcion: 'Introducción a su pensamiento económico.'
          }
        ]
      }
    ],
    'Keynesianismo': [
      {
        id: 'john-maynard-keynes',
        nombre: 'John Maynard Keynes',
        imagen: 'https://images.unsplash.com/photo-1576500164142-0d80697ca67f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWRhbSUyMHNtaXRofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        biografia: 'Creador del keynesianismo, autor de Teoría general del empleo, el interés y el dinero. Revolucionó la economía con sus ideas sobre la intervención estatal.',
        libros: [
          {
            titulo: 'Teoría general del empleo, el interés y el dinero',
            portada: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            descripcion: 'Publicado en 1936, establece los fundamentos de la macroeconomía moderna y la política fiscal.'
          }
        ],
        frases: [
          {
            texto: 'A largo plazo todos estaremos muertos.',
            contexto: 'A Tract on Monetary Reform (1923)'
          },
          {
            texto: 'Las ideas de los economistas y filósofos políticos, tanto cuando son correctas como cuando están equivocadas, son más poderosas de lo que comúnmente se cree.',
            contexto: 'Teoría general del empleo, el interés y el dinero (1936)'
          }
        ],
        recursos: [
          {
            tipo: 'video',
            titulo: 'Keynes vs Hayek: La batalla de las ideas',
            url: '#',
            descripcion: 'Documental sobre el debate entre keynesianismo y economía neoclásica.'
          }
        ]
      },
      {
        id: 'paul-samuelson',
        nombre: 'Paul Samuelson',
        imagen: 'https://images.unsplash.com/photo-1541779408-c1f2192db618?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhpbG9zb3BoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        biografia: 'Primer Nobel en Economía, integró ideas keynesianas en la teoría económica moderna. Autor del manual de economía más influyente del siglo XX.',
        libros: [
          {
            titulo: 'Fundamentos del análisis económico',
            portada: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            descripcion: 'Publicado en 1947, aplica métodos matemáticos al análisis económico.'
          }
        ],
        frases: [
          {
            texto: 'La economía es la ciencia que estudia cómo la sociedad decide qué, cómo y para quién producir.',
            contexto: 'Economics: An Introductory Analysis (1948)'
          }
        ],
        recursos: [
          {
            tipo: 'articulo',
            titulo: 'Samuelson y la síntesis neoclásica-keynesiana',
            url: '#',
            descripcion: 'Análisis de su contribución a la teoría económica.'
          }
        ]
      },
      {
        id: 'joan-robinson',
        nombre: 'Joan Robinson',
        imagen: 'https://images.unsplash.com/photo-1569179482293-79dc48a5ee4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhpbG9zb3BoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        biografia: 'Economista post-keynesiana que extendió y criticó partes del modelo original. Contribuyó significativamente a la teoría del capital y la competencia imperfecta.',
        libros: [
          {
            titulo: 'La acumulación de capital',
            portada: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            descripcion: 'Publicado en 1956, desarrolla una teoría alternativa a la neoclásica sobre el crecimiento económico.'
          }
        ],
        frases: [
          {
            texto: 'El propósito de estudiar economía no es adquirir un conjunto de respuestas ya hechas a preguntas económicas, sino aprender cómo evitar ser engañado por los economistas.',
            contexto: 'Contribución a la teoría moderna del empleo (1937)'
          }
        ],
        recursos: [
          {
            tipo: 'video',
            titulo: 'Joan Robinson: La crítica al capital',
            url: '#',
            descripcion: 'Análisis de su contribución a la teoría económica post-keynesiana.'
          }
        ]
      }
    ],
    // Se mantiene el Liberalismo existente
    'Liberalismo': [
      {
        id: 'juan-ramon-rallo',
        nombre: 'Juan Ramón Rallo',
        imagen: 'https://images.unsplash.com/photo-1576500164142-0d80697ca67f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWRhbSUyMHNtaXRofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        biografia: 'Economista español, doctor en Economía y licenciado en Derecho. Profesor en diversas universidades, es conocido por su defensa del liberalismo clásico y su crítica al intervencionismo estatal. Ha participado activamente en debates públicos y es autor de numerosos libros y artículos sobre economía y política.',
        libros: [
          {
            titulo: 'Liberalismo: los diez principios básicos del orden político liberal',
            portada: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            descripcion: 'Publicado en 2019, expone los fundamentos del liberalismo político.'
          },
          {
            titulo: 'Anti-Marx: Crítica a la economía política marxista',
            portada: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            descripcion: 'Publicado en 2022, analiza y critica las bases teóricas del marxismo.'
          }
        ],
        frases: [
          {
            texto: 'No existe ninguna entidad social por cuyo bien merezca sacrificarse. Sólo existen personas individuales, con sus propias vidas individuales.',
            contexto: 'Goodreads'
          }
        ],
        recursos: [
          {
            tipo: 'video',
            titulo: 'Debate: ¿El liberalismo solo beneficia a los ricos?',
            url: 'https://www.youtube.com/watch?v=C5nhyVxtsSw',
            descripcion: 'Debate sobre los beneficios del liberalismo para toda la sociedad.'
          },
          {
            tipo: 'video',
            titulo: 'Debate: Liberalismo vs Comunismo',
            url: 'https://www.youtube.com/watch?v=7qDNJUfdd50',
            descripcion: 'Análisis comparativo entre liberalismo y comunismo.'
          },
          {
            tipo: 'video',
            titulo: 'Conferencia: ¿Qué es el liberalismo?',
            url: 'https://www.youtube.com/watch?v=dYLRozVYu5s',
            descripcion: 'Explicación detallada de los principios del liberalismo.'
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
    ]
  };
  
  // Usar la ideología correspondiente o por defecto la primera
  const autoresIdeologia = autores[ideologia] || autores.Liberalismo;
  
  // Si no hay un autor seleccionado, seleccionar el primero por defecto
  useEffect(() => {
    if (autoresIdeologia.length > 0 && !autorSeleccionado) {
      setAutorSeleccionado(autoresIdeologia[0].id);
    }
  }, [autoresIdeologia, autorSeleccionado]);
  
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
                    ? `bg-white/10 border border-white/20` 
                    : 'bg-white/5 hover:bg-white/10'}`}
              >
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12 border border-white/20 shadow-[0_2px_6px_-1px_var(--tw-shadow-color),0_2px_4px_-2px_var(--tw-shadow-color)] shadow-black/30">
                    <AvatarImage src={autor.imagen} alt={autor.nombre} />
                    <AvatarFallback>
                      <PersonIcon style={{ fontSize: '1.5rem', color: 'white' }} />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium text-white">{autor.nombre}</h3>
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
                <Avatar className="w-16 h-16 border-2 border-white/20 shadow-[0_2px_6px_-1px_var(--tw-shadow-color),0_2px_4px_-2px_var(--tw-shadow-color)] shadow-black/40">
                  <AvatarImage src={autorActual.imagen} alt={autorActual.nombre} />
                  <AvatarFallback>
                    <PersonIcon style={{ fontSize: '2rem', color: 'white' }} />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-white">
                    {autorActual.nombre}
                  </CardTitle>
                  <p className="text-white/80 mt-1">{autorActual.biografia}</p>
                </div>
              </div>
            </CardHeader>
          </Card>
          
          <Tabs defaultValue="libros" className="w-full" onValueChange={setTabActivo}>
            <TabsList className="grid grid-cols-3 mb-6 bg-white/5 border border-white/20">
              <TabsTrigger value="libros" className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/60 hover:text-white/80 transition-colors">
                <BookOpen className="h-4 w-4 mr-2" />
                Libros
              </TabsTrigger>
              <TabsTrigger value="frases" className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/60 hover:text-white/80 transition-colors">
                <Quote className="h-4 w-4 mr-2" />
                Frases célebres
              </TabsTrigger>
              <TabsTrigger value="recursos" className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/60 hover:text-white/80 transition-colors">
                <Video className="h-4 w-4 mr-2" />
                Recursos
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="libros">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {autorActual.libros.map((libro, index) => (
                  <Card key={index} className="bg-white/5 border border-white/20 hover:bg-white/10 transition-all duration-200">
                    <div className="flex p-4">
                      <div className="flex-shrink-0 mr-4 rounded overflow-hidden border border-white/20">
                        <img 
                          src={libro.portada} 
                          alt={libro.titulo} 
                          className="w-24 h-36 object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">{libro.titulo}</h4>
                        <p className="text-sm text-white/80 mt-1">{libro.descripcion}</p>
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
                      <Card className="h-64 flex items-center justify-center bg-white/5 border border-white/20 hover:bg-white/10 transition-all duration-200">
                        <CardContent className="p-6 text-center flex flex-col items-center justify-center h-full w-full">
                          <Quote className="h-8 w-8 mb-4 text-white" />
                          <p className="text-lg font-medium italic mb-4 text-white max-w-2xl">"{frase.texto}"</p>
                          {frase.contexto && (
                            <p className="text-sm text-white/60">{frase.contexto}</p>
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
                  <Card key={index} className="bg-white/5 border border-white/20 hover:bg-white/10 transition-all duration-200">
                    <div className="p-4">
                      <div className="flex items-start mb-4">
                        <div className="mr-4 mt-1">
                          {recurso.tipo === 'video' && <Video className="h-6 w-6 text-white" />}
                          {recurso.tipo === 'articulo' && <FileText className="h-6 w-6 text-white" />}
                          {recurso.tipo === 'podcast' && <Headphones className="h-6 w-6 text-white" />}
                        </div>
                        <div>
                          <h4 className="font-medium text-white">{recurso.titulo}</h4>
                          {recurso.descripcion && (
                            <p className="text-sm text-white/80 mt-1">{recurso.descripcion}</p>
                          )}
                        </div>
                      </div>
                      {recurso.tipo === 'video' ? (
                        <div className="space-y-4">
                          <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                            <p className="text-white/90 text-sm leading-relaxed">
                              {recurso.titulo === "Libertad para elegir - Capítulo 1: El poder del mercado" ? (
                                <>
                                  "Libertad para elegir" es una serie documental histórica presentada por Milton Friedman, 
                                  donde explora los principios fundamentales del libre mercado y la libertad económica. 
                                  En este primer capítulo, Friedman analiza cómo los mercados libres promueven la prosperidad 
                                  y mejoran la vida de las personas a través del intercambio voluntario y la cooperación social.
                                </>
                              ) : recurso.titulo === "Libertad para elegir - Capítulo 2: El tirano en casa" ? (
                                <>
                                  En este segundo capítulo, Friedman examina cómo la intervención gubernamental en la economía 
                                  afecta la libertad individual y el bienestar de las familias. A través de ejemplos concretos, 
                                  demuestra cómo las regulaciones excesivas pueden limitar las opciones de los consumidores y 
                                  reducir su capacidad para tomar decisiones que mejor se adapten a sus necesidades.
                                </>
                              ) : recurso.descripcion}
                            </p>
                            <button 
                              onClick={() => {
                                setVideosVisibles(prev => ({
                                  ...prev,
                                  [index]: !prev[index]
                                }));
                                if (!videosCargados[index]) {
                                  setVideosCargados(prev => ({
                                    ...prev,
                                    [index]: true
                                  }));
                                }
                              }}
                              className="mt-4 text-sm text-white/80 hover:text-white transition-colors flex items-center gap-2"
                            >
                              <Video className="h-4 w-4" />
                              {videosVisibles[index] ? 'Ocultar video' : 'Mostrar video'}
                            </button>
                          </div>
                          <div 
                            className={`transform transition-all duration-300 ease-in-out overflow-hidden ${
                              videosVisibles[index] 
                                ? 'max-h-[1000px] opacity-100' 
                                : 'max-h-0 opacity-0'
                            }`}
                          >
                            <div className="py-4">
                              {videosCargados[index] && <VideoPlayer url={recurso.url} title={recurso.titulo} />}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <a 
                          href={recurso.url} 
                          className="text-sm text-white/80 mt-2 inline-block hover:text-white transition-all duration-200"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Ver {
                            recurso.tipo === 'articulo' ? 'artículo' : 'podcast'
                          }
                        </a>
                      )}
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
