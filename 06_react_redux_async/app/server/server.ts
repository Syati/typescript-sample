
import * as express from 'express';
import * as debug from 'debug';
import config from './config';
import settings from './settings';

let app = express();
let logger: debug.Debugger = debug('server');

config(app);

app.listen(settings.port, () => {
    console.log('Express server listening on %d, in %s mode',
           settings.port, settings.env
          ) 
});

