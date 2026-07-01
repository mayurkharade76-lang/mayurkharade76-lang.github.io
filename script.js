// ==========================
// Typing Animation
// ==========================

const words = [
    "IT Support Engineer",
    "L1/L2 Support Specialist",
    "Microsoft 365 Expert",
    "Active Directory",
    "Network Troubleshooter",
    "Problem Solver"
];

let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    currentWord = words[wordIndex];

    if (!isDeleting) {
        typing.textContent = currentWord.substring(0, letterIndex++);
    } else {
        typing.textContent = currentWord.substring(0, letterIndex--);
    }

    let speed = isDeleting ? 60 : 120;

    if (!isDeleting && letterIndex === currentWord.length + 1) {
        speed = 1800;
        isDeleting = true;
    }

    if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        wordIndex++;

        if (wordIndex === words.length) {
            wordIndex = 0;
        }
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ==========================
// Scroll Animation
// ==========================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const top = window.scrollY;
        const offset = section.offsetTop - 300;

        if (top > offset) {

            section.style.opacity = "1";
            section.style.transform = "translateY(0px)";

        }

    });

});

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(80px)";
    section.style.transition = ".8s";

});


// ==========================
// Back To Top Button
// ==========================

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
bottom:30px;
right:30px;
width:55px;
height:55px;
border:none;
border-radius:50%;
background:#00e5ff;
color:#000;
font-size:24px;
cursor:pointer;
display:none;
box-shadow:0 0 25px cyan;
z-index:999;
transition:.3s;
`;

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

};


// ==========================
// Floating Profile Image
// ==========================

const image = document.querySelector(".image-box");

setInterval(()=>{

image.animate([

{
transform:"translateY(0px)"
},

{
transform:"translateY(-15px)"
},

{
transform:"translateY(0px)"
}

],{

duration:3000,
iterations:1

});

},3000);


// ==========================
// Active Navbar
// ==========================

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

if(pageYOffset>=sectionTop){

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


// ==========================
// Mouse Glow Effect
// ==========================

document.addEventListener("mousemove",(e)=>{

document.body.style.backgroundPosition =
`${e.clientX/20}px ${e.clientY/20}px`;

});


// ==========================
// Console Message
// ==========================

console.log("%cWelcome to Mayur Kharade Portfolio 🚀",
"color:cyan;font-size:18px;font-weight:bold;");
