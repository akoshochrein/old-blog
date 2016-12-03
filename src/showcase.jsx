import React from 'react';

export default class ShowCase extends React.Component {
    componentDidMount () {
        const ctx = this.refs.canvas.getContext('2d');
        ctx.fillRect(0, 0, 100, 100);
    }

    render () {
        return (
            <div>
                <canvas ref="canvas" width={300} height={300} />
            </div>
        );
    }
}
