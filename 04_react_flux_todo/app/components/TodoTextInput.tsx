import * as React from 'react';

class TodoTextInput extends React.Component<TodoTextInput.Props, TodoTextInput.State> {
    constructor(props){
        super(props);
        this.state = {value: this.props.value || ''};
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
    }

    render(){
        return (
            <input
                value={this.state.value}
                placeholder={this.props.placeholder}
                onChange={this.handleChange}
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