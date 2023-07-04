import { useState } from 'react';
import './App.css';
import { TodoAdd } from './components/TodoAdd';
import { TodoList } from './components/TodoList';
import { useTodo } from './hooks/useTodo';

function App() {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo,
  } = useTodo();

  const [newTodo, setNewTodo] = useState("");

  return (
    <>
      <div className='card-to-do'>
        <h1>Lista de tareas</h1>
        <div className='counter-todos'>
          <h3>
            N° Tareas: <span>{todosCount}</span>
          </h3>
          <h3>
            Pendientes: <span>{pendingTodosCount}</span>
          </h3>
        </div>

        <div className='add-todo'>
          <h3>Agregar Tarea</h3>
          <TodoAdd handleNewTodo={handleNewTodo} />
        </div>

        <TodoList
          todos={todos}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
        />
      </div>
      <div className="new-todo">
        <input
          type="text"
          placeholder="Nueva tarea"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={() => handleNewTodo({
          id: todos.length + 1,
          descripcion: newTodo,
          completada: false
        })}>Agregar</button>
      </div>
    </>
  );
}

export default App;
