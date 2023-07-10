const dropDown = document.querySelector(".list-dropdown");

const hamburgerIcon = document.querySelector(".hamburger-icon");

const navbar = document.querySelector(".nav-bar");


//////hamburger menu//////

hamburgerIcon.addEventListener("click",() =>{
    if(dropDown.classList == "list-dropdown"){
        dropDown.classList.toggle("d-block");
        hamburgerIcon.childNodes[1].style.transform = "rotateZ(-45deg)"
        hamburgerIcon.childNodes[3].classList.toggle("hidden")
        hamburgerIcon.childNodes[5].style.transform = "rotateZ(45deg)"
        hamburgerIcon.childNodes[3].style.transition = "all 0.2s ease-in-out"
        navbar.classList.toggle("gray-bg")

    }else{
        dropDown.classList.toggle("d-block");
        hamburgerIcon.childNodes[1].style.transform = "rotateZ(0deg)"
        hamburgerIcon.childNodes[3].classList.toggle("hidden")
        hamburgerIcon.childNodes[5].style.transform = "rotateZ(0deg)"
        navbar.classList.toggle("gray-bg")
    }
});


///////service slider/////////
const serviceSlider = document.querySelector(".service-slider");

const serviceSlides = document.querySelectorAll(".service-slide");

const contentSlides = document.querySelectorAll(".content-slide");

let serviceItem = 6;

let contentItem = 0;

let interval = 3000;

const repeat =  setInterval(() =>{
    
    let interval = 3000;
    
    if(serviceItem < 6){
        serviceSlides[serviceItem + 1].childNodes[1].classList.remove("op-1");

    }    
    if(contentItem > 0){

        contentSlides[contentItem - 1].classList.remove("flex");
    }
    
    serviceSlider.scrollLeft -= 100;

    if(serviceItem < 0){
        serviceItem = 6;  
        interval = 100
    } 
    
    if(contentItem > 6){
        contentItem = 0;
        interval = 100
        serviceSlider.scrollLeft += 300;

    }
    
    contentSlides[contentItem].classList.toggle("flex");
    
    serviceSlides[serviceItem].childNodes[1].classList.toggle("op-1");
    
    serviceItem -= 1;

    contentItem += 1;

    
},interval);

serviceSlides[6].addEventListener("click",() =>{
    contentSlides[0].classList.add("flex");

    contentSlides[1].classList.remove("flex");
    contentSlides[2].classList.remove("flex");
    contentSlides[3].classList.remove("flex");
    contentSlides[4].classList.remove("flex");
    contentSlides[5].classList.remove("flex");
    contentSlides[6].classList.remove("flex");

    serviceSlides[6].childNodes[1].classList.toggle("op-1");

    serviceSlides[0].childNodes[1].classList.remove("op-1");
    serviceSlides[1].childNodes[1].classList.remove("op-1");
    serviceSlides[2].childNodes[1].classList.remove("op-1");
    serviceSlides[3].childNodes[1].classList.remove("op-1");
    serviceSlides[4].childNodes[1].classList.remove("op-1");
    serviceSlides[5].childNodes[1].classList.remove("op-1");

    clearInterval(repeat);
});

serviceSlides[5].addEventListener("click",() =>{
    contentSlides[1].classList.add("flex");

    contentSlides[0].classList.remove("flex");
    contentSlides[2].classList.remove("flex");
    contentSlides[3].classList.remove("flex");
    contentSlides[4].classList.remove("flex");
    contentSlides[5].classList.remove("flex");
    contentSlides[6].classList.remove("flex");

    serviceSlides[5].childNodes[1].classList.toggle("op-1");

    serviceSlides[0].childNodes[1].classList.remove("op-1");
    serviceSlides[1].childNodes[1].classList.remove("op-1");
    serviceSlides[2].childNodes[1].classList.remove("op-1");
    serviceSlides[3].childNodes[1].classList.remove("op-1");
    serviceSlides[4].childNodes[1].classList.remove("op-1");
    serviceSlides[6].childNodes[1].classList.remove("op-1");

    clearInterval(repeat);
});

