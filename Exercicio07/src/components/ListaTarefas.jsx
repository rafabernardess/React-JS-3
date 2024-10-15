import React, { useState } from 'react';

const ListaTarefas = () => {
  const [tarefas, setTarefas] = useState([
    { id: 1, titulo: 'Estudar React' },
    { id: 2, titulo: 'Fazer exercícios' },
    { id: 3, titulo: 'Ir à academia' },
  ]);

  const removerTarefa = (id) => {
    const novasTarefas = tarefas.filter((tarefa) => tarefa.id !== id);
    setTarefas(novasTarefas);
  };

  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            {tarefa.titulo}{' '}
            <button onClick={() => removerTarefa(tarefa.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaTarefas;
