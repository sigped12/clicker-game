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
var chips_values = document.querySelector("#chips_values");
var money_values = document.querySelector("#money_values");
var clicker_img = document.querySelector("#clicker_img");
var clicker_values = document.querySelector("#clicker_values");
var worker_img = document.querySelector("#worker_img");
var worker_values = document.querySelector("#worker_values");
var chips_sold_el = document.querySelector("#chips_sold_el");
var chips_produced_el = document.querySelector("#chips_produced_el");
var upgrade1_head = document.querySelector("#upgrade1_head");
var upgrade1_values = document.querySelector("#upgrade1_values");

// set
var clicker_price = 40;
var worker_price = 60;
worker_values.innerHTML="Price: " + worker_price + "<br>Amount: " + workers;
clicker_values.innerHTML="Price: " + clicker_price + "<br>Amount: " + clickers;
var upgrade1_price = 500;
var upgrade1_lvl = 0;
upgrade1_head.innerHTML="Clicker speed";
upgrade1_values.innerHTML="Price: " + upgrade1_price + "<br>Level: " + upgrade1_lvl;
let chips_lr = false;

// function that runs when the chips is clicked
function chips_click(){
    chips += chips_add;
    chips_produced += chips_add;
    console.log("+ " + chips_add + " chips");

    // chips animation
    
    if (chips_lr == false) {
        chips_lr = true;
        chips_img.classList.remove("chips_img");
        chips_img.classList.remove("chips_img_right");
        chips_img.classList.add("chips_img_left");
    } else if (chips_lr == true) {
        chips_lr = false;
        chips_img.classList.remove("chips_img_left");
        chips_img.classList.add("chips_img_right");
    } 
    
}

// update
var update_timer = setInterval(updateTimer, 10);
function updateTimer(){
    money_values.innerHTML="Money: " + Math.round(money);
    chips_values.innerHTML="Chips: " + Math.round(chips);
    chips_sold_el.innerHTML="Chips sold: " + Math.round(chips_sold);
    chips_produced_el.innerHTML="Chips produced: " + Math.round(chips_produced);
}

// upgrades


// selling
var worker_sell_interval = 1500;
var worker_sell_timer = setInterval(worker_sell, worker_sell_interval);
function worker_sell(){
    worker_sell_amount = workers * 2;
    worker_money_add = money_for_chips * worker_sell_amount;

    if (chips > worker_sell_amount) { // sells chips for money
        chips -= worker_sell_amount;
        chips_sold += worker_sell_amount;
        money += worker_money_add;
        console.log("+ " + worker_money_add + " money");
        console.log("worker_sell_amount " + worker_sell_amount);
    }
}

// clicker interval
var clicker_interval = 2000;
var clicker_timer = setInterval(clickerTimer, clicker_interval);
var clicker_earn = 0;

let clicker_active = false;

function buy_clicker(){
    if (money >= clicker_price){
        if (clicker_active == false) { // runs the first time a clicker is bought
            clicker_active = true;
            clicker_earn = 2;
            console.log("clicker_active: " + clicker_active);
        }

        clickers++;
        money -= clicker_price;
        clicker_earn *= 2;
        clicker_price *= 1.33;
        clicker_values.innerHTML="Price: " + Math.round(clicker_price) + "<br>Amount: " + clickers;
    }
}

console.log("clicker_active " + clicker_active)

// clicker timer, repeats depending on interval
function clickerTimer(){
    console.log("clicker_earn: " + clicker_earn);
    chips += clicker_earn; // method of earning chips by clicker
    chips_produced += clicker_earn;
}

// worker
function buy_worker(){
    if (money >= worker_price){
        workers++;
        money -= worker_price;
        worker_price *= 1.33;
        worker_values.innerHTML="Price: " + Math.round(worker_price) + "<br>Amount: " + workers;
    }
}

// upgrade function
function upgrade1(){
    if (money >= upgrade1_price){
        money -= upgrade1_price;
        clicker_interval -= 50
        upgrade1_lvl++;
        upgrade1_price *= 3;
        upgrade1_values.innerHTML="Price: " + upgrade1_price + "<br>Level: " + upgrade1_lvl;
    }
}

upgrade1_img.style.src = "img/add.png";
upgrade1_img.addEventListener("click", upgrade1);

chips_img.addEventListener("click", chips_click);
clicker_img.addEventListener("click", buy_clicker);
worker_img.addEventListener("click", buy_worker);