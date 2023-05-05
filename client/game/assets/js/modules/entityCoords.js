function getEntityCoords() {
    var entityCoordinates = [];
    var hostileCoords;
    try {
      for ([key, val] of Object.entries(app.game.activeSubWindow.allOnScreenText)) {
        var maxY = 0;
        if (
          val["rawText"].toLowerCase() != app.game.playerName &&
          val["color"] == "#ffafaf"
        ) {
          hostileCoords = [
            val.baseLine["x"] + val.textLines["0"]["width"] / 2,
            val.baseLine["y"],
            val.textLines["0"]["width"],
          ];
  
          for ([key2, val2] of Object.entries(app.game.activeSubWindow.allOnScreenText)) {
            if (
              val2.baseLine["x"] + val2.textLines["0"]["width"] / 2 < playerCoordinates[0] + 15 &&
              val2.baseLine["x"] + val2.textLines["0"]["width"] / 2 > playerCoordinates[0] - 15 &&
              val2["color"] != "#ffffff" &&
              val2["color"] != "#ffff00" &&
              val["rawText"].toLowerCase() != val2["rawText"].toLowerCase()
            ) {
              if (val2.baseLine["y"] > maxY) {
                maxY = val2.baseLine["y"]
              }
            }
          }
  
          if (maxY != 0) {
            hostileCoords[1] =
            hostileCoords[1] + (maxY - hostileCoords[1] - 18);        }
  
            /*
            ctx.beginPath();
            ctx.lineWidth = "2";
            ctx.strokeStyle = "#FF3131";
            ctx.rect(
              hostileCoords[0] - hostileCoords[2] / 2,
              hostileCoords[1] - 12,
              hostileCoords[2],
              13
            );
            ctx.stroke();
  
            */
  
          entityCoordinates.push(hostileCoords);
        }
      }
    } catch {}
  
    return entityCoordinates;
  }
  