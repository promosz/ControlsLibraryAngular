const fs = require('fs');
const path = require('path');

// Read the tokens JSON file
const tokensPath = path.join(__dirname, 'tokens.json');
const tokens = JSON.parse(fs.readFileSync(tokensPath, 'utf8'));

// Function to flatten nested objects
function flattenObject(obj, prefix = '') {
  const flattened = {};
  
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = prefix ? `${prefix}-${key}` : key;
      
      if (typeof obj[key] === 'object' && obj[key].value !== undefined) {
        flattened[newKey] = obj[key].value;
      } else if (typeof obj[key] === 'object') {
        Object.assign(flattened, flattenObject(obj[key], newKey));
      }
    }
  }
  
  return flattened;
}

// Generate SCSS variables
function generateSCSS(tokens) {
  const flattened = flattenObject(tokens);
  const scssContent = Object.entries(flattened)
    .map(([key, value]) => `$${key}: ${value};`)
    .join('\n');
  
  return scssContent;
}

// Generate CSS variables
function generateCSS(tokens) {
  const flattened = flattenObject(tokens);
  const cssContent = ':root {\n' +
    Object.entries(flattened)
      .map(([key, value]) => `  --${key}: ${value};`)
      .join('\n') +
    '\n}';
  
  return cssContent;
}

// Generate TypeScript constants
function generateTypeScript(tokens) {
  const flattened = flattenObject(tokens);
  const tsContent = 'export const tokens = {\n' +
    Object.entries(flattened)
      .map(([key, value]) => `  ${key}: '${value}',`)
      .join('\n') +
    '\n} as const;\n\nexport type TokenKey = keyof typeof tokens;';
  
  return tsContent;
}

// Create output directory if it doesn't exist
const outputDir = path.join(__dirname, '..', 'projects', 'controls', 'src', 'lib', 'styles', 'tokens');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Generate and write files
fs.writeFileSync(path.join(outputDir, '_variables.scss'), generateSCSS(tokens));
fs.writeFileSync(path.join(outputDir, '_css-variables.css'), generateCSS(tokens));
fs.writeFileSync(path.join(outputDir, 'tokens.ts'), generateTypeScript(tokens));

console.log('Design tokens generated successfully!');
console.log('Generated files:');
console.log('- _variables.scss');
console.log('- _css-variables.css');
console.log('- tokens.ts');