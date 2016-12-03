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
                    <MenuItem linkTo="showcase" name="Showcase" backgroundImage={tree} />
                    <MenuItem linkTo="blog/test" name="Blog" backgroundImage={orange} />
                </div>
            </div>
        );
    }
}