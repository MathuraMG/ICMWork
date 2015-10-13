var timestamp = 0;
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var timeZone;
var backImg;

var view = 1;
var toggle;

var hour;
var second;
var minute;

function preload() {
  backImg = loadImage('images/paisley.png');
}

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);

  //create Dropdown to select time Zone
  timeZone = createSelect();
  timeZone.option('New York', 1);
  timeZone.option('India', 2);
  timeZone.option('Tokyo', 3);
  timeZone.option('California', 4);

  //create Toggle button
  //toggle = createButton('Toggle View');



}

function draw() {

  image(backImg, 0, 0);
  image(backImg, 0, 300);
  image(backImg, 300, 0);
  image(backImg, 300, 300);
  //toggle.mousePressed(switchView);

  nowDate = new Date();
  //dateString = nowDate.getDate() + '-' + Number(nowDate.getMonth() + 1) + '-' + nowDate.getFullYear();
  //timeString = nowDate.getHours() + ':' + nowDate.getMinutes() + ':' + nowDate.getSeconds();

  //text(dateString, 10, 10);
  //text(timeString, 10, 30);

  hour = Number(nowDate.getHours());
  minute = Number(nowDate.getMinutes());
  second = Number(nowDate.getSeconds());

  if (view == 1) {
    drawClock(hour, minute, second, timeZone.value());
  } else {
    drawClocks(hour, minute, second);
  }


  //text(timeZone.value(), 10, 10);
  year = nowDate.getYear();
  month = nowDate.getMonth();
  date = nowDate.getDate();

  calendar1 = new Calendar(year, month, date, 700, 300);
  //calendar1.

}

function drawClock(hour, minute, second, zone) {
  if (zone == 1) {
    hour = hour;
    minute = minute;
    textZone = 'New York';
  } else if (zone == 2) {
    if (minute + 30 > 60)
      hour = hour + 1;
    minute = (minute + 30) % 60;
    hour = (hour + 9) % 24;
    textZone = 'India';

  } else if (zone == 3) {
    hour = (hour + 13) % 24;
    minute = minute;
    textZone = 'Tokyo';
  } else if (zone == 4) {
    hour = (hour - 3) % 24;
    minute = minute;
    textZone = 'California';
  }

  clock1 = new Clock(hour, minute, second, 300, 300);
  clock1.drawClock();
  textSize(20);
  text(textZone,250,450);
}

function drawClocks(hour, minute, second) {
  {
    hour1 = hour;
    minute1 = minute;
    clock1 = new Clock(hour1, minute1, second, 150, 150);
    clock1.drawClock();
    textSize(20);
    fill(255);
    text('New York', 110,300)
  } {
    if (minute + 30 > 60)
      hour2 = hour + 1;
    minute2 = (minute + 30) % 60;
    hour2 = (hour + 9) % 24;
    clock2 = new Clock(hour2, minute2, second, 150, 450);
    clock2.drawClock();
    textSize(20);
    fill(255);
    text('India', 110,590)

  } {
    hour3 = (hour + 13) % 24;
    minute3 = minute;
    clock3 = new Clock(hour3, minute3, second, 450, 450);
    clock3.drawClock();
    textSize(20);
    fill(255);
    text('California', 410,300)
  } {
    hour4 = (hour - 3) % 24;
    minute4 = minute;
    clock4 = new Clock(hour4, minute4, second, 450, 150);
    clock4.drawClock();
    textSize(20);
    fill(255);
    text('Tokyo', 410,590)
  }


}

function switchView() {
  if (view == 1) {
    view = 2;
  } else view = 1;
}