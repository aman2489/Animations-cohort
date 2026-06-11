import './style.css'
import gsap from "gsap"

//maqrue animation
// gsap.set(".box", {
//   x: -250
// })

// gsap.to(".box", {
//   x:1600,
//   // y: 400,
//   duration: 1.2,
//   delay: 0.6,
//   ease: "power2.inOut",
//   repeat: -1
// });


// Callback functions

gsap.to(".box", {
  x:500,
  duration: 1.4,
  delay: 0.6,
  ease: "power2.inOut",
  onUpdate: () => {
    console.log("Frames");
  }
})