var links = document.querySelector(".link");
var bar = document.querySelector(".bars9");

bar.addEventListener("click", function(){
    bar.classList.toggle("active");
    links.classList.toggle("active");

});
