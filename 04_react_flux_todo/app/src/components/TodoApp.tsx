import * as React from 'react';

import Header from './Header';
import Footer from './Footer';
import MainSection from './MainSection';
import TodoStore from '../stores/TodoStore';

class TodoApp extends React.Component<TodoApp.Props, TodoApp.State> {
    constructor(props){
        super(props);
        this.state = this.getTodoState();
    }

    getTodoState():TodoApp.State {
        return {
            allTodos: TodoStore.getAll(),
            areAllComplete: TodoStore.areAllComplete()
        };
    }

    componentDidMount() {
        TodoStore.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
        TodoStore.removeChangeListener(this.handleChange);
    }

    handleChange = () => {
        this.setState(this.getTodoState());
    };

    render(){
        return (
            <div>
                <Header />
                <MainSection
                    allTodos={this.state.allTodos}
                    areAllComplete={this.state.areAllComplete}
                />
                <Footer
                    allTodos={this.state.allTodos}
                />
            </div>
        );
    }
}

namespace TodoApp {
    export interface Props extends React.DOMAttributes {
    }
    export interface State {
        allTodos: TodoStore.Todos;
        areAllComplete: boolean;
    }
}

export default TodoApp
