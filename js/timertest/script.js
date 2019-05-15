let date = new Date();
let start = date.getSeconds();

document.querySelector("#start").addEventListener("click", function startTimer() {
    console.log(start)
});

document.querySelector("#stop").addEventListener("click", function stopTimer() {
    let end = date.getSeconds();
    console.log(end - start)
});