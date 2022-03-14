
var btn =[{id:"ADVICE #1",  text:"tilde try-hard, woke fixie banjo man bun. Small batch tumeric"}, 
{ id:"ADVICE #2", text:"I'm baby wolf pickled schlitz try-hard normcore marfa man bun"}, 
{id:"ADVICE #3", text:"rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard "},
{id:"ADVICE #4", text:"it is easy to sit up and take notice, what's difficult is getting up and taking action"},];






var dice = document.querySelector(".dice");
var power = document.querySelector(".p1");
var dicer = document.querySelector(".p2");




var get = 0;

function getName(){
    const gut = btn[get];
    power.textContent = gut.id;
    dicer.textContent = gut.text;
}


dice.onclick= function(){
    get = Math.floor(Math.random()*btn.length);
    getName();

}