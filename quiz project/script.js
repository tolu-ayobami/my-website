
    var quizData = [{
        question:"which langauge runs in a web browser?",
        a:"java",
        b:"c",
        c:"python",
        d:"javascript",
        correct:"d",
    },
    
         {
             question:"where is tolu from?",
          a:"ogun",
          b:"ondo",
          c:"oyo",
          d:"lagos",
          correct:"d",
        },

        {
            question:"what is my name?",
        a:"icey",
        b:"andrew",
        c:"tobi",
        d:"tolu",
        correct:"a",
    },
    
        {
            question:"what year was javascript launched?",
        a:"1991",
        b:"1995",
        c:"1987",
        d:"none of the above",
        correct:"d",
    },

    {
        question:"who is tolu's crush?",
    a:"ope",
    b:"temmy",
    c:"remi",
    d:"none of the above",
    correct:"d",
},


{
    question:"what is the use of css in a web page?",
a:"styling",
b:"building web structure",
c:"trading",
d:"none of the above",
correct:"a",
},
    ];




var quiz = document.getElementById("quiz");
var answerEls = document.querySelectorAll(".answer");
var  questionEl = document.querySelector(".questions");
var a_text =  document.getElementById("a-text");
var b_text =  document.getElementById("b-text");
var c_text =  document.getElementById("c-text");
var d_text =  document.getElementById("d-text");
var submitbtn9 = document.querySelector(".submits");
var submitbtn8 = document.querySelector(".sub");
var ove = document.querySelector(".overl");
var over1 = document.querySelector(".over");
var boto = document.querySelector(".go");
var va = document.querySelector(".va");
var def = document.querySelector(".ove");
var okl = document.querySelector(".oka");


let veg = va.value;


let currentquiz = 0;
let scores = 0;

function getTame(){
var tog = quizData[currentquiz];
questionEl.textContent = tog.question;
a_text.textContent = tog.a;
b_text.textContent = tog.b;
c_text.textContent = tog.c;
d_text.textContent = tog.d;
}






function deselectAnswers() {
answerEls.forEach(function(answerEl){
   answerEl.checked = false;
});
}


function getSelected(){
let answer;
answerEls.forEach(function(answerEl){
   if(answerEl.checked){
   answer = answerEl.id;
   }
})

return answer;
}

submitbtn9.addEventListener("click", function(){
const answer = getSelected();
deselectAnswers();

if (answer === quizData[currentquiz].correct){
   scores++;

   
}
currentquiz++;

if(currentquiz > quizData.length-1){
    def.classList.add("feg");
    
    okl.innerHTML = `<h2 class="web">${veg} you have answerd ${scores}/${quizData.length} questions correctly</h2>

    <button class="def" onclick="location.reload()">Reload</button>
    `
    




}else{
   getTame();
   
}




});



submitbtn8.addEventListener("click", function(){
   
    ove.classList.add("fag");
   


});

boto.onclick = function(){
    over1.style.display = "none";
}



