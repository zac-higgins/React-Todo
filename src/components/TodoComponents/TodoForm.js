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
            <div className="formModule">
                <form className="form" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Add a task"
                        name="item"
                        id="item"
                        value={this.state.newTask}
                        onChange={this.handleChanges}
                    />
                </form>
                <div className="buttons">
                    <button className="button" onClick={this.handleSubmit}>Add</button>
                    <button className="clearButton" onClick={this.props.filterCompleted}>Clear Completed</button>
                </div>
            </div>

        )
    }
}

export default TodoForm;