var mic, recorder, soundFile;
var state = 0;
var sounds = [];
var number = 0;
var x = 0;
var y = 0;
var pressed = [
  [0, 0, 0, 0],
  [0, 0, 0, 0]
];


function setup() {
  background(0);
  fill(255);
  stroke(255);
  text('Hold a key down to record your beat on it!', 20, 20);

  colorMode(HSB);
  // create an audio in
  mic = new p5.AudioIn();

  // prompts user to enable their browser mic
  mic.start();

  // create a sound recorder
  recorder = new p5.SoundRecorder();

  // connect the mic to the recorder
  recorder.setInput(mic);

  // this sound file will be used to
  // playback & save the recording
  for (var i = 0; i < 8; i++) {
    sounds[i] = new p5.SoundFile();
  }


  createCanvas(200, 400);
  for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 4; j++) {
      hue = (2 * j + i) * 360 / 8;
      for (var k = 0; k < 10; k++) {
        noStroke();
        fill(hue, 100, 10 + 7 * k);
        rect(i * 100 + 2 * k, j * 100 + 2 * k, 100 - 4 * k, 100 - 4 * k);
      }
    }
  }



}

function draw() {
  for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 4; j++) {
      hue = (2 * j + i) * 360 / 8;
      for (var k = 0; k < 10; k++) {
        noStroke();
        fill(hue, 100, 10 + 7 * k);
        rect(i * 100 + 2 * k, j * 100 + 2 * k, 100 - 4 * k, 100 - 4 * k);
        colorMode(RGB);
        fill(20, 20, 20, pressed[i][j]);
        colorMode(HSB);
        rect(i * 100, j * 100, 100, 100);

      }
    }
  }
  print(pressed[x][y]);
}

function mousePressed() {
  x = floor(mouseX / 100);
  y = floor(mouseY / 100);
  pressed[x][y] = 20;
  number = 2 * y + x;
  for (var i = 0; i < 8; i++) {
    sounds[i].amp(0);
  }
  // make sure user enabled the mic
  if (mic.enabled) {
   
    recorder.record(sounds[number]);
    setTimeout(function(){stopRecord();},2000)
  }
  
}

function stopRecord() {

  //pressed[x][y] = 0;

  recorder.stop();
  for (var i = 0; i < 8; i++) {
    sounds[i].amp(0.3);
  }
  sounds[number].play(); // play the result!
  sounds[number].loop();
}