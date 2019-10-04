let img; // Declare variable 'img'.
let a = 0.0;
let s = 0.0;
function setup() {
    createCanvas(1300, 700);
    img = loadImage('img/timg.jpeg'); // Load the image
    noStroke();
    rectMode(CENTER);
}

function draw() {
    // background(246, 246, 246);
    background(102);
    // Displays the image at its actual size at point (0,0)
    // image(img,350, 0,600);
    // Displays the image at point (0, height/2) at half size

    a = a + 0.03;
    s = cos(a) * 1;

    //Translate our rectangle from the origin to the middle of
    //the canvas, then scale it with 's'
    translate(30, 20);
    scale(s);
    fill(51);
    image(img,350, 0,600);

    //Translate and scale are accumulating, so this translate
    //moves the second rectangle further right than the first
    //and the scale is getting doubled. Note that cosine is
    //making 's' both negative and positive, thus it cycles
    //from left to right.



