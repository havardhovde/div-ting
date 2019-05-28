let img1 = [
    {src: require("../img/blueSquare.png"), name: "blueSquare", id: 0},
    {src: require("../img/redSquare.png"), name: "redSquare", id: 1},
    {src: require("../img/greenSquare.png"), name: "greenSquare", id: 2},
    {src: require("../img/yellowSquare.png"), name: "yellowSquare", id: 3},
    {src: require("../img/purpleSquare.png"), name: "purpleSquare", id: 4},
    {src: require("../img/orangeSquare.png"), name: "orangeSquare", id: 5},
];

img1 = img1.concat(img1)

shuffle = (array) =>{
    for(let i = array.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    }
}

shuffle(img1)

export default img1