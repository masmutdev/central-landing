// scripts/convert-images.js
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const inputDir = path.resolve(__dirname, "../public");
const outputDir = path.resolve(__dirname, "../public/img");
const maxWidth = 800;

// Buat folder output kalau belum ada
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Ambil semua file .png, .jpg, dan .jpeg
const imageFiles = fs.readdirSync(inputDir).filter((file) => {
  const ext = path.extname(file).toLowerCase();
  return ext === ".png" || ext === ".jpg" || ext === ".jpeg";
});

// Proses semua gambar
imageFiles.forEach((file) => {
  const inputPath = path.join(inputDir, file);
  const outputFileName = path.parse(file).name + ".avif";
  const outputPath = path.join(outputDir, outputFileName);

  sharp(inputPath)
    .resize({ width: maxWidth, withoutEnlargement: true })
    .toFormat("avif")
    .toFile(outputPath)
    .then(() => {
      console.log(`✅ ${file} → ${outputFileName}`);
    })
    .catch((err) => {
      console.error(`❌ Error processing ${file}:`, err);
    });
});
