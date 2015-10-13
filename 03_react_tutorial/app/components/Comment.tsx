import * as React from 'react';

class Comment extends React.Component<Comment.Props, Comment.State>{
    render() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                {this.props.children}
            </div>
        );
    }
}

namespace Comment {
    export interface Props {
        key: number
        author: string;
        children?: React.ReactElement<any>[];
    }

    export interface State {
    }
}

export = Comment
