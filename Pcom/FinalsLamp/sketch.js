function setup() {
  createCanvas(300, 300);
  background(255);
  a = createSlider(0, 100,50);
  
    amp = new p5.Amplitude;
  amp.smooth(0.8);
  mic = new p5.AudioIn;
  mic.start();
  amp.setInput(mic)
}

function draw() {
   var level = amp.getLevel();
  var satSound = map(level, 0, 0.5, 0, 100);
  background(0,50);
  if (a.value() < 10) {
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        h = 200;
        s = 0;
        fillBlock(100 * i, 100 * j, 100, 100, h, s);

      }
    }
  } else if (a.value() > 20 && a.value() < 80) {
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        h = (j+frameCount/10)%36;
        h=h*10;
        s = 100;
        fillBlock(100 * i, 100 * j, 100, 100, h, s);

      }
    }
  }
   else if (a.value() > 90) {
     
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        h = 200;
        s = satSound;
        fillBlock(100 * i, 100 * j, 100, 100, h, s);

      }
    }
  }

}

function fillBlock(x, y, width, height, h, s) {
  colorMode(HSB);
  
  for (var i = 0; i < 5; i++) {
    noStroke();
    fill(h, s, 10 + i * 15);
    rect(x + 5 * i, y + 5 * i, 100 - 10 * i, 100 - 10 * i);
  }

}