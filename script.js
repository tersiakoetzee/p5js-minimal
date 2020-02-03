//An array of nice color codes we shall pick from
var niceColors = ["#C5514C", "#EC9D6C", "#FAE2B7", "#6D7D8F", "#52728C"];

var setup = function() {
  createCanvas(windowWidth, windowHeight);
  //noLoop();  //uncomment this if you DON'T want animation
};

var draw = function() {
  noStroke();
  var chosenColor = random(niceColors);
  fill(chosenColor);
  var size = random(20, 80);
  circle(mouseX, mouseY, size);
};

//Allow clearing the canvas by clicking...
var mousePressed = function() {
  background(255);
};
