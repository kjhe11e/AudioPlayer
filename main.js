const {app, BrowserWindow} = require('electron')

let win = null;

app.on('ready', function() {
  // initialize window to specified dimensions
  win = new BrowserWindow({width: 1000, height: 600});

  // specify entry point
  win.loadURL('http://localhost:4000');

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
