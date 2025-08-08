const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '../public');
const IMAGES = [
  'anderson.jpeg',
  'jorge.jpeg', 
  'pele.jpeg',
  'placeholder-logo.png',
  'placeholder-user.jpg',
  'placeholder.jpg',
  'ancla-logo.png',
  'guayacanes-logo.png',
  'nubesti-logo.png',
  'gio-logo.png',
  'copalg-logo.png',
  'nutrinor-logo.png'
];

const SIZES = {
  // For team photos and user images
  photos: [
    { suffix: '-sm', width: 150, height: 150 },
    { suffix: '-md', width: 300, height: 300 },
    { suffix: '-lg', width: 600, height: 600 }
  ],
  // For logos
  logos: [
    { suffix: '-sm', width: 120, height: null },
    { suffix: '-md', width: 240, height: null },
    { suffix: '-lg', width: 480, height: null }
  ]
};

async function optimizeImage(imagePath) {
  const fileName = path.basename(imagePath, path.extname(imagePath));
  const ext = path.extname(imagePath);
  
  console.log(`Processing: ${fileName}${ext}`);
  
  // Determine if it's a photo or logo based on filename
  const isPhoto = fileName.includes('jorge') || fileName.includes('pele') || fileName.includes('anderson') || fileName.includes('user');
  const sizes = isPhoto ? SIZES.photos : SIZES.logos;
  
  try {
    // Create WebP versions at different sizes
    for (const size of sizes) {
      const outputPath = path.join(PUBLIC_DIR, `${fileName}${size.suffix}.webp`);
      
      let pipeline = sharp(imagePath).webp({ quality: 85 });
      
      if (size.height) {
        pipeline = pipeline.resize(size.width, size.height, { fit: 'cover' });
      } else {
        pipeline = pipeline.resize(size.width, null, { fit: 'inside', withoutEnlargement: true });
      }
      
      await pipeline.toFile(outputPath);
      console.log(`✓ Created: ${fileName}${size.suffix}.webp`);
    }
    
    // Also create a standard quality WebP version
    const standardWebP = path.join(PUBLIC_DIR, `${fileName}.webp`);
    await sharp(imagePath).webp({ quality: 85 }).toFile(standardWebP);
    console.log(`✓ Created: ${fileName}.webp`);
    
  } catch (error) {
    console.error(`Error processing ${fileName}:`, error.message);
  }
}

async function main() {
  console.log('Starting image optimization...\n');
  
  for (const image of IMAGES) {
    const imagePath = path.join(PUBLIC_DIR, image);
    if (fs.existsSync(imagePath)) {
      await optimizeImage(imagePath);
    } else {
      console.log(`⚠ Skipped: ${image} (file not found)`);
    }
    console.log('');
  }
  
  console.log('Image optimization completed!');
}

main().catch(console.error);