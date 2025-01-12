const { contextBridge, ipcRenderer } = require('electron');
const CONFIG = require('./config/env.config');

console.log('Preload script loaded');
console.log(CONFIG);

contextBridge.exposeInMainWorld('api', {
  getMessage: () => ipcRenderer.invoke('get:message'),
});
