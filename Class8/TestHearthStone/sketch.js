//https://community-nyc-subway-data.p.mashape.com/station
var stations = [];
var canvas;
var timeTotal = [];
var mouseMove =1;
var displayStation = '';

function preload() {
  img = loadImage('Capture.jpg');
}

function getAllStations() {
  url = 'https://community-nyc-subway-data.p.mashape.com/stations';

  var output = $.ajax({
    url: url, // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
    type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
    data: {}, // Additional parameters here
    dataType: 'json',
    success: function(data) {


      for (var i = 0; i < data.result.length; i++) {

        //console.log(data.result[i].id);
        stations.push(data.result[i].id);
        getLatLon(data.result[i].id);
      }
      //print(stations.length);


    },
    error: function(err) {
      alert(err);
    },
    beforeSend: function(xhr) {
      xhr.setRequestHeader("X-Mashape-Authorization", "H4SQcm6kLxmshiMuHXhRbD4ZUPTjp1kml7JjsnKYmeSOboYM60"); // Enter here your Mashape key
    }
  });

}

function getLatLon(stationId) {
  url = 'https://community-nyc-subway-data.p.mashape.com/stop?id=' + String(stationId);

  var output = $.ajax({
    url: url, // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
    type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
    data: {}, // Additional parameters here
    dataType: 'json',
    success: function(data) {

      console.log(data.result.lon);


    },
    error: function(err) {
      alert(err);
    },
    beforeSend: function(xhr) {
      xhr.setRequestHeader("X-Mashape-Authorization", "qelU7OK8DsmsheJxYsSjpNOsxN1mp10Q7NmjsneaSIZqglccdK"); // Enter here your Mashape key
    }
  });
}

function getTrainAtTime(hour, time) {
  url1 = 'https://community-nyc-subway-data.p.mashape.com/times?hour=';
  url2 = '&minute=';
  if (hour < 10)
    hour = '0' + String(hour);
  if (minute < 10)
    minute = '0' + String(minute);
  url = url1 + hour + url2 + time;

  var outputArr = [];

  var output = $.ajax({
    url: url, // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
    type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
    data: {}, // Additional parameters here
    dataType: 'json',
    success: function(data) {
      background(0);
      image(img,50,1.5,391,496.5);
      stations = [];
      for (var i = 0; i < data.result.length; i++) {
        //outputArr.push(data.result[i]);
       
        //console.log(data.result[i].lat + ',' + data.result[i].lon);
        //latMap = map(data.result[i].lat, 40.512, 40.90313, 100, 882);
        //lonMap = map(data.result[i].lon, -74.251961, -73.755405, 3, 996);
        latMap = map(data.result[i].lat,40.90313, 40.512,  50, 441);
        lonMap = map(data.result[i].lon, -74.251961, -73.755405,  1.5, 496.5);
        fill(0);
        stroke(0);
        strokeWeight(4);
        stations[i] = new station(lonMap, latMap, data.result[i].id, data.result[i].name);
         //push();
      //angleMode(DEGREES);
      //translate(500,500);
      //rotate(-90);
      //angleMode(RADIANS);
      stations[i].draw(); //point(latMap, lonMap);
      //
      //pop();
        
      }
      //console.log(hour);


    },
    error: function(err) {
      alert(err);
    },
    beforeSend: function(xhr) {
      xhr.setRequestHeader("X-Mashape-Authorization", "H4SQcm6kLxmshiMuHXhRbD4ZUPTjp1kml7JjsnKYmeSOboYM60"); // Enter here your Mashape key
    }
  });


}

function setup() {
  canvas = createCanvas(500, 500);
  fill(0);
  rect(0, 0, 500, 500);
  image(img,50,1.5,391,496.5);
  
  time = createSlider(0, 23, 12);
  btn = createButton('Map');
  btn.mousePressed(doIt);
  time.mouseReleased(doIt);
  doIt(12, 25);
}

function draw() {
  //doIt(time.value(), 25);
  stationName = document.getElementById('stationName');
  stationName.innerHTML = displayStation;
  time1 = document.getElementById('stationTime');
  time1.innerHTML = hour + 'hrs' ;
}

function doIt() {
  mouseMove =1;
  hour = time.value();
  minute = 25;
  getTrainAtTime(hour, minute);
  //  console.log(time.value()+ ',' + hour);


}

function mousePressed() {
  console.log('potatoes');
  //for(var i=0;i<stations.length;i++){ print(stations[i].id);}
  for (var j = 0; j < stations.length; j++) {
    // print(j);
    // print(dist(stations[j].lat, stations[j].lon, mouseX, mouseY));
    //   print(':');
    //   print(mouseX + ',' + mouseY);
    if (dist(stations[j].lat, stations[j].lon, mouseX, mouseY) < 5)
      getStationDetails(stations[j].id);
    //break;
  }
}

function getStationDetails(num) {
  mouseMove = 0;
  //print(num);

  url = 'https://community-nyc-subway-data.p.mashape.com/api?id=' + String(num);
  timeTotal = [];
  for (var a = 0; a < 24; a++) {
    timeTotal[a] = 0;
  }
  var output = $.ajax({
    url: url, // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
    type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
    data: {}, // Additional parameters here
    dataType: 'json',
    success: function(data) {
      background(0);
      stations = [];
      //print(data.result.arrivals.length);
      for (var i = 0; i < data.result.arrivals.length; i++) {
        a = data.result.arrivals[i];
        a1 = a.split(':');
        //print('yo');
        index = Number(a1[0]);
        //print(a1[0]);
        timeTotal[index]++;
      }
      //print(timeTotal);
      for (var a = 0; a < 24; a++) {
        fill(255);
        fill(20,255,20);
        if(timeTotal[a]<250)fill(255,255,20);
         if(timeTotal[a]<50) fill(255,0,0);
        rect(21 * a + 5, 480, 10, -timeTotal[a] );
        fill(255);
        text(a,21*a+5,495)
      }
      stroke(255);
      strokeWeight(1);
      text(data.result.name,20,20);


    },
    error: function(err) {
      alert(err);
    },
    beforeSend: function(xhr) {
      xhr.setRequestHeader("X-Mashape-Authorization", "H4SQcm6kLxmshiMuHXhRbD4ZUPTjp1kml7JjsnKYmeSOboYM60"); // Enter here your Mashape key
    }
  });
}


function mouseMoved()
{
  if(mouseMove == 1)
  {
    for (var j = 0; j < stations.length; j++) {
    
    if (dist(stations[j].lat, stations[j].lon, mouseX, mouseY) < 5)
      displayStation = stations[j].name;
    //break;
  }
  }
}