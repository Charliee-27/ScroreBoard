//Getting the DOM elements
let homeEl = document.getElementById("home-el")
let awayEl = document.getElementById("away-el")

//Declaring the initial State
let homeCount = 0
let awayCount = 0


//Home Buttons
function plusOne() {
    homeCount += 1
    homeEl.textContent = homeCount
} 

function plusTwo() {
    homeCount += 2
    homeEl.textContent = homeCount
} 

function plusThree() {
    homeCount += 3
    homeEl.textContent = homeCount
} 

//Away Buttons
function awayOne() {
    awayCount += 1
    awayEl.textContent = awayCount
} 

function awayTwo() {
    awayCount += 2
    awayEl.textContent = awayCount
} 

function awayThree() {
    awayCount += 3
    awayEl.textContent = awayCount
} 