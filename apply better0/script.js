var slides = document.getElementsByClassName("ok");

var slideIndex = 0;
Show();

function Show(){
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {
          slideIndex = 1
        } 
      
      slides[slideIndex-1].style.display = "block"; 

      setTimeout(Show, 2000);
}


 var close = document.querySelector(".close");

var nav = document.querySelector(".nav-links");

var bar = document.querySelector(".bar");

bar.onclick = function () {

if(nav.classList.contains("active")){
 
  nav.classList.remove("active");
  bar.style.background = "";
  bar.style.color ="";
  bar.style.width ="";
  bar.style.height ="";
  bar.style.padding ="";
  
}else {
  nav.classList.add("active")
  bar.style.background = "#4c0458";
  bar.style.color ="white";
  bar.style.width ="50px";
  bar.style.height ="41px";
  bar.style.padding ="4px";
  bar.style.textAlign ="center";
}
  

}