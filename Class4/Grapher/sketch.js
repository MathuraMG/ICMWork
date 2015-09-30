var prevx;
var prevy;
var x;
var y;
var val = 0;
var eq="x";
var count = 0;
var graphs = [];


function setup() {
  createCanvas(600,500);
   background(0);
   angleMode(DEGREES);
}

function draw() {
  //background(240);
  stroke(0);
  strokeWeight(4);
  fill(255);
  rect(0,0,500,500);

  stroke(0);
  strokeWeight(4);
  fill(225);
  rect(510,0,90,500);
  stroke(255,0,0);
  strokeWeight(1);

  line(250,4,250,496);
  line(4,250,496,250);

  //Horizontal lines
  stroke(240);
  for(var x=0;x<10;x++)
  {
    line(4,x*50,496,x*50);
  }

  //Vertical lines
  stroke(240);
  for(var x=0;x<10;x++)
  {
    line(x*50,4 ,x*50,496);
  }

   stroke(255,0,0);
  strokeWeight(1);
  line(250,4,250,496);
  line(4,250,496,250);
    
  for(var i=0;i<graphs.length;i++)
  {
    if(graphs[i].toggle == 0)
      graphs[i].drawGraph();
    fill(graphs[i].r,graphs[i].g, graphs[i].b);
    stroke(graphs[i].r,graphs[i].g, graphs[i].b);
    text(graphs[i].eq,520,20+i*20)
  }
  
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
              graphs[i].r = graphs[i].r - 120;
              graphs[i].g = graphs[i].g - 120;
              graphs[i].b = graphs[i].b - 120;
            }
            else
            {
              graphs[i].toggle = 1;
              graphs[i].r = graphs[i].r + 120;
              graphs[i].g = graphs[i].g + 120;
              graphs[i].b = graphs[i].b + 120;
            }
          }
         // print(graphs[i].toggle);
        }

            //print(mouseY )
    }
}