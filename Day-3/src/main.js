import './style.css'
import gsap from "gsap"


// gsap.to(".box", {
//   x:700,
//   duration: 1.6,
//   ease: "power2.out",
//   delay: 0.6,
//   stagger: {
//     each: 0.1,
//     from:'random'
//   },
//   opacity: 0,
// })

// gsap.from("h1 span", {
//   yPercent: 100,
//   duration: 1.5,
//   ease: "expo.out",
//   stagger: {
//     each: 0.08,
//     from: "random"
//   },
//   opacity: 0
// })

const tl = gsap.timeline();

tl.to(".box1", {
  x: 700,
  duration: 1.3,
  ease: "power4.out",
  delay: 0.6
}).to(".box2", {
  x: 700,
  duration: 1.3,
  ease: "power4.out",
},"aman").to(".box3", {
  x: 700,
  duration: 1.3,
  ease: "power4.out",
}).to(".box4", {
  x: 700,
  duration: 1.3,
  ease: "power4.out",
},"aman")