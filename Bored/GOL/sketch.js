var matrix = [];
var matrixTemp = [];
var cwidth = 500;
var cheight = 500;
var res = 10;
var startBtn;
var play = false;
var clearBtn;

function setup() {
  createCanvas(cwidth, cheight);
  background(255);

  createMatrix(cwidth, cheight, matrix);
  createMatrix(cwidth, cheight, matrixTemp);
  //Sample initial set up
  // for (var i = 0; i < 10; i++) {
  //   matrix[20 + i][25] = 1;
  // }
  for (var i = 0; i < cwidth / res; i++) {
    for (var j = 0; j < cheight / res; j++) {
      if (matrix[i][j] == 1) {

        fill(255, 0, 0);
        rect(i * res, j * res, res, res);
      } else {
        push();
        colorMode(HSB);
        fill((i + j)% 360, 100, 100);
        rect(i * res, j * res, res, res);
        pop();
      }
    }
  }

  var heading = createP('Drag mouse over grid to create initial setup');
  heading.style('color', '#ffffff');
  heading.position(10, 0);
  heading.style('font-family', 'Raleway');
  heading.style('font-weight', '200');
  heading.style('font-size', '24px');

  startBtn = createButton('Press to Play');
  startBtn.mousePressed(startGame);
  startBtn.position(10, 60);

  clearBtn = createButton('Clear');
  clearBtn.mousePressed(clearGame);
  clearBtn.position(10, 90);

  var credits = createA('http://www.bitstorm.org/gameoflife/', 'Credits: John Conway, Bitstorm');
  credits.style('color', '#ffffff');
  credits.position(10, windowHeight - 20);
  credits.style('font-family', 'Raleway');
  credits.style('font-weight', '200');
  credits.style('font-size', '12px');
}

function draw() {
  background(255);
  drawMatrix(cwidth, cheight);
  for (var i = 0; i < cwidth / res; i++) {
    for (var j = 0; j < cheight / res; j++) {
      if (matrix[i][j] == 1) {

        push();
        colorMode(HSB);
        fill((i + j) % 360, 100, 100);
        rect(i * res, j * res, res, res);
        pop();

      }
    }
  }
  if (play == true) {
    if (frameCount % 10 == 0) {
      game();
    }
  }
}

function createMatrix(x, y, m) {
  for (var i = 0; i < x; i++) {
    m[i] = new Array(y);
  }

  for (var i = 0; i < x; i++) {
    for (var j = 0; j < y; j++) {
      m[i][j] = 0;
    }
  }
}

function drawMatrix(x, y) {
  stroke(0);
  for (var i = 0; i < x; i++) {
    line(0, i * res, x, i * res);
    line(i * res, 0, i * res, y);
  }
}

function replaceMatrix(matrix, matrixTemp) {
  for (var i = 0; i < cwidth / res; i++) {
    for (var j = 0; j < cheight / res; j++) {
      matrix[i][j] = matrixTemp[i][j];
    }
  }
}

function startGame() {
  play = !play;
  //print(play);
  //print(startBtn.value());
  if (play == true) {
    startBtn.html('Press to Pause');
  } else if (play == false) {
    startBtn.html('Press to Play');
  }

}

function game() {
  for (var i = 1; i < cwidth / res; i++) {
    for (var j = 1; j < cheight / res; j++) {
      count = 0;
      for (var a = -1; a < 2; a++) {
        for (var b = -1; b < 2; b++) {
          count = count + matrix[i + a][j + b];
        }
      }
      if (matrix[i][j] == 0 && count == 3) {
        matrixTemp[i][j] = 1;
      } else if (matrix[i][j] == 1 && count < 3) {
        matrixTemp[i][j] = 0;
      } else if (matrix[i][j] == 1 && count > 4) {
        matrixTemp[i][j] = 0;
      } else {
        matrixTemp[i][j] = matrix[i][j];
      }
    }
  }
  replaceMatrix(matrix, matrixTemp)
}

function mouseDragged() {
  //print(mouseX + ',' + mouseY);
  var xGrid = floor(mouseX / res);
  var yGrid = floor(mouseY / res);
  matrix[xGrid][yGrid] = 1;
}

function clearGame() {
  for (var i = 0; i < cwidth / res; i++) {
    for (var j = 0; j < cheight / res; j++) {
      matrix[i][j] = 0;
    }
  }
}