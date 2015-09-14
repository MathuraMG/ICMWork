//GLOBAL VARIABLES

var maxX = 1000;
var maxY = 800;

var x = 0;
var y = 250;
var side = 1;

var sleep = true;

var count = 20;

var t = 0;

var mouseXVal = 740;
var mouseYVal = 550;

var backColour = 240;
var backColourIn = 200;

var rand1 = 1;
var rand2 = 1;
var rand3 = 1;
var rand4 = 1;

function setup() {
  createCanvas(maxX, maxY);
  rand1 = random();
  if (rand1 < 0.5) rand1 = -1;
  else
    rand1 = 1;

  rand2 = random();
  if (rand2 < 0.5) rand2 = -1;
  else
    rand2 = 1;

  rand3 = random();
  if (rand3 < 0.5) rand3 = -1;
  else
    rand3 = 1;

  rand4 = random();
  if (rand4 < 0.5) rand4 = -1;
  else
    rand4 = 1;
  
}

function draw() {
  t = t + 1;

  //moveCircle();
  background(backColour);
  textSize(20);
  fill(0);
  text('click in the lighter area to move the rods!',20,750);
  text('Refresh to change the direction of the levers',20,780);  


  textSize(12);
  fill(0);
  text('( ' + mouseX, mouseX,mouseY);
  text(', ' + mouseY + ' )', mouseX+30, mouseY);

  //drawGear(rad, count, xc, yc, dia, dist bw in and out, speed)

  fill(backColourIn);
  stroke(backColourIn);
  rect(0,0,525,500);

  drawGear(100, 20, 200, 200, 50, 10, 1);
  drawGear(50, 30, 175, 380, 40, 20, -3);
  drawGear(20, 16, 327, 260, 10, 10, -4.5);
  drawGear(20, 16, 306, 316, 10, 10, 4.5);
  drawGear(20, 16, 342, 362, 10, 10, -4.5);
  drawGear(55, 36, 420, 300, 50, 15, 3);

  //draw the bottom gear
  //drawGear(55, 36, 880, 680, 50, 15, 2);

  //draw holder2 for lever
  stroke(150);
  fill(150);
  rect(0, mouseYVal - 15, 1000, 30);

  stroke(130);
  fill(130);
  rect(0, mouseYVal - 10, 1000, 20);

  //draw holder1 for lever
  stroke(150);
  fill(150);
  rect(mouseXVal - 15, 0, 30, 800);

  stroke(130);
  fill(130);
  rect(mouseXVal - 10, 0, 20, 800);



  //lines for lever
  bottomLever(mouseXVal, rand1);
  topLever(mouseXVal, rand2);
  midLever(mouseYVal, rand3);
  //lowLeverLeft(mouseXVal, rand4);


}

function lowLeverLeft(xVal, dir) {
  x1 = getPoints(50, 1, 880, 680, 0.1).x;
  y1 = getPoints(50, 1, 880, 680, 0.1).y;

  x2 = xVal;
  l = 910 - x2 ;

  //dist = sqrt((y2-y1)^2 +(x2-x1)^2)
  y2 = dir * sqrt(pow(l, 2) - pow((x2 - x1[0]), 2)) + y1[0];

  stroke('#bb7722');
  strokeWeight(16);
  line(x1[0], y1[0], x2, y2);

  stroke('#aa6611');
  strokeWeight(10);
  line(x1[0], y1[0], x2, y2);

  stroke(0);
  strokeWeight(6);
  point(x1[0], y1[0]);
  point(x2, y2);

}


function topLever(xVal, dir) {
  x1 = getPoints(70, 1, 200, 200, 0.1).x;
  y1 = getPoints(70, 1, 200, 200, 0.1).y;

  x2 = xVal;
  l = x2 - 130;

  //dist = sqrt((y2-y1)^2 +(x2-x1)^2)
  y2 = dir * sqrt(pow(l, 2) - pow((x2 - x1[0]), 2)) + y1[0];

  stroke('#bb7722');
  strokeWeight(16);
  line(x1[0], y1[0], x2, y2);

  stroke('#aa6611');
  strokeWeight(10);
  line(x1[0], y1[0], x2, y2);

  stroke(0);
  strokeWeight(6);
  point(x1[0], y1[0]);
  point(x2, y2);

}

function midLever(yVal, dir) {
  x1 = getPoints(40, 1, 175, 380, -0.2).x;
  y1 = getPoints(40, 1, 175, 380, -0.2).y;

  y2 = yVal;
  l = y2 - 340;

  console.log(pow(l, 2), pow((y2 - y1[0]), 2));

  //dist = sqrt((y2-y1)^2 +(x2-x1)^2)
  x2 = dir * sqrt(pow(l, 2) - pow((y2 - y1[0]), 2)) + x1[0];

  stroke('#bb7722');
  strokeWeight(16);
  line(x1[0], y1[0], x2, y2);

  stroke('#aa6611');
  strokeWeight(10);
  line(x1[0], y1[0], x2, y2);

  stroke(0);
  strokeWeight(6);
  point(x1[0], y1[0]);
  point(x2, y2);

}


function bottomLever(xVal, dir) {
  x1 = getPoints(35, 1, 420, 300, .3).x;
  y1 = getPoints(35, 1, 420, 300, .3).y;

  x2 = xVal;
  l = x2 - 385;

  //dist = sqrt((y2-y1)^2 +(x2-x1)^2)
  y2 = dir * sqrt(pow(l, 2) - pow((x2 - x1[0]), 2)) + y1[0];

  stroke('#bb7722');
  strokeWeight(16);
  line(x1[0], y1[0], x2, y2);

  stroke('#aa6611');
  strokeWeight(10);
  line(x1[0], y1[0], x2, y2);

  stroke(0);
  strokeWeight(6);
  point(x1[0], y1[0]);
  point(x2, y2);

}


function getPoints(radius, count, xc, yc, speed) {
  var xarr = [];
  var yarr = [];
  var theta = t * speed;
  stroke(0);
  for (var i = 0; i < count; i++) {
    xarr[i] = xc + (radius * sin(((2 * PI * i + theta) / count)));
    yarr[i] = yc + (radius * cos(((2 * PI * i + theta) / count)));
    //ellipse(xarr[i], yarr[i], 2, 2);
  }

  return {
    x: xarr,
    y: yarr
  };
}

function drawGear(rad, count, xc, yc, radin, gap, speed) {

  stroke(0);
  xin = getPoints(rad, count, xc, yc, speed).x;
  yin = getPoints(rad, count, xc, yc, speed).y;
  xout = getPoints(rad + gap, count, xc, yc, speed).x;
  yout = getPoints(rad + gap, count, xc, yc, speed).y;

  beginShape();
  for (var i = 0; i < count; i++) {
    strokeWeight(5);
    stroke(140);
    fill(120);

    if (i % 2 == 0) {
      vertex(xin[i], yin[i]);
      vertex(xout[i], yout[i])
      vertex(xout[(i + 1) % count], yout[(i + 1) % count])
    } else {
      vertex(xout[i], yout[i]);
      vertex(xin[i], yin[i])
      vertex(xin[(i + 1) % count], yin[(i + 1) % count])
    }
  }
  endShape(CLOSE);
  fill(backColourIn);
  ellipse(xc, yc, radin, radin);
}


function mousePressed() {
  if (mouseX > 525 && mouseX<maxX)
    mouseXVal = mouseX;
  if (mouseY > 500 && mouseY << maxY)
    mouseYVal = mouseY;
}