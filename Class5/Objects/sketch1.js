var particle = [];
var particlenew = [];
var startX;
var startY;
var count;
var delay = 0;

var fractal = 1;

function setup() {
  createCanvas(600, 500);
  itSlider = createSlider(1, 8, 1);
  itSlider.position(20, 20);


}

function draw() {
  //delay ++;
  particle = [];
  background(0);

  drawSquare(itSlider.value());
  //drawFractal(itSlider.value(), 250, 360, 200);


}

function drawSquare(iterations) {
  //background(0);


  angleMode(DEGREES);
  //function treeFr(x, y, ratio, angle,type,flag)
  fill(250, 255, 150);
  noStroke();
  particle[0] = new treeFr(300, 450, 1, 0, 0, 0);
  a = particle[0].display();

  push();

  translate(300, 450);
  //rotate(-10);
  rect(0, -100, 100, 100);
  pop();

  for (var j = 1; j < iterations; j++) {
    l = particle.length;
    count = 0;

    fill(250 - 20 * j, 255, 150 - +15 * j);
    noStroke();

    for (var i = 0; i < l; i++) {
      if (particle[i].flag == (j - 1)) {
        a = particle[i].display();
        particlenew[count++] = new treeFr(a.x2, a.y2, a.ratio, a.angle, 2, j);
        particlenew[count++] = new treeFr(a.x1, a.y1, a.ratio, a.angle, 1, j);

      }
    }
    particle = particle.concat(particlenew);
  }
  for (j = 0; j < particle.length; j++) {
    fill(250 - 20 * j, 255, 150 - +15 * j);
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