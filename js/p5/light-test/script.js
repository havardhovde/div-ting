function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
    background(0);
    let locX = mouseX - width / 2;
    let locY = mouseY - height / 2;
    pointLight(255, 255, 255, locX, locY, 30);
    noStroke();

    for (let x = 0; x <= width; x = x + 60 ) {
        for (let y = 0; y <= height; y = 60 + y) {
        
        circle(x - windowWidth/2, y - windowHeight/2, 50)
        }
    }
}