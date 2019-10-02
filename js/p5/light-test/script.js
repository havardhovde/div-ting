let img;

function preload() {
    img = loadImage("images/pig-bg.png")
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    // noCursor();
}

function draw() {
    background(0);
    let locX = mouseX - width / 2;
    let locY = mouseY - height / 2;
    pointLight(255, 255, 155, locX, locY, 30);

    for (let x = 0; x <= width; x = x + 60 ) {
        for (let y = 0; y <= height; y = 60 + y) {
            if (x == 10 && y == 10) {
                fill(196, 35, 35);
                console.log("test");
            } else {
                fill(107);
                noStroke();
                square((x - windowWidth/2)-5, (y - windowHeight/2)-5, 50)
                image(img, x-windowWidth/2, y - windowHeight/2, 40, 40)
            }
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}