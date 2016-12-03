import React from 'react';
import { IFS, TREE_RULES } from './helpers/ifs'

export default class ShowCase extends React.Component {
    componentDidMount () {
        this.updateCanvas();
    }

    updateCanvas() {
        new IFS(this.refs.canvas, TREE_RULES, 290, 290);
    }

    render () {
        return (
            <div className="showcase">
                <canvas className="showcase-canvas" ref="canvas" width={800} height={600} />
            </div>
        );
    }
}
