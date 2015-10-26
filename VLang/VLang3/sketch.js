var frameSpeed = 4;

var hue;

function setup() {
  createCanvas(1280, 400);
  colorMode(HSB);
  angleMode(DEGREES);
  hue = createSlider(0,180,100);
}

function draw() {
  background(0);

  rect(0, 200, 420, 200);

  fill(0);
  rect(0, 200, 400, 200);

  for (var i = 360; i > 0; i -= 5) {
    stroke(0);
    strokeWeight(10);
    fill(hue.value(),(i + frameCount*frameSpeed) % 100, 100);
    ellipse(0, 400, i * 9.6, i * 9.6);
  }

  noStroke();
  fill(0);
  rect(0, 0, 200, 200);

  for (var i = 0; i < 360; i += 5) {
    fill(hue.value(),(i + frameCount*frameSpeed) % 100, 100);
    rect(i*4.8, 0, 15, 200);
  }


  fill(0);
  rect(230, 0, 170, 200);
  push();
  rotate(-10);
  for (var i = 0; i < 60; i += 5) {
    fill(hue.value(),(i + frameCount*frameSpeed) % 100, 100);
    rect(195, i*4.8, 200, 15);
  }
  pop();

  rect(190, 0, 40, height / 2);
  rect(0, 200, width, 40);

/****
PART 2 **/
push();
translate(440,0);
rect(0, 200, 420, 200);

  fill(0);
  rect(0, 200, 400, 200);

  for (var i = 180; i > 0; i -= 10) {
    stroke(0);
    strokeWeight(10);
    fill((i + frameCount*frameSpeed) % 180+hue.value(), 100, 100);
    ellipse(400, 240, i * 4.8, i * 4.8);
  }

  noStroke();
  fill(0);
  rect(0, 0, 200, 200);

  for (var i = 0; i < 360; i += 10) {
    fill((i + frameCount*frameSpeed) % 180+hue.value(), 100, 100);
    rect(i*2.4, 0, 15, 200);
  }


  fill(0);
  rect(230, 0, 170, 200);
  push();
  rotate(-10);
  for (var i = 0; i < 120; i += 10) {
    fill((i + frameCount*frameSpeed) % 180+hue.value(), 100, 100);
    rect(195, i*2.4, 200, 15);
  }
  pop();

  rect(190, 0, 40, height / 2);
  rect(0, 200, width, 40);

pop();





/****
PART 3 **/
push();
translate(880,0);
rect(0, 0, 420, 400);

  fill(0);
  rect(0, 200, 400, 200);

  for (var i = 90; i > 0; i -= 5) {
    stroke(0);
    strokeWeight(10);
    fill((180+hue.value())%360,100,(i + frameCount*frameSpeed) % 100);
    ellipse(400, 0, i * 9.6, i * 9.6);
  }

  noStroke();
  fill(0);
  rect(0, 200, 200, 200);

  for (var i = 0; i < 360; i += 5) {
    fill((180+hue.value())%360,100,(i + frameCount*frameSpeed) % 100);
    rect(i*4.8, 200, 15, 200);
  }


  fill(0);
  rect(230, 200, 170, 200);
  push();
  rotate(-10);
  for (var i = 15; i < 300; i += 5) {
    fill((180+hue.value())%360,100,(i + frameCount*frameSpeed) % 100);
    rect(165, 200+i*4.8, 200, 15);
  }
  pop();

  rect(190, 200, 40, height / 2);
  rect(0, 200, width, 40);

pop();

fill(0);
rect(400,0,40,height);
rect(840,0,40,height);




}



/*


fill(0);
rect(0,200,200,200);
 for(var i=0;i<100;i+=5)
  {
    fill(360,(i+frameCount)%100,100);
    rect(i*2,200,7,200);
  }
  fill(0);
  rect(200,200,200,200);
  for(var i=0;i<100;i+=5)
  {
    fill(360,(i+frameCount)%100,100);
    rect(200,200+i*2,200,7);
  }
  
  
  
  
fill(0);
rect(0,400,200,200);
 for(var i=0;i<100;i+=5)
  {
    fill(180,100,(i+frameCount)%100);
    rect(i*2,400,7,200);
  }
  fill(0);
  rect(200,400,200,200);
  for(var i=0;i<100;i+=5)
  {
    fill(180,100,(i+frameCount)%100);
    rect(200,400+i*2,200,7);
  }
  */