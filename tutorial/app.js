//document.getElementById("counter").innerText = 10;
// let myAge = 22;
// let humanDogRatio = 7;
// myAge=7
// let myDogAge = myAge * humanDogRatio;

// console.log(myDogAge);

// let bonusPoint = 50;
// console.log(bonusPoint);
// bonusPoint += 50;
// console.log(bonusPoint);
// bonusPoint -= 75;
// console.log(bonusPoint);
// bonusPoint += 45;
// console.log(bonusPoint);

// let inc = 34;
// let incr = 33;
// let incre = 36;

// function rt() {
//     console.log(inc + incr + incre);
// }
// rt();

// let cent = 0;
// function yet() {
//     cent += 1 
// }
// yet();
// yet();
// yet();
// console.log(cent);

let increment = 0;
let counters =  document.getElementById("counter");
function count() {
    increment += 1
    counters.innerText = increment;
};

function save() {
    console.log(increment);
};
