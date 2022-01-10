import React from 'react';

class Todo extends React.Component {
    constructor() {
        super();
        
    }
handleClick = () => {
        this.props.handleToggleTodo(this.props.todo);
        }    

    render() {
        return (
            <div onClick={this.handleClick} className={`todo${this.props.todo.complete ? ' purchased' : ''}`}>
                <p>{this.props.todo.name}</p>
            </div>
        );
    };  
};

export default Todo;