//document.getElementById("count").innerText = 5

// SHORT CUT - Commenting multiple lines at once ctrl+k+c
// var Practices
// let myAge = 36
// let humanDogRation = 7

// let count = myAge * humanDogRation

// console.log(count)

// initialize the count as 0
// listen for clicks ont he increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML

//camelCase
let countEl = document.getElementById("count-el") //pass in arguments
let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}

function save() {
    console.log(count)
}