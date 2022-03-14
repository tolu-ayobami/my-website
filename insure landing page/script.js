var ten = document.querySelector(".ham");
var tent = document.querySelector(".links");
var tenta = document.querySelector(".close");

ten.onclick = function(){
    tent.classList.add("active");
}

tenta.onclick = function(){
    tent.classList.remove("active");
}


const date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();
