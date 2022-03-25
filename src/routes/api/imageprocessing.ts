import express from 'express';
import path from 'path';

import fs from 'fs';
import imageprocessing from './imageprocessingService';

import cacher from '../../utilities/cacher';

const image = express.Router();

image.get('/', cacher, async (req: express.Request, res: express.Response): Promise<void> => {
    try {
        if (!fs.existsSync('thumbnails')) {
            fs.mkdirSync('thumbnails');
        }
    } catch (err) {
        res.send(err);
    }
    const filename: boolean = fs.existsSync(path.resolve(`public/assests/${req.query.filename}`));
    try {
        if (filename === true) {
            if (Number(req.query.width) <= 0 || Number(req.query.width) == null) {
                res.send(`Missing or Invalid input for width of : ${req.query.width}`);
            } else if (Number(req.query.height) <= 0 || Number(req.query.height) == null) {
                res.send(`Missing or Invalid input for height of : ${req.query.height}`);
            } else {
                await imageprocessing(String(req.query.filename), Number(req.query.width), Number(req.query.height));

                res.status(200).sendFile(path.resolve(`thumbnails/${req.query.filename}_${req.query.width}_${req.query.height}.jpg`));
            }
        } else {
            res.send("Filename doesn't exist");
        }
    }
    catch (error) {
        res.status(400).send(`${error}`);
    }
});

image.delete('/:deletethumbnails', async (req: express.Request, res: express.Response): Promise<void> => {
    const directory = 'thumbnails';

    fs.readdir(directory, (err, files) => {
        if (err) throw err;

        for (const file of files) {
            fs.unlink(path.join(directory, file), (err) => {
                if (err) throw err;
            });
        }
        res.status(200).send('All thumbnails deleted');
    });
});

export default image;
