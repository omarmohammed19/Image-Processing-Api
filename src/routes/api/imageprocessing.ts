import express from 'express';
import path from 'path';
import sharp from 'sharp';
import fs, { unlink } from 'fs';
import imageprocessing from './imageprocessingService';

import cacher from '../../utilities/cacher';

const image = express.Router();


image.get("/", cacher, async (req: express.Request, res: express.Response) => {

    try {
        if (!fs.existsSync("thumbnails")) {
            fs.mkdirSync("thumbnails")
        }
    } catch (err) {
        res.send(err);
    }

    if (Number(req.query.width) <= 0 || Number(req.query.width) == null) {
        res.send(`Missing or Invalid input for width of : ${req.query.width}`);
        throw new Error(`Missing or Invalid input for width of : ${req.query.width}`);
    }


    if (Number(req.query.height) <= 0 || Number(req.query.height) == null) {
        res.send(`Missing or Invalid input for height of : ${req.query.height}`);
        throw new Error(`Missing or Invalid input for height of : ${req.query.height}`);
    }

    await imageprocessing(
        Number(req.query.width),
        Number(req.query.height)
    );

    return res.status(200).sendFile(path.resolve(`thumbnails/encenadport_${req.query.width}_${req.query.height}.jpg`))
});

image.delete("/:deletethumbnails", async (req: express.Request, res: express.Response) => {
    const directory = "thumbnails";

    fs.readdir(directory, (err, files) => {
        if (err) throw err;

        for (const file of files) {
            fs.unlink(path.join(directory, file), err => {
                if (err) throw err;
            });
        }
        return res.status(200).send("All thumbnails deleted");
    });

});

export default image;