// if up
var moveUpEvent = createKeyDownEvent("w");
//if down
var moveDownEvent = createKeyDownEvent("s");
//if right
var moveRightEvent = createKeyDownEvent("d");
//if left
var moveLeftEvent = createKeyDownEvent("a");
// diagonal top-right
var moveTopRightEvent = createKeyDownEvent("e");
//if diagonal top-left
var moveTopLeftEvent = createKeyDownEvent("q");
//if diagonal bottom-left
var moveBottomLeftEvent = createKeyDownEvent("z");
//if diagonal bottom-right
var moveBottomRightEvent = createKeyDownEvent("c");

// if up
var moveUpEvent_release = createKeyUpEvent("w");
//if down
var moveDownEvent_release = createKeyUpEvent("s");
//if right
var moveRightEvent_release = createKeyUpEvent("d");
//if left
var moveLeftEvent_release = createKeyUpEvent("a");
// diagonal top-right
var moveTopRightEvent_release = createKeyUpEvent("e");
//if diagonal top-left
var moveTopLeftEvent_release = createKeyUpEvent("q");
//if diagonal bottom-left
var moveBottomLeftEvent_release = createKeyUpEvent("z");
//if diagonal bottom-right
var moveBottomRightEvent_release = createKeyUpEvent("c");

function createKeyUpEvent(letter) {
  var eventUp = new KeyboardEvent("keyup", {
    bubbles: true,
    key: letter,
    keyCode: letter.charCodeAt(0) - 32,
    charCode: letter.charCodeAt(0),
  });
  return eventUp;
}

function createKeyDownEvent(letter) {
  var eventDown = new KeyboardEvent("keydown", {
    bubbles: true,
    key: letter,
    keyCode: letter.charCodeAt(0) - 32,
    charCode: letter.charCodeAt(0),
  });
  return eventDown;
}

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
