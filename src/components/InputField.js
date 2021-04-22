import React, { useState } from 'react';
import AddToDoButton from './AddTodoButton';

const InputField = ({ addItemToList }) => {
  const [todoItem, setTodoItem] = useState({ title: '', description: '', done: false });

  const createToDoItem = event => {
    event.preventDefault();
    if (!todoItem.title || !todoItem.description) {
      alert('Please fill out all fields!');
      return;
    }
    addItemToList(todoItem);
    setTodoItem({ ...todoItem, title: '', description: '' });
  };

  const handleInputChange = e => {
    const { name } = e.target;
    const { value } = e.target;
    setTodoItem({ ...todoItem, [name]: value });
  };

  return (
    <form className="form" role="form">
    <label className="form__title--label">Title</label>
    <input className="form__title--input input" type="text" name='title' value={ todoItem.title }
      onChange={handleInputChange}></input>
    <label className="form__description--label">Description</label>
    <input className="form__description--input input " type="text" name='description' value={ todoItem.description }
      onChange={handleInputChange}></input>
    <AddToDoButton onClick={ createToDoItem } />
  </form>
  );
};

export default InputField;
