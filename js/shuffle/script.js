let img1 = [
    {src: "img/blueSquare.png", name: "blueSquare"},
    {src: "img/redSquare.png", name: "redSquare"},
    {src: "img/greenSquare.png", name: "greenSquare"},
    {src: "img/yellowSquare.png", name: "yellowSquare"},
    {src: "img/purpleSquare.png", name: "purpleSquare"},
    {src: "img/orangeSquare.png", name: "orangeSquare"},
];

let img2 = [];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffle(img1)

for(let i = 0; i <= 11; i++) {
    if(i <= 5) {
        document.querySelector(`#img${i}`).innerHTML = `<img src="${img1[0].src}"></img>`;
        img2.push(img1.splice(0,1)[0]);
    } 
    shuffle(img2);
    if(i > 5) {
        document.querySelector(`#img${i}`).innerHTML = `<img src="${img2[0].src}"></img>`;
        img1.push(img2.splice(0,1)[0]);
    }
}