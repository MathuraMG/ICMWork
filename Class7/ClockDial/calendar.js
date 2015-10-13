function Calendar(year, month, date, x, y) {


  this.year = year;
  this.month = month;
  this.date = date;
  this.x = x;
  this.y = y;

  this.drawCalendar = function() {
    //draw the actual calendar
    strokeWeight(2);
    fill('#ffffff');
    rect(this.x, this.y, 100, 100);
  
    //write the month
    text(months[this.month], this.x+20,this.y+10);
    //write the date
    text(date, this.x+40,this.y+50);
    
  }
}