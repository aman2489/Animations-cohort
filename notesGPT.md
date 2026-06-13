# GSAP Animation Notes (Professional Version)

# 1. Animation Fundamentals

Every animation is a transition between two states.

```
Initial State
      |
      |
      v
Transition
(Duration + Ease + Path)
      |
      |
      v
Final State
```

Core parts:

- Starting State
- Ending State
- Duration
- Easing
- Animation Path

---

# 2. Web Animations

Common ways to create animations:

## CSS Animations

Best for:

- Simple hover effects
- Transitions
- Keyframes
- Small UI animations


## JavaScript Animations

Best for:

- Complex sequences
- Scroll animations
- Interactive animations
- Dynamic values


---

# 3. GSAP (GreenSock Animation Platform)

GSAP is a JavaScript animation library.

Advantages:

- High performance
- Simple syntax
- Timeline control
- Scroll based animations
- Handles browser optimizations

---

# 4. Basic Syntax

```javascript
gsap.method(target, {
    property:value
});
```


Example:

```javascript
gsap.to(".box",{
    x:300,
    duration:1
});
```


Structure:

```
Target
 |
 |
 v
Animation Method
 |
 |
 v
Animation Properties
```

---

# 5. GSAP Core Methods

---

# gsap.to()

Animates:

```
Current State
      |
      |
      v
Given End State
```


Example:

```javascript
gsap.to(".box",{

    x:300,
    opacity:1,
    duration:1

});
```


Used when:

- Element already has starting CSS
- You only care about final state


---

# gsap.from()

Creates a temporary starting point.

Flow:

```
Given Starting State

        |
        |
        v

Original CSS State
```


Example:

```javascript
gsap.from(".box",{

    y:100,
    opacity:0,
    duration:1

});
```


Useful for:

- Page loading animations
- Text reveal animations
- Entry animations


---

# gsap.fromTo()

Full control over both states.


Flow:

```
Custom Start

      |
      |
      v

Custom End
```


Example:

```javascript
gsap.fromTo(
".box",

{
 opacity:0,
 y:100
},

{
 opacity:1,
 y:0,
 duration:1
}

);
```


Use when:

- Initial state must always be fixed
- Avoiding CSS conflicts

---

# gsap.set()

Immediately applies properties.

No animation happens.


Example:

```javascript
gsap.set(".box",{

    opacity:0,
    y:100

});
```


Flow:

```
Element
   |
   |
   v

Instant State Change
```


Common professional pattern:

```javascript
gsap.set(".card",{
 opacity:0
});


gsap.to(".card",{

 opacity:1

});
```

---

# 6. Transform Properties

Common GSAP properties:

```javascript
{
    x:100,
    y:100,

    scale:2,

    rotate:360,

    opacity:0,

    duration:1
}
```


GSAP automatically optimizes transforms.

---

# 7. Ease

Ease controls animation speed behavior.


Example:

```javascript
gsap.to(".box",{

 ease:"power4.out"

});
```


Flow:

## ease out

```
FAST ---------- slow
```


## ease in

```
slow ---------- FAST
```


## ease inOut

```
slow ---- FAST ---- slow
```


Common eases:

```
power1
power2
power3
power4

expo
elastic
bounce
back
```

---

# 8. Repeat

Repeats animation.


Example:

```javascript
gsap.to(".box",{

repeat:2

});
```


Flow:

```
Default Run

+
2 repeats

=

3 total runs
```


Infinite:

```javascript
repeat:-1
```

---

# 9. Yoyo

Makes animation reverse after completing.


Example:

```javascript
gsap.to(".box",{

x:300,

repeat:-1,

yoyo:true

});
```


Flow:

```
START

 --->

END

<---

START

(repeat)
```

---

# 10. Stagger

Used for multiple elements.

Example:

```javascript
gsap.from(".item",{

y:50,

opacity:0,


stagger:{
 each:0.1,
 from:"center"
}

});
```


Normal:

```
1 2 3 4

animate together
```


With stagger:

```
1

  2

    3

      4
```


Options:

```
start
end
center
random
edges
```

---

# 11. Custom Object Animation


GSAP can animate JavaScript objects.


Example:


```javascript
const obj={
 count:0
};


gsap.to(obj,{

count:100,


onUpdate(){

console.log(obj.count);

}

});
```


Used in:

- Counters
- Canvas
- Three.js animations

---

# 12. Timeline

Timeline controls animation sequence.


Example:


```javascript
const tl = gsap.timeline();


tl.to(".box1",{

})

.to(".box2",{

})

.to(".box3",{

});
```


Default:


```
Animation 1

       |

Animation 2

       |

Animation 3
```


---

# Timeline Position Parameters


## "<"

Start with previous animation.


```
Animation 1 -------->


Animation 2 -------->
```


Example:

```javascript
.to(".box",{},"<")
```


---

## -= value


Starts before previous animation ends.


Example:


```javascript
"-=0.3"
```


Formula:


```
Previous Ending Time - 0.3s
```


---

## += value


Adds delay.


```
Animation 1

       +

Delay

       +

Animation 2
```


---

# Labels


Create named timeline positions.


Example:


```javascript
tl.add("start");


tl.to(".box1",{}, "start");


tl.to(".box2",{}, "start");
```


Flow:


```
BOX 1 -------->

BOX 2 -------->

same time
```


---

# 13. GSAP Callbacks


## onStart


Runs when animation starts.


```javascript
onStart(){

}
```


---


## onUpdate


Runs every animation frame.


```javascript
onUpdate(){

}
```


---


## onComplete


Runs after finishing.


```javascript
onComplete(){

}
```


---

# 14. ScrollTrigger


Plugin for scroll animations.


Setup:


```javascript
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
```


Example:


```javascript
gsap.to(".box",{

x:500,


scrollTrigger:{

trigger:".box",

start:"top 80%",

end:"top 20%"

}

});
```


---

# Understanding Start And End


Example:


```javascript
start:"top 80%"
```


Meaning:


```
Element Top

touches

80% viewport

=

START
```

---

# Scrub


Connect animation progress with scroll.


Example:


```javascript
scrollTrigger:{

scrub:true

}
```


Flow:


```
Scroll Down

      |

Animation Forward


Scroll Up

      |

Animation Reverse
```


---

# Pin


Locks element while scrolling.


```javascript
scrollTrigger:{

pin:true

}
```


Flow:


```
Reach Point

   |

PIN

   |

Animation

   |

Release
```

---

# ScrollTrigger Debugging


Use markers:


```javascript
scrollTrigger:{

markers:true

}
```


Shows:

- Start point
- End point


---

# ScrollTrigger Callbacks


Scrolling Down:


```
onEnter()

      |

onLeave()
```


Scrolling Up:


```
onEnterBack()

      |

onLeaveBack()
```


---

# 15. React / Next.js With GSAP

Install:

```bash
npm install gsap
```


---

# useGSAP Hook


Recommended React approach:


```javascript
import { useGSAP } from "@gsap/react";


useGSAP(()=>{


gsap.to(".box",{

x:200

});


});
```


---

# Cleanup


Animations should be removed when component unmounts.


Example:


```javascript
const animation = gsap.to(".box",{

x:200

});


return ()=>{

animation.kill();

}
```


---

# gsap.context()


Groups animations together.


Example:


```javascript
let ctx = gsap.context(()=>{


gsap.to(".box",{

x:200

});


});


return ()=>ctx.revert();
```


Prevents:

- Memory leaks
- Duplicate animations
- React strict mode problems


---

# 16. Responsive Animations


GSAP version of media queries.


```javascript
let mm = gsap.matchMedia();


mm.add("(max-width:768px)",()=>{


});
```


---

# 17. ScrollTrigger Refresh


Recalculates scroll positions.


```javascript
ScrollTrigger.refresh();
```


Use after:

- Dynamic content loading
- Images loading
- Layout changes


---

# Final GSAP Mental Model


```
set()

Prepare Element


        |

from / to / fromTo

Create Animation


        |

timeline()

Control Sequence


        |

ScrollTrigger

Control With Scroll
```

---