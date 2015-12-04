function station(lat,lon,id,name)
{
  this.lat = lat;
  this.lon =lon;
  this.id = id;
  this.name = name;
  
  this.draw = function()
  {
    noStroke();
    fill(0,0,0,50);///,255,255,100)
    ellipse(this.lat,this.lon,4,4);
    
  }
}