let img;
let lightR = 0;
let lightG = 0;
let lightB = 0;

function preload() {
    img = loadImage("images/pig-bg.png")
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    }

function draw() {
    background(0);
    let locX = mouseX - width / 2;
    let locY = mouseY - height / 2;
    pointLight(lightR, lightG, lightB, locX, locY, 30);

    for (let x = 0; x <= width; x = x + 60 ) {
        for (let y = 0; y <= height; y = 60 + y) {
            if (x == 10 && y == 10) {
                tint(196, 35, 35);
                // fill(107);
                noStroke();
                square((x - windowWidth/2)-5, (y - windowHeight/2)-5, 50)
                image(img, x-windowWidth/2, y - windowHeight/2, 40, 40)
            } else {
                fill(107);
                noStroke();
                square((x - windowWidth/2)-5, (y - windowHeight/2)-5, 50)
                image(img, x-windowWidth/2, y - windowHeight/2, 40, 40)
            }
        }
    }
}

function mousePressed() {
    lightR = 255;
    lightG = 255;
    lightB = 155;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

// for (let x = 0; x <= width; x = x + 60 ) {
//     for (let y = 0; y <= height; y = 60 + y) {
//         if (x == 10 && y == 10) {
//             tint(196, 35, 35);
//             console.log("test");
//         } else {
//             fill(107);
//             noStroke();
//             square((x - windowWidth/2)-5, (y - windowHeight/2)-5, 50)
//             image(img, x-windowWidth/2, y - windowHeight/2, 40, 40)
//         }
//     }
// }