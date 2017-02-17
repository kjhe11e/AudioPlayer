const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

require('dotenv').config();

let win = null;

app.on('ready', function() {
  // initialize window to specified dimensions
  win = new BrowserWindow({width: 1000, height: 600});

  // specify entry point
  if (process.env.PACKAGE === 'true'){
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'dist/index.html'),
      protocol: 'file:',
      slashes: true
    }));
  } else {
    win.loadURL(process.env.HOST);
    win.webContents.openDevTools();
  }

  // show dev tools
  // NOTE: remove this line before distribution
  win.webContents.openDevTools()

  // remove window when app is closed
  win.on('closed', function() {
    win = null;
  });
});

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

app.on('window-all-closed', function() {
  if (process.platform != 'darwin'){
    app.quit();
  }
});
