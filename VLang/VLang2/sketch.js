var particle = [];
var particlenew = [];
var startX;
var startY;
var count;
var delay = 0;
var abc;

var fractal = 1;

function setup() {
  createCanvas(800, 600);
  hue = createSlider(0, 280, 100);
  hue.position(20, 20);
  colorMode(HSB);
  //drawFractal(10, 400, 550, 300);

  abc = createSelect();
  abc.option('hue');
  abc.option('saturation');
  abc.option('brightness');


}

function draw() {
  //delay ++;
  //particle = [];
  //background(0);

  if (abc.value() == 'hue') {

    push();
    translate(200, 200);
    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 3; j++) {
        particle = [];
        particlenew = [];
        drawFractal(4, -200 + 200 * i + 100, -200 + 200 * j + 200, 100, hue.value());
      }
    }
    pop();
    push();
    translate(200, 200);
    angleMode(DEGREES);
    rotate(180);
    for (var i = 0; i < 5; i++) {
      for (var j = 0; j < 3; j++) {
        particle = [];
        particlenew = [];
        drawFractal(4, -600 + 200 * i, -400 + 200 * j + 190, 100, (hue.value() + 180) % 360);
      }
    }
    pop();
  } else if (abc.value() == 'saturation') {


    push();
    translate(200, 200);
    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 3; j++) {
        particle = [];
        particlenew = [];
        drawFractalSat(4, -200 + 200 * i + 100, -200 + 200 * j + 200, 100, hue.value());
      }
    }
    pop();
    push();
    translate(200, 200);
    angleMode(DEGREES);
    rotate(180);
    for (var i = 0; i < 5; i++) {
      for (var j = 0; j < 3; j++) {
        particle = [];
        particlenew = [];
        drawFractalSat(4, -600 + 200 * i, -400 + 200 * j + 190, 100, (hue.value() + 180) % 360);
      }
    }
    pop();
  }
else {


    push();
    translate(200, 200);
    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 3; j++) {
        particle = [];
        particlenew = [];
        drawFractalBright(4, -200 + 200 * i + 100, -200 + 200 * j + 200, 100, hue.value());
      }
    }
    pop();
    push();
    translate(200, 200);
    angleMode(DEGREES);
    rotate(180);
    for (var i = 0; i < 5; i++) {
      for (var j = 0; j < 3; j++) {
        particle = [];
        particlenew = [];
        drawFractalBright(4, -600 + 200 * i, -400 + 200 * j + 190, 100, (hue.value() + 180) % 360);
      }
    }
    pop();
  }



}

function drawFractal(iterations, startX, startY, startSize, hue) {
  //background(0);

  particle[0] = new triangleFr(startX, startY, startSize, 0, 1);

  for (var i = 1; i < iterations; i++) {

    l = particle.length;
    count = 0;
    // if(count%100 == 0)

    for (var j = 0; j < l; j++) {
      if (particle[j].flag == (i - 1)) {
        fill(hue + 20 * i, 100, 100);
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


  for (var j = 0; j < particle.length; j++) {
    fill(hue + 20 * i, 100, 100);
    noStroke();
    if (particle[j].flag == (i - 1))
      particle[j].display();

  }
}



function drawFractal(iterations, startX, startY, startSize, hue) {
  //background(0);

  particle[0] = new triangleFr(startX, startY, startSize, 0, 1);

  for (var i = 1; i < iterations; i++) {

    l = particle.length;
    count = 0;
    // if(count%100 == 0)

    for (var j = 0; j < l; j++) {
      if (particle[j].flag == (i - 1)) {
        fill(hue + 20 * i, 100, 100);
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


  for (var j = 0; j < particle.length; j++) {
    fill(hue + 20 * i, 100, 100);
    noStroke();
    if (particle[j].flag == (i - 1))
      particle[j].display();

  }
}


function drawFractalSat(iterations, startX, startY, startSize,hue) {
  //background(0);

  particle[0] = new triangleFr(startX, startY, startSize, 0, 1);

  for (var i = 1; i < iterations; i++) {

    l = particle.length;
    count = 0;
    // if(count%100 == 0)

    for (var j = 0; j < l; j++) {
      if (particle[j].flag == (i - 1)) {
        fill(hue , 100-i*20, 100);
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


  for (var j = 0; j < particle.length; j++) {
    fill(hue , 100-i*20, 100);
    noStroke();
    if (particle[j].flag == (i - 1))
      particle[j].display();

  }
}


function drawFractalBright(iterations, startX, startY, startSize,hue) {
  //background(0);

  particle[0] = new triangleFr(startX, startY, startSize, 0, 1);

  for (var i = 1; i < iterations; i++) {

    l = particle.length;
    count = 0;
    // if(count%100 == 0)

    for (var j = 0; j < l; j++) {
      if (particle[j].flag == (i - 1)) {
        fill(hue , 100, 100-i*20);
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


  for (var j = 0; j < particle.length; j++) {
    fill(hue , 100, 100-i*20);
    noStroke();
    if (particle[j].flag == (i - 1))
      particle[j].display();

  }
}
