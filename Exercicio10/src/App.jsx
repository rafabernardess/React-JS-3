// App.jsx
import React from 'react';
import GaleriaImagens from './components/GaleriaImagens';

function App() {
  const imagens = [
    {
      url: 'https://img.freepik.com/fotos-gratis/vista-da-arquitetura-grega-antiga-com-a-estrutura-do-templo_23-2151664780.jpg',
      altText: 'Templo da arquitetura grega',
    },
    {
      url: 'https://img.freepik.com/fotos-gratis/casa-paisagem-piscina-de-relaxamento-jardim_1203-4900.jpg',
      altText: 'Casa com piscina e jardim',
    },
    {
      url: 'https://img.freepik.com/fotos-premium/vista-aerea-da-famosa-ponte-no-porto_1165532-100080.jpg',
      altText: 'Vista aérea da ponte no Porto',
    },
  ];

  return (
    <div>
      <GaleriaImagens imagens={imagens} />
    </div>
  );
}

export default App;
