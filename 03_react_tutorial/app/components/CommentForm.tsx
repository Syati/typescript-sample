import * as React from 'react';
import * as ReactDom from 'react-dom';

class CommentForm extends React.Component<CommentForm.Props, CommentForm.State>{
    handleSubmit = (e) => {
        e.preventDefault();
        let authorInputElement = ReactDom.findDOMNode(this.refs["author"]) as HTMLInputElement;
        let textInputElement = ReactDom.findDOMNode(this.refs["text"]) as HTMLInputElement;

        let author = authorInputElement.value.trim();
        let text = textInputElement.value.trim();

        if(!text || !author) {
            return;
        }
        // TODO: send request to server
        authorInputElement.value = '';
        textInputElement.value = '';
        return;
    };

    render() {
        return (
            <form className="commnetForm" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Your name" ref="author" />
                <input type="text" placeholder="Say something..." ref="text" />
                <input type="submit" value="Post" />
            </form>
        );
    }
}

namespace CommentForm {
    export interface Props {
    }

    export interface State {
    }
}

export = CommentForm
