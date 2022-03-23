import express from 'express';
import path from 'path';
import sharp from 'sharp';
import fs, { unlink } from 'fs';

const imageprocessing = async (width: number, height: number) => {
    await sharp('public/assests/encenadaport.jpg')
        .resize(width, height)
        .toFile(`thumbnails/encenadport_${width}_${height}.jpg`)
}

export default imageprocessing;