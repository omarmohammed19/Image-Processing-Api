import sharp from 'sharp';

const imageprocessing = async (filename: string, width: number, height: number): Promise<void> => {
  await sharp(`public/assests/${filename}`).resize(width, height).toFile(`thumbnails/${filename}_${width}_${height}.jpg`);
};

export default imageprocessing;
