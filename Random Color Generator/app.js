let btn = document.querySelector("button");
let space = document.querySelector(".space");

btn.addEventListener("click", function() {
    let h1 = document.querySelector("h1");
    let randomColor = getRandomColour();
    h1.innerText = randomColor;
    space.style.backgroundColor = randomColor;

    console.log("Color updated");
})

function getRandomColour() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}