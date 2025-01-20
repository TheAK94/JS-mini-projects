let btn = document.querySelector("button");
let area = document.querySelector("p");

let url = "https://v2.jokeapi.dev/joke/Any?safe-mode"

btn.addEventListener("click", async () => {
    let content = await getJoke();
    console.log(content)
    area.innerText ="";
    if (content.type == "single") {
        console.log("single");
        area.innerHTML = content.joke;
    } else {
        console.log("twopart");
        area.innerHTML = content.setup +"<br>"+ content.delivery;  
    }    
})

async function getJoke() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        return data;
    } catch (e) {
        console.log(e);
    }
}

