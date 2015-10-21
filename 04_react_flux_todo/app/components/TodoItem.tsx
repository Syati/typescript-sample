import * as React from 'react';
import TodoTextInput from './TodoTextInput';
import TodoStore from '../stores/TodoStore';

class TodoItem extends React.Component<TodoItem.Props, TodoItem.State> {
    handleSave = (text) => {
        //TODO
        console.log("save is called")
    }

    render(){
        var input = <TodoTextInput value="" onSave={this.handleSave} />;

        return (
            <li>
                {input}
            </li>
        );
    }
}

namespace TodoItem {
    export interface Props extends React.DOMAttributes {
    }
    export interface State {
    }
}

export default TodoItem