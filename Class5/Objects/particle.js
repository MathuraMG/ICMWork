/****************************************

  (x2,y2) --------- (x3,y3)
          \       /
           \     /
            \   /
             \ /
              V
        (x1,y1)

****************************************/





function triangleFr(x, y, size, flag, dir) {
  this.size = size;
  this.flag = flag;
  if (dir == 1) {

    this.x1 = x;
    this.y1 = y;
    this.x2 = x - size * 0.5;
    this.y2 = y - size * 0.866;
    this.x3 = x + size * 0.5;
    this.y3 = y - size * 0.866;
  } else if (dir == 2) {

    this.x1 = x - size * 0.5;
    this.y1 = y + size * 0.866;
    this.x2 = x - size;
    this.y2 = y;
    this.x3 = x;
    this.y3 = y;
  } else if (dir == 3) {
    this.x1 = x + size * 0.5;
    this.y1 = y + size * 0.866;
    this.x2 = x + size;
    this.y2 = y;
    this.x3 = x;
    this.y3 = y;
  }
  this.display = function() {

    triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
    return ({
      xup: (this.x3 + this.x2) / 2,
      yup: this.y2,
      xleft: (this.x1 + this.x2) / 2,
      yleft: (this.y1 + this.y2) / 2,
      xright: (this.x1 + this.x3) / 2,
      yright: (this.y1 + this.y3) / 2,
      size: this.size / 2
    });
  }
}



/****************************************

        SIZE B            SIZE C
        \    /             \  /
          \/                \/
          -------------------
          |                 |
          |                 |
          |                 |
          |     SIZE A      |
          |                 |
          |                 |
          |                 |
          -------------------
          
          A^2 = B^2 + C^2
          and 
          B > C 

****************************************/

function treeFr(x, y, ratio, angle, type, flag) {

  angleMode(DEGREES);
  var side = 100;
  this.size = size;
  this.processed = 0;
  this.angle = angle;
  this.x = x;
  this.y = y;
  this.type = type;
  this.flag = flag;
  this.ratio = ratio;


  this.display = function() {

    push();
    if (this.type == 1) {
      this.angle = angle - 36.7;
      this.ratio = 0.8 * ratio;
      translate(this.x, this.y);
      rotate(this.angle);
      scale(this.ratio);
      rect(0, -side, side, side);
    } else if (this.type == 2) {
      this.angle = angle + 53.3;
      this.ratio = 0.6 * ratio;
      translate(this.x, this.y);
      rotate(this.angle - 90);
      scale(this.ratio);
      rect(0, -side, side, side);
    }

    pop();

    if (type == 1) {
      return ({
        ratio: this.ratio,
        angle: this.angle,
        x1: this.x - side * this.ratio * cos(90 + this.angle),
        y1: this.y - side * this.ratio * sin(90 + this.angle),
        x2: this.x + side * this.ratio * (-cos(90 + this.angle) + sin(90 + this.angle)),
        y2: this.y - side * this.ratio * (cos(90 + this.angle) + sin(90 + this.angle)),
      });
    } else if (type == 2) {
      return ({
        ratio: this.ratio,
        angle: this.angle,
        x1: this.x + side * this.ratio * (-cos(this.angle) + sin(this.angle)),
        y1: this.y - side * this.ratio * (cos(this.angle) + sin(this.angle)),
        x2: this.x + side * this.ratio * sin(this.angle),
        y2: this.y - side * this.ratio * cos(this.angle)
      });
    } else if (type == 0) {
      return ({
        ratio: this.ratio,
        angle: this.angle,
        x1: this.x - side * this.ratio * cos(this.angle + 90),
        y1: this.y - side * this.ratio * sin(this.angle + 90),
        x2: this.x + side * this.ratio * cos(this.angle),
        y2: this.y - side * this.ratio * sin(this.angle) - side * this.ratio * cos(this.angle)
      });
    }
  }
}





function triangleFr2(x, y, size, flag, dir) {
  this.size = size;
  this.flag = flag;
  if (dir == 1) {

    this.x1 = x;
    this.y1 = y;
    this.x2 = x - size * 0.5;
    this.y2 = y - size * 0.866;
    this.x3 = x + size * 0.5;
    this.y3 = y - size * 0.866;
  } else if (dir == 2) {

    this.x1 = x - size * 0.5;
    this.y1 = y + size * 0.866;
    this.x2 = x - size;
    this.y2 = y;
    this.x3 = x;
    this.y3 = y;
  } else if (dir == 3) {
    this.x1 = x + size * 0.5;
    this.y1 = y + size * 0.866;
    this.x2 = x + size;
    this.y2 = y;
    this.x3 = x;
    this.y3 = y;
  }
  this.display = function() {
    //stroke(255);
    //noFill();
    fill(random(0, 210), random(0, 210), random(0, 210));
    noStroke();

    triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
    return ({
      xup: (this.x3 + this.x2) / 2,
      yup: this.y2,
      xleft: (this.x1 + this.x2) / 2,
      yleft: (this.y1 + this.y2) / 2,
      xright: (this.x1 + this.x3) / 2,
      yright: (this.y1 + this.y3) / 2,
      size: this.size / 2
    });
  }
}