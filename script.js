//An array of nice color codes we shall pick from
let niceColors = ["#00bbf0", "#ff5722", "#efd510", "#4ef037", "#52728C"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  //noLoop();  //uncomment this if you DON'T want animation
}

function draw() {
  noStroke();
  let chosenColor = random(niceColors);
  fill(chosenColor);
  let size = random(20, 80);
square(mouseX, mouseY, size);
}

//Allow clearing the canvas by clicking...
function mousePressed() {
  background(255);
}
