const electron = require("electron");
const { ipcMain } = require("electron");
const { app, BrowserWindow } = electron;
require("@electron/remote/main").initialize();

var client;
const createClientWindow = () => {
  var launcherPos = launcher.getPosition();
  client = new BrowserWindow({
    width: 100,
    height: 100,
    toolbar: false,
    resizable: true,
    frame: false,
    autoHideMenuBar: true,
    fullscreen: false,
    fullscreenable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      devTools: false,
      enableRemoteModule: true,
    },
  });

  require("@electron/remote/main").enable(client.webContents);

  client.setPosition(launcherPos[0], launcherPos[1]);

  client.loadURL("file://" + __dirname + "/client/game/game.html");

  client.on("close", () => {
    if (launcher == null) {
      createLauncherWindow();
    }
    client = null;
  });
};

var launcher;

const createLauncherWindow = () => {
  launcher = new BrowserWindow({
    width: 250,
    height: 550,
    toolbar: false,
    resizable: false,
    autoHideMenuBar: true,
    fullscreen: false,
    fullscreenable: false,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      devTools: false,
    },
  });

  if (client != null) {
    clientPos = client.getPosition();
    launcher.setPosition(clientPos[0], clientPos[1]);
  }

  require("@electron/remote/main").enable(launcher.webContents);

  launcher.loadURL("file://" + __dirname + "/client/launcher/launcher.html");

  launcher.on("close", () => {
    launcher = null;
  });
};

app.on("ready", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createLauncherWindow();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createLauncherWindow();
  }
});

app.on("window-all-closed", () => {
  app.quit();
});

// Called by the dialog box to get its parameters
ipcMain.on("launchClient", (event, data) => {
  if (BrowserWindow.getAllWindows().length === 1) {
    createClientWindow();
    launcher.close();
  }

  let win = BrowserWindow.getFocusedWindow();
  win.webContents
    .executeJavaScript(
      'username="' +
        data["username"] +
        '"' +
        ";" +
        'password="' +
        data["password"] +
        '"' +
        ";" +
        'scaleup="' +
        data["scaleUp"] +
        '"' +
        ";" +
        'scaledown="' +
        data["scaleDown"] +
        '"' +
        ";" +
        'fontsize="' +
        data["fontSize"] +
        '"' +
        ";" +
        'screendefinition="' +
        data["screenDefinition"] +
        '"' +
        ";" +
        'ipaddress="' +
        "192.99.201.128" +
        '"' +
        ";" +
        'javaversion="' +
        "js_mobile" +
        '"' +
        ";" +
        'proxy="' +
        data["proxy"] +
        '"' +
        ";",
      true
    )
    .then(win.webContents.executeJavaScript("login();"));
});

ipcMain.on("resizeClient", (event, data) => {
  client.setSize(data["width"], data["height"]);
});

ipcMain.on("logout", (event, data) => {
  if (client != null) {
    if (BrowserWindow.getAllWindows().length <= 1) {
      createLauncherWindow();
    }
    client.close();
  }
});
