import React from 'react';

export default class Canvas extends React.Component {
    componentDidMount () {
        this.updateCanvas();
    }
    updateCanvas() {
        const context = this.refs.canvas.getContext("2d");
        context.fillRect(0, 0, 100, 100);
    }
    render () {
        return (
            <canvas ref="canvas" style={{display: "block"}} />
        );
    }
}
