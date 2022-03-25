
var green = document.querySelector(".green");
var red = document.querySelector(".red");
var blue = document.querySelector(".blue");
var yellow = document.querySelector(".yellow");
var gray = document.querySelector(".gray");
var pink = document.querySelector(".pink");


var on = document.querySelector(".on");
var off = document.querySelector(".off");



on.addEventListener("click", myTimer);
var myVar = setInterval(myTimer, 1000);

function myTimer(){
    green.style.backgroundColor =  colors[getRandomNumber()];
    red.style.backgroundColor =  colors[getRandomNumber()];

    blue.style.backgroundColor =  colors[getRandomNumber()];

    yellow.style.backgroundColor =  colors[getRandomNumber()];

    gray.style.backgroundColor =  colors[getRandomNumber()];

    pink.style.backgroundColor =  colors[getRandomNumber()];


}

off.addEventListener("click", function(){
        green.style.backgroundColor = "white";
        red.style.backgroundColor = "white";
        blue.style.backgroundColor = "white";
        yellow.style.backgroundColor = "white";
        gray.style.backgroundColor = "white";
        pink.style.backgroundColor = "white";
    
    });




    
var colors = ["green", "red", "yellow", "blue", "purple", ];

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}