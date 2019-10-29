import React from 'react';
// import ReactDom from 'react-dom';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './css/app.css';

//original data that we're starting out with
const data = [
  {
    task: 'Code All The Things!!',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Get Some Sleep',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {

  //app's state for storing more data
  constructor() {
    super();
    this.state = {
      tasks: data
    };
  };

  //allows a new todo item to be added to the list
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

  //allows todo items to toggle state. Used in Todo.js to change the className. Will add styling that strikes through the todo item text when toggled to complete
  toggleCompleted = id => {
    this.setState({
      tasks: this.state.tasks.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    })
  };

  filterCompleted = () => {
    this.setState({
      tasks: this.state.tasks.filter(item => {
        return item.completed === false
      })
    })
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Todos</h2>
          <TodoForm
            filterCompleted={this.filterCompleted}
            addItem={this.addItem} />
        </div>
        <TodoList
          toggleCompleted={this.toggleCompleted}
          tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
