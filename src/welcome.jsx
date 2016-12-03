import React from 'react';
import { Link } from 'react-router';
import MenuItem from './components/menu-item.jsx'

var tree = require('./static/img/tree.png');
var orange = require('./static/img/orange.jpg');

export default class Welcome extends React.Component {
    render () {
        return (
            <div className="application-wrapper">
                <h1 className="welcome">akos hochrein</h1>
                <h2 className="welcome">software engineer</h2>
                <div className="welcome-menu">
                    <MenuItem ref="menuShowcase" linkTo="showcase" name="Showcase" backgroundImage={tree} delay="200" />
                    <MenuItem ref="menuBlog" linkTo="blog/test" name="Blog" backgroundImage={orange} delay="400" />
                </div>
            </div>
        );
    }
}