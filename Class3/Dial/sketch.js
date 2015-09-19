var theta = 90;
var xclick;

function setup() {
  createCanvas(500, 500);
  background(255);
  angleMode(DEGREES);
}

function draw() {
  background(255);
  //x,y cordinates of the dial's center
  var x = 250;
  var y = 500;
  //length of the dial
  var l = 150;
  //values for the range to be displayed
  var minVal = 25;
  var maxVal = 700;
  //function to create the dial
  createDial(x,y,l,minVal,maxVal);
  
}

function createDial(x, y,l, minVal, maxVal) {

  fill(255, 50, 50);
  stroke(255);
  strokeWeight(4);
  arc(x, y, 400, 400, PI, 0, CHORD);

  fill(50);
  arc(250, y, 100, 100, PI, 0, CHORD);

  push();
  translate(x, y);

  if (xclick > x)
    line(0, 0, l * cos(theta), l * sin(theta));
  else
    line(0, 0, -l * cos(theta), -l * sin(theta));
  pop();
  
  if (mouseIsPressed) {
    xclick = mouseX;
    yclick = mouseY;
    theta = atan((y - yclick) / (x - xclick));
    println(theta + " , ( " + (xclick - x) + ", " + (y - yclick) + " )");

  }
 
 var value;
 avg = (minVal+maxVal)/2;
 if(theta<=0)
 value = map(theta,-90,0,avg,maxVal);
 else
 value = map(theta,0,90,minVal,avg);
 text(value,25,25);
 
}