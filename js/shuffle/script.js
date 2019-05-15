let img = [
    {src: "img/blueSquare.png", name: "blueSquare"},
    {src: "img/redSquare.png", name: "redSquare"},
    {src: "img/greenSquare.png", name: "greenSquare"},
    {src: "img/yellowSquare.png", name: "yellowSquare"},
    {src: "img/purpleSquare.png", name: "purpleSquare"},
    {src: "img/orangeSquare.png", name: "orangeSquare"},
]

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffle(img)

for(let i = 0; i <= 11; i++) {
    if(i <= 5) {
        document.querySelector(`#img${i}`).innerHTML = `<img src="${img[i].src}"></img>`;
    } else if(i > 5) {
        document.querySelector(`#img${i}`).innerHTML = `<img src="${img[i - 6].src}"></img>`;
    }
}