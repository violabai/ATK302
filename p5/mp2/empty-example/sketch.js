/*图像大小变量 */
let widthInfo = 300;   //
let heightInfo = 300;


let diameter;
let angle = 0;
let img,imgG;
let mic, vol;
function setup() {
    createCanvas(windowWidth,windowHeight);
    img = loadImage('img/Screenshot_20191003_170731.jpg'); // Load the image
    imgG = loadImage('img/timg.gif'); // Load the image
    mic = new p5.AudioIn();
    mic.start();

}

function draw() {
    background(255, 255, 255);
    textSize(70);
    textAlign(CENTER);
    text('You will never hit me', width / 2 ,120);
    // fill(255);
    if (mouseIsPressed) {
        image(img,[width - widthInfo] * 0.5, [height - heightInfo] * 0.5, widthInfo, heightInfo);
    } else {
        image(imgG,[width - widthInfo] * 0.5, [height - heightInfo] * 0.5, widthInfo, heightInfo);

    }
    vol = 0;
    vol = mic.getLevel();
    vol = vol * 1009;
    console.log(vol);


    if (vol > 2) {
        widthInfo--;
        heightInfo--;
    }else{
        widthInfo = 300 ;
        heightInfo = 300;
    }

    textSize(20);
    text('You will never hit me');

}

