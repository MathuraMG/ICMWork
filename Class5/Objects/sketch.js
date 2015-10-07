var particle = [];
var particlenew = [];
var startX;
var startY;
var count;
var delay = 0;

var fractal = 1;

function setup() {
  createCanvas(600, 500);
  itSlider = createSlider(1, 6, 1);
  itSlider.position(20, 20);


}

function draw() {
  //delay ++;
  particle = [];
  //background(0);

  drawFractal(itSlider.value(), 300, 400, 200);


}

function drawFractal(iterations, startX, startY, startSize) {
  background(0, 50);

  particle[0] = new triangleFr(startX, startY, startSize, 0, 1);

  for (var i = 1; i < iterations; i++) {

    l = particle.length;
    count = 0;
    // if(count%100 == 0)

    for (var j = 0; j < l; j++) {
      if (particle[j].flag == (i - 1)) {
        fill(100 + 30 * i, 255, 100 + 20 * i);
        noStroke();

        prevTri = particle[j].display();
        particlenew[count++] = new triangleFr(prevTri.xup, prevTri.yup, prevTri.size, i, 1);
        if (prevTri.xleft < prevTri.xright) {
          particlenew[count++] = new triangleFr(prevTri.xleft, prevTri.yleft, prevTri.size, i, 2);
          particlenew[count++] = new triangleFr(prevTri.xright, prevTri.yright, prevTri.size, i, 3);
        } else {
          particlenew[count++] = new triangleFr(prevTri.xleft, prevTri.yleft, prevTri.size, i, 3);
          particlenew[count++] = new triangleFr(prevTri.xright, prevTri.yright, prevTri.size, i, 2);
        }
      }
    }

    particle = particle.concat(particlenew);
    //particlenew = [];
  }


  for (j = 0; j < particle.length; j++) {
    fill(100 + 30 * i, 255, 100 + 10 * i);
    noStroke();
    if (particle[j].flag == (i - 1))
      particle[j].display();

  }
}

function mouseVal() {
  stroke(255);
  fill(255);
  text('(' + mouseX + ',' + mouseY + ')', 10, 10);
}

function toggle() {
  if (fractal == 1)
    fractal = 2;
  else if (fractal == 2)
    fractal = 1;
}