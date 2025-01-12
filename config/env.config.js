// const { resolve } = require('path');
require('dotenv').config();

const CONFIG = {
  LOAD_FILE_PATH:
    process.env.NODE_ENV === 'dev' ? 'http://localhost:3000' : './src/renderer/build/index.html',
  ENV: process.env.NODE_ENV === 'dev' ? 'dev' : 'prod',
};

module.exports = CONFIG;
