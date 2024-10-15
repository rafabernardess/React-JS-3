import React from 'react';
import ListaNomes from './components/ListaNomes';

function App() {
  const nomes = ['Rafa', 'Bruno', 'Bernardes', 'Miranda'];

  return (
    <div>
      <h1>Lista de Nomes</h1>
      <ListaNomes nomes={nomes} />
    </div>
  );
}

export default App;
