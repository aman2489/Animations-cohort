import gsap from "gsap";
import "./style.css";

// const obj = {
//   a: 0,
// }
// gsap.to(obj, {
//   a: 100,
//   onUpdate: () => {
//     console.log(obj.a);
//   }
// })

gsap.fromTo(".box", {
  x: 0,
}, {
  duration: 1,
  delay: 0.6,
  x:400,
  y: 200
});
