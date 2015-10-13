import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as CommentBox from './components/CommentBox';

ReactDOM.render(
    <CommentBox url="http://localhost:3000/comments" pollInterval={2000} />,
    document.getElementById('app')
);
