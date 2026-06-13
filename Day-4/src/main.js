import './style.css'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";


const playBtn = document.querySelector(".play");
const pauseBtn = document.querySelector(".pause");
const restartBtn = document.querySelector(".restart");
const reverseBtn = document.querySelector(".reverse");
const seekBtn = document.querySelector(".seek");

gsap.registerPlugin(ScrollTrigger);

// const tl = gsap.timeline();
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page2",
    start: "top top",
    end: "top -100%",
    scrub: 1,
    pin: true
  }
});

gsap.set(".content", {
  gap: "40rem",
  opacity: 0
})

gsap.set(".imgDiv", {
  scale: 0.3
})

tl.to(".imgDiv", {
  scale:1,
  ease: "power4.out"
}).to(".content", {
  opacity:1,
  gap: "4rem",
},"<")


// gsap.to(".box", {
//   x: 650,
//   ease: "power4.out",
//   scrollTrigger: {
//     trigger: ".page2",
//     start: "top top",
//     end: "top -40%",
//     scrub: 1,
//     pin: true,
//     onLeaveBack: () => {
//       console.log("left back!!")
//     }
//   },
// });

// tl.to(".box0", {
  //   x:650,
  //   duration: 0.8,
//   ease: "power3.out",
//   delay: 0.5,
//   // stagger: {
//   //   each: -0.08,
//   //   from: "random"
//   // }
// })
// .to(".box1", {
//   x:650,
//   duration: 0.8,
//   ease: "power3.out",
// },"-=0.4").addLabel("aman")
// .to(".box2", {
//   x:650,
//   duration: 0.8,
//   ease: "power3.out",
// },"-=0.4")
// .to(".box3", {
//   x:650,
//   duration: 0.8,
//   ease: "power3.out",
// },"-=0.4")

// playBtn.addEventListener("click", () => {
//   tl.play();
// })

// pauseBtn.addEventListener("click", () => {
//   tl.pause();
// })

// restartBtn.addEventListener("click", () => {
//   tl.restart();
// })

// reverseBtn.addEventListener("click", () => {
//   tl.reverse();
// })

// seekBtn.addEventListener("click", () => {
//   tl.seek(0.7);
// })

// seekBtn.addEventListener("click", () => {
//   tl.seek("aman");  //if 2 or more labels added in timeline then it will seek at last element with that label.
// })

//Nested Timeline
// Can make functions returning a timeline and can then create a master timeline and then add the other timeline in master timeline ad desired sequence and also position parameters can be used in add function.

// const laodingTimeline = () => {
//   return gsap.timeline().to(Element, {});
// }

// const navbarTimeline = () => {
//   return gsap.timeline.to(Element, {});
// }

// const masterTimeline = gsap.timeline();

// masterTimeline.add(laodingTimeline).add(navbarTimeline, "-=0.2");