serviceSlides[4].addEventListener("click",() =>{
    contentSlides[2].classList.add("flex");

    contentSlides[0].classList.remove("flex");
    contentSlides[1].classList.remove("flex");
    contentSlides[3].classList.remove("flex");
    contentSlides[4].classList.remove("flex");
    contentSlides[5].classList.remove("flex");
    contentSlides[6].classList.remove("flex");

    serviceSlides[4].childNodes[1].classList.toggle("op-1");

    serviceSlides[0].childNodes[1].classList.remove("op-1");
    serviceSlides[1].childNodes[1].classList.remove("op-1");
    serviceSlides[2].childNodes[1].classList.remove("op-1");
    serviceSlides[3].childNodes[1].classList.remove("op-1");
    serviceSlides[5].childNodes[1].classList.remove("op-1");
    serviceSlides[6].childNodes[1].classList.remove("op-1");

    clearInterval(repeat);
});

serviceSlides[3].addEventListener("click",() =>{
    contentSlides[3].classList.add("flex");

    contentSlides[0].classList.remove("flex");
    contentSlides[1].classList.remove("flex");
    contentSlides[2].classList.remove("flex");
    contentSlides[4].classList.remove("flex");
    contentSlides[5].classList.remove("flex");
    contentSlides[6].classList.remove("flex");

    serviceSlides[3].childNodes[1].classList.toggle("op-1");

    serviceSlides[0].childNodes[1].classList.remove("op-1");
    serviceSlides[1].childNodes[1].classList.remove("op-1");
    serviceSlides[2].childNodes[1].classList.remove("op-1");
    serviceSlides[4].childNodes[1].classList.remove("op-1");
    serviceSlides[5].childNodes[1].classList.remove("op-1");
    serviceSlides[6].childNodes[1].classList.remove("op-1");

    clearInterval(repeat);
});

serviceSlides[2].addEventListener("click",() =>{
    contentSlides[4].classList.add("flex");

    contentSlides[0].classList.remove("flex");
    contentSlides[1].classList.remove("flex");
    contentSlides[2].classList.remove("flex");
    contentSlides[3].classList.remove("flex");
    contentSlides[5].classList.remove("flex");
    contentSlides[6].classList.remove("flex");

    serviceSlides[2].childNodes[1].classList.toggle("op-1");

    serviceSlides[0].childNodes[1].classList.remove("op-1");
    serviceSlides[1].childNodes[1].classList.remove("op-1");
    serviceSlides[3].childNodes[1].classList.remove("op-1");
    serviceSlides[4].childNodes[1].classList.remove("op-1");
    serviceSlides[5].childNodes[1].classList.remove("op-1");
    serviceSlides[6].childNodes[1].classList.remove("op-1");

    clearInterval(repeat);
});

serviceSlides[1].addEventListener("click",() =>{
    contentSlides[5].classList.add("flex");

    contentSlides[0].classList.remove("flex");
    contentSlides[1].classList.remove("flex");
    contentSlides[2].classList.remove("flex");
    contentSlides[3].classList.remove("flex");
    contentSlides[4].classList.remove("flex");
    contentSlides[6].classList.remove("flex");

    serviceSlides[1].childNodes[1].classList.toggle("op-1");

    serviceSlides[0].childNodes[1].classList.remove("op-1");
    serviceSlides[2].childNodes[1].classList.remove("op-1");
    serviceSlides[3].childNodes[1].classList.remove("op-1");
    serviceSlides[4].childNodes[1].classList.remove("op-1");
    serviceSlides[5].childNodes[1].classList.remove("op-1");
    serviceSlides[6].childNodes[1].classList.remove("op-1");

    clearInterval(repeat);
});

serviceSlides[0].addEventListener("click",() =>{
    contentSlides[6].classList.add("flex");

    contentSlides[0].classList.remove("flex");
    contentSlides[1].classList.remove("flex");
    contentSlides[2].classList.remove("flex");
    contentSlides[3].classList.remove("flex");
    contentSlides[4].classList.remove("flex");
    contentSlides[5].classList.remove("flex");

    serviceSlides[0].childNodes[1].classList.toggle("op-1");

    serviceSlides[1].childNodes[1].classList.remove("op-1");
    serviceSlides[2].childNodes[1].classList.remove("op-1");
    serviceSlides[3].childNodes[1].classList.remove("op-1");
    serviceSlides[4].childNodes[1].classList.remove("op-1");
    serviceSlides[5].childNodes[1].classList.remove("op-1");
    serviceSlides[6].childNodes[1].classList.remove("op-1");

    clearInterval(repeat);
});




