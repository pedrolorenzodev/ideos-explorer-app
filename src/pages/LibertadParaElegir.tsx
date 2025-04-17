import VideoPlayer from '@/components/VideoPlayer';

const LibertadParaElegir = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-8">
        Libertad para elegir — Milton Friedman
      </h1>

      <VideoPlayer 
        title="Capítulo 1: El poder del mercado"
        url="https://youtu.be/sSA-dd_Biek?si=9Ok4pKnZZdWDvlZ2" 
      />

      <VideoPlayer 
        title="Capítulo 2: El tirano en casa"
        url="https://www.youtube.com/watch?v=gt0hQ2qCS4U&list=PLphYT2X99fYajlOnkRY2Fom-m-oz_OTaz&index=2" 
      />
    </div>
  );
};

export default LibertadParaElegir; 