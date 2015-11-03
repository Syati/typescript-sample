import * as path from 'path';
import * as express from 'express';
import * as morgan from 'morgan';
import router from './router';
import settings from './settings';


export default function config(app: express.Application): void {
    if(settings.env === 'development'){

        let webpack = require('webpack')
        let webpackConfig = require(settings.root + 'webpack.config');
        let compiler = webpack(webpackConfig);

        app.use(require("webpack-dev-middleware")(compiler, {
            noInfo: true, publicPath: webpackConfig.output.publicPath
        }));
    }

    app.use(morgan('dev'));
    app.use('/static', express.static(path.join(settings.appRoot, 'static')));
    app.use('/', router);
}
