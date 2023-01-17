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


// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
//camelCase
let countEl = document.getElementById("count-el") //pass in arguments
let count = 0
console.log(saveEl)

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0

console.log(count)
}
// Google:
// innerText alternative mdn = textContent https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent