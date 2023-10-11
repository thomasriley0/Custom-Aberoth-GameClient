//var redRanges = []
//var greenRanges = []
//var blueRanges = []
var clickEvents = []


GameClient.prototype.clickPotionsLoop = async function clickPotionsLoop() {
  console.log("Here")
  var pastY, pastX;

  if (clickEvents.length > 0) {
    pastY = clickEvents[0][0].y
    pastX = clickEvents[0][0].x  
  }
   

  clickEvents.slice().reverse().forEach(async (ev) => {
    
    if(pastY && pastX) {
      if (5 <= Math.abs(pastY + 5 - ev[0].y) && 5 <= Math.abs(pastX - ev[0].x)) {
        console.log("clicking")
        app.canvas.dispatchEvent(ev[0])
        await new Promise(resolve => setTimeout(resolve, 25));
        app.canvas.dispatchEvent(ev[1])

      }
    }

    pastY = ev.y
    pastX = ev.x 

   
  })

  clickEvents = [];
}


GameClient.prototype.togglePotionPickup = function togglePotionPickup() {
    if (!this.pickupPotionBool) {
        this.pickupPotionBool = true;
        if (!this.lookForPotionInterval ) {
          this.lookForPotionInterval  = setInterval(this.clickPotionsLoop,500)
        }
        $("#potionPickup").addClass("active")
    } else {
        this.pickupPotionBool = false;
        if (!this.lookForPotionInterval ) {
          this.lookForPotionInterval  = clearInterval(this.lookForPotionInterval)
          this.lookForPotionInterval = null;
        }
        $("#potionPickup").removeClass("active")
        //console.log("LOW RED: " +  Math.min.apply(Math,redRanges) + "HIGH RED: " + Math.max.apply(Math,redRanges) + "\n")
        //console.log("LOW GREEN: " +  Math.min.apply(Math, greenRanges) + "HIGH GREEN: " +  Math.max.apply(Math,greenRanges) + "\n")
        //console.log("LOW BLUE: " +  Math.min.apply(Math, blueRanges) + "HIGH BLUE: " +  Math.max.apply(Math,blueRanges) + "\n" )

    }
    }



GameClient.prototype.pickupPotion = function pickupPotion(x, y) {
  try {
    if (app.sessionActive) {
      clickevents = []
      var potion = false;
      var rgb = this.activeSubWindow.currentColor.match(/\d+/g);
      r = rgb[0]
      g = rgb[1]
      b = rgb[2]
      
  
        if ((r > 171 && g > 163 && b > 149) && (r <= 190 && g <= 174 && b <= 169)) {
         // console.log("POS Y : " + y + "Pos  X: " + x)
            //console.log("FOUND")
            //redRanges.push(r)
            //greenRanges.push(g)
            //blueRanges.push(b)
            potion = true
      }
  
      if (potion) {
        var potionMouseUp = createMouseUpEvent(x , y + 29)
        var potionMouseDown = createMouseDownEvent(x, y + 29)
        clickEvents.push([potionMouseDown,potionMouseUp])
  }

    }
  
    
  } catch (error) {
    console.log(error)
  }
       
}

function createMouseDownEvent(x, y) {
  var mouseDownEvent = new MouseEvent(
    "mousedown", // or "mousedown" if the canvas listens for such an event
    {
      clientX: x,
      clientY: y,
      bubbles: false,
    } 
  );
  return mouseDownEvent;
}
  

function createMouseUpEvent(x, y) {
  var mouseUpEvent = new MouseEvent(
    "mouseup", // or "mousedown" if the canvas listens for such an event
    {
      clientX: x,
      clientY: y,
      bubbles: false,
    }
  );
  return mouseUpEvent;
}

