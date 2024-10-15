import React from 'react';
import Filho from './components/componentes';

function App() {
  const mensagem = 'Olá, essa é uma mensagem do componente pai!';

  return (
    <div>
      <h1>Componente Pai</h1>
      <Filho mensagem={mensagem} />
    </div>
  );
}

export default App;
