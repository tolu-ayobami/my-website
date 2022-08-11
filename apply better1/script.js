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