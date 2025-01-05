const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      // preload: path.join(__dirname, 'src/preload.js'), // для связи FE и BE
      // preload: path.join(__dirname, 'preload.js'), // для связи FE и BE
      // preload: path.join(__dirname, '..', 'preload.js'), // для связи FE и BE
      contextIsolation: true, // для безопасного соединения
    },
  });

  // Загружаем скомпилированную версию фронтенда React
  // mainWindow.loadURL(`file://${path.join(__dirname, 'renderer/build/index.html')}`);
  console.log({ PATH: path.join(__dirname, 'preload.js') });
  // console.log({ PATH: path.join(__dirname, 'renderer/build/index.html') });
  mainWindow.loadFile(path.join(__dirname, 'renderer/build/index.html'));
  // mainWindow.loadURL('http://localhost:3000'); // React dev server
});
