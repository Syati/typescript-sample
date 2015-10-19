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
            />
        );
    }
}

namespace TodoTextInput {
    export interface Props {
        value?: string
    }
    export interface State {
        value: string
    }
}

export = TodoTextInput