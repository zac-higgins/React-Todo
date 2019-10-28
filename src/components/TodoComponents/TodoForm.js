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
        this.props.addItem(this.state.newTask);
        this.setState({ newTask: "" });
    }

    render() {
        return (
            <div>
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
                <button className="clearButton" onClick={this.props.filterCompleted}>Clear Completed</button>
            </div>
        )
    }
}

export default TodoForm;