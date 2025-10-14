// obfuscate.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

// Cargar javascript-obfuscator como CommonJS
const JavaScriptObfuscator = require('javascript-obfuscator');

const jsDir = path.resolve(__dirname, 'dist/assets');

if (!fs.existsSync(jsDir)) {
  console.error('Carpeta dist/assets no encontrada. Ejecuta primero "npm run build".');
  process.exit(1);
}

const files = fs.readdirSync(jsDir).filter(file => file.endsWith('.js'));

if (files.length === 0) {
  console.warn('No se encontraron archivos .js en dist/assets');
  process.exit(0);
}

console.log('Ofuscando archivos JS en dist/assets...');

for (const file of files) {
  const filePath = path.join(jsDir, file);
  console.log(`  → ${file}`);

  const code = fs.readFileSync(filePath, 'utf8');

  const obfuscatedCode = JavaScriptObfuscator.obfuscate(code, {
    compact: true,
    controlFlowFlattening: true,
    controlFlowFlatteningThreshold: 0.75,
    numbersToExpressions: true,
    simplify: true,
    shuffleStringArray: true,
    splitStrings: true,
    stringArrayThreshold: 0.75,
    identifierNamesGenerator: 'hexadecimal',
    rotateStringArray: true,
    selfDefending: true,
  });

  fs.writeFileSync(filePath, obfuscatedCode.getObfuscatedCode());
}

console.log('Ofuscación completada.');