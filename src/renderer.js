const {remote,ipcRenderer} = require("electron");

document.getElementById("close").addEventListener("click", () => {
    remote.app.quit();
})