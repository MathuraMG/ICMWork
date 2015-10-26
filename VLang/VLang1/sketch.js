// VARIABLES
var abc;
var colourx = [];
var coloury = [];
var colourz = [];


function setup() {
  createCanvas(1000, 500);
  colorMode(HSB);
  /* Use for static colours
  COMMENT HERE IF YOU WANT DYNAMIC COLOURS*/
  //setColours();
  hue = createSlider(0, 360, 200);
  //a = createSlider(0, 100, 100);
  a=100;
  abc = createSelect();
  abc.option('hue');
  abc.option('saturation');
  abc.option('brightness');


}

function draw() {
  drawLines();
}

function getPoints(xc, yc) {
  for (var i = 0; i < count; i++) {
    xarr[i] = xc + (rad * sin((2 * (22 / 7) * i) / count));
    yarr[i] = yc + (rad * cos((2 * (22 / 7) * i) / count));
    point(xarr[i], yarr[i]);
  }
}

function setColours() {
  for (var i = 0; i < 50; i++) {

    colourx[i] = random() * 255;
    coloury[i] = random() * 255;
    colourz[i] = random() * 255;

  }
}

function drawLines()

{
if(abc.value() == 'saturation'){
//change saturation
  var colour0 = color(abs(180 - hue.value()), 0, 100);
  var colour1 = color(hue.value(), 30, a);
  var colour2 = color(hue.value(), 50, a);
  var colour3 = color(hue.value(), 70, a);
  var colour4 = color(hue.value(), 90, a);
}
  
  else if(abc.value() == 'brightness')
  {
  //change brightness
  var colour0 = color(abs(180 - hue.value()), 0,100);
  var colour1 = color(hue.value(), a,30);
  var colour2 = color(hue.value(), a,50);
  var colour3 = color(hue.value(), a,70);
  var colour4 = color(hue.value(), a,90);
  }
  else
  {
    //change hue
  var colour0 = color(abs(180 - hue.value()), 0,100);
  var colour1 = color(hue.value() + 10, a,100);
  var colour2 = color(hue.value() + 20, a,100);
  var colour3 = color(hue.value() + 30, a,100);
  var colour4 = color(hue.value() + 00, a,100);
  }

  //colour the rectangle
  fill(colour0);
  rect(0, 0, 1000, 500);


  //the solid circles - in descending lightness of colours
  fill(colour1);
  stroke(colour1);
  ellipse(540, 370, 200, 200);
  ellipse(450, 20, 50, 50);

  fill(colour4);

  fill(colour2);
  stroke(colour2);
  ellipse(540, 10, 150, 150);

  fill(colour3);
  stroke(colour3);
  ellipse(20, 350, 200, 200);


  stroke(colour4);
  lines(100, 100, 20, 100);

  stroke(colour2);
  lines(400, 400, 25, 130);
  lines(200, 130, 12, 50);


  //Much much random line-circles
  lines(180, 220, 20, 80);
  stroke(colour1);
  lines(80, 420, 20, 100);
  stroke(colour3);
  lines(250, 350, 12, 50);
  lines(400, 130, 15, 70);
  stroke(colour1);
  lines(500, 130, 12, 30);
  lines(300, 220, 28, 120);

  stroke(colour2);
  lines(190, 470, 17, 50);
  stroke(colour3);
  lines(600, 100, 20, 100);
  stroke(colour3);
  lines(900, 400, 24, 130);

  stroke(colour4)
  lines(700, 130, 12, 50);
  stroke(colour1);
  lines(680, 220, 20, 80);
  stroke(colour3);
  lines(580, 420, 20, 100);
  stroke(colour2);
  lines(750, 350, 12, 50);
  stroke(colour4)
  lines(900, 130, 15, 70);
  stroke(colour2);
  lines(1000, 130, 12, 30);
  lines(800, 220, 27, 120);
  stroke(colour3);
  lines(690, 470, 17, 50);

  lines(870, 20, 17, 50);
  stroke(colour2);
  lines(30, 370, 15, 50);
  lines(20, 20, 12, 50);

}

function lines(xc, yc, count, rad) {

  var xarr = [];
  var yarr = [];


  for (var i = 0; i < count; i++) {
    xarr[i] = xc + (rad * sin((2 * (22 / 7) * i) / count));
    yarr[i] = yc + (rad * cos((2 * (22 / 7) * i) / count));
    point(xarr[i], yarr[i]);
  }

  for (var i = 0; i < count; i++) {
    for (var j = 0; j < count; j++) {
      if (((i - j) != 1) && ((j - i) != 1)) {
        //stroke(255 / 16 * j, 255 / 256 * i * j, 255 / 16 * i);
        line(xarr[i], yarr[i], xarr[j], yarr[j]);
      }
    }
  }
}