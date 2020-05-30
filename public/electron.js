const {app,BrowserWindow, Menu} = require("electron");

let mainWindow;
function createWindow() {
    mainWindow = new BrowserWindow({ 
        width: 1000, 
        height: 600,
        frame: false,
        icon: "",
        movable: true,
        webPreferences: {
            nodeIntegration: true
        }
    });
     
    const path = require("path");
    const isDev = require("electron-is-dev");

    mainWindow.loadURL(
        isDev
        ? "http://localhost:3000"
        : `file://${path.join(__dirname, "../build/index.html")}`
    );
    mainWindow.on("closed", () => (mainWindow = null));
}

// Menu.setApplicationMenu(null);
app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
    app.quit();
    }
});

app.on("activate", () => {
    if (mainWindow === null) {
    createWindow();
    }
});