import React from 'react';
import Tabela from './components/Tabela';

function App() {
  const pessoas = [
    { id: 1, nome: 'Rafa', idade: 20 },
    { id: 2, nome: 'Bruno', idade: 20 },
    { id: 3, nome: 'Miranda', idade: 15 }
  ];

  return (
    <div>
      <h1>Lista de Pessoas</h1>
      <Tabela dados={pessoas} />
    </div>
  );
}

export default App;
