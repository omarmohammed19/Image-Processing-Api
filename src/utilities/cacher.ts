import express from 'express';
import path from 'path';
import fs from 'fs';

const cacher = (req: express.Request, res: express.Response, next: Function):
    void => {
    if (fs.existsSync(`thumbnails/encenadport_${req.query.width}_${req.query.height}.jpg`)) {
        res.status(200).sendFile(path.resolve(`thumbnails/encenadport_${req.query.width}_${req.query.height}.jpg`))
    }
    next();
}

export default cacher;