var autoHitInterval;
//var twitchInterval;
var cv = document.getElementById("screen");
var e1 = createMouseDownEvent(0,0)
var e2 = createMouseUpEvent(0,0)
var press1 = 0;
var press2 = 0;
var x;
var y;
var enemyFound;
var lastDistance = 0;
var clickedTimes = 0;
var eY, eX;

function toggleAutoHit() {
    if (!autoHitInterval) {
      autoHitInterval = window.setInterval(startAutoHit, 500);
     //twitchInterval = window.setInterval(startTwitch, 20);
    } else {
      window.clearInterval(autoHitInterval);
     // window.clearInterval(twitchInterval);
      autoHitInterval = null;
     //twitchInterval = null;
    }
}
  

async function startAutoHit() {
  if (sessionActive) {
    // console.log("auto retal")
    data = app.game.activeSubWindow.allOnScreenText
    var eL = 0;
    var pL = 0;
    enemyFound = false;

    for (var key in data) {
      if (data[key]["color"] == "#ffff00" && !enemyFound) {
        enemyFound = true;
        eX = data[key].baseLine["x"] + data[key].textLines["0"]["width"] / 2;
        eY = data[key].baseLine["y"];
      }

      if (data[key]["color"] == "#ffffff" && data[key]["rawText"].toLowerCase() == app.game.playerName) {
        x = data[key].baseLine["x"] + data[key].textLines["0"]["width"] / 2;
        y = data[key].baseLine["y"];
      }

      for (var i = 1; i < 5; i += 1) {
        if (y + 19 + i * 19 == data[key].baseLine["y"]) {
          //console.log('line under player by ' + i + ' space')

          if (pL < i) {
            pL = i;
          }
        }
      }

      if (enemyFound) {
        for (var i = 1; i < 5; i += 1) {
          if (eY + 19 + i * 19 == data[key].baseLine["y"]) {
            // console.log('line enemy under by ' + i + ' space')

            if (eL < i) {
              eL = i;
            }
          }
        }
      }
    }

    if (eL != 0) {
      eY += eL * 19;

      // console.log('enemy line pushed by ' + eL + ' space')
    }
    if (pL != 0) {
      y += pL * 19;

      // console.log('player line pushed by ' + pL + ' space')
      // var canvas = cv.getContext('2d');
      // canvas.fillStyle="#FFFFFF";
      // canvas.fillRect(x,y,4,4);
    }

    if (press1 != 0) {
      KeyEvent.simulateUp(press1, press1);
      press1 = 0;
    }

    if (press2 != 0) {
      KeyEvent.simulateUp(press2, press2);
      press2 = 0;
    }

    if (enemyFound) {
      var distance = lineDistance(eX, x, eY, y);
      if (distance <= 250) {
        if (distance == lastDistance && clickedTimes >= 8) {
          clickedTimes = 0;
          press2 = 0;

          // console.log('too long fighting')
        }

        //KeyEvent.simulateDown(press1, press1);
        //KeyEvent.simulateDown(press2, press2);

        lastDistance = distance;
      }

      if (distance <= 60) {
        if (clickedTimes == 0) {
          app.canvas.dispatchEvent(e1);
          clickedTimes = 1;

          // console.log('Click pressed')
        } else {
          clickedTimes += 1;

          // console.log('Click hold ' + clickedTimes)
        }
      } else {
        if (clickedTimes >= 1) {
          app.canvas.dispatchEvent(e2);
          clickedTimes = 0;

          // console.log('Click release')
        }
      }
    } else {
      if (clickedTimes >= 1) {
        app.canvas.dispatchEvent(e2);
        clickedTimes = 0;

        // console.log('Click release')
      }
    }
  }
}

function lineDistance(x1, x2, y1, y2) {
  var xs, ys;
  xs = x2 - x1;
  xs = xs * xs;

  ys = y2 - y1;
  ys = ys * ys;
  return Math.sqrt(xs + ys);
}

var KeyEvent = function (data, type) {
  this.keyCode = "keyCode" in data ? data.keyCode : 0;
  this.charCode = "charCode" in data ? data.charCode : 0;
  this.type = type || "keypress";
};

KeyEvent.prototype.toNative = function () {
  var event = document.createEventObject
    ? document.createEventObject()
    : document.createEvent("Events");

  if (event.initEvent) event.initEvent(this.type, true, true);

  event.keyCode = this.keyCode;
  event.which = this.charCode || this.keyCode;

  return event;
};

KeyEvent.prototype.fire = function (element) {
  var event = this.toNative();

  if (element.dispatchEvent) {
    element.dispatchEvent(event);

    return;
  }

  element.fireEvent("on" + this.type, event);
};

KeyEvent.simulateDown = function (charCode, keyCode, element) {
  if (element === undefined) {
    element = document;
  }

  var keyEvents = [];

  keyEvents.push(
    new KeyEvent(
      {
        charCode: 0,
        keyCode: keyCode,
      },
      "keydown"
    )
  );

  keyEvents.push(
    new KeyEvent(
      {
        charCode: charCode,
        keyCode: charCode,
      },
      "keypress"
    )
  );

  for (i = 0; i < keyEvents.length; i++) {
    keyEvents[i].fire(element);
  }
};

KeyEvent.simulateUp = function (charCode, keyCode, element) {
  if (element === undefined) {
    element = document;
  }

  var keyEvents = [];

  keyEvents.push(
    new KeyEvent(
      {
        charCode: 0,
        keyCode: keyCode,
      },
      "keyup"
    )
  );

  for (i = 0; i < keyEvents.length; i++) {
    keyEvents[i].fire(element);
  }
};

function createMouseDownEvent(x, y) {
    var mouseDownEvent = new MouseEvent(
      "mousedown", // or "mousedown" if the canvas listens for such an event
      {
        clientX: x,
        clientY: y,
        bubbles: true,
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
        bubbles: true,
      }
    );
    return mouseUpEvent;
  }


window.KeyEvent = KeyEvent;

