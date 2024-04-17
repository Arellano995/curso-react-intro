import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({children}) {
    const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODO_V1', []);

  const [searchValue, setSearchValue] = React.useState('');

  // const defaultTodos = [ 
  //   {text:'cortar cebolla', completed: false},
  //   {text:'cortar', completed: false},
  //   {text:'cebolla', completed: false},
  //   {text:'hi', completed: false},
  //   {text:'heloo', completed: false},
  //   {text:'LALAL', completed: false},
  // ]
  // const stringifiedTodos = JSON.stringify(defaultTodos)
  // localStorage.setItem('TODO_V1', stringifiedTodos)

  // localStorage.removeItem('TODO_V1')

  // TODOs completados
  const completedTodos = todos.filter(
    todos => !!todos.completed
  ).length;

  // Total de TODOs
  const totalTodos = todos.length;

  // Busqueda de TODOS
  const searchedTodos = todos.filter((todo) => {

    const todoText = todo.text.toLowerCase();
    const  searchText = searchValue.toLowerCase();

    return todoText.includes(searchText);
  });


  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos)
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos)
  };

    return(
        <>
            <TodoContext.Provider value={{
                completedTodos,
                totalTodos,
                searchValue,
                setSearchValue,
                searchedTodos,
                completeTodo,
                deleteTodo,
                loading,
                error
            }}>
                {children}
            </TodoContext.Provider>
        </> 
    );
}

export { TodoContext, TodoProvider }