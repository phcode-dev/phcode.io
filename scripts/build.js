#!/usr/bin/env node

import { existsSync, mkdirSync, copyFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Paths
const rootDir = join(__dirname, '..');
const nodeModulesDir = join(rootDir, 'node_modules');
const thirdpartyDir = join(rootDir, 'thirdparty');
const bootstrapDir = join(thirdpartyDir, 'bootstrap');
const licensesDir = join(thirdpartyDir, 'licenses');

// Create thirdparty directories
if (!existsSync(thirdpartyDir)) {
    mkdirSync(thirdpartyDir, { recursive: true });
    console.log('✓ Created thirdparty/ directory');
}

if (!existsSync(bootstrapDir)) {
    mkdirSync(bootstrapDir, { recursive: true });
    console.log('✓ Created thirdparty/bootstrap/ directory');
}

if (!existsSync(licensesDir)) {
    mkdirSync(licensesDir, { recursive: true });
    console.log('✓ Created thirdparty/licenses/ directory');
}

// Copy Bootstrap CSS files
const bootstrapSource = join(nodeModulesDir, 'bootstrap', 'dist', 'css');
const filesToCopy = [
    'bootstrap.min.css',
    'bootstrap.min.css.map'
];

filesToCopy.forEach(file => {
    const src = join(bootstrapSource, file);
    const dest = join(bootstrapDir, file);

    if (existsSync(src)) {
        copyFileSync(src, dest);
        console.log(`✓ Copied ${file}`);
    } else {
        console.warn(`⚠ Warning: ${file} not found in node_modules`);
    }
});

// Copy Bootstrap LICENSE
const bootstrapLicense = join(nodeModulesDir, 'bootstrap', 'LICENSE');
const licenseDest = join(licensesDir, 'bootstrap.md');

if (existsSync(bootstrapLicense)) {
    copyFileSync(bootstrapLicense, licenseDest);
    console.log('✓ Copied Bootstrap license to thirdparty/licenses/bootstrap.md');
} else {
    console.warn('⚠ Warning: Bootstrap LICENSE not found in node_modules');
}

console.log('\n✅ Build complete! Bootstrap CSS is now available at thirdparty/bootstrap/');
