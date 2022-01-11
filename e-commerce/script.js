var minus = document.querySelector("#minus");
var plus = document.querySelector("#plus");
var count = document.querySelector(".count");

let  read = 0;


    minus.addEventListener("click", function(){
     
       if(count.innerHTML == 0 ){
       minus.disabled = true;
       } else{
           let somenum = parseInt(count.innerHTML);
           count.innerHTML = somenum  -1;
       }
  
});
plus.addEventListener("click", function(){
    
    let somenum = parseInt(count.innerHTML);
           count.innerHTML = somenum +1;
           
       
    
});

const you = [{img:"images/image-product-1.jpg"}, {img:"images/image-product-2.jpg"}, {img:"images/image-product-3.jpg"}, {img:"images/image-product-4.jpg"}, ]

var left = document.querySelector("#left");
var right = document.querySelector("#right");
var pro = document.querySelector(".pro");
var lef = document.querySelector("#lef");
var righ = document.querySelector("#righ");


var prod1 = document.querySelector(".product1");
var prod2= document.querySelector(".product2");
var prod3 = document.querySelector(".product3");
var prod4 = document.querySelector(".product4");
var prod6 = document.querySelector(".product6");
var prod7 = document.querySelector(".product7");
var prod8 = document.querySelector(".product8");
var prod9 = document.querySelector(".product9");
var pro1 = document.querySelector(".pro1");








let ag = 0;

function toluName(){
    const tolu = you[ag];
    pro.src = tolu.img;

}


prod1.onclick = function(){
    let ag = 0;
    const tolu = you[ag];
    pro1.src = tolu.img;

    
}


prod2.onclick = function(){
   let ag = 1;
   const tolu = you[ag];
    pro1.src = tolu.img;
}

prod3.onclick = function(){
    let ag = 2;
    const tolu = you[ag];
     pro1.src = tolu.img;
 }
 
prod4.onclick = function(){
    let ag = 3;
    const tolu = you[ag];
     pro1.src = tolu.img;
 }
 
prod6.onclick = function(){
    let ag = 0;
    const tolu = you[ag];
    pro.src = tolu.img;

    
}

prod7.onclick = function(){
    let ag = 1;
    const tolu = you[ag];
    pro.src = tolu.img;

    
}

prod8.onclick = function(){
    let ag = 2;
    const tolu = you[ag];
    pro.src = tolu.img;

    
}

prod9.onclick = function(){
    let ag = 3;
    const tolu = you[ag];
    pro.src = tolu.img;

    
}


left.addEventListener("click", function(){
    ag--;
    if(ag<0){
        ag =3;
    }
    toluName();
});

right.addEventListener("click", function(){
    ag++;
    if(ag > you.length-1){
        ag = 0;
    }
    toluName();
});





function tolName(){
    const tolu = you[ag];
    pro1.src = tolu.img;

}




lef.addEventListener("click", function(){
    ag--;
    if(ag<0){
        ag =3;
    }
    tolName();
});

righ.addEventListener("click", function(){
    ag++;
    if(ag > you.length-1){
        ag = 0;
    }
    tolName();
});



var pro1 = document.querySelector(".pro1");
var oval = document.querySelector(".overlay");
var times = document.getElementById("times");
pro1.onclick = function(){
    oval.classList.add("overl");
}
times.onclick = function(){
    oval.classList.remove("overl");
}

var links = document.querySelector(".links");
var bars = document.getElementById("bars");
var time = document.getElementById("time");
bars.onclick = function(){
    links.classList.add("display");
}

time.onclick = function(){
    links.classList.remove("display");
}