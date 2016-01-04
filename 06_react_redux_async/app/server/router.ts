"use strict";

import * as express from 'express';
import settings from './settings';
let router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    res.sendFile(settings.clientRoot + '/index.html');
});           


export default router
