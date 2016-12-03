import React from 'react';
import { Link } from 'react-router';

export default class MenuItem extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            loaded: false
        }
    }

    componentDidMount () {
        let delay = parseInt(this.props.delay) || 100;
        setTimeout(() => {
            this.setState({ loaded: true });
        }, delay);
    }

    getClassName () {
        return this.state.loaded
            ? 'welcome-menu-item loaded'
            : 'welcome-menu-item'
    }

    render () {
        let customStyle = {
            backgroundImage:
                'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' + this.props.backgroundImage + ')'
        };
        return (
            <Link to={this.props.linkTo}>
                <div ref="wmi" className={this.getClassName()} style={customStyle}>
                    {this.props.name}
                </div>
            </Link>
        );
    }
}