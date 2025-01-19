let count = 0

const counter = document.getElementById("counter")

const myName = "Jake";

console.log(myName)

function buttonClicked() {
    console.log("Clicked by jake")
    count++
    counter.innerText = "Clicked me " + count + " times!"
}

const button = document.getElementById("button")
button.addEventListener("click", buttonClicked)