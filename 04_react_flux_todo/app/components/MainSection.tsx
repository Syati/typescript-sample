import * as React from 'react';
import * as TodoItem from './TodoItem';

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
    export interface Props {
    }
    export interface State {
    }
}

export = MainSection
