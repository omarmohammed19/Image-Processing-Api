import express from 'express';
import path from 'path';
import sharp from 'sharp';
import fs, { unlink } from 'fs';

import cacher from '../../utilities/cacher';

const image = express.Router();


image.get("/", cacher, async (req, res) => {

    try {
        if (!fs.existsSync("thumbnails")) {
            fs.mkdirSync("thumbnails")
        }
    } catch (err) {
        console.error(err)
    }
    await sharp('public/assests/encenadaport.jpg')
        .resize(parseInt((req.query.width as unknown) as string), parseInt((req.query.height as unknown) as string))
        .toFile(`thumbnails/encenadport_${req.query.width}_${req.query.height}.jpg`)
    res.status(200).sendFile(path.resolve(`thumbnails/encenadport_${req.query.width}_${req.query.height}.jpg`))
});

image.delete("/:deletethumbnails", async (req, res) => {
    const directory = "thumbnails";

    fs.readdir(directory, (err, files) => {
        if (err) throw err;

        for (const file of files) {
            fs.unlink(path.join(directory, file), err => {
                if (err) throw err;
            });
        }
        res.status(200).send("All thumbnails deleted");
    });

});

export default image;