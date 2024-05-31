const menu = require('console-menu');
const routes = require('./src/routes');
const fs = require('fs');

const items = routes.map((route, index) => ({
  hotkey: `${index + 1}`,
  title: route.title,
  path: route.path,
}));

menu(items, {
  header: 'Menú',
  border: true,
}).then((selectedItem) => {
  if (selectedItem) {
    fs.readFile(selectedItem.path, 'utf8', (err, data) => {
      if (err) {
        console.error('Error al leer el archivo:', err);
      } else {
        eval(data);
      }
    });
  } else {
    console.log('Has cancelado el menú.');
  }
});
