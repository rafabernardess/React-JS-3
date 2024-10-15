// App.jsx
import React from 'react';
import Card from './components/Card';

function App() {
  return (
    <div>
      <h1>Meus Cartões</h1>
      <Card>
        <h2>Título do Card</h2>
        <p>Este é um conteúdo de exemplo dentro do cartão.</p>
      </Card>
      <Card>
        <h2>Outro Card</h2>
        <p>Aqui está mais conteúdo para o segundo cartão.</p>
      </Card>
    </div>
  );
}

export default App;
