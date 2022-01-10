import React from "react";
import Todo from './Todo';

class TodoList extends React.Component {
    constructor(){
        super();
    }
    
    render() {
        console.log(this.props.todos);
        return (
            <div className="todo-list">
                {this.props.todos.map(todo => (
                    <Todo handleToggleTodo={this.props.handleToggleTodo} key={todo.id} todo={todo} />
                ))}
            </div>
        );
    }
}

export default TodoList;