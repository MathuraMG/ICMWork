
function loop1(xPos,yPos,xspeed)
{


  this.xPos= xPos;
  this.yPos= yPos;
  this.xspeed= xspeed;

  this.moveLoop = function() {
    
       //The loop
    stroke(255);
    noFill();
    strokeWeight(4);
    ellipse(this.xPos,this.yPos, 60,15);

    //Move the loop

    this.xPos = this.xPos + this.xspeed;
  
  
//Reverse the loop
    if (this.xPos > maxX) {
      this.xPos = maxX;
      //println("GO LEFT!");
      this.xspeed = this.xspeed * -1;
    }
    if (this.xPos < 0) {
      this.xPos = 0;
      //println("GO LEFT!");
      this.xspeed = this.xspeed * -1;
    }
  return(this.xPos);

  }
}