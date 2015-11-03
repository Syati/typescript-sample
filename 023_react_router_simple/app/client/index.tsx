// import stylesheets by webpack
require('normalize.css');
require('style.less');

import * as React from 'react';
import { render } from 'react-dom';

let ReactRouter = require('react-router');
let history = require('history');

let Router =  ReactRouter.Router;
let Route =  ReactRouter.Route;
let Link =  ReactRouter.Link;


class App extends React.Component<any, any> {
    render() {
        return (
            <div>
                <h1>app</h1>
                <div>
                    <Link to="/about">about</Link>
                </div>
                <section>
                    {this.props.children }
                </section>
            </div>
        );
    }
}

class About extends React.Component<any, any> {
    render() {
        return (
            <div>
                <h2>About</h2>
                <p>this an about</p>
            </div>
        )};
}

render((
    <Router history={history.createHistory()}>
        <Route path="/" component={App}>
          <Route path="about" component={About}/>
        </Route>
    </Router>
), document.getElementById('app'));
