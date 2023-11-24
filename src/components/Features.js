
import React from 'react';
import './Features.css'; 

const Features = () => {
  return (
    <div className="features-container">
      <h1 className="features-title">Project Features</h1>
      
      <div className="features-box">
        
          <div className="youtube-player">
          <iframe 
            src="https://www.youtube.com/embed/zAH14IPaYV8" 
            title="YouTube video player" 
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
      </div>
    </div>
  );
};
export default Features;
