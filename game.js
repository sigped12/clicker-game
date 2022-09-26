var chips = 0;
var chips_add = 1;
var clickers = 0;

var chips_img = document.querySelector("#chips_img");
var chips_amount = document.querySelector("#chips_amount");

chips_amount.innerHTML=chips;

function chips_click(){
    chips + chips_add;
    chips_amount.innerHTML=chips;
};

var timer = setInterval(myTimer, 10);
function myTimer(){
    chips += clickers;
    chips_amount.innerHTML=chips;
};

chips_img.addEventListener("click", chips_click);