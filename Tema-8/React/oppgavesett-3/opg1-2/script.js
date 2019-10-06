const root = document.querySelector("#root");

class blogger {
    constructor(name, followers) {
        this.name = name;
        this.followers = followers;
    }
    
    get divElement() {
        return `
            <h2>${this.name}</h2>
            <p>Følgere: ${this.followers}</p>

        `
    }
}

const sophie = new blogger("Sophie Elise", 2000000);
const pilotfrue = new blogger("Pilotfrue", 1000000);
const funkygine = new blogger("Funkygine", 800000);

root.innerHTML += sophie.divElement;
root.innerHTML += pilotfrue.divElement;
root.innerHTML += funkygine.divElement;