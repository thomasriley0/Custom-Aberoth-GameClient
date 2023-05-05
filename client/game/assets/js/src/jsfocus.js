window.addEventListener('load', function() {
    initializeClickListener();
 });
 
 function initializeClickListener(){
    var canvas = document.getElementById("screen");
    canvas.addEventListener("mousedown", getFocusOnMouseDown, false);
 }
 
 function getFocusOnMouseDown(event){
    window.focus();
    document.getElementById("screen").focus();
 }