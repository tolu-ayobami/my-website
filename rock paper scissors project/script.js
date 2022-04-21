

var t = document.querySelector(".butt");
var z = document.querySelector(".rov1");
var l = document.querySelector(".cover");
var op = document.querySelector(".head");
var jib = document.querySelector(".board");
var ji = document.querySelector(".but");
var a = document.querySelectorAll("#btn");
var ove = document.querySelector(".overl");
var hid1 = document.querySelector(".rock7");
var hid2 = document.querySelector(".rov2");
var hidd = document.querySelector(".hid");
var rock = document.querySelector(".rock");
var rock1 = document.querySelector(".rock8");
var paper = document.querySelector(".paper");
var scissors = document.querySelector(".scissors");
var wo = document.querySelector(".word");
var roku = document.querySelector(".rock1");
var pap = document.querySelector(".paper1");
var sci = document.querySelector(".scissors1");



t.addEventListener("click", function(){
    
 ove.style.display = "none";


});





var you = {"rock": "images/icon-rock.svg", "paper": "images/icon-paper.svg", "scissors": "images/icon-scissors.svg"};
        


/*
paper.onclick = function(){
    
    let tomi = 1;
    const go = you[tomi];
    hid1.src = go.img;
   
    
    rock1.style.border = " 20px solid yellow";
   
    ji.style.visibility = "visible";
    computerRand();
    compAns(hid1.src, hid2.src)
    
    
    
    

    
}


rock.onclick = function(){
    
    let tomi = 0;
    const go = you[tomi];
    hid1.src = go.img;
    
   
    rock1.style.border = " 20px solid blue";
    
    ji.style.visibility = "visible";
    computerRand();
    compAns(hid1.src, hid2.src)
   
    
    
    
}




scissors.onclick = function(){
    
    let tomi = 2;
    const go = you[tomi];
    hid1.src = go.img;
   
   
    rock1.style.border = " 20px solid red";

    ji.style.visibility = "visible";
    computerRand();
    compAns(hid1.src, hid2.src)
    
    
    
}



ji.onclick = function(){
    l.classList.remove("ok");
    ji.style.visibility = "hidden";
    hidd.style.visibility = "hidden";
    wo.style.display = "none";
    
   
}




function computerRand(){
let rg = Math.floor(Math.random() * 3);
let computer = you[rg];

hid2.src = computer.img;


return computer;

}





a.forEach(function(a){
    a.addEventListener("click", function(){
        wo.style.display = "flex";
        l.classList.add("ok");
        hidd.style.visibility = "visible";
        ji.style.visibility = "visible";

    });

});
*/

var SCORE = 0;



function computerTech(hand){

    l.classList.add("ok");
    hidd.style.display = "flex";
    ji.style.display = "inline";
    wo.style.display = "flex";
    let computer = computerRand();
    
   
   

     if(hand == "rock"){
         document.querySelector(".rock7").src = "images/icon-rock.svg";
         rock1.style.border = " 20px solid blue";
     }
      
     if(hand == "paper"){
        document.querySelector(".rock7").src = "images/icon-paper.svg";
        rock1.style.border = " 20px solid yellow";
    }
    
    if(hand == "scissors"){
        document.querySelector(".rock7").src = "images/icon-scissors.svg";
        rock1.style.border = " 20px solid red";
    }



compAns(hand, computer);

     
}

var d = document.querySelector(".opt");

ji.onclick = function(){
    l.classList.remove("ok");
    hidd.style.display = "none";
    ji.style.display = "none";
      wo.style.display = "none";
      d.textContent = "choose an option";
    
}




function computerRand(){

    let hands = ["rock", "paper", "scissors"];
let rg = Math.floor(Math.random() * 3);
let computer = hands[rg];

hid2.src = you[computer];


return computer;

}





    
var d = document.querySelector(".opt");

var SCORE = 0;

    


function compAns(userHand, computer) {

//for rock
    if(userHand == "rock" && computer == "scissors"){
        d.textContent = "player wins";
        SCORE++;
       
    } 

 if(userHand == "rock" && computer == "paper"){
    d.textContent = "computer wins";

  
} 

if(userHand == "rock" && computer == "rock"){

d.textContent = "it's a tie";
}



//for paper

if(userHand == "paper" && computer == "scissors"){

    d.textContent = "computer wins";

   
} 

if(userHand == "paper" && computer == "rock"){
    d.textContent = "player wins";

    SCORE++;
    

} 

 if(userHand == "paper" && computer == "paper"){

d.textContent = "it's a tie";
}



//for scissors

if(userHand == "scissors" && computer == "rock"){
    d.textContent = "computer wins";

      
} 

if(userHand == "scissors" && computer == "paper"){
    d.textContent = "player wins";
   SCORE++;
  
  
} 

if(userHand == "scissors" && computer == "scissors"){

d.textContent = "it's a tie";
}

document.querySelector(".zero").innerText = SCORE;
}












        




