var playerCoordinates = null;

function getPlayerCoords() {
  
    var maxY = 0;
    try {
      for ([key, val] of Object.entries( app.game.activeSubWindow.allOnScreenText)) {
        if (
          val["rawText"].toLowerCase() == app.game.playerName &&
          val["color"] == "#ffffff"
        ) {
          playerCoordinates = [
            val.baseLine["x"] + val.textLines["0"]["width"] / 2,
            val.baseLine["y"],
            val.textLines["0"]["width"],
          ];
        }
      }
  
      for ([key, val] of Object.entries(app.game.activeSubWindow.allOnScreenText)) {
        if (
          val.baseLine["x"] + val.textLines["0"]["width"] / 2 < playerCoordinates[0] + 1 &&
          val.baseLine["x"] + val.textLines["0"]["width"] / 2 > playerCoordinates[0] - 1 &&
          val["color"] != "#ffffff" &&
          val["color"] != "#ffafaf"
        ) {
          if (val.baseLine["y"] > maxY) {
            maxY =  val.baseLine["y"];
          }
        }
      }
  
      if (maxY > 0) {
        playerCoordinates[1] =
          playerCoordinates[1] + (maxY - playerCoordinates[1] - 18);
      }
    } catch {}

}

window.setInterval(getPlayerCoords, 499)
  