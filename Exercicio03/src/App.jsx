import React from 'react';
import ParagrafoVisivel from './components/ParagrafoVisivel';

function App() {
  return (
    <div>
      <h1>Renderização Condicional</h1>
      <ParagrafoVisivel isVisible={true} />
      <ParagrafoVisivel isVisible={false} />
    </div>
  );
}

export default App;
