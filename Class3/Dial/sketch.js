var mouseXclick = 200;
var mouseXclick2 = 200;
var mouseYclick = 30;
var waveSpeed = 2; //lower value makes bigger wave height
var waveFactor = 10; //waveSpeed

var theta = 90;
var theta1 = 90;

var xCtr;
var yCtr;
var lineColour1 = 100;
var lineColour2 = 100;
var dotSize = 5;
var waveSpeed2 = 2;

var direction = 1;
var direction2 = 1;

function setup() {
  createCanvas(900, 500);
  background;
  stroke(255);
  angleMode(DEGREES);

}

function draw() {

  var xCtr = 250;
  var yCtr = 500;
  //length of the dial
  var l = 100;
  //values for the range to be displayed
  var minVal = 25;
  var maxVal = 700;
  var t;
  var r;

  //function to create the dial

  dial1 = createDial(xCtr, yCtr, l, minVal, maxVal, theta, lineColour1);
  theta = dial1.theta;
  lineColour1 = dial1.lineColour;
  t = dial1.value;
  //r= createDial(xCtr+400, yCtr, l, minVal, maxVal);
  dial2 = createDial(xCtr + 400, yCtr, l, 1, 5, theta1, lineColour2);
  theta1 = dial2.theta;
  lineColour2 = dial2.lineColour;
  r = dial2.value;

  dotSize = random(1, 10);
  angleMode(RADIANS);
  stroke(250);
  strokeWeight(dotSize);
  background(50, 10)
  point(mouseXclick, mouseYclick);
  point(mouseXclick2, mouseYclick);

  mouseXclick = mouseXclick - waveSpeed;
  mouseXclick2 = mouseXclick2 + waveSpeed2;

  if (mouseXclick < 0 || mouseXclick > width) {
    waveSpeed = waveSpeed * -1;
    if (waveSpeed < 0)
      direction = -1
    else
      direction = 1
  } else {}

  if (mouseXclick2 < 0 || mouseXclick2 > width) {
    waveSpeed2 = waveSpeed2 * -1;
    if (waveSpeed2 < 0)
      direction2 = -1
    else
      direction2 = 1

  } else {}

  mouseYclick = mouseYclick + waveFactor * sin(mouseXclick);
  //println(waveSpeed2);
  waveFactor = t / 5;
  waveSpeed = direction * r;
  waveSpeed2 = direction2 * r;



}

function mousePressed() {
  // background(50);
  if (mouseY > 350) {
    //println(mouseX);
    //println(mouseY);
    //println('----')
  } else {
    stroke(0);
    mouseXclick = mouseX;
    mouseXclick2 = mouseX;
    mouseYclick = mouseY;
  }
}


function createDial(x, y, l, minVal, maxVal, theta, lineColour) {
  //COLOUR THE DIAL
  fill(255, 50, 50);
  stroke(255);
  //draw the dial
  for (var i = 8; i > 0; i--) {
    angleMode(DEGREES);
    stroke(25 * i);
    fill(25 * i);
    arc(x, y, 30 * i, 30 * i, 180, 0, PIE);
    fill(25 * i - 45);
    stroke(25 * i - 45);
    angleMode(DEGREES);
    arc(x, y, 30 * i, 30 * i, 180, 180 + theta, PIE);
  }
  //draw the indicator
  push();
  translate(x, y);
  drawNeedle(0, 0, l * cos(180 - theta), l * sin(-theta), lineColour);
  pop();

  if (mouseIsPressed && inRange(mouseX, mouseY, x + l * cos(180 - theta), y + l * sin(-theta), x, y, l)) {
    theta = tanInv((x - mouseX), (y - mouseY));
    lineColour = 10;
  } else
    lineColour = 100;

  var value;
  //Map the values to the position of the dial
  value = map(theta, 0, 180, minVal, maxVal);

  //print(theta);
  return {
    theta: theta,
    value: value,
    lineColour: lineColour
  }

}

function inRange(x, y, x1, y1, xCtr, yCtr, l) {
  // in the beggining case when the values are null
  if (!x1) x1 = xCtr;
  if (!y1) y1 = yCtr - l;

  //print(sqrt(pow((x1 - x), 2) + pow((y1 - y), 2)));

  if ((sqrt(pow((x - xCtr), 2) + pow((y - yCtr), 2)) < (l + 20)))
  // && (abs(tanInv((xCtr - x1), (yCtr - y1)) - tanInv((xCtr - x), (yCtr - y))) < 30) )
    return 1;
  else
    return 0;
}

function drawNeedle(startX, startY, endX, endY, LineColour)
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
  // writing this function for simplicity as atan works in different quadrants
  if (x >= 0) {
    return (atan(y / x));
  } else {
    return (180 + atan(y / x));
  }
}
