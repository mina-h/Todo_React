import React from 'react';
import TodoUncompleted from './TodoUncompleted';
import TodoCompleted from './TodoCompleted';

const ListToDo = ({
  list,
  markItemAsCompleted,
  markItemAsUncompleted,
  removeCompletedItem,
}) => {
  const filterUncompleted = list.filter(e => e.done === false);
  const uncompletedTodos = filterUncompleted
    .map((todo, index) => <TodoUncompleted todoItem={todo} title={ todo.title }
    description={ todo.description } key ={ index }
    markItemAsCompleted={ markItemAsCompleted }/>);

  const filterCompleted = list.filter(e => e.done === true);
  const completedTodos = filterCompleted
    .map((todo, index) => <TodoCompleted todoItem={todo} title={ todo.title }
    description={ todo.description } key ={ index }
    markItemAsUncompleted={ markItemAsUncompleted } removeCompletedItem={ removeCompletedItem }/>);

  return (
    <>
    <ul className="todo" id="uncompleted">
      {uncompletedTodos}
    </ul>
    <ul className="todo" id="completed">
      {completedTodos}
    </ul>
    </>
  );
};

export default ListToDo;
