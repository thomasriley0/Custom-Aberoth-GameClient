function toggleSideBar() {
  if (document.getElementById("expand-button-icon").classList.contains("rightArrow")) {
    document.getElementById("expand-button-icon").classList.remove("rightArrow")
    document.getElementById("expand-button-icon").classList.add("leftArrow")
    document.getElementById("expand-button-icon").src = "assets/static/leftArrow.svg"
    ipcRenderer.send("resizeClient", {
      width: app.game["sizeX"] + 210,
      height: app.game["sizeY"] + 29
    })
  } else {
    ipcRenderer.send("resizeClient", {
      width: app.game["sizeX"],
      height: app.game["sizeY"] + 29
    })
    document.getElementById("expand-button-icon").classList.add("rightArrow")
    document.getElementById("expand-button-icon").classList.remove("leftArrow")
    document.getElementById("expand-button-icon").src = "assets/static/rightArrow.svg"
  }
}

