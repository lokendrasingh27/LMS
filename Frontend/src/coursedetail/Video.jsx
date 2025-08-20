import React from 'react';

const Video = ({ videoUrl }) => {
  return (
    <div className="my-6">
      <iframe
        className="w-full h-64 md:h-96 rounded"
        src={videoUrl}
        title="Course Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
