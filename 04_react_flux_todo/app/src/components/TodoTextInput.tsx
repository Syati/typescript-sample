import * as React from 'react';

import KEYCODE from '../constants/KeyCode';

class TodoTextInput extends React.Component<TodoTextInput.Props, TodoTextInput.State> {

    constructor(props){
        super(props);
        this.state = {value: this.props.value || ''};
    }

    handleKeyDown = (event) => {
        if(event.keyCode === KEYCODE.ENTER_KEY_CODE) {
            this.save()
        }
    };

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
    };

    save(){
        this.props.onSave(this.state.value);
        this.setState({
            value: ''
        })
    }

    render(){
        return (
            <input
                value={this.state.value}
                placeholder={this.props.placeholder}
                onChange={this.handleChange}
                onKeyDown={this.handleKeyDown}
            />
        );
    }
}

namespace TodoTextInput {

    export interface Props extends React.DOMAttributes {
        onSave: (text: string) => void
        placeholder?: string
        value?: string
    }
    export interface State {
        value: string
    }
}

export default TodoTextInput;