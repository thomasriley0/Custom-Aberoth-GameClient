var pickupInterval;
var ctx = document.getElementById("screen").getContext("2d");


function togglePotionPickup() {
    if (!pickupInterval) {
        pickupInterval = window.setInterval(pickupPotion, 500)
    } else {
        window.clearInterval(pickupInterval);
        pickupInterval = null;
    }
    }

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }
      


async function pickupPotion() {
    var numClicks = 0;
        var ctx = document.getElementById("screen").getContext("2d");
        for (var i = 0; i < 140; i++) {
          //console.log("looping")
          for (var j = 0; j < 120; j++) {
            var potion = false
            var pixelX = (playerCoordinates[0] - playerCoordinates[2] / 2) - 40 + i
            var pixelY = playerCoordinates[1] + 50 + j
            const pixel = ctx.getImageData(pixelX, pixelY, 1, 1);
            const data = pixel.data;
            // get pixel data
            const [r, g, b] = [data[0], data[1], data[2]];
      
            //if potion is a potions
            //146,139,132
            if ((r > 168 && g > 158 && b > 148) && (r <= 190 && g <= 180 && b <= 170)) {
                if (pixelY < app.game["sizeY"] - 50 && pixelX <  app.game["sizeX"] - 50) {
                    potion = true
                }   
            
  
            
            }
      
      
      

            if (potion && numClicks <= 5) {

                console.log("picking potion")
                
              var potionMouseUp = createMouseUpEvent(pixelX, pixelY + 29)
              var potionMouseDown = createMouseDownEvent(pixelX, pixelY  + 29)

      
              await sleep(100)
              app.canvas.dispatchEvent(potionMouseDown)
              await sleep(50)
              app.canvas.dispatchEvent(potionMouseUp)
              await sleep(20)
              numClicks += 1
            }      
      
           
          }
        }
      
      
       
      
      }
