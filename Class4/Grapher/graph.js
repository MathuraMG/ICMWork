function graph(equation,r,g,b)
{
    this.eq = equation;
    this.r = r;
    this.g = g;
    this.b = b;
    this.toggle = 0;

    this.drawGraph = function(xscale,yscale)
    {
        push();
        translate(250,250);
        //rotate(180);
        stroke(this.r,this.g,this.b);
        noFill();
        prevx = 0-xscale;
        xratio = 250/xscale;
        yratio = 250/yscale;
        prevy = Parser.evaluate(this.eq, {x: prevx});


        for(var x=(0-xscale+1);x<xscale;x++)
        {
            if(functionError == true)
              break;
            y = Parser.evaluate(this.eq, {x: x});
            //print('hello'  + y);
            line(x*xratio,-y*yratio,prevx*xratio,-prevy*yratio);
            prevx = x-1;
            prevy = y;
        }
        pop();
    }
}

function equation(xin,eq)
{
   return(Parser.evaluate(eq, {x: xin}));
  //return(int(xin)+int(val));
}
