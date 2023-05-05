var playerCoordinates = null;
var targetCoordinates = null;
var pastAngle = null;
var interval;
var target = ""

function toggleAutoFollow() {
  console.log("Here")
  if (target != "") {
    if (!interval) {
      interval = setInterval(followTarget, 1);
    } else {
      clearInterval(interval);
      interval = null;
    }
  } else {
    $("#autoFollow").toggleClass("active")
  }
}

function toggleAutoFollowSettings() {
  target = $("#autoFollowTarget").val()
  $("#modulesContainer").toggleClass("hidden")
  $("#autoFollowSettings").toggleClass("hidden")
}


function followTarget() {
  var currentAngle = null;

    for ([key, val] of Object.entries(app.game.activeSubWindow.allOnScreenText)) {
      //get player coords
      if (val["rawText"].toLowerCase() == app.game.playerName.toLowerCase()) {
        var playerObj = val;
        playerCoordinates = [playerObj.baseLine["x"], playerObj.baseLine["y"]];
        //get target coordinates
      } else if (val["rawText"].toLowerCase() == target.toLowerCase()) {
        var entityObj = val;
        targetCoordinates = [entityObj.baseLine["x"], entityObj.baseLine["y"]];
      }
    }

    if (targetCoordinates && playerCoordinates) {
      var targetAngle = angle(
        targetCoordinates[0],
        targetCoordinates[1],
        playerCoordinates[0],
        playerCoordinates[1]
      );

      // console.log("x difference: " + Math.abs(targetCoordinates[0] - playerCoordinates[0]))
      //console.log("y difference: " + Math.abs(targetCoordinates[1] - playerCoordinates[1]))

      if (
        (Math.abs(targetCoordinates[1] - playerCoordinates[1]) <= 10 &&
          Math.abs(targetCoordinates[0] - playerCoordinates[0]) <= 35) ||
        (Math.abs(targetCoordinates[1] - playerCoordinates[1]) <= 18 &&
          Math.abs(targetCoordinates[0] - playerCoordinates[0]) <= 10)
      ) {
        // console.log("locked on target");
        if (pastAngle == "north") {
          document.dispatchEvent(moveUpEvent_release);
        }

        if (pastAngle == "north-west") {
          document.dispatchEvent(moveTopLeftEvent_release);
        }

        if (pastAngle == "north-east") {
          document.dispatchEvent(moveTopRightEvent_release);
        }

        if (pastAngle == "south") {
          document.dispatchEvent(moveDownEvent_release);
        }

        if (pastAngle == "south-east") {
          document.dispatchEvent(moveBottomRightEvent_release);
        }

        if (pastAngle == "south-west") {
          document.dispatchEvent(moveBottomLeftEvent_release);
        }

        if (pastAngle == "west") {
          document.dispatchEvent(moveLeftEvent_release);
        }

        if (pastAngle == "east") {
          document.dispatchEvent(moveRightEvent_release);
        }
      } else {
        //set new angle

        // go north
        if (targetAngle > 345 || targetAngle <= 30) {
          currentAngle = "north";
          //console.log("north")
        }

        // go north-east
        if (targetAngle > 30 && targetAngle <= 75) {
          currentAngle = "north-east";
          //console.log("north-east")
        }

        // go east
        if (targetAngle > 75 && targetAngle <= 120) {
          currentAngle = "east";
          //console.log("east")
        }

        //go south-east
        if (targetAngle > 120 && targetAngle <= 165) {
          currentAngle = "south-east";
          //console.log("south-east")
        }

        //go south
        if (targetAngle > 165 && targetAngle <= 210) {
          currentAngle = "south";
          // console.log("south")
        }

        // go south-west
        if (targetAngle > 210 && targetAngle <= 255) {
          currentAngle = "south-west";
          //console.log("south-west")
        }

        //go west
        if (targetAngle > 255 && targetAngle <= 300) {
          currentAngle = "west";
          //console.log("west")
        }

        //go north-west
        if (targetAngle > 300 && targetAngle <= 345) {
          currentAngle = "north-west";
          //console.log("north-west")
        }

        if (pastAngle != currentAngle && pastAngle) {
          if (pastAngle == "north") {
            document.dispatchEvent(moveUpEvent_release);
          }

          if (pastAngle == "north-west") {
            document.dispatchEvent(moveTopLeftEvent_release);
          }

          if (pastAngle == "north-east") {
            document.dispatchEvent(moveTopRightEvent_release);
          }

          if (pastAngle == "south") {
            document.dispatchEvent(moveDownEvent_release);
          }

          if (pastAngle == "south-east") {
            document.dispatchEvent(moveBottomRightEvent_release);
          }

          if (pastAngle == "south-west") {
            document.dispatchEvent(moveBottomLeftEvent_release);
          }

          if (pastAngle == "west") {
            document.dispatchEvent(moveLeftEvent_release);
          }

          if (pastAngle == "east") {
            document.dispatchEvent(moveRightEvent_release);
          }
        } else {
          if (currentAngle == "north") {
            document.dispatchEvent(moveUpEvent);
          }

          if (currentAngle == "north-west") {
            document.dispatchEvent(moveTopLeftEvent);
          }

          if (currentAngle == "north-east") {
            document.dispatchEvent(moveTopRightEvent);
          }

          if (currentAngle == "south") {
            document.dispatchEvent(moveDownEvent);
          }

          if (currentAngle == "south-east") {
            document.dispatchEvent(moveBottomRightEvent);
          }

          if (currentAngle == "south-west") {
            document.dispatchEvent(moveBottomLeftEvent);
          }

          if (currentAngle == "west") {
            document.dispatchEvent(moveLeftEvent);
          }

          if (currentAngle == "east") {
            document.dispatchEvent(moveRightEvent);
          }
        }

        pastAngle = currentAngle;
      }
    }

  targetCoordinates = null;
  playerCoordinates = null;
}


