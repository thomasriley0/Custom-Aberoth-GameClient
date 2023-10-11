var down = 40;
var left = 37;
var up = 38;
var right = 39;
var top_right = 33;
var top_left = 36;
var bottom_left = 35
var bottom_right = 34;
var targetFound = false;

GameClient.prototype.lookForTarget = function lookForTarget() {
    try {
    //check if the target is found on the screen before attempting to follow to account for the persist
        targetFound = false;
        for (var key in app.game.activeSubWindow.allOnScreenText) {
            if (app.game.activeSubWindow.allOnScreenText[key].rawText.toLowerCase() == app.game.target || app.game.activeSubWindow.allOnScreenText[key].rawText.toLowerCase() == app.game.target + "!") {
                targetFound = true;
                break;
            }
        }
            
    } catch (error) {
        console.log(error)
    }
 

}

GameClient.prototype.toggleAutoFollowSettings = function toggleAutoFollowSettings()  {
    $("#modulesContainer").toggleClass("hidden")
    $("#autoFollowSettings").toggleClass("hidden")
    app.game.target = $("#autoFollowTarget").val().toLowerCase()
  }

GameClient.prototype.toggleAutoFollow = function toggleAutoFollow() {
    if (this.autoFollowBool || app.game.target == "") {
        this.autoFollowBool = false;
        if (this.keyPressed) {
            app.game.sendKeyCommand(this.keyPressed, app.Types.KeyAction.KEY_RELEASED);
            this.keyPressed = null;
        }

         if (this.lookForTargetInterval) {
            clearInterval(this.lookForTargetInterval);
            this.lookForTargetInterval = null;
        }
        $("#autoFollow").removeClass("active");
    } else {
        this.autoFollowBool = true;
        $("#autoFollow").addClass("active");
        
        if (!this.lookForTargetInterval) {
            this.lookForTargetInterval = setInterval(this.lookForTarget,50);
        }
    }
  }

SubWindow.prototype.autoFollow = function autoFollow() {
    //create angle from target coordinates to player coordinates to later use it for calculating the optimal direction to travel
    try {
        if (!targetFound) {
            return;
        }

        if (app.targetCoordinates && app.playerCoordinates && app.sessionActive) {
        
            this.directionAngle = angle(
            app.targetCoordinates[0],
            app.targetCoordinates[1],
            app.playerCoordinates[0],
            app.playerCoordinates[1]
            );

            //if the player is already in close proximity to the target, release  keypress events
            if (
            (Math.abs(app.targetCoordinates[1] - app.playerCoordinates[1]) <= 2 &&
                Math.abs(app.targetCoordinates[0] - app.playerCoordinates[0]) <= 5) ||
            (Math.abs(app.targetCoordinates[1] - app.playerCoordinates[1]) <= 2 &&
                Math.abs(app.targetCoordinates[0] - app.playerCoordinates[0]) <= 5)
            ) {
                if (this.keyPressed) {
                    app.game.sendKeyCommand(this.keyPressed, app.Types.KeyAction.KEY_RELEASED);
                    this.keyPressed = null;
                }
        } else {
            //calculate the corret direction based on the angle from target coordinates to player coordinates
            if (this.directionAngle > 345 || this.directionAngle <= 30) this.currentDirection = "north";
        
            if (this.directionAngle > 30 && this.directionAngle <= 75)  this.currentDirection = "north-east";
        
            if (this.directionAngle > 75 && this.directionAngle <= 120) this.currentDirection = "east";
        
            if (this.directionAngle > 120 && this.directionAngle <= 165) this.currentDirection = "south-east";
        
            if (this.directionAngle > 165 && this.directionAngle <= 210) this.currentDirection = "south";
        
            if (this.directionAngle > 210 && this.directionAngle <= 255) this.currentDirection = "south-west";
        
            if (this.directionAngle > 255 && this.directionAngle <= 300) this.currentDirection = "west";
        
            if (this.directionAngle > 300 && this.directionAngle <= 345) this.currentDirection = "north-west";
        
            //if the past direction calculted is different from the current direction calculated then release keypress events
            if (this.pastDirection != this.currentDirection && this.pastDirection) {
                if (this.keyPressed) {
                    app.game.sendKeyCommand(this.keyPressed, app.Types.KeyAction.KEY_RELEASED);
                    this.keyPressed = null;
                }
                
            } else {
                switch(this.currentDirection) {                
                    case "north":
                        app.game.sendKeyCommand(up, app.Types.KeyAction.KEY_PRESSED);
                        this.keyPressed = up;
                        break;
                    case "north-west":
                        app.game.sendKeyCommand(top_left, app.Types.KeyAction.KEY_PRESSED);
                        this.keyPressed = top_left;
                        break;
                    case "north-east":
                        app.game.sendKeyCommand(top_right, app.Types.KeyAction.KEY_PRESSED);
                        this.keyPressed = top_right;
                        break;
                    case "south":
                        app.game.sendKeyCommand(down, app.Types.KeyAction.KEY_PRESSED);
                        this.keyPressed = down;
                        break;
                    case "south-east":
                        app.game.sendKeyCommand(bottom_right, app.Types.KeyAction.KEY_PRESSED);
                        this.keyPressed = bottom_right;
                        break;
                    case "south-west":
                        app.game.sendKeyCommand(bottom_left, app.Types.KeyAction.KEY_PRESSED);
                        this.keyPressed = bottom_left;
                        break;
                    case "west":
                        app.game.sendKeyCommand(left, app.Types.KeyAction.KEY_PRESSED);
                        this.keyPressed = left;
                        break;
                    case "east":
                        app.game.sendKeyCommand(right, app.Types.KeyAction.KEY_PRESSED);
                        this.keyPressed = right;
                        break;
                    default:
                        this.keyPressed = null;
                        break;
                } 
            }
        
            this.pastDirection = this.currentDirection;
            }
        } 
    } catch (error) {
        console.log(error)
    }


}





