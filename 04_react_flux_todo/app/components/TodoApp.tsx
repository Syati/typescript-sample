import * as React from 'react';

import * as Header from './Header';
import * as MainSection from './MainSection';
import * as Footer from './Footer';

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
    export interface Props {
    }
    export interface State {
    }
}

export = TodoApp