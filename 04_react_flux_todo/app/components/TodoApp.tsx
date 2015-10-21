import * as React from 'react';

import Header from './Header';
import Footer from './Footer';
import MainSection from './MainSection';
import TodoStore from '../stores/TodoStore';

class TodoApp extends React.Component<TodoApp.Props, TodoApp.State> {
    render(){
        return (
            <div>
                <Header />
                <MainSection />
                <Footer />
            </div>
        );
    }
}

namespace TodoApp {
    export interface Props extends React.DOMAttributes {
    }
    export interface State {
    }
}

export default TodoApp