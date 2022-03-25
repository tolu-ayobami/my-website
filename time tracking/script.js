const tolu = [
    {
        id:1,
     category:"daily", 
     hours:"32 hrs",
    time:"last work-36hrs",
},
{
    id:2,
     category:"daily",
 hours:"10hrs",
  time:"last work-12hrs",
},
{
    id:3,
     category:"daily",
 hours:"4 hrs", 
 time:"last work-10hrs",
},
{
    id:4,
     category:"daily",
 hours:"45 hrs",
  time:"last work-6hrs",
},
{
    id:5, 
    category:"daily", 
hours:"5 hrs",
 time:"last work-7hrs",
},
{
    id:6,
     category:"daily", 
hours:"2 hrs",
 time:"last work-4hrs",
},
{
    id:7, 
    category:"weekly",
 hours:"30 hrs",
  time:"last work-3hrs",
},
{
    id:8,
     category:"weekly",
 hours:"3 hrs",
  time:"last work-1hrs",
},
{
    id:9, 
    category:"weekly",
 hours:"40 hrs",
  time:"last work-2hrs",
},
{
    id:10, 
    category:"weekly",
 hours:"6 hrs",
  time:"last work-8hrs",
},
{
    id:11, 
    category:"weekly",
 hours:"38 hrs",
  time:"last work-5hrs",
},
{id:12, 
    category:"weekly",
 hours:"31hrs",
  time:"last work-3hrs"},
{
    id:13,
    category:"monthly",
hours:"5 hrs", 
time:"last work-6hrs",
},
{
    id:14,
    category:"monthly",
 hours:" 7hrs",
 time:"last work-9hrs",
},
{
    id:15,
    category:"monthly",
 hours:"2 hrs", 
 time:"last work-7hrs",
},
{
    id:16,
    category:"monthly",
 hours:"1 hrs",
  time:"last work-3hrs",
},
{
    id:17,
    category:"monthly",
 hours:"9 hrs",
  time:"last work-4hrs",
},
{
    id:18,
     category:"monthly",
 hours:"10 hrs", 
 time:"last work-7hrs",
},

];




var ft = document.querySelector(".tab-btn1");
var ft1 = document.querySelector(".tab-btn2");
var ft2 = document.querySelector(".tab-btn3");
var gt = document.querySelector(".sep");
var th1 = document.querySelector(".th1");
var tr1 = document.querySelector(".tr1");
var th2 = document.querySelector(".th2");
var tr2 = document.querySelector(".tr2");
var th3 = document.querySelector(".th3");
var tr3 = document.querySelector(".tr3");
var th4 = document.querySelector(".th4");
var tr4 = document.querySelector(".tr4");
var th5 = document.querySelector(".th5");
var tr5 = document.querySelector(".tr5");
var th6 = document.querySelector(".th6");
var tr6 = document.querySelector(".tr6");



ft.onclick = function(){
    let ab = 0;
    const ty = tolu[ab];
    tr1.textContent = ty.hours;
    th1.textContent = ty.time;

   let ac = 1;
    const df = tolu[ac];
    tr2.textContent = df.hours;
    th2.textContent = df.time;

    let ad = 2;
    const de = tolu[ad];
    tr3.textContent = de.hours;
    th3.textContent = de.time;
    
    let ae = 3;
    const dh = tolu[ae];
    tr4.textContent = dh.hours;
    th4.textContent = dh.time;

    let af = 4;
    const dg = tolu[af];
    tr5.textContent = dg.hours;
    th5.textContent = dg.time;
    
    let ag = 5;
    const dj = tolu[ag];
    tr6.textContent = dj.hours;
    th6.textContent = dj.time;



}

ft1.onclick = function(){
    let ah = 6;
    const ti = tolu[ah];
    tr1.textContent = ti.hours;
    th1.textContent = ti.time;

   let ai = 7;
    const dt = tolu[ai];
    tr2.textContent = dt.hours;
    th2.textContent = dt.time;

    let aj = 8;
    const dm = tolu[aj];
    tr3.textContent = dm.hours;
    th3.textContent = dm.time;
    
    let ak = 9;
    const dn = tolu[ak];
    tr4.textContent = dn.hours;
    th4.textContent = dn.time;

    let al = 10;
    const dy = tolu[al];
    tr5.textContent = dy.hours;
    th5.textContent = dy.time;
    
    let am = 11;
    const dr = tolu[am];
    tr6.textContent = dr.hours;
    th6.textContent = dr.time;


}

ft2.onclick = function(){

    let an = 12;
    const tq = tolu[an];
    tr1.textContent = tq.hours;
    th1.textContent = tq.time;

   let ao = 13;
    const dk = tolu[ao];
    tr2.textContent = dk.hours;
    th2.textContent = dk.time;

    let ap = 14;
    const dw = tolu[ap];
    tr3.textContent = dw.hours;
    th3.textContent = dw.time;
    
    let aq = 15;
    const dz = tolu[aq];
    tr4.textContent = dz.hours;
    th4.textContent = dz.time;

    let ar = 16;
    const db = tolu[ar];
    tr5.textContent = db.hours;
    th5.textContent = db.time;
    
    let as = 17;
    const ds = tolu[as];
    tr6.textContent = ds.hours;
    th6.textContent = ds.time;


}