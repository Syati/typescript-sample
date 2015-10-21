import * as React from 'react';
import TodoItem from './TodoItem';
import TodoStore from '../stores/TodoStore';

class MainSection extends React.Component<MainSection.Props, MainSection.State> {
    render(){
        return (
            <section id="main">
                <ul id="todo-list">
                    <TodoItem />
                </ul>
            </section>
        );
    }
}

namespace MainSection {
    export interface Props extends React.DOMAttributes {
    }
    export interface State {
    }
}

export default MainSection
