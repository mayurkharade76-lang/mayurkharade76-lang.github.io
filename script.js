/* ==========================================
   AOS Animation
========================================== */

AOS.init({
    duration:1000,
    once:true,
    offset:100
});

/* ==========================================
   Typing Animation
========================================== */

const words=[
"IT Support Engineer",
"L1 / L2 Support",
"Microsoft 365 Expert",
"Active Directory",
"Network Troubleshooter",
"Problem Solver"
];

let wordIndex=0;
let charIndex=0;
let deleting=false;

const typing=document.getElementById("typing");

function type(){

const current=words[wordIndex];

if(!deleting){

typing.textContent=current.substring(0,charIndex++);

if(charIndex>current.length){

deleting=true;

setTimeout(type,1800);

return;

}

}else{

typing.textContent=current.substring(0,charIndex--);

if(charIndex<0){

deleting=false;

wordIndex++;

if(wordIndex>=words.length){

wordIndex=0;

}

}

}

setTimeout(type,deleting?60:120);

}

type();

/* ==========================================
   Counter Animation
========================================== */

const counters=document.querySelectorAll(".counter");

const startCounter=(counter)=>{

const target=+counter.dataset.target;

let count=0;

const speed=target/100;

const update=()=>{

count+=speed;

if(count<target){

counter.innerText=Math.floor(count);

requestAnimationFrame(update);

}else{

counter.innerText=target+"+";

}

};

update();

};

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

startCounter(entry.target);

observer.unobserve(entry.target);

}

});

});

counters.forEach(counter=>observer.observe(counter));

/* ==========================================
   Active Navbar
========================================== */

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=window.scrollY;
const offset=section.offsetTop-150;
const height=section.offsetHeight;

if(top>=offset && top<offset+height){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/* ==========================================
   Reveal Sections
========================================== */

const reveal=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

reveal.forEach(sec=>{

const top=window.innerHeight;

if(sec.getBoundingClientRect().top<top-120){

sec.classList.add("show");

}

});

});

/* ==========================================
   Floating Profile Image
========================================== */

const image=document.querySelector(".image-box");

if(image){

setInterval(()=>{

image.animate([

{transform:"translateY(0px)"},

{transform:"translateY(-15px)"},

{transform:"translateY(0px)"}

],{

duration:3000,

iterations:1

});

},3000);

}

/* ==========================================
   Back To Top Button
========================================== */

const topBtn=document.createElement("button");

topBtn.innerHTML='<i class="fas fa-arrow-up"></i>';

topBtn.className="topBtn";

document.body.appendChild(topBtn);

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});

topBtn.style.cssText=`

position:fixed;
bottom:30px;
right:30px;
width:55px;
height:55px;
display:none;
justify-content:center;
align-items:center;
border:none;
border-radius:50%;
background:#00ffff;
color:#000;
font-size:22px;
cursor:pointer;
box-shadow:0 0 25px cyan;
z-index:999;
transition:.4s;

`;

/* ==========================================
   Smooth Scrolling
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

/* ==========================================
   Console Welcome
========================================== */

console.log("%cWelcome to Mayur Kharade Portfolio 🚀",
"color:cyan;font-size:18px;font-weight:bold;");
/* ==========================================
   PARTICLE BACKGROUND
========================================== */

const bg = document.querySelector(".background-animation");

if (bg) {

    for (let i = 0; i < 40; i++) {

        const particle = document.createElement("span");

        particle.classList.add("particle");

        particle.style.left = Math.random() * 100 + "%";
        particle.style.top = Math.random() * 100 + "%";

        particle.style.width =
            Math.random() * 12 + 6 + "px";

        particle.style.height =
            particle.style.width;

        particle.style.animationDuration =
            Math.random() * 10 + 8 + "s";

        particle.style.animationDelay =
            Math.random() * 5 + "s";

        bg.appendChild(particle);

    }

}

/* ==========================================
   MOUSE GLOW EFFECT
========================================== */

const glow = document.createElement("div");

glow.className = "cursor-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});

/* ==========================================
   PARALLAX HERO EFFECT
========================================== */

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".home-image");

    if(hero){

        hero.style.transform =
        `translateY(${window.scrollY * 0.15}px)`;

    }

});

/* ==========================================
   SKILL CARD HOVER EFFECT
========================================== */

const cards = document.querySelectorAll(".skill-card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const x = e.offsetX;
        const y = e.offsetY;

        card.style.background =
        `radial-gradient(circle at ${x}px ${y}px,
        rgba(0,255,255,.35),
        rgba(255,255,255,.08))`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background =
        "rgba(255,255,255,.08)";

    });

});

/* ==========================================
   RANDOM SPARKLES
========================================== */

setInterval(() => {

    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.style.left =
        Math.random() * window.innerWidth + "px";

    sparkle.style.top =
        Math.random() * window.innerHeight + "px";

    document.body.appendChild(sparkle);

    setTimeout(() => {

        sparkle.remove();

    }, 3000);

}, 400);

/* ==========================================
   LOADING COMPLETE
========================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    console.log("Portfolio Loaded Successfully 🚀");

});
