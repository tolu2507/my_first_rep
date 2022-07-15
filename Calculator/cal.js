const btn_1 = document.getElementById("num1");
const btn_2 = document.getElementById("num2");
const btn_3 = document.getElementById("num3");
const btn_4 = document.getElementById("num4");
const btn_5 = document.getElementById("num5");
const btn_6 = document.getElementById("num6");
const btn_7 = document.getElementById("num7");
const btn_8 = document.getElementById("num8");
const btn_9 = document.getElementById("num9");
const btn_0 = document.getElementById("num0");
const btn_d = document.getElementById("numd");
const btn_c = document.getElementById("numc");
const btn_add = document.getElementById("pos");
const btn_sub = document.getElementById("neg");
const btn_mul = document.getElementById("mul");
const btn_div = document.getElementById("div");
const btn_chg = document.getElementById("chg");
const btn_chgs = document.getElementById("chgs");
const btn_pw = document.getElementById("pow");
const btn_md = document.getElementById("mod");
const btn_save = document.getElementById("mo");
let render = document.getElementById("screen");
const buttons = document.getElementsByClassName("btn");

function renderViews(b) { 
    render.innerHTML = b;
}
renderViews("Tolu's calculator is off, tap the green button ");

let butn = [];
let sum = "";
let save = "values- ";

function arr() {
    for (let i = 0; i < butn.length; i++) {
        renderViews(butn[i]);   
    }    
}
btn_1.addEventListener("click", function() {
    butn.push(1);
    sum += "1"
    console.log(butn);
    arr()
});
btn_2.addEventListener("click", function() {
    butn.push(2);
    sum += "2"
    console.log(butn);
    arr()
});
btn_3.addEventListener("click", function() {
    butn.push(3);
    sum += "3"
    console.log(butn);
    arr()
});
btn_4.addEventListener("click", function() {
    butn.push(4);
    sum += "4"
    console.log(butn);
    arr()
});
btn_5.addEventListener("click", function() {
    butn.push(5);
    sum += "5";
    console.log(butn);
    arr()
});
btn_6.addEventListener("click", function() {
    butn.push(6);
    sum += "6";
    console.log(butn);
    arr()
});
btn_7.addEventListener("click", function() {
    butn.push(7);
    sum += "7";
    console.log(butn);
    arr()
});
btn_8.addEventListener("click", function() {
    butn.push(8);
    sum += "8";
    console.log(butn);
    arr()
});
btn_9.addEventListener("click", function() {
    butn.push(9);
    sum += "9";
    console.log(butn);
    arr()
});
btn_0.addEventListener("click", function() {
    butn.push(0);
    sum += "0";
    console.log(butn);
    arr()
});
btn_md.addEventListener("click", function() {
    renderViews( butn.reduce((sum, cur)=>{
        return sum %= cur;
    }));
    sum += "%";
    console.log(sum);
});
btn_c.addEventListener("click", function() {
    renderViews(eval(sum));
    console.log(sum)
    save += `${eval(sum)}:`
});
btn_d.addEventListener("click", function() {
    sum += "."
    butn.push(".");
    console.log(butn);
    arr()
});
btn_chg.addEventListener("click", function() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
        console.log(buttons[i]);
    }
    renderViews("welcome to tolu's calculator 😍")
    // btn_0.disabled = false;
});
btn_chgs.addEventListener("click", function() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
        console.log(buttons[i]);
    }
    renderViews("Tolu's calculator is off, tap the green button ")
    save = []
    // btn_0.disabled = true;
})
btn_save.addEventListener("click", function() {
    renderViews(save);
    // save += eval(sum)
})
btn_pw.addEventListener("click", function() {
    butn = [];
    sum = ""
    renderViews(butn);
    console.log(sum);
    console.log(butn);
});
btn_add.addEventListener("click", function() {
    renderViews( butn.reduce((sum, cur)=>{
        return sum += cur;
    }));
    sum += "+";
    console.log(sum);
});
btn_sub.addEventListener("click", function() {
    renderViews( butn.reduce((sum, cur)=>{
        return sum -= cur;
    }), butn); 
    sum += "-";
    console.log(sum);
});
btn_mul.addEventListener("click", function() {
    renderViews( butn.reduce((sum, cur)=>{
        return sum *= cur;
    }));
    sum += "*";
    console.log(sum);
}); 
btn_div.addEventListener("click", function() {
    renderViews( butn.reduce((sum, cur)=>{
        return sum /= cur;
    }));
    sum += "/";
    console.log(sum);
});
  
