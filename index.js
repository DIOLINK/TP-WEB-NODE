const { spawn } = require('child_process');
const readline = require('readline');
const routes = require('./src/routes/index');
console.log('🚀 ~ routes:', routes);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
BASE_ROOT = './src/js';
const scripts = {
  1: `${BASE_ROOT}/read-file.js`,
  2: `${BASE_ROOT}/script1.js`,
};

function showMenu() {
  console.log('Seleccione un script para ejecutar:');
  console.log('1. read-file 1');
  console.log('2. Script 2');
  console.log('3. Script 3');
  console.log('4. Salir');

  rl.question('Ingrese el número de su elección: ', (choice) => {
    handleMenuChoice(choice);
  });
}

function handleMenuChoice(choice) {
  const script = scripts[choice];

  if (script) {
    executeScript(script);
  } else if (choice === '4') {
    console.log('Saliendo...');
    rl.close();
  } else {
    console.log('Opción inválida. Por favor, intente de nuevo.');
    showMenu();
  }
}

function executeScript(script) {
  const child = spawn('node', [script]);

  child.stdout.on('data', (data) => {
    console.log(`Salida: ${data}`);
  });

  child.stderr.on('data', (data) => {
    console.error(`Error: ${data}`);
  });

  child.on('close', (code) => {
    console.log(`El proceso terminó con el código ${code}`);
    showMenu();
  });
}

showMenu();
