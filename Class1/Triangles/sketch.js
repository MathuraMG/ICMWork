// VARIABLES

var colourx = [];
var coloury = [];
var colourz = [];


function setup() {
  createCanvas(400, 400);
  /* Use for static colours
  COMMENT HERE IF YOU WANT DYNAMIC COLOURS*/
  setColours();

}


function setColours() {
  for (var i = 0; i < 100; i++) {

    colourx[i] = random() * 255;
    coloury[i] = random() * 255;
    colourz[i] = random() * 255;

  }
}

function draw() {

  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      triangles(i*150+50, j*150+50,70,10*(i+j));
    }
  }
  
}


function triangles(xc, yc,rad,offset) {

  var count = 12;

  //var rad = 100;
  var xarr = [];
  var yarr = [];

  //fill(250, 0, 50);
  //rect(300, 300, 700, 700);
  for (var i = 0; i < count; i++) {
    xarr[i] = xc + (rad * sin((2 * (22 / 7) * i) / count));
    yarr[i] = yc + (rad * cos((2 * (22 / 7) * i) / count));
    point(xarr[i], yarr[i]);


  }
  for (var i = 0; i < count; i++) {
    for (var j = 0; j < count; j++) {
      for (var k = 0; k < count; k++) {
        //fill(255 / 16 * i, 255 / 16 * k, 255 / 16 * j);
        fill(colourx[k+offset], coloury[j+offset], colourz[k+offset])
        triangle(xarr[k], yarr[k], xarr[j], yarr[j], xarr[i], yarr[i]);
      }
    }
  }
}