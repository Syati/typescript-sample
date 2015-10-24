import * as React from 'react';
import * as classNames from 'classnames'

import TodoTextInput from './TodoTextInput';
import TodoStore from '../stores/TodoStore';
import TodoActions from '../actions/TodoActions';

class TodoItem extends React.Component<TodoItem.Props, TodoItem.State> {
    constructor(props){
        super(props);
        this.state = {isEditing: false};
    }

    handleSave = (text) => {
        TodoActions.updateText(this.props.todo.id, text);
        this.setState({isEditing: false});
    };

    handleDoubleClick = () => {
        this.setState({isEditing: true});
    };

    handleDestroyClick = () => {
        TodoActions.destroy(this.props.todo.id);
    };

    handleToggleComplete = () => {
        TodoActions.toggleComplete(this.props.todo);
    };

    render(){
        let todo = this.props.todo;
        var input;

        if (this.state.isEditing){
            input =
                <TodoTextInput
                    className="edit"
                    value={todo.text}
                    onSave={this.handleSave}
                />;
        }

        return (
            <li
                className={classNames({
                   'completed': todo.complete,
                   'editing': this.state.isEditing
                })}
                key={todo.id}>
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={todo.complete}
                        onChange={this.handleToggleComplete}
                    />
                    <label onDoubleClick={this.handleDoubleClick}>
                        {todo.text}
                    </label>
                    <button
                        className="destroy"
                        onClick={this.handleDestroyClick}
                    />
                </div>
                {input}
            </li>
        );
    }
}

namespace TodoItem {
    export interface Props extends React.DOMAttributes {
        todo: TodoStore.Todo;
    }
    export interface State {
        isEditing: boolean;
    }
}

export default TodoItem