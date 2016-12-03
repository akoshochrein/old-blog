import React from 'react';
import { Link } from 'react-router';

export default class MenuItem extends React.Component {
    render () {
        let customStyle = {
            backgroundImage:
                'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' + this.props.backgroundImage + ')'
        };
        return (
            <Link to={this.props.linkTo}>
                <div className="welcome-menu-item" style={customStyle}>
                    {this.props.name}
                </div>
            </Link>
        );
    }
}