var damageTextColor = "#ffff00";

GameClient.prototype.toggleAutoAttack = function toggleAutoAttack() {
  if (!this.autoAttackInterval && app.sessionActive) {
      this.autoAttackInterval = setInterval(this.autoAttack, 500);
      $("#autoAttack").addClass("active");
  } else {
      clearInterval(this.autoAttackInterval);
      this.autoAttackInterval = null;
      if (this.attacking) {
        app.game.sendKeyCommand(app.Types.SpecialAction.END_FIGHTING, app.Types.KeyAction.SPECIAL_ACTION);
        this.attacking = false;
       // console.log("END FIGHTING")
      }
      
      $("#autoAttack").removeClass("active");
  }
}

GameClient.prototype.autoAttack = function autoAttack() {
   try {

    if (app.sessionActive) {
         //check if the target is found on the screen before attempting to follow to account for the persist
         var damageTextFound = false;
         var data = app.game.activeSubWindow.allOnScreenText
   
         var playerLines = 0;
         var damageLines = 0;
         var xCoord, yCoord;
   
         for (var key in data) {
   
             if (data[key].color == damageTextColor && !damageTextFound) {
                 damageTextFound = true;
                 xCoord = data[key].baseLine.x + data[key].textLines["0"].width / 2;
                 yCoord = data[key].baseLine.y;    
             } 
   
             for (var i = 1; i < 5; i++) {
               if (app.playerCoordinates[1] + 19 + i * 19 == data[key].baseLine.y) {
                 //console.log('line under player by ' + i + ' space')
       
                 if (playerLines < i) {
                   playerLines = i;
                 }
               }
             }
   
             if (damageTextFound) {
               for (var i = 1; i < 5; i++) {
                 if (yCoord + 19 + i * 19 == data[key].baseLine.y) {
       
                   if (damageLines < i) {
                       damageLines = i;
                   }
                 }
               }
             }
   
             if (damageLines != 0) {
               yCoord += damageLines * 19;
         
             }
             if (playerLines != 0) {
               app.playerCoordinates[1] += playerLines * 19;
           }
             
     
         if (damageTextFound) {
   
           var damageTextDistance = lineDistance(xCoord, app.playerCoordinates[0], yCoord, app.playerCoordinates[1])
             if (damageTextDistance <= 60) { 
                 if (!this.attacking) {
                     this.attacking = true;
                   //  console.log("BEGIN FIGHTING")
                     app.game.sendKeyCommand(app.Types.SpecialAction.BEGIN_FIGHTING, app.Types.KeyAction.SPECIAL_ACTION);
                 }
             } else {
                 if (this.attacking) {
                    // console.log("END FIGHTING")
                     this.attacking = false;
                     app.game.sendKeyCommand(app.Types.SpecialAction.END_FIGHTING, app.Types.KeyAction.SPECIAL_ACTION);
                 }
             }
             
         } else { 
             if (this.attacking) {
                    // console.log("END FIGHTING")
                     this.attacking = false;
                     app.game.sendKeyCommand(app.Types.SpecialAction.END_FIGHTING, app.Types.KeyAction.SPECIAL_ACTION);
                 }
         }
       }

    }

   } catch (error) {
      console.log(error)
   }
  
}