import React, { useState } from 'react';
import TextoDinamico from './components/TextoDinamico';

function App() {
  const [isHighlighted, setIsHighlighted] = useState(false);

  return (
    <div>
      <h1>Alteração Dinâmica de Estilo</h1>
      <button onClick={() => setIsHighlighted(!isHighlighted)}>
        {isHighlighted ? 'Remover Destaque' : 'Destacar Texto'}
      </button>
      <TextoDinamico isHighlighted={isHighlighted} />
    </div>
  );
}

export default App;
