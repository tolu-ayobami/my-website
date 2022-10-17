var teg = document.querySelector("#meg");
var teg1 = document.querySelector("#ic");
var teg2 = document.querySelector(".inp");
var feg = document.querySelector("#close");
var yup = document.querySelector(".record");
var send = document.querySelector("#check");
var tolu = document.querySelector(".tolu");


send.onclick = function (){
    tolu.style.display ="flex";
    yup.style.visibility ="hidden";
    teg.style.display ="block";
    teg1.style.display ="none";
}



teg.onclick = function (){
   teg.style.display ="none";
   teg1.style.display ="block";
   yup.style.visibility ="visible";
   tolu.style.display ="none";
}


teg2.onkeyup = function (){
    teg.style.display ="none";
    teg1.style.display ="block";
    yup.style.visibility ="hidden";
}


feg.onclick = function (){
    yup.style.visibility ="hidden";
    teg.style.display ="block";
    teg1.style.display ="none";
    tolu.style.display ="flex";
}



if(teg2.value.length < "0" ){
    teg.style.display ="block";
    teg1.style.display ="none";
}



teg1.onclick = function (){
    yup.style.visibility ="hidden";
    teg.style.display ="block";
    teg1.style.display ="none";
}
