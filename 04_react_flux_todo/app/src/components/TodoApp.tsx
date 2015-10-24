import * as React from 'react';

import Header from './Header';
import Footer from './Footer';
import MainSection from './MainSection';
import TodoStore from '../stores/TodoStore';

class TodoApp extends React.Component<TodoApp.Props, TodoApp.State> {
    constructor(props){
        super(props);
        this.state = {allTodos: TodoStore.getAll()};
    }

    componentDidMount() {
        TodoStore.addChangeListener(this.handleChange);
    }

    handleChange = () => {
        this.setState({
            allTodos: TodoStore.getAll()
        })
    };

    render(){
        return (
            <div>
                <Header />
                <MainSection allTodos={this.state.allTodos} />
                <Footer />
            </div>
        );
    }
}

namespace TodoApp {
    export interface Props extends React.DOMAttributes {
    }
    export interface State {
        allTodos: TodoStore.Todos
    }
}

export default TodoApp
