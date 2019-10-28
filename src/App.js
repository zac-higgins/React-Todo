import React from 'react';
// import ReactDom from 'react-dom';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './css/app.css';

const data = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      tasks: data
    };
  };



  addItem = task => {
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Todos</h2>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          toggleCompleted={this.toggleCompleted}
          tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
