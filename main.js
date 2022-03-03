const electron = require('electron');


const {app, BrowserWindow} = electron;

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({});
    mainWindow.loadURL(url.format({
        pathName: path.join(__dirname,'mainWindow.html'),
        protocol:'file',
        slashes: true
    }))
})