var namesArray = [];
var cat = 0 ;
var dog = 0 ;

function setup() {

  // Tabletop stuff, for getting google spreadsheet data in.
  let url = 'https://docs.google.com/forms/d/1TSK1yslzVpA9RdLibcF3Dcg5slDtkw7IWq6HDZwZJb0/edit'; // this is KEY of the URL from the sheet
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };
cat = loadImage('assets/download-1.jpg')
dog = loadImage('assets/download.jpg')

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);

}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called namesArray
  for (let i = 0; i < data.length; i++) {
    namesArray.push(new Circle(data[i].Name, data[i].Shape));
  }

}


function draw() {
  background('black');

  // // iterate through the namesArray and display the objects!
  for (let i = 0; i < namesArray.length; i++) {
    namesArray[i].display();
  }

}


// my circle class
function Circle(myName, myShape) {
  this.pos = createVector(random(width),random(height));
  this.name = myName;
  this.shape = myShape;


  this.display = function() {

 // put an ellipse here
 cat(this.pos.x, this.pos.y,100,100);
 dog(this.pos.x, this.pos.y,100,100);
  }

}
