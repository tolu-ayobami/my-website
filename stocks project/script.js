var teg = document.querySelector(".hambug");
var feg = document.querySelector(".links");
var guy = document.querySelector(".ham");

teg.addEventListener("click", function(){

    feg.classList.add("yep");


})



guy.onclick = function(){

    feg.classList.remove("yep");
}