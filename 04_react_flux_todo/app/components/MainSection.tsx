import * as React from 'react';

import TodoItem from './TodoItem';
import TodoStore from '../stores/TodoStore';

class MainSection extends React.Component<MainSection.Props, MainSection.State> {
    render(){
        let allTodos = this.props.allTodos;

        if(Object.keys(allTodos).length < 1) {
            return null;
        }

        let todos = Object.keys(allTodos).reduce((array, id) => {
            array.push(<TodoItem key={id} todo={allTodos[id]} />);
            return array
        }, []);

        return (
            <section id="main">
                <ul id="todo-list">
                    {todos}
                </ul>
            </section>
        );
    }
}

namespace MainSection {
    export interface Props extends React.DOMAttributes {
        allTodos: TodoStore.Todos
    }
    export interface State {
    }
}

export default MainSection
