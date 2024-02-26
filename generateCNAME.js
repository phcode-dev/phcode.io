const fs = require('fs');

// Content to write to the file
const content = 'phcode.io';

// File path and name
const filePath = 'docs/CNAME';

// Write content to the file
fs.writeFile(filePath, content, (err) => {
  if (err) {
    console.error('Error writing file:', err);
  } else {
    console.log('File created successfully:', filePath);
  }
});
