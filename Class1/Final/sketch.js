// VARIABLES

var colourx = [];
var coloury = [];
var colourz = [];


function setup() {
  createCanvas(1000, 500);
  /* Use for static colours
  COMMENT HERE IF YOU WANT DYNAMIC COLOURS*/
  //setColours();

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

function draw() {
  fill(250, 220, 50);
  rect(0, 0, 1000, 500);
  stroke(200, 200, 102);
  lines(100, 100, 20, 100);
  stroke(153, 51, 0);
  lines(400, 400, 25, 130);
  lines(200, 130, 12, 50);

  lines(180, 220, 20, 80);
  stroke(255, 255, 102)
  lines(80, 420, 20, 100);
  stroke(55, 18, 0);
  lines(250, 350, 12, 50);
  lines(400, 130, 15, 70);
  stroke(255, 255, 102)
  lines(500, 130, 12, 30);
  lines(300, 220, 28, 120);

  stroke(153, 51, 0);
  lines(190, 470, 17, 50);
  stroke(55, 18, 0);
  lines(600, 100, 20, 100);
   stroke(55, 18, 0);
  lines(900, 400, 24, 130);
   stroke(200, 200, 102)
  lines(700, 130, 12, 50);
  stroke(200, 200, 102);
  lines(680, 220, 20, 80);
  stroke(55, 18, 0);
  lines(580, 420, 20, 100);
  stroke(153, 51, 0);

  lines(750, 350, 12, 50);
  stroke(255, 255, 102)
  lines(900, 130, 15, 70);
  stroke(153, 51, 0);
  lines(1000, 130, 12, 30);
  lines(800, 220, 27, 120);
  stroke(55, 18, 0);
  lines(690, 470, 17, 50);

  lines(870, 20, 17, 50);
  stroke(153, 51, 0);
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