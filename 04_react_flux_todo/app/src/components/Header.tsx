import * as React from 'react';

import TodoTextInput from './TodoTextInput';
import TodoActions from '../actions/TodoActions';

class Header extends React.Component<Header.Props, Header.State> {

    handleSave = (text) => {
        if(text.trim()) {
            TodoActions.create(text);
        }
    };

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
    export interface Props extends React.DOMAttributes {
    }
    export interface State {
    }
}

export default Header