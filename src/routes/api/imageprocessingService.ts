import sharp from 'sharp';

const imageprocessing = async (width: number, height: number) => {
    await sharp('public/assests/encenadaport.jpg')
        .resize(width, height)
        .toFile(`thumbnails/encenadport_${width}_${height}.jpg`);
};

export default imageprocessing;