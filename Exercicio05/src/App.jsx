import React from 'react';
import GaleriaImagens from './components/GaleriaImagens';

function App() {
  const urlsImagens = [
    'https://img.freepik.com/fotos-gratis/vista-da-arquitetura-grega-antiga-com-a-estrutura-do-templo_23-2151664780.jpg?t=st=1729006356~exp=1729009956~hmac=61d25596b17ad352efb98cadc9d64853e5d703322877bf744a628578ceb662c9&w=740',
    '',  // URL vazia, não será renderizada
    'https://img.freepik.com/fotos-gratis/casa-paisagem-piscina-de-relaxamento-jardim_1203-4900.jpg?t=st=1729006071~exp=1729009671~hmac=69b13aaf999298ad9dab44c6c2965d0909bcfd552d9af129c7519abbb4d48f86&w=740',
    'https://img.freepik.com/fotos-premium/vista-aerea-da-famosa-ponte-no-porto_1165532-100080.jpg?w=740'
  ];

  return (
    <div>
      <h1>Galeria de Imagens</h1>
      <GaleriaImagens urls={urlsImagens} />
    </div>
  );
}

export default App;
