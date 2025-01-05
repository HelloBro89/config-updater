const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // for connection FE and BE
      contextIsolation: true, // secure connection
    },
  });

  mainWindow.loadURL('http://localhost:3000'); // React dev server
});
