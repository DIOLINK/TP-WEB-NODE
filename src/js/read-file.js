const fs = require('fs');

try {
  fs.readFile('src/read.txt', 'utf8', (error, data) => {
    if (error) {
      console.error('🚀 ~ fs.readFile ~ error:', error);
    } else {
      console.log('🚀 ~ fs.readFile ~ data:', data);
    }
  });
} catch (error) {
  console.log('🚀 ~ error:', error);
}
