// Rose Petals
function createPetals(){
    for(let i=0;i<10;i++){
        const petal=document.createElement("div");
        petal.classList.add("petal");
        petal.style.left=Math.random()*100+"vw";
        petal.style.animationDuration=(Math.random()*5+5)+"s";
        document.body.appendChild(petal);
        setTimeout(()=>petal.remove(),10000);
    }
}
setInterval(createPetals,2000);

// NO button
function moveNo(){
    const btn=document.querySelector(".no-btn");
    btn.style.transform=`translate(${Math.random()*200-100}px,${Math.random()*200-100}px)`;
}

// Open box
function openBox(){
    document.querySelector(".ring-box").classList.add("open");
}

// Yes redirect
function sayYes(){
    const popup = document.getElementById("popup");
    popup.classList.add("active");

    let t = 5;
    const timer = setInterval(()=>{
        t--;
        document.getElementById("countdown").innerText = t;
        if(t <= 0){
            clearInterval(timer);
            window.location.href = "letters.html";
        }
    },500);
}


/* PROPOSAL PAGE */

// Escape NO button
function moveNo(){
    const btn=document.querySelector(".no-btn");
    btn.style.transform=`translate(${Math.random()*200-100}px,${Math.random()*200-100}px)`;
}

// Open ring box
function openBox(){
    document.querySelector(".ring-box").classList.add("open");
}

// YES popup + redirect
function sayYes(){
    const popup=document.getElementById("popup");
    popup.classList.add("active");

    let t=5;
    const timer=setInterval(()=>{
        t--;
        document.getElementById("countdown").innerText=t;
        if(t<=0){
            clearInterval(timer);
            window.location.href="proposal.html";
        }
    },500);
}
