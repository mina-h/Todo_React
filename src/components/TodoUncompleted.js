import React from 'react';

const TodoUncompleted = ({
  todoItem,
  title,
  description,
  markItemAsCompleted,
}) => (
    <article className="item__undone">
      <li className="item__description">
        <p className="item__title">{title} </p>
        <p className="item__desc">{description}</p>
      </li>
      <button className="item__completed" onClick={() => markItemAsCompleted(todoItem)}>Done</button>
    </article>
);

export default TodoUncompleted;
