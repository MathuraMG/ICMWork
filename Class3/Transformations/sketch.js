var x = 100;
var count = 50;
var xSize = 500;
var ySize = 500;
function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
}

function draw() {
  background(0,10);
  fill(255);
  /*
    push();
    translate(x, y);
    //EVERYTHING below this translate is affected
    ellipse(200, 0, 100, 100);
    rect(0, 0, 200, 100);
    y = y + 1

    fill(0, 255, 255);
    //to ensure that the translaate is "undone"
    translate(-x, -y);
    translate(300, 100);
    rotate(y); //everything rotates around the point of origin
    rect(0, 0, 50, 50);
    pop();

    fill(255, 255, 0);
    rect(0, 0, 10, 300);
    
    push()
    translate(350, 150);
    rotate(y); //everything rotates around the point of origin
    rect(0, 0, 50, 50);
    pop();
    */

//COOL BOXES ONE
  for (var i = 0; i < 12; i++) {
    for (var j = 0; j < 12; j++) {
      push()
      stroke(255/12*i,255/12*(j),255/23*(j+i));
      fill(255/12*i,255/12*(j),255/23*(j+i));
      translate(i * 50, j * 50);
      //scale(i*0.3,1);
      rotate(count); //everything rotates around the point of origin
      rect(0, 0, 45, 45);
      pop();
    }
  }


  count++;
}