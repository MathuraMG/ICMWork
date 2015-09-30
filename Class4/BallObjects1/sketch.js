var ballCount = 0 ;
var gameCount = 0;
var maxX = 500;
var maxY = 500;
var balls = [];
var bounce;
var gravity = 0.5;

var ellx;
var elly;


function setup() {
  createCanvas(500, 500);
 bounce = new p5.SoundFile('assets/bounce.wav',function(){print('hello');});    
 
  ellx =  random(50,450);
  elly =  random(300,400);
  loop1 = new loop1(ellx,elly,3);
}

function draw() {
  //The screen
  background(0);
  fill(200,0,0);
  stroke(200,0,0);
  ellipse(250,50,45,45);
  stroke(255,0,0);
  fill(255,0,0);
  ellipse(250,50,40,40);

  //The score
  stroke(255);
  fill(255);
  text('No. of balls: ' + ballCount,350,45);
  text('Through the loop: ' + gameCount, 350, 60);


 
 ellx = loop1.moveLoop();

  

  // The bouncing balls
  for(var i =0;i<balls.length;i++)
  {
    balls[i].displayBall();
  }  
}

function mousePressed()
{
  
  if(dist(mouseX, mouseY,250,50) <40)
    reset();
  else if(mouseY< elly -100)
  {
    var i = balls.length;
    var xspeed =  random(-4,3);
    var r = random(0,255);
    var g = random(0,255);
    var b = random(0,255);
    balls[i] = new ball(mouseX,mouseY,xspeed,8,r,g,b,bounce);
    ballCount++;
  }
 
}

function reset()
{
  balls = [];
  ballCount = 0;
  gameCount = 0;
}




