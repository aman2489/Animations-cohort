import './style.css'
import { gsap } from "gsap";
import { Draggable } from 'gsap/Draggable';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(ScrollTrigger,SplitText, Draggable, InertiaPlugin, Flip);

// const split = new SplitText(".title h1", {
//   type: 'chars, words, lines',
//   wordsClass: "titleWords",
//   charsClass: "titleChars"
// })

// gsap.from(split.chars, {
//   yPercent: 100,
//   duration: 1.2,
//   ease: "expo.out",
//   delay: 0.5,
//   stagger: {
//     each: 0.08,
//     from: "edges"
//   },
// });

// Draggable.create(".box", {
//   bounds: "#app",
//   inertia: true,
//   dragResistance: 0.2
// });


const gallery = document.querySelector(".imageGallery");
const show = document.querySelector(".imageShow");

gallery.addEventListener("click", (e) => {
  const img = e.target.closest("img");

  if (!img) return;

  const mainImg = document.querySelector(".imageShow img");

  // capture ALL images before DOM change
  const state = Flip.getState("img");

  // change DOM
  gallery.appendChild(mainImg);
  show.appendChild(img);

  // animate everything to new positions
  Flip.from(state, {
    duration: 1.2,
    ease: "power3.inOut",
    absolute: true,
    scale: true
  });
});
