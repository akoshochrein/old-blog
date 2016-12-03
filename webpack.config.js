const path = require('path');
const merge = require('webpack-merge');
const validate = require('webpack-validator');
const parts = require('./libs/parts.js');

const PATHS = {
    app: path.join(__dirname, 'src'),
    style: [
        path.join(__dirname, 'src', 'styles', 'main.scss')
    ],
    build: path.join(__dirname, 'build'),
    img: path.join(__dirname, 'src', 'static', 'img'),
    svg: path.join(__dirname, 'src', 'static', 'svg'),
    fonts: path.join(__dirname, 'src', 'static', 'fonts')
};

const common = merge(
    {
        entry: {
            style: PATHS.style,
            app: PATHS.app
        },
        output: {
            path: PATHS.build,
            filename: '[name].js'
        },
        resolve: {
            extensions: ['', '.js', '.jsx']
        }
    },
    parts.indexTemplate({ title: 'Blog', appMountId: 'app' }),
    parts.loadJSX(PATHS.app),
    parts.lintJSX(PATHS.app)
);

var config;
switch (process.env.npm_lifecycle_event) {
    case 'build':
    case 'stats':
        config = merge(
            common,
            {
                devtool: 'source-map',
                output: {
                    path: PATHS.build,
                    publicPath: '/',
                    filename: '[name].[chunkhash].js',
                    chunkFilename: '[chunkhash].js'
                }
            },
            parts.clean(PATHS.build),
            parts.setFreeVariable('process.env.NODE_ENV', 'production'),
            parts.fileLoader(PATHS.img), parts.svgLoader(PATHS.svg),
            parts.fontLoader(PATHS.fonts),
            parts.extractBundle({ name: 'vendor', entries: ['react', 'react-dom'] }),
            parts.minify(),
            parts.extractCSS(PATHS.style),
            parts.purifyCSS([PATHS.app])
        );
        break;
    default:
        config = merge(
            common,
            { devtool: 'eval-source-map' },
            parts.fileLoader(PATHS.img), parts.svgLoader(PATHS.svg),
            parts.fontLoader(PATHS.fonts),
            parts.setupSASS(PATHS.style),
            parts.devServer({
                host: process.env.HOST,
                port: process.env.PORT
            })
        );
}

module.exports = validate(config, { quiet: true });
