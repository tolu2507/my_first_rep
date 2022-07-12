// for (let i = 10; i < 101; i +=10){
//     console.log(i);
// }

let myBio = [7,3,9]

for (let i = 0; i < myBio.length; i ++){
    console.log(myBio[i]);
}

// let sentence = ['Hello', "my", "name", "is", "Tolu"];
// let greetingS = document.getElementById("message_id");

// for (let i = 0; i < sentence.length; i ++){
//     console.log(sentence[i]);
//     greetingS.textContent += sentence[i] + " ";
// }
let player1Time = 102;
let player2Time = 107;
function totalRaceTime() {
    return player1Time += player2Time
}
let returnTime = totalRaceTime();
console.log(returnTime);

function rolldice() {
    let randomNumber = Math.floor((Math.random() * 7 ) + (1));
    return randomNumber;
}
console.log(rolldice());

let hasSolvedChallenge = false;
let hasHintsLeft = false;

if (hasSolvedChallenge === false && hasHintsLeft === false) {
    showSolution()
}

function showSolution() {
    console.log("showing solution.......");
}

let firstObject = {
    name: "Tolu",
    age: 23,
    isTall: true,
    cars: ["camry", "benz", "Tesla", "ford"],
    skills: ["Javascript", "Python", "css", "html"]
};
console.log(firstObject.name);
console.log(firstObject.age);
console.log(firstObject.isTall);
console.log(firstObject.cars[2]);
console.log(firstObject.skills[0]);
let vet = firstObject.name + " is " + firstObject.age + " years old and owns a " + firstObject.cars[0] + " and a " + firstObject.cars[1] + " and a " + firstObject.cars[2] + ". is he tall ?" + firstObject.isTall;
console.log(vet);

let person = {
    name: "Tolu",
    age: 23,
    country: "Nigeria"
};

function logData() {
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country);
}
logData();

let age = 105;

if (age < 6) {
    console.log("free");
} else if(age < 18) {
    console.log("child Discount");
}else if(age < 27){
    console.log("Student Discount");
}else if(age < 67){
    console.log("Full Price");
}else if(age < 100){
    console.log("Senior Citizen Discount");
}else{
    console.log("You are actually meant to be dead, but sha.");
}

let largestCountries = ['china', 'india', 'usa', 'indonesia', 'pakistan'];

for (let i = 0; i < largestCountries.length; i++) {
     console.log("- " + largestCountries[i]);
}

let largeCountries = ['tuvalu', 'india', 'usa', 'indonesia', 'monaco'];
console.log(largeCountries.pop());
console.log(largeCountries.shift());
console.log(largeCountries.unshift('china'));
console.log(largeCountries.push('pakistan'));
console.log(largeCountries)

let dayOfMonth = 13;
let weekDay = "Friday";

if (dayOfMonth === 13 && weekDay === "Friday") {
    console.log("🙊");
}else{
    console.log("😄");
}
let hands = ["rock", "paper", "scissor"];

function randNum() {
    let der = Math.floor(Math.random() * (hands.length));
    return hands[der];
}
console.log(randNum());

let fruits = ["apple", "orange", "apple", "apple", "orange"];
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");

function arrangeFruits() {
    for (let i = 0; i < fruits.length; i++) {
        if (fruits[i] === "apple") {
            appleShelf.textContent += "apple" + " ";            
        }else if (fruits[i] === "orange") {
            orangeShelf.textContent += "orange" + " ";            
        }
    }
}
arrangeFruits();