// GaleriaImagens.jsx
import React from 'react';

const GaleriaImagens = ({ imagens }) => {
  return (
    <div>
      <h2>Galeria de Imagens</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {imagens.map((imagem, index) => (
          <img
            key={index}
            src={imagem.url}
            alt={imagem.altText}
            style={{ width: '200px', height: 'auto', borderRadius: '8px' }}
          />
        ))}
      </div>
    </div>
  );
};

export default GaleriaImagens;
