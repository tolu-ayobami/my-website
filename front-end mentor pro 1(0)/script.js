var links = document.querySelector(".link");
var bar = document.querySelector(".bars9");

bar.addEventListener("click", function(){
    bar.classList.toggle("active");
    links.classList.toggle("active");

});



var all = document.querySelector(".accessall1");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = all.getBoundingClientRect().top;
  if (scrollHeight > navHeight) {
    all.classList.add("scrolled");
  }
});



var al = document.querySelector(".accessall2");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = al.getBoundingClientRect().top;
  if (scrollHeight > navHeight) {
    al.classList.add("scroll");
  }
});



var a = document.querySelector(".productive");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = a.getBoundingClientRect().top;
  if (scrollHeight > navHeight) {
    a.classList.add("scrol");
  }
});




var b = document.querySelector(".founder");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = b.getBoundingClientRect().top;
  if (scrollHeight > navHeight) {
    b.classList.add("scro");
  }
});