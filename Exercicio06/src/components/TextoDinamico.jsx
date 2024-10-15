import React from 'react';

const TextoDinamico = ({ isHighlighted }) => {
  const estiloParagrafo = {
    color: isHighlighted ? 'red' : 'black', // Altera a cor com base na prop
    fontSize: '18px',
    padding: '10px',
  };

  return (
    <p style={estiloParagrafo}>
      Este é um texto dinâmico que muda de cor baseado na prop <b>isHighlighted</b>.
    </p>
  );
};

export default TextoDinamico;
