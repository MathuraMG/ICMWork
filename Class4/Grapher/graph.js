function graph(equation,r,g,b)
{
    this.eq = equation;
    this.r = r;
    this.g = g;
    this.b = b;
    this.toggle = 0;

    this.drawGraph = function()
    {
        push();
        translate(250,250);
        //rotate(180);
        stroke(this.r,this.g,this.b);
        noFill();
        prevx = 0;
        prevy = 0;
        for(var x=-250;x<250;x++)
        {
            prevx = x-1;
            prevy = y;

            y = Parser.evaluate(this.eq, {x: x})
            line(x,-y,prevx,-prevy);
            //point(x,500-y);
            // if(y>500)
        }

        pop();
    }
}

function equation(xin,eq)
{
   return(Parser.evaluate(eq, {x: xin}));
  //return(int(xin)+int(val));
}
