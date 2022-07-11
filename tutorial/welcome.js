let welcomeEl = document.getElementById("counterht");
let name = "Bamisile Tolulope";
let greeting = "Hi there";

function greet() {
  console.log(greeting + ", " + name + "!");
}
greet();

let myPoints = 3;
function add3Points() {
  myPoints += 3;
};
add3Points();
add3Points();
add3Points();

function remove1Point() {
  myPoints -= 1;
};
remove1Point();
remove1Point();
console.log(myPoints);

console.log("2" + 2);//22
console.log("My points: " + 5 + 9);//My points: 59
console.log(11 + 7);// 18
console.log(6 + "5");// 65
console.log(2 + 2);// 4
console.log("11" + "14");//1114


let showError = document.getElementById("error");
console.log(showError);
function show() {
  showError.textContent = "Something went wrong, please try again"
}
let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").innerText = num1;
document.getElementById("num2-el").innerText = num2;
let total = document.getElementById("sum-el");

function addition() {
  num1 += num2;
  total.textContent = "Sum: " + num1
  console.log("adding");
};
function subtract() {
  num1 -= num2;
  total.textContent = "Sum: " + num1
  console.log("subtracting");
};
function multiply() {
  num1 *= num2;
  total.textContent = "Sum: " + num1
  console.log("multiplying");
};
function divide() {
  num1 /= num2;
  total.textContent = "Sum: " + num1
  console.log("dividing");
};
  welcomeEl.innerText += "🆕";

let username = "Tolu";
let message = "Hi my name is ";
var myGreeting = message + username + "!" ;
console.log(myGreeting);


let myAge = 22;
let humanDogRatio = 7;
myAge=7
let myDogAge = myAge * humanDogRatio;

console.log(myDogAge);

let bonusPoint = 50;
console.log(bonusPoint);
bonusPoint += 50;
console.log(bonusPoint);
bonusPoint -= 75;
console.log(bonusPoint);
bonusPoint += 45;
console.log(bonusPoint);

let inc = 34;
let incr = 33;
let incre = 36;

function rt() {
    console.log(inc + incr + incre);
}
rt();

let cent = 0;
function yet() {
    cent += 1 
}
yet();
yet();
yet();
console.log(cent);