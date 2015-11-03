
import * as express from 'express';
import config from './config';
import settings from './settings';

let app = express();

config(app);

app.listen(settings.port, () => {
    console.log('Express server listening on %d, in %s mode',
           settings.port, settings.env
    );
});

