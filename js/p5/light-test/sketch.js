let img;
let lightR = 255;
let lightG = 255;
let lightB = 155;
let lightStrength = 0;

let finalBox = document.getElementById("textbox3")

function preload() {
    img = loadImage("images/pig-bg.png")
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
    background(0);
    let lightX = mouseX - width / 2;
    let lightY = mouseY - height / 2;
    pointLight(lightR, lightG, lightB, lightX, lightY, lightStrength);

    for (let x = 0; x <= width; x = x + 60 ) {
        for (let y = 0; y <= height; y = 60 + y) {
            fill(107);
            noStroke();
            square((x - windowWidth/2)-5, (y - windowHeight/2)-5, 50)
            image(img, x-windowWidth/2, y - windowHeight/2, 40, 40)
        }
    }
}

function mousePressed() {
    if (lightStrength !== 0) {
        lightStrength = 0;
        cursor();
    } else {
        lightStrength = 30;
        noCursor();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}