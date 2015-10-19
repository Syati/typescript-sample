import * as React from 'react';
import * as TodoTextInput from './TodoTextInput';

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
    export interface Props {
    }
    export interface State {
    }
}

export = TodoItem