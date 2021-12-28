/*var btnbars = document.querySelector(".btnbars");
var link = document.querySelector(".showlinks");
btnbars.addEventListener("click", function(){
    if(link.classList.contains("showlinks")){
        link.classList.remove("showlinks");
    }else{
        link.classList.add("showlinks");
    }
});  */



/*
function openNav() {
    document.getElementById("showlink").style.display = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }


  function openNav() {
    var x = document.getElementById("showlink");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }*/

  
  const barsbtn = document.querySelector(".bars9");
  const items   = document.querySelector(".items");
  barsbtn.addEventListener("click", function(){
      barsbtn.classList.toggle("active");
      items.classList.toggle("active");
      /*if(items.classList.contains("active")){
        items.classList.remove("active")
      }else{
        items.classList.add("active")
      }*/
  });

  var navbar = document.querySelector(".showlinks");
  var topLink = document.querySelector(".top-link"); 

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  
  if (scrollHeight > 500) {

    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});




const date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();





var all = document.querySelector(".all");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = all.getBoundingClientRect().scroll;
  if (scrollHeight > navHeight) {
    all.classList.add("scrolled");
  } else {
    all.classList.remove("scrolled");
  }
});









       
