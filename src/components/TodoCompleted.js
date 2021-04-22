import React from 'react';

const TodoCompleted = ({
  todoItem,
  title,
  description,
  markItemAsUncompleted,
  removeCompletedItem,
}) => (
    <article className="item__done">
      <li className="item__description">
        <p className="item__title">{title} </p>
        <p className="item__desc">{description}</p>
      </li>
      <button className="item__completed" onClick={() => markItemAsUncompleted(todoItem)}>Undone</button>
      <button className="item__remove" onClick={() => removeCompletedItem(todoItem)}>Remove</button>
    </article>
);

export default TodoCompleted;
