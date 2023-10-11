
var normalPlayerColor = "#ffffff";
var unfriendlyColor = "#ffafaf";
var alliedUnfriendlyColor = "#ffffaf"
var harmoniedColor = "";
var damageTextColor = "#ffff00";
var currentText;
var currentColor;

//analyze all new  text in this function to get O(n) 
SubWindow.prototype.handleIncomingText = function handleIncomingText(result) {
    currentText = result.rawText.toLowerCase();
    currentColor = result.color;



    //handle playerName text
    if (currentText == app.game.playerName || currentText == app.game.playerName + "!" ) {
        if (currentColor == normalPlayerColor || currentColor == unfriendlyColor) {
            app.playerCoordinates = this.getPlayerCoordinates(result);
        } 

    
       //handle autoFollow target text 
    } else if(currentText == app.game.target || currentText == app.game.target + "!") {
        if (currentColor == normalPlayerColor || currentColor == unfriendlyColor || currentColor == alliedUnfriendlyColor) {
            app.targetCoordinates = this.getPlayerCoordinates(result);
        } 
       
    }  

}

SubWindow.prototype.getPlayerCoordinates = function getPlayerCoordinates(result)  {
    try {
    return [result.baseLine.x + result.textLines["0"].width / 2, result.baseLine.y];
 } catch (error) {
        console.log(error)
    }

}


