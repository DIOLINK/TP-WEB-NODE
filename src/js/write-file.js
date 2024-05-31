const fs = require('fs');
const prompt = require('prompt-sync')({ sigint: true });

const content = prompt('What is your name? ');
fs.writeFile(`src/read.txt`, content, (err) => {
  if (err) {
    console.error('Error al escribir en el archivo:', err);
  } else {
    console.log(`El contenido se ha escrito en el archivo read.txt`);
  }
});
