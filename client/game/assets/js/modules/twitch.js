var playerFacing = null;
var currentEntityAngle;
var pastEntityAngle;

var entityCoords = [];
var pastEntityCoords = [];
var pastPlayerCoordinates = null;
var entityDistances = [];

var dispatchInterval = null;

var dispatchActive = true;

var ctx = document.getElementById("screen").getContext("2d");

async function startTwitch() {
    
  //get player coords

  try {
    entityCoords = getEntityCoords();

    /*
    ctx.beginPath();
    ctx.lineWidth = "2";
    ctx.strokeStyle = "#39FF14";
    ctx.rect(
      playerCoordinates[0] - playerCoordinates[2] / 2,
      playerCoordinates[1] - 12,
      playerCoordinates[2],
      13
    );
    ctx.stroke();

    */

    //get player facing direction

    if (pastPlayerCoordinates) {
      if (
        pastPlayerCoordinates[0] != playerCoordinates[0] ||
        pastPlayerCoordinates[1] != playerCoordinates[1]
      ) {
        var playerAngle = angle(
          playerCoordinates[0],
          playerCoordinates[1],
          pastPlayerCoordinates[0],
          pastPlayerCoordinates[1]
        );

        //direction facing

       // go north
       if (playerAngle > 345 || playerAngle <= 30) {
        playerFacing = "north";
        //console.log("north")
      }

      // go north-east
      if (playerAngle > 30 && playerAngle <= 75) {
        playerFacing = "north-east";
        //console.log("north-east")
      }

      // go east
      if (playerAngle > 75 && playerAngle <= 120) {
        playerFacing = "east";
        //console.log("east")
      }

      //go south-east
      if (playerAngle > 120 && playerAngle <= 165) {
        playerFacing = "south-east";
        //console.log("south-east")
      }

      //go south
      if (playerAngle > 165 && playerAngle <= 210) {
        playerFacing = "south";
        // console.log("south")
      }

      // go south-west
      if (playerAngle > 210 && playerAngle <= 255) {
        playerFacing = "south-west";
        //console.log("south-west")
      }

      //go west
      if (playerAngle > 255 && playerAngle <= 300) {
        playerFacing = "west";
        //console.log("west")
      }

      //go north-west
      if (playerAngle > 300 && playerAngle <= 345) {
        playerFacing = "north-west";
        //console.log("north-west")
      }

      
      }
    }

    //get nearest entity
    for (var i = 0; i < entityCoords.length; i++) {
      var distance = lineDistance(
        entityCoords[i][0],
        playerCoordinates[0],
        entityCoords[i][1],
        playerCoordinates[1]
      );
      entityDistances.push(distance);
    }

    var nearestMobIndex = 0;
    for (var i = 0; i < entityDistances.length; i++) {
      if (entityDistances[i] < entityDistances[nearestMobIndex]) {
        nearestMobIndex = i;
      }
    }

    //check if taking damage
    for ([key, val] of Object.entries(app.game.activeSubWindow.allOnScreenText)) {
      //taking damage
      if (val["color"] == "#ffff00") {
        //twitch towards mob
        var entityAngle = angle(
          entityCoords[nearestMobIndex][0],
          entityCoords[nearestMobIndex][1],
          playerCoordinates[0],
          playerCoordinates[1]
        );

        // go north
        if (entityAngle > 335 || entityAngle <= 25) {
          currentEntityAngle = "north";
          // console.log("north")
        }

        // go north-east
        if (entityAngle > 25 && entityAngle <= 65) {
          currentEntityAngle = "north-east";
          // console.log("north-east")
        }

        // go east
        if (entityAngle > 65 && entityAngle <= 105) {
          currentEntityAngle = "east";
          // console.log("east")
        }

        //go south-east
        if (entityAngle > 105 && entityAngle <= 155) {
          currentEntityAngle = "south-east";
          // console.log("south-east")
        }

        //go south
        if (entityAngle > 155 && entityAngle <= 195) {
          currentEntityAngle = "south";
          // console.log("south")
        }

        // go south-west
        if (entityAngle > 195 && entityAngle <= 245) {
          currentEntityAngle = "south-west";
          //console.log("south-west")
        }

        //go west
        if (entityAngle > 245 && entityAngle <= 285) {
          currentEntityAngle = "west";
          //console.log("west")
        }

        //go north-west
        if (entityAngle > 285 && entityAngle <= 335) {
          currentEntityAngle = "north-west";
          // console.log("north-west")
        }

        //if they are player is not facing that direction then twitch
        if (currentEntityAngle != playerFacing) {
          if (dispatchActive) {
            console.log("dispatching")
            if (currentEntityAngle == "north") {
              document.dispatchEvent(moveUpEvent);
              await sleep(150);
              document.dispatchEvent(moveUpEvent_release);
            }

            if (currentEntityAngle == "north-west") {
              document.dispatchEvent(moveTopLeftEvent);
              await sleep(150);
              document.dispatchEvent(moveTopLeftEvent_release);
            }

            if (currentEntityAngle == "north-east") {
              document.dispatchEvent(moveTopRightEvent);
              await sleep(150);
              document.dispatchEvent(moveTopRightEvent_release);
            }

            if (currentEntityAngle == "south") {
              document.dispatchEvent(moveDownEvent);
              await sleep(150);
              document.dispatchEvent(moveDownEvent_release);
            }

            if (currentEntityAngle == "south-east") {
              document.dispatchEvent(moveBottomRightEvent);
              await sleep(150);
              document.dispatchEvent(moveBottomRightEvent_release);
            }

            if (currentEntityAngle == "south-west") {
              document.dispatchEvent(moveBottomLeftEvent);
              await sleep(150);
              document.dispatchEvent(moveBottomLeftEvent_release);
            }

            if (currentEntityAngle == "west") {
              document.dispatchEvent(moveLeftEvent);
              await sleep(150);
              document.dispatchEvent(moveLeftEvent_release);
            }

            if (currentEntityAngle == "east") {
              document.dispatchEvent(moveRightEvent);
              await sleep(150);
              document.dispatchEvent(moveRightEvent_release);
            }

            dispatchActive = false;
            window.setTimeout(dispatchTimer, 3000);
          }
        }
      }
    }

    pastEntityCoords = entityCoords;
    pastPlayerCoordinates = playerCoordinates;
    entityCoords = [];
    entityDistances = [];
  } catch {}
}

async function dispatchTimer() {
  dispatchActive = true;
  window.clearTimeout(dispatchInterval);
}


function angle(cx, cy, ex, ey) {
    var dy = ey - cy;
    var dx = ex - cx;
    var theta = Math.atan2(dy, dx); // range (-PI, PI]
    theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
    theta -= 90;
    if (theta < 0) theta = 360 + theta; // range [0, 360)
    return theta;
  }
  
  function lineDistance(x1, x2, y1, y2) {
    var xs, ys;
    xs = x2 - x1;
    xs = xs * xs;
  
    ys = y2 - y1;
    ys = ys * ys;
    return Math.sqrt(xs + ys);
  }
  