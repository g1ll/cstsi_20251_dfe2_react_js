import { useContext } from 'react';
import { StateTodosList } from '../../context/TodosListProvider';

export default function TodoFields() {

  const { editedTodo, createTodo, inputTextRef, inputTitleRef } = useContext(StateTodosList);
  
  console.log({inputTitleRef,inputTextRef})

  return (
    <fieldset>
      <legend>
        {' '}
        {editedTodo?.title ? 'Edite a' : 'Criar uma nova'} Tarefa
      </legend>
      <label>Título:</label>
      <input type="text" placeholder="Título da tarefa" ref={inputTitleRef} />
      <br />
      <label>Texto:</label>
      <input type="text" placeholder="Texto da tarefa" ref={inputTextRef} />
      <hr />
      <button onClick={createTodo}>
        {editedTodo?.title ? 'Editar' : 'Criar'} Tarefa
      </button>
    </fieldset>
  );
}
