import React from 'react';

const ParagrafoVisivel = ({ isVisible }) => {
  return (
    <div>
      {isVisible && <p>Este parágrafo é visível porque isVisible é true!</p>}
    </div>
  );
};

export default ParagrafoVisivel;
