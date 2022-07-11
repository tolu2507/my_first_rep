let counters =  document.getElementById("counter");
let saveEl = document.getElementById("save-el");
let increment = 0;
function count() {
    increment += 1
    counters.textContent = increment;
};

function save() {
    let save = increment + " - ";
    saveEl.textContent += save;
    counters.textContent = 0;
    increment = 0;
};
 
