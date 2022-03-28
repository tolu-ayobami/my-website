var reply = document.querySelector(".reply");
var comment = document.querySelector(".comment");
var oper = document.querySelector(".oper");
var btreply = document.querySelector("btreply");
var section = document.querySelector(".section");
var textareal= document.querySelector(".textarea");

reply.addEventListener("click", function(){
    comment.classList.toggle("show");



});






window.addEventListener("load", function(){

    var reply = document.querySelector(".reply");
var comment = document.querySelector(".comment");
var oper = document.querySelector(".oper");
var btreply = document.querySelector("btreply");
var section = document.querySelector(".section");
var area = document.querySelector(".textarea");
var delet = document.querySelector(".delete");
var overl = document.querySelector(".overl");





comment.addEventListener("submit", function(e){
    e.preventDefault();

    const bn = area.value;

if(!bn){
alert("enter value");
return;
}








const task_el = document.createElement("div");
task_el.classList.add("oper");

const task_element = document.createElement("div");
task_element.classList.add("opera");

task_el.appendChild(task_element);


const task_el1 = document.createElement("i");

task_el1.classList = 'fa fa-plus'


const task_element1 = document.createElement("p");
task_element1.classList.add("twelve");
task_element1.innerHTML = "0";

const task_el2 = document.createElement("i");
task_el2.classList = 'fa fa-minus'

task_element.appendChild(task_el1);
task_element.appendChild(task_element1);
task_element.appendChild(task_el2);


const task_el3 = document.createElement("div");
task_el3.classList.add("cover");

task_el.appendChild(task_el3);

const task_el4 = document.createElement("div");
task_el4.classList.add("amysmall");

task_el.appendChild(task_el4);

task_el3.appendChild(task_el4);




const task_el5 = document.createElement("div");
task_el5.classList.add("amy");

task_el.appendChild(task_el5);
task_el3.appendChild(task_el5);
task_el4.appendChild(task_el5);

const task_el6 = document.createElement("img");
task_el6.setAttribute("src", "images/avatars/image-juliusomo.png");
task_el6.classList.add("julius");

const task_el7 = document.createElement("h4");
task_el7.classList.add("amyrobson");
task_el7.innerHTML ="juliusomo"

const task_el8= document.createElement("p");
task_el8.classList.add("you");
task_el8.innerHTML = "you"

const task_el9 = document.createElement("p");
task_el9.classList.add("month");
task_el9.innerHTML = "just now"

task_el5.appendChild(task_el6);
task_el5.appendChild(task_el7);
task_el5.appendChild(task_el8);
task_el5.appendChild(task_el9);


const task_el10 = document.createElement("div");
task_el10.classList.add("tolu");

task_el.appendChild(task_el10);
task_el3.appendChild(task_el10);
task_el4.appendChild(task_el10);


const task_el11 = document.createElement("div");
task_el11.classList.add("delete");


task_el.appendChild(task_el11);
task_el3.appendChild(task_el11);
task_el4.appendChild(task_el11);
task_el10.appendChild(task_el11);

const task_el12 = document.createElement("img");
task_el12.classList.add("fut");
task_el12.setAttribute("src", "images/icon-delete.svg");

const task_el13 = document.createElement("p");
task_el13.classList.add("ti");
task_el13.innerHTML = 'delete'

task_el11.appendChild(task_el12);
task_el11.appendChild(task_el13);


const task_el14 = document.createElement("div");
task_el14.classList.add("edit");

task_el.appendChild(task_el14);
task_el3.appendChild(task_el14);
task_el4.appendChild(task_el14);
task_el10.appendChild(task_el14);

const task_el15 = document.createElement("img");
task_el15.classList.add("gd");
task_el15.setAttribute("src", "images/icon-edit.svg");

const task_el16 = document.createElement("p");
task_el16.classList.add("ty");
task_el16.innerHTML ="edit"

task_el14.appendChild(task_el15);
task_el14.appendChild(task_el16);


const task_el_input = document.createElement("input");
task_el_input.classList.add("answer");
task_el_input.type = "text";
task_el_input.value = bn;
task_el_input.setAttribute("readonly", "readonly");

task_el3.appendChild(task_el_input);

section.appendChild(task_el);








task_el14 .addEventListener("click", function(){
    if(task_el16.innerText === "edit"){
        task_el_input.removeAttribute("readonly");
        task_el_input.focus();
        task_el16 .innerHTML = "save";  

        }else{
            task_el_input.setAttribute("readonly", "readonly");
            task_el16  .innerHTML = "edit";
        }

});


var tobi= document.querySelector(".delete");
var over = document.querySelector(".overl");



tobi.onclick = function(){
    over.classList.add("shola");
}

var can = document.querySelector(".cancel");

can.onclick = function(){
    over.classList.remove("shola");
}


var ove = document.querySelector(".mayor");
ove.onclick = function(){
    over.classList.remove("shola");
    section.classList.add("sect");
    comment.classList.add("tech");



}





});




});




let scores = 0
var tega = document.querySelectorAll(".fa ");
var teg = document.querySelector(".twelve");

tega.forEach(function(tega){
    tega.addEventListener("click", function(){
        if(tega.classList.contains("fa-plus")){
            scores++;
        }else if(tega.classList.contains("fa-minus")){
            scores--;
        }else {
           scores = 0;
        }
           teg.textContent = scores;
        
    });

});














