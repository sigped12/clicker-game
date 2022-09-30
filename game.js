var chips = 0;
var chips_add = 1;
var clickers = 0;
var chips_produced = 0;
var chips_sold = 0;
var money = 0;
var employees = 1;
var factories = 1;
var money_for_chips = 10;

var chips_img = document.querySelector("#chips_img");
var chips_amount = document.querySelector("#chips_amount");
var money_amount = document.querySelector("#money_amount");

chips_amount.innerHTML=chips;

//function that runs when the chips is clicked
function chips_click(){
    chips = chips + chips_add;
    chips_produced = chips_produced + chips;
    chips_amount.innerHTML=chips;
    console.log("+ " + chips_add + " chips");
};

//selling
sell_amount = employees * 2;

var sell_timer = setInterval(sellTimer, 1000);
function sellTimer(){
    if (chips > sell_amount) {
        chips = chips - sell_amount;
        chips_sold = chips_sold + sell_amount;
        money = money_for_chips * sell_amount;
        money_amount.innerHTML=money;
    }
};

//clicker
var clicker_timer = setInterval(clickerTimer, 10);
function clickerTimer(){
    chips += clickers;
    chips_amount.innerHTML=chips;
};

chips_img.addEventListener("click", chips_click);