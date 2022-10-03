var chips = 0;
var chips_add = 1;
var clickers = 0;
var chips_produced = 0;
var chips_sold = 0;
var money = 0;
var workers = 1;
var factories = 1;
var money_for_chips = 10;

var chips_img = document.querySelector("#chips_img");
var chips_amount = document.querySelector("#chips_amount");
var money_amount = document.querySelector("#money_amount");
var clicker_img = document.querySelector("#clicker_img");
var clicker_amount = document.querySelector("#clicker_amount");
var worker_img = document.querySelector("#worker_img");
var worker_amount = document.querySelector("#worker_amount");

worker_amount.innerHTML=workers;

// function that runs when the chips is clicked
function chips_click(){
    chips = chips + chips_add;
    chips_produced = chips_produced + chips;
    console.log("+ " + chips_add + " chips");
};

// update
var update_timer = setInterval(updateTimer, 10);
function updateTimer(){
    money_amount.innerHTML=money;
    chips_amount.innerHTML=chips;
};

// selling

/*
function worker_sell(){

};

function clicker_sell(){

};
*/

var sell_timer = setInterval(sellTimer, 1000);
function sellTimer(){
    sell_amount = workers * 2;
    money_add = money_for_chips * sell_amount;

    if (chips > sell_amount) {
        chips -= sell_amount;
        chips_sold += sell_amount;
        money += money_add;
        console.log("+ " + money_add + " money");
    };
};

// clicker interval
var clicker_interval = 10000;
var clicker_timer = setInterval(clickerTimer, clicker_interval);

var clicker_price = 40;

function buy_clicker(){
    if (money >= clicker_price){
        clickers++;
        clicker_amount.innerHTML=clickers;
        money -= clicker_price;
    };
};

// clicker timer, repeats depending on interval
function clickerTimer(){
    chips += clickers;
    chips_amount.innerHTML=chips;
};

// worker
var worker_price = 40;

function buy_worker(){
    if (money >= worker_price){
        workers++;
        worker_amount.innerHTML=workers;
        money -= worker_price;
    };
};

chips_img.addEventListener("click", chips_click);
clicker_img.addEventListener("click", buy_clicker);
worker_img.addEventListener("click", buy_worker);