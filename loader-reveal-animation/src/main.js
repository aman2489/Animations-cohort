import './style.css'
import gsap from 'gsap'


let count = 0;
const loaderCount = document.querySelector(".count h1");

const interval = setInterval(() => {
    count++
    loaderCount.textContent = `${count}%`;
    if(count === 100){
        clearInterval(interval);
        lnadingAnimation();
    }
}, 20);


function lnadingAnimation(){
    const tl = gsap.timeline();

    tl.to(loaderCount, {
        opacity: 0,
        duration: 1.6,
        ease: "power3.Out",
    }).to(".loader", {
        yPercent: -100,
        duration: 1.2,
        ease: "expo.Out"
    },"-=0.9").from(".imgDiv img", {
        scale: 1.2,
        durarion: 1.6,
        ease: "power3.out"
    }, "-=0.97").from(".heading h1", {
        yPercent: 100,
        duration:1.2,
        ease: "expo.out"
    }, "-=0.8").from(".subHeading h2", {
        yPercent: -100,
        duration: 1.2,
        ease: "expo.out"
    },"-=0.77")

}
