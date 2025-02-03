let btn = document.querySelector("button")

let imgArr = [
    "https://images.unsplash.com/photo-1735627062325-c978986b1871?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1736890722772-97aab67379a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1737008220100-804be759a152?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1737995720044-8d9bd388ff4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3NXx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1738070593158-9e84a49e7e60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4OHx8fGVufDB8fHx8fA%3D%3D",
]

let getRandom = () => {
    let randomX = Math.random() * 90;
    let randomY = Math.random() * 90;
    let randomImage = Math.floor(Math.random() * imgArr.length);
    return {randomX, randomY, randomImage}
}

btn.addEventListener("click", () => {
    let {randomX, randomY, randomImage} = getRandom()
    let image = document.createElement("img");
    image.setAttribute("src", `${imgArr[randomImage]}`);
    image.style.height = "200px";
    image.style.width = "200px";
    image.style.position = "absolute"
    image.style.left = randomX + "%";
    image.style.top = randomY + "%";
    document.body.appendChild(image)
})





// ********************************************************************************************************