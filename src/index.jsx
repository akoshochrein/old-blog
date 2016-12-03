import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'

import Blog from './blog';
import ShowCase from './showcase';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="blog" component={Blog} />
        <Route path="showcase" component={ShowCase} />
    </Router>,
    document.getElementById('app')
);
