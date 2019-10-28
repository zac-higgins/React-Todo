import React from 'react';

class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            newTask: ''
        };
    }

    handleChanges = e => {
        this.setState({
            newTask: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log("It's working!")
        this.props.addItem(this.state.newTask);
        this.setState({ newTask: "" });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="item">Add a task</label>
                <input
                    type="text"
                    name="item"
                    id="item"
                    value={this.state.newTask}
                    onChange={this.handleChanges}
                />
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm;