import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'

import Welcome from './welcome';
import Blog from './blog';
import ShowCase from './showcase';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="blog" component={Welcome} />
        <Route path="blog/:postId" component={Blog} />
        <Route path="showcase" component={ShowCase} />
    </Router>,
    document.getElementById('app')
);
