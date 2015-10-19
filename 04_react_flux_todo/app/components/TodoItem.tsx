import * as React from 'react';
import * as TodoTextInput from './TodoTextInput';

class TodoItem extends React.Component<TodoItem.Props, TodoItem.State> {
    render(){
        var input = <TodoTextInput value=""/>;

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