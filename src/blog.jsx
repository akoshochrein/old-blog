import React from 'react';

import ArticleBody from './components/container';
import ArticleTitle from './components/title';

var orangeFull = require('./static/img/orange-full.jpg');

export default class Blog extends React.Component {
    render () {
        return (
            <div className="application-wrapper">
                <ArticleTitle title="Packing Oranges" subtitle="Packaging Images with Webpack" backgroundImage={orangeFull} />
                <ArticleBody>
                    <p>Packaging images on the web is a fairly simple task. Just pop your content on a CDN or on your server and watch the beauty as your image unveils itself on your beautiful splash page. In our modern times, however, we would like some greater control over how our images are served and how much our developers need to take care of during the development process.</p>
                    <h3>Modern asset packaging on the web</h3>
                    <p></p>
                    <h3>Sources</h3>
                </ArticleBody>
            </div>
        );
    }
}
