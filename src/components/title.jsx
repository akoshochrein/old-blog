import React from 'react';

export default class Title extends React.Component {
    render () {
        let backgroundStyle = {
            backgroundImage:
                'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' + this.props.backgroundImage + ')'
        };
        return (
            <div className="title-container" style={backgroundStyle}>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}
