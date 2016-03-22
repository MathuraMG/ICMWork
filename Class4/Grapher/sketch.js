var prevx;
var prevy;
var x;
var y;
var val = 0;
var eq="x";
var count = 0;
var graphs = [];
var xscale;
var yscale = 250;
var xaxis;
var yaxis;
var functionError = false;
var sliderDiv;

function setup() {
  createCanvas(800,500);
  background('#888888');
  angleMode(DEGREES);


  sliderDiv = createDiv('');
  sliderDiv.class('slider-container');

  var textx = createP('x-axis : ');
  textx.class('axis-label');
  textx.parent(sliderDiv);
  xaxis = createSlider(1,10,5);
  xaxis.class('slider');
  xaxis.parent(sliderDiv);

  var texty = createP('y-axis : ');
  texty.class('axis-label');
  texty.parent(sliderDiv);
  yaxis = createSlider(1,10,5);
  yaxis.class('slider');
  yaxis.parent(sliderDiv);

}

function draw() {
  //background(240);

  xscale=xaxis.value()*50;
  xscale_div = xscale/5;

  yscale=yaxis.value()*50;
  yscale_div = yscale/5;

  noStroke();
  fill(255);
  rect(0,0,500,500,10);

  stroke(0);
  noStroke();
  fill(225);
  rect(503,0,390,500,10);
  stroke(255,0,0);
  strokeWeight(1);

  //Horizontal lines
  stroke(240);
  for(var x=0;x<10;x++)
  {
    stroke(225);
    line(4,x*50,496,x*50);
    fill(180);
    noStroke();
    text(int(yscale-x*yscale_div),252,x*50+12);
  }
  fill(180);
  stroke(180);
  text(int(yscale-x*yscale_div),252,x*50-2);

  //Vertical lines
  stroke(240);
  for(var x=0;x<10;x++)
  {
    stroke(225);
    line(x*50,4 ,x*50,496);
    fill(180);
    noStroke();
    text(int(-xscale+x*xscale_div),x*50+2,262);
  }

  stroke(255,0,0);
  strokeWeight(1);
  line(250,4,250,496);
  line(4,250,496,250);

  for(var i=0;i<graphs.length;i++)
  {
    if(graphs[i].toggle == 0)
    {
      fill(graphs[i].r,graphs[i].g, graphs[i].b);
      stroke(graphs[i].r,graphs[i].g, graphs[i].b);
      graphs[i].drawGraph(xscale,yscale);
    }
    else
    {
      fill(180,180,180);
      stroke(180,180,180);
    }
    if(functionError == true)
    {
      console.log('yo');
      window.alert('Please enter a valid function');
      functionError = false;
      break;
    }
    else if(functionError == false)
    {
      text(graphs[i].eq,560,35+i*20)
      stroke(180);
      line(540,20+i*20,760,20+i*20);
    }

  }
  stroke(180);
  line(540,20+i*20,760,20+i*20);

}

function submit()
{
 eq = document.getElementById('constant').value;
 var i = graphs.length;
 var r = random(0,200);
 var g = random(0,200);
 var b = random(0,200);
 graphs[i] = new graph(eq,r,g,b);
 //stroke(255,0,0);
}

function reset()
{
  graphs = [];
}


function mousePressed()
{
    if (mouseX > 520)
    {
        for(var i = 0;i<graphs.length;i++)
        {
          if(mouseY>i*20 + 20 && mouseY<40+i*20 )
            {
              //print("potatoes");
            if(graphs[i].toggle == 1 )
            {
              graphs[i].toggle =0;
            }
            else
            {
              graphs[i].toggle = 1;
            }
          }
        }
    }
}

function popThisGraph(){
  graphs.pop();
  functionError = true;
  console.log('in here');
}
