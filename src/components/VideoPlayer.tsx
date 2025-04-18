
import React from 'react';
import ReactPlayer from 'react-player';

interface VideoPlayerProps {
  url: string;
  title?: string;
  onReady?: () => void;
}

const VideoPlayer = ({ url, title, onReady }: VideoPlayerProps) => {
  return (
    <div className="mb-10 w-full max-w-3xl mx-auto">
      {title && <h2 className="text-lg font-semibold mb-2 text-center">{title}</h2>}
      <div className="aspect-video">
        <ReactPlayer 
          url={url} 
          width="100%" 
          height="100%" 
          controls 
          onReady={onReady}
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
