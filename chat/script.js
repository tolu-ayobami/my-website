var teg = document.querySelector("#meg");
var teg1 = document.querySelector("#ic");
var teg2 = document.querySelector(".inp");
var feg = document.querySelector("#close");
var yup = document.querySelector(".record");



teg.onclick = function (){
   teg.style.display = 'none';
   teg1.style.display = "block";
   yup.style.display ="block";
}




teg2.onkeyup = function (){
    teg.style.display ="none";
    teg1.style.display ="block";
}




feg.onclick = function (){
    yup.style.display ="none";
}

