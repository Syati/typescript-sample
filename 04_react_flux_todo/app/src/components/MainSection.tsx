import * as React from 'react';

import TodoApp from './TodoApp';
import TodoItem from './TodoItem';
import TodoActions from '../actions/TodoActions';

class MainSection extends React.Component<MainSection.Props, MainSection.State> {

    handleToggleCompleteAll = () => {
        TodoActions.toggleCompleteAll();
    };

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
                <input
                    id="toggle-all"
                    type="checkbox"
                    onChange={this.handleToggleCompleteAll}
                    checked={this.props.areAllComplete ? 'checked' : ''}
                />
                <ul id="todo-list">
                    {todos}
                </ul>
            </section>
        );
    }
}

namespace MainSection {
    export interface Props extends TodoApp.State, React.DOMAttributes {}
    export interface State {}
}

export default MainSection
