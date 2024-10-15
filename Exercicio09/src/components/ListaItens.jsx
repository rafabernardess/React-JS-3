// ListaComponent.jsx
import React from 'react';

const ListaItens = () => {
  const itens = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <React.Fragment>
      <h2>Minha Lista de Itens</h2>
      <ul>
        {itens.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p>Esta é uma lista simples de itens renderizada com fragmentos.</p>
    </React.Fragment>
  );
};

export default ListaItens;
