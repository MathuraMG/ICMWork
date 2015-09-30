
function ball(xPos,yPos,xspeed,yspeed,r,g,b,bounce)
{
  this.xPos= xPos;
  this.yPos= yPos;
  this.yspeed= yspeed;
  this.xspeed= xspeed;
  this.isDown = 1;

  this.displayBall = function() {
    
    //Display the ball
    fill(r,g,b);
    noStroke();
    ellipse(this.xPos, this.yPos, 25, 25);

    //Move the ball
    this.yPos = this.yPos + this.yspeed;
    this.xPos = this.xPos + this.xspeed;
    this.yspeed = this.yspeed + gravity;
  
  

  //Bounce the ball
    if (this.yPos > maxY) {
      this.yPos = maxY;
      //println("GO BACK GO BACK!");
      this.isDown = 0;
      if(abs(this.yspeed)>4)
      {
        bounce.setVolume(abs(this.yspeed)/50);
        bounce.play();
      } 
      this.yspeed = this.yspeed * -0.8;
     // println(abs(this.yspeed));
    }
    if (this.xPos > maxX) {
      this.xPos = maxX;
      //println("GO LEFT!");
      this.xspeed = this.xspeed * -0.8;
    }
    if (this.xPos < 0) {
      this.xPos = 0;
      //println("GO LEFT!");
      this.xspeed = this.xspeed * -0.8;
    }
    if(abs(this.yspeed) <3.5 && this.yPos>495)
    {
      this.yspeed = 0;
      this.xspeed = 0;
    }

    //println(this.yspeed);
    if(dist(ellx,elly,this.xPos, this.yPos)<15 && this.isDown == 1)
      gameCount++;

    println(gameCount);

}
}