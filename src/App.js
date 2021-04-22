import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import InputField from './components/InputField';
import ListToDo from './components/ListTodo';

const App = () => {
  const [todoList, setTodoList] = useState(
    { list: localStorage.todo ? JSON.parse(localStorage.todo) : [] },
  );

  const addItemToList = obj => {
    // console.log(typeof todoList.list);
    const updatedArray = JSON.parse(JSON.stringify(todoList.list));
    updatedArray.push(obj);
    setTodoList({ list: updatedArray });
    localStorage.setItem('todo', JSON.stringify(updatedArray));
  };

  const markItemAsCompleted = obj => {
    const updatedArray = JSON.parse(JSON.stringify(todoList.list));
    updatedArray.forEach(e => {
      if (e.title === obj.title) {
        e.done = true;
      }
    });
    setTodoList({ list: updatedArray });
    localStorage.setItem('todo', JSON.stringify(updatedArray));
  };

  const markItemAsUncompleted = obj => {
    const updatedArray = JSON.parse(JSON.stringify(todoList.list));
    updatedArray.forEach(e => {
      if (e.title === obj.title) {
        e.done = false;
      }
    });
    setTodoList({ list: updatedArray });
    localStorage.setItem('todo', JSON.stringify(updatedArray));
  };

  const removeCompletedItem = obj => {
    const updatedArray = JSON.parse(JSON.stringify(todoList.list));
    updatedArray.forEach(e => {
      if (e.title === obj.title) {
        const index = updatedArray.indexOf(e);
        updatedArray.splice(index, 1);
      }
    });
    setTodoList({ list: updatedArray });
    localStorage.setItem('todo', JSON.stringify(updatedArray));
  };

  return (
    <div className="App">
      <Header/>
      <InputField addItemToList={ addItemToList } />
      <section className="container">
        <ListToDo list={ todoList.list }
        markItemAsCompleted={ markItemAsCompleted }
        markItemAsUncompleted={ markItemAsUncompleted}
        removeCompletedItem={ removeCompletedItem }/>
      </section>
    </div>
  );
};

export default App;
