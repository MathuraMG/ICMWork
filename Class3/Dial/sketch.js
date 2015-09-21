var theta = 90;
var xclick;
var yclick;
var xCtr;
var yCtr;
var LineColour = 100;

function setup() {
  createCanvas(500, 500);
  background(255);
  angleMode(DEGREES);

}

function draw() {
  background(255);
  //x,y cordinates of the dial's center
  var xCtr = 250;
  var yCtr = 500;
  //length of the dial
  var l = 150;
  //values for the range to be displayed
  var minVal = 25;
  var maxVal = 700;
  //function to create the dial
  createDial(xCtr, yCtr, l, minVal, maxVal);


}

function createDial(x, y, l, minVal, maxVal) {

  //COLOUR THE DIAL
  fill(255, 50, 50);
  stroke(255);
  for (var i = 8; i > 0; i--) {
    angleMode(DEGREES);
    stroke(25 * i);
    fill(25 * i);
    arc(x, y, 50 * i, 50 * i, 180, 0, PIE);
    fill(25 * i - 45);
    stroke(25 * i - 45);
    angleMode(DEGREES);
    arc(x, y, 50 * i, 50 * i, 180, 180 + theta, PIE);


  }

  push();
  translate(x, y);


  drawDial(0, 0, l * cos(180 - theta), l * sin(-theta),LineColour);
  pop();

  if (mouseIsPressed && inRange(mouseX, mouseY, xclick, yclick, x, y, l)) {
    xclick = mouseX;
    yclick = mouseY;
    theta = tanInv((x - xclick), (y - yclick));
    LineColour = 10;
  }
  else
    LineColour = 100;
  var value;
  //Map the values to the position of the dial
  avg = (minVal + maxVal) / 2;
  if (theta <= 0)
    value = map(theta, -90, 0, avg, maxVal);
  else
    value = map(theta, 0, 90, minVal, avg);
  text(value, 25, 25);

  inRange(mouseX, mouseY, xclick, yclick, x, y)

}

function inRange(x, y, x1, y1, xCtr, yCtr, l) {
  //FIX THIS!!!
  if (!x1) x1 = xCtr;
  if (!y1) y1 = yCtr - l;

  if (abs(tanInv((xCtr - x1), (yCtr - y1)) - tanInv((xCtr - x), (yCtr - y))) < 20)
    return 1;
  else
    return 0;
}

function drawDial(startX, startY, endX, endY, LineColour)
  //drawDial(0, 0, -l * cos(theta), -l * sin(theta));
  {
    stroke(200);
    strokeWeight(7);
    line(startX, startY, endX, endY);
    stroke(LineColour);
    strokeWeight(4);
    line(startX, startY, endX, endY);
  }

function tanInv(x, y) {

  if (x >= 0) {
    return (atan(y / x));
  } else {
    return (180 + atan(y / x));
  }
}