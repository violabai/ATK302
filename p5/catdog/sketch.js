var namesArray = [];
var cat = 0;
var dog = 0;

function setup() {

  // Tabletop stuff, for getting google spreadsheet data in.
  let url = '1kegGMiIHPyYgtKinY3BrR1GOz54fnc5hzAi0ZMfY5vE'; // this is KEY of the URL from the sheet
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };


  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);

  cat = loadImage('assets/download-1.jpg')
  dog = loadImage('assets/download.jpg')

}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called namesArray
  for (let i = 0; i < data.length; i++) {
    namesArray.push(new Circle(data[i].name, data[i].choose));
  }

}


function draw() {
  background('black');

  // // iterate through the namesArray and display the objects!
  for (let i = 0; i < namesArray.length; i++) {
    namesArray[i].display();
    namesArray[i].drive();
  }

}


// my circle class
function Circle(myName, myAnimal) {
  this.pos = createVector(random(width), random(height));
  this.name = myName;
  this.animal = myAnimal;
  this.vel = createVector(random(-5, 5), random(-5, 5));

  this.display = function() {

    if (this.animal == 'dog') {
      image(dog, this.pos.x, this.pos.y, 100, 100);

    } else {
      image(cat, this.pos.x, this.pos.y, 100, 100);
    }

  }
  this.drive = function() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}
