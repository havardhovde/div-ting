let count1 = 0;

let firstBox = document.getElementById("firstBox")
let textBox1 = document.getElementById("textbox1");
let textBox2 = document.getElementById("textbox2");
let textBox3 = document.getElementById("textbox3");

window.addEventListener("click", hideStart);
textBox1.addEventListener("mouseleave", showNextBox1);
textBox2.addEventListener("mouseleave", showNextBox2);

function hideStart() {
    if (count1 % 2 == 0) {
        firstBox.style.opacity = 0;
        firstBox.style.cursor = "none";
        textBox1.style.display = "block";
    } else {
        firstBox.style.display = "block";
        textBox1.style.display = "none";
        textBox2.style.display = "none";
        textBox3.style.display = "none";
    }
    count1++;
}

function showNextBox1() {
    textBox2.style.display = "block";
}

function showNextBox2() {
    textBox3.style.display = "block";
}