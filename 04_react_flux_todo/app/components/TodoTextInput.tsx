import * as React from 'react';

class TodoTextInput extends React.Component<TodoTextInput.Props, TodoTextInput.State> {
    constructor(props){
        super(props);
        this.state = {value: this.props.value || ''};
    }

    render(){
        return (
            <input
                value={this.state.value}
                placeholder={this.props.placeholder}
            />
        );
    }
}

namespace TodoTextInput {
    export interface Props {
        placeholder?: string
        value?: string
    }
    export interface State {
        value: string
    }
}

export = TodoTextInput