import * as React from 'react';
import * as $ from 'jquery';
import * as CommentList from './CommentList';
import * as CommentForm from './CommentForm';

class CommentBox extends React.Component<CommentBox.Props, CommentBox.State> {
    constructor(props) {
        super(props);
        this.state = {data: []};
    }

    loadCommentsFromServer = () => {
        let jqxhr = $.get(this.props.url);
        jqxhr.done((data) => this.setState({data: data}));
        jqxhr.fail((jqXHR, status, err) => console.error(this.props.url, status, err.toString()));
    };

    handleCommentSubmit = (comment) => {
        let comments = this.state.data;
        let jqxhr = $.post(this.props.url, comment);
        jqxhr.done((commentWithId) => {
            let newComments = comments.concat([commentWithId]);
            this.setState({data: newComments});
        });
        jqxhr.fail((jqXHR, status, err) => console.error(this.props.url, status, err.toString()));
    };

    componentDidMount() {
        this.loadCommentsFromServer();
        setInterval(
            this.loadCommentsFromServer,
            this.props.pollInterval
        );
    }

    render() {
        return (
            <div className="commnetBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data} />
                <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
            </div>
        );
    }
}

namespace CommentBox {
    export interface Props {
        url: string;
        pollInterval: number;
    }

    export interface State {
        data: {id: number, author: string, text: string}[];
    }
}

export = CommentBox
