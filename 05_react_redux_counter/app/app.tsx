// import stylesheets by webpack
require('normalize.css');
require('style.less');

// js
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import TodoApp from './src/components/TodoApp';


ReactDOM.render(
    <TodoApp />,
    document.getElementById('app')
);
