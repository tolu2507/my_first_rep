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

let butn = 0;
let sum = "";
console.log(sum);
let save = "values- ";


btn_1.addEventListener("click", function() {
    sum += "1" 
});
btn_2.addEventListener("click", function() {
    sum += "2"
});
btn_3.addEventListener("click", function() {
    sum += "3" 
});
btn_4.addEventListener("click", function() {
    sum += "4"
});
btn_5.addEventListener("click", function() {
    sum += "5";
});
btn_6.addEventListener("click", function() {
    sum += "6";
});
btn_7.addEventListener("click", function() {
    sum += "7";
});
btn_8.addEventListener("click", function() {
    sum += "8";
});
btn_9.addEventListener("click", function() {
    sum += "9";
});
btn_0.addEventListener("click", function() {
    sum += "0";
});
console.log(sum);
btn_add.addEventListener("click", function() {
    for (let i = 0; i < buttons.length; i++) {
        if (btn_add === buttons[i]) {
            renderViews(butn += Number(sum));
            sum = "";
        }
        console.log(sum);
    }
});
btn_sub.addEventListener("click", function() {
    for (let i = 0; i < buttons.length; i++) {
        if (btn_sub === buttons[i]) {
            renderViews(butn -= Number(sum));
            sum = "";
        }
    }
});
btn_mul.addEventListener("click", function() {
    for (let i = 0; i < buttons.length; i++) {
        if (btn_mul === buttons[i]) {
            renderViews(butn *= Number(sum));
            sum = "";
        }
    }
}); 
btn_div.addEventListener("click", function() {
    for (let i = 0; i < buttons.length; i++) {
        if (btn_div === buttons[i]) {
            renderViews(butn /= Number(sum));
            sum = "";
        }
    }
});
btn_md.addEventListener("click", function() {
    for (let i = 0; i < buttons.length; i++) {
        if (btn_md === buttons[i]) {
            renderViews(butn %= Number(sum));
            sum = "";
        }
    }
});
btn_c.addEventListener("click", function() {
    for (let i = 0; i < buttons.length; i++) {
        if (btn_add === buttons[i]) {
            renderViews(butn += Number(sum));
            sum = "";
            break;
        }else if (btn_div === buttons[i]) {
            renderViews(butn /= Number(sum));
            sum = "";
            break;
        }else if (btn_mul === buttons[i]) {
            renderViews(butn *= Number(sum));
            sum = "";
            break;
        }else if (btn_sub === buttons[i]) {
            renderViews(butn -= Number(sum));
            sum = "";
            break;
        }else if (btn_md === buttons[i]) {
            renderViews(butn %= Number(sum));
            sum = "";
            break;
        }
    }
    save += `${butn}:`
}); 
btn_d.addEventListener("click", function() {
    sum += "."; 
});
btn_chg.addEventListener("click", function() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
        console.log(buttons[i]);
    }
    renderViews("welcome to tolu's calculator 😍")
});
btn_chgs.addEventListener("click", function() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
        console.log(buttons[i]);
    }
    save =""
    renderViews("Tolu's calculator is off, tap the green button ")
})
btn_save.addEventListener("click", function() {
    renderViews(save);
})
btn_pw.addEventListener("click", function() {
    butn = 0;
    sum = ""
    renderViews(butn);
    console.log(sum);
    ;
}); 