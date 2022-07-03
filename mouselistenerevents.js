document.getElementById('p1').ondrag = function() { 
alert('I have been dragged!');
}
document.getElementById('p2').onmousedown = function() { 
alert('I have been pressed!');
}
document.getElementById('p3').onmouseup = function() { 
alert('I have been released!');
}
function mouseDown() {
  document.getElementById("p4").innerHTML = "The mouse button is held down.";
}
function mouseUp() {
  document.getElementById("p4").innerHTML = "You released the mouse button.";
}
document.getElementById('p5').onmouseover = function() { 
alert('I have been hovered!');
}
