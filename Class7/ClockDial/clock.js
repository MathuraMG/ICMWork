function Clock(hour, minute, second, x, y) {


  this.hour = hour;
  this.minute = minute;
  this.second = second;
  this.x = x;
  this.y = y;

  this.drawClock = function() {

    if (hour < 12)
      flag = 1;
    else
      flag = 0

      //AM vs PM
      if (flag == 1)
        strokeClr = 0;
      else
        strokeClr = 255;

    //draw the actual clock
    strokeWeight(2);
    fill('#5c1f00');
    ellipse(this.x, this.y, 250, 250);

    //AM vs PM
    if (flag == 1)
      fill(255);
    else
      fill(0);


    ellipse(this.x, this.y, 230, 230);
    //draw the minute strokes on the clock
    for (var i = 0; i < 60; i++) {
      push();
      translate(this.x, this.y);
      rotate(i * (360 / 60));
      stroke(strokeClr);
      line(0, 110, 0, 115);
      pop();
    }
    //draw the hour stroke on the clock
    for (var i = 0; i < 12; i++) {
      push();
      translate(this.x, this.y);
      rotate(i * (360 / 12));
      stroke(strokeClr);
      strokeWeight(3);
      line(0, 105, 0, 115);
      pop();
    }

    //draw the second hand
    push();
    translate(this.x, this.y);
    rotate((360 / 60) * this.second - 180);
    stroke(255, 0, 0);
    strokeWeight(1);
    line(0, 0, 0, 80);
    pop();

    //draw the minute hand
    push();
    translate(this.x, this.y);
    rotate((360 / 60) * this.minute - 180);
    stroke(strokeClr);
    strokeWeight(3);
    line(0, -10, 0, 100);
    pop();

    //draw the hour hand

    //for AM
    if (this.hour >= 0 && this.hour <= 12) {
      push();
      translate(this.x, this.y);
      rotate((360 / 720) * (this.hour * 60 + this.minute) - 180);
      stroke(strokeClr);
      strokeWeight(3);
      line(0, -10, 0, 30);
      pop();
    } else {
      push();
      translate(this.x, this.y);
      this.hour = this.hour - 12;
      rotate((360 / 720) * (this.hour * 60 + this.minute) - 180);
      stroke(strokeClr);
      strokeWeight(3);
      line(0, -10, 0, 30);
      pop();
    }
  }
}