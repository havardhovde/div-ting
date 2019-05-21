let img1 = [
    {src: "img/blueSquare.png", name: "blueSquare"},
    {src: "img/redSquare.png", name: "redSquare"},
    {src: "img/greenSquare.png", name: "greenSquare"},
    {src: "img/yellowSquare.png", name: "yellowSquare"},
    {src: "img/purpleSquare.png", name: "purpleSquare"},
    {src: "img/orangeSquare.png", name: "orangeSquare"},
];

img1 = img1.concat(img1)

function shuffle(array) {   
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffle(img1)

for(let i = 0; i <= 11; i++) {
    document.querySelector(`#img${i}`).innerHTML = `<img src="${img1[i].src}"></img>`;
}