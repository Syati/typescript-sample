import * as React from 'react';
import * as TodoTextInput from './TodoTextInput'

class Header extends React.Component<Header.Props, Header.State> {
    render(){
        return (
            <header id="header">
                <h1>Todos</h1>
                <TodoTextInput />
            </header>
        );
    }
}

namespace Header {
    export interface Props {
    }
    export interface State {
    }
}

export = Header