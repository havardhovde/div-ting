let middag = ["Chili Con Carne", "Lasagne", "Spaghetti", "Pølse og Stappe", "Taco", "Pizza", "Hamburger"];

let inputForm = document.querySelector(".inputForm");
let inputButton = document.querySelector(".inputButton");
let displayFood = document.querySelector(".menu");
let count = 0;

shuffle = (array) =>{
    for(let i = array.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    };
};

shuffle(middag);


inputButton.addEventListener("click", (e) => {
    if (count == 0) {
        for (let i = 0; i < inputForm.value; i++) {
            displayFood.innerHTML += `<li>${middag[i + 1]}</li>`;
        };
        inputButton.value = "Slett";
        count++;
    } else {
        displayFood.innerHTML = "";
        inputButton.value ="Vis meny"
        count = 0;
    };
});