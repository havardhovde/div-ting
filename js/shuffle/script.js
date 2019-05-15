let img = [
    {url: "http://www.clker.com/cliparts/4/2/X/T/o/0/blue-square.svg.hi.png", name: "blueSquare"},
    {url: "http://www.clker.com/cliparts/9/W/y/p/N/w/red-square-hi.png", name: "redSquare"},
    {url: "http://www.clker.com/cliparts/b/e/c/3/131406375432193858green%20square-hi.png", name: "greenSquare"},
    {url: "http://www.clker.com/cliparts/s/A/a/2/m/J/yellow-square-hi.png", name: "yellowSquare"},
    {url: "https://pitshanger-ltd.co.uk/images/colours/566-Plum%20262.jpg", name: "purpleSquare"},
    {url: "http://www.clker.com/cliparts/4/2/X/T/o/0/blue-square.svg.hi.png", name: "blueSquare"},
    {url: "http://www.clker.com/cliparts/9/W/y/p/N/w/red-square-hi.png", name: "redSquare"},
    {url: "http://www.clker.com/cliparts/b/e/c/3/131406375432193858green%20square-hi.png", name: "greenSquare"},
    {url: "http://www.clker.com/cliparts/s/A/a/2/m/J/yellow-square-hi.png", name: "yellowSquare"},
    {url: "https://pitshanger-ltd.co.uk/images/colours/566-Plum%20262.jpg", name: "purpleSquare"},
]

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffle(img)

for(let i = 0; i <= 8; i++) {
    document.querySelector(`#img${i}`).innerHTML = `<img src="${img[i].url}"></img>`;
}