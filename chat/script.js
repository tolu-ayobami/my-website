var teg = document.querySelector("#meg");
var teg1 = document.querySelector("#ic");
var teg2 = document.querySelector(".inp");
var feg = document.querySelector("#close");
var yup = document.querySelector(".record");



teg.onclick = function (){
   teg.style.display ="none";
   teg1.style.display ="block";
   yup.style.display ="block";
}


teg2.onkeyup = function (){
    teg.style.display ="none";
    teg1.style.display ="block";
    yup.style.display ="none";
}


feg.onclick = function (){
    yup.style.display ="none";
    teg.style.display ="block";
    teg1.style.display ="none";
}



if(teg2.value.length < "0" ){
    teg.style.display ="block";
    teg1.style.display ="none";
}



teg1.onclick = function (){
    yup.style.display = "none";
    teg.style.display ="block";
    teg1.style.display ="none";
}