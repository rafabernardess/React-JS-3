import React from 'react';

const GaleriaImagens = ({ urls }) => {
  return (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
      {urls
        .filter((url) => url)  // Filtra URLs que não estão vazias
        .map((url, index) => (
          <img 
            key={index} 
            src={url} 
            alt={`Imagem ${index}`} 
            style={{ width: '250px', height: '250px', objectFit: 'cover', borderRadius: '10px' }} 
          />
        ))}
    </div>
  );
};

export default GaleriaImagens;
