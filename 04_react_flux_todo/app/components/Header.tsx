import * as React from 'react';
import * as TodoTextInput from './TodoTextInput'

class Header extends React.Component<Header.Props, Header.State> {

    handleSave = () => {
        //TODO
        console.log("header save is called ")
    }

    render(){
        return (
            <header id="header">
                <h1>Todos</h1>
                <TodoTextInput placeholder="Input a todo" onSave={this.handleSave}/>
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