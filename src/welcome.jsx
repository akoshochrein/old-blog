import React from 'react';
import { Link } from 'react-router';

export default class Welcome extends React.Component {
    render () {
        return (
            <div className="application-wrapper">
                <h1 className="welcome">Welcome</h1>
                <Link to="showcase">Showcase</Link>
                <Link to="blog/test">Blog</Link>
            </div>
        );
    }
}