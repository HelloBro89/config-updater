const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const CONFIG = require('./config/env.config');

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  mainWindow.webContents.openDevTools();
  if (CONFIG.ENV === 'dev') {
    mainWindow.loadURL(CONFIG.LOAD_FILE_PATH);
  } else {
    mainWindow.loadFile(CONFIG.LOAD_FILE_PATH);
  }
};

ipcMain.handle('get:message', () => {
  return 'Hello from backend!';
});

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
