/*
 * @name Video Capture
 * @frame 710,240
 * @description <p><em><span class="small"> To run this example locally, you will need the
 * <a href="http://p5js.org/reference/#/libraries/p5.dom">p5.dom library</a>
 * at least one video file, and a running <a href="https://github.com/processing/p5.js/wiki/Local-server">local server</a>.</span></em></p><br><br>
 * Capture video from the webcam and display
 * on the canvas as well with invert filter. Note that by
 * default the capture feed shows up, too. You can hide the
 * feed by uncommenting the capture.hide() line.
 */
var capture;
var count = [];
var brTotal;
var freq = [261, 329, 392, 440, 523];
var osc = [];
var totNotes = 5;
var vol = [];
var total = 0;

function preload(){
  notes = [loadSound('Violin/c3.mp3'), loadSound('Violin/e3.mp3'), loadSound('Violin/g3.mp3'), loadSound('Violin/a4.mp3'), loadSound('Violin/c4.mp3')];
}

function setup() {
  createCanvas(320, 480);
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  capture.hide();

  for (var i = 0; i < 360; i++) {
    count[i] = 0;
  }
  for (var i = 0; i < totNotes; i++) {
    vol[i] = 0;
    notes[i].loop();
    notes[i].setVolume(0);
  }

  /* Music */
  for (var i = 0; i < totNotes; i++) {
    osc[i] = new p5.Oscillator();
    osc[i].setType('sine');
    osc[i].freq(freq[i]);
    osc[i].amp(0);
    osc[i].start();
  }

}

function draw() {
  total = 0;
  //brTotal = 0;
  background(255);
  for (var i = 0; i < 360; i++) {
    count[i] = 0;
  }
  for (var i = 0; i < totNotes; i++) {
    vol[i] = 0;
  }

  image(capture, 0, 0, 320, 240);
  capture.loadPixels();
  p = capture.get(mouseX * 2, mouseY * 2);

  fill(0);
  noStroke();
  rect(0, 240, 320, 20);

  for (var i = 0; i < capture.height; i += 10) {
    for (var j = 0; j < capture.width; j += 10) {
      colour = capture.get(i, j);

      val = hue(color(colour));
      count[val]++;
      total++;

    }
  }
  print(total);


  noStroke();

  for (var i = 1; i < 360; i++) {
    colorMode(HSB);
    noFill();
    stroke(i, 50, 50);
    line(i, 480, i, 480 - count[i]);
    if (i <= 72) {
      vol[0] += count[i];
    } else if (i <= 144 && i > 72) {
      vol[1] += count[i];
    } else if (i <= 216 && i > 144) {
      vol[2] += count[i];
    } else if (i <= 288 && i > 216) {
      vol[3] += count[i];
    } else if (i <= 360 && i > 288) {
      vol[4] += count[i];
    }
  }

  for (var i = 0; i < totNotes; i++) {
    vol[i] = map(vol[i], 0, 1000, 0, 200);
    notes[i].amp(vol[i] / 1000);
  }


}