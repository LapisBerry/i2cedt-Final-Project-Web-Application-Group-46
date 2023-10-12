// ทำระบบตอบคำถามในนี้???

import {getVocabularies,} from "./api.js";
const dictionary = await getVocabularies()
console.log(dictionary)
function randomizer1(){ 
    var selection = dictionary[Math.floor(Math.random()*dictionary.length)];
    delete selection.__v; 
    for (var key in selection){
         document.getElementById("meaning4").innerText = selection[key];
         document.getElementById(key).innerText = selection[key];
        
    } 
    return; 
}

function randomizer2(){ 
    var selection = dictionary[Math.floor(Math.random()*dictionary.length)]; 
    delete selection.__v;
    for (var key in selection){ 
        document.getElementById("meaning3").innerText = selection[key];
        document.getElementById(key).innerText = selection[key]; 
    } 
    return; 
}

function randomizer3(){ 
    var selection = dictionary[Math.floor(Math.random()*dictionary.length)]; 
    delete selection.__v;
    for (var key in selection){ 
        document.getElementById("meaning2").innerText = selection[key];
        document.getElementById(key).innerText = selection[key];
    } 
    return; 
}

function randomizer4(){ 
    var selection = dictionary[Math.floor(Math.random()*dictionary.length)]; 
    delete selection.__v;
    for (var key in selection){
        document.getElementById("meaning1").innerText = selection[key];
        document.getElementById(key).innerText = selection[key];
    } 
    return; 
}
// button
const choiceText = document.querySelector(".choice-text"); 
const choiceText2 = document.querySelector(".choice-text-2");  
const choiceText3 = document.querySelector(".choice-text-3");  
const choiceText4 = document.querySelector(".choice-text-4");  

// Get a reference to the button and counter elements
const button = document.getElementById('text-wrapper-2');
const counter = document.getElementById('counter');


// Initialize the counter value
let count = 0;
let randomer = Math.floor(Math.random()*4)
function randoming() {
if (randomer == 0) {
    randomizer1()
    randomizer2()
    randomizer3()
    randomizer4()
} else if (randomer == 1) {
    randomizer4()
    randomizer1()
    randomizer2()
    randomizer3()
} else if (randomer == 2) {
    randomizer3()
    randomizer4()
    randomizer1()
    randomizer2()
} else {
    randomizer2()
    randomizer3()
    randomizer4()
    randomizer1()
}
}
randoming()
console.log(randomer)
// Add a click event listener to the button
choiceText.addEventListener('click', function () {
    if (randomer == 1) {
        count++
    } else {count = 0}
    counter.textContent = count;
    randomer = Math.floor(Math.random()*4)
    randoming()
});

  choiceText2.addEventListener("click", function () {
    if (randomer == 2) {
        count++
    } else {count = 0}
    counter.textContent = count;
    randomer = Math.floor(Math.random()*4)
    randoming()
  });

  choiceText3.addEventListener("click", function () {
    if (randomer == 0) {
        count++
    } else {count = 0}
    counter.textContent = count;
    randomer = Math.floor(Math.random()*4)
    randoming()
  });

  choiceText4.addEventListener("click", function () {
   if (randomer == 3) {
    count++
} else count = 0
    counter.textContent = count;
    randomer = Math.floor(Math.random()*4)
    randoming()
  });

  button.addEventListener('click', function () {
    count = 0;
    counter.textContent = count;
    randomer = Math.floor(Math.random()*4)
    randoming()
});
