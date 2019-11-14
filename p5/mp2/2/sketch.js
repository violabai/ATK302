/*图像大小变量 */
let widthInfo = 250; //
let heightInfo = 250;


let diameter;
let angle = 0;
let img, imgG;
let mic, vol;

function setup() {
    createCanvas(windowWidth, windowHeight);
    img = loadImage('img/Screenshot_20191003_170731.jpg'); // Load the image
    imgG = loadImage('img/timg.gif'); // Load the image
    mic = new p5.AudioIn();
    mic.start();

}

function draw() {
    background(255, 255, 255);

    if (mouseIsPressed) {
        image(img, [width - widthInfo] * 0.5, [height - heightInfo] * 0.5, widthInfo, heightInfo);
    } else {
        image(imgG, [width - widthInfo] * 0.5, [height - heightInfo] * 0.5, widthInfo, heightInfo);

    }

    print(mouseIsPressed);

    //     break;
    // case 1:

    vol = 0;
    vol = mic.getLevel();
    vol = vol * 100;
    console.log(vol);
    switch (vol >= 2) {

        case true:
                widthInfo--;
                heightInfo--;
                    // widthInfo = 50;
                    // heightInfo = 50;
                break;
        case false:
                // widthInfo++;
                // heightInfo++;
                widthInfo = 250;
                heightInfo = 250;
            // if (widthInfo === 250) {
            //     return;
            // }
            break;

    }

    textSize(50);
    text('You will never hit me',450,80);
    fill(0, 102, 153);
}
