const { Menu } = require('electron');
const electron = require('electron');

const {app, BrowserWindow} = electron;

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    })
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate)
    Menu.setApplicationMenu(mainMenu)
    win.loadFile('index.html')

  }


//  create menu options

const mainMenuTemplate = [
  {
    label: 'File'
  }
]

  app.whenReady().then(() => {
    createWindow()
  })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })