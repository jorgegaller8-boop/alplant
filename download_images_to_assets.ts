import https from 'https';
import fs from 'fs';
import path from 'path';

const images = [
  { name: 'fire-valve.jpg', url: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800' },
  { name: 'air-valve.jpg', url: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800' },
  { name: 'backdraft-valve.jpg', url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800' },
  { name: 'grille.jpg', url: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800' },
  { name: 'ventilation-parts.jpg', url: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800' },
  { name: 'actuator.jpg', url: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800' },
  { name: 'production.jpg', url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1024' },
  { name: 'hero.jpg', url: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920' }
];

const dir = path.join(process.cwd(), 'src', 'assets', 'images');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

async function download(url: string, filename: string) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        download(res.headers.location!, filename).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to download ${filename}: ${res.statusCode}`));
        return;
      }
      const filePath = path.join(dir, filename);
      const fileStream = fs.createWriteStream(filePath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Downloaded ${filename}`);
        resolve(true);
      });
    }).on('error', (err) => {
      console.error(`Error downloading ${filename}: ${err.message}`);
      reject(err);
    });
  });
}

async function main() {
  for (const img of images) {
    try {
      await download(img.url, img.name);
    } catch (e) {
      console.error(e);
    }
  }
}

main();
