// Generates PNG icons from public/favicon.svg. Run: node scripts/gen-icons.ts
import sharp from 'sharp';
import { readFileSync } from 'node:fs';
const svg = readFileSync('public/favicon.svg');
await sharp(svg).resize(512, 512).png().toFile('public/logo.png');
await sharp(svg).resize(180, 180).png().toFile('public/apple-touch-icon.png');
await sharp(svg).resize(32, 32).png().toFile('public/favicon-32.png');
console.log('icons written');
