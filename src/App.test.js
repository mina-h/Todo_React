import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './components/Header';
import InputField from './components/InputField';
import ListToDo from './components/ListTodo';

const mockData =  {
  list: [
    {
    title: 'Do laundry', 
    description: 'Monday at 7 pm',
    done: false,
    },
    {
      title: 'Go for a run', 
      description: 'Monday at 12 pm',
      done: false,
    },
    {
      title: 'Clean up', 
      description: 'Sunday after lunch',
      done: true,
    }
  ]
}

describe('The App component', () => {
  test('renders a header component', () => {
    render(<App />);
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });
  test('renders a form component', () => {
    render(<App />);
    const form = screen.getByRole('form');
    expect(form).toBeInTheDocument();
  });
});

describe('The Header component', () => {
  test('renders the text "Register new ToDo" ', () => {
    render(<Header />);
    const headerText = screen.getByText('Register new ToDo');
    expect(headerText).toBeInTheDocument();
  });
});

describe('The Form component', () => {
  test('renders two input fields ', () => {
    const { container } = render(<InputField />);
    const inputFields = container.querySelectorAll('.input');
    expect(inputFields).toHaveLength(2);
  });
  test('should contain a button', () => {
    render(<InputField />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
  test('should contain a button with the text "Add"', () => {
    render(<InputField />);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Add');
  });
}); 

describe('the ListTodo component', () => {
  test('renders an uncompleted todo list if done is false', () => {
    const { container } = render(<ListToDo list={ mockData.list }/>);
    const todoItems = Array.from(container.querySelectorAll('.item__undone'));
    expect(todoItems).toHaveLength(2);
  });
  test('renders a compeleted todo list if done is true', () => {
    const { container } = render(<ListToDo list={ mockData.list }/>);
    const todoItems = Array.from(container.querySelectorAll('.item__done'));
    expect(todoItems).toHaveLength(1);
  });
});
