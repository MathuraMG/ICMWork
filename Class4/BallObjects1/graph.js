function graph(equation,r,g,b)
{
    this.eq = equation;
    this.r = r;
    this.g = g;
    this.b = b;
    this.x = 0;
    this.y = 0;
    this.prevx = 0;
    this.prevy = 0;
    this.drawGraph = function()
    {
        push();
        translate(250,250);
        //rotate(180);
        stroke(this.r,this.g,this.b);
        noFill();
        this.prevx = 0;
        this.prevy = 0;
        for(var this.x=-250;this.x<250;this.x++)
        {
            this.prevx = this.x-1;
            this.prevy = this.y;

            this.y = equation(this.x,this.eq);
            line(this.x,-this.y,this.prevx,-this.prevy);
            //point(x,500-y);
            // if(y>500)
        }

        pop();
    }
}