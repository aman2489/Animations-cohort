# 🚀 GSAP Complete Handbook

Beginner → Intermediate → React / Next.js Ready

---

# Table Of Contents

1. Animation Fundamentals
2. CSS vs JavaScript Animations
3. GSAP Introduction
4. Basic Syntax
5. Core Methods
6. Transform Properties
7. Ease / Timing
8. Repeat & Yoyo
9. Stagger
10. Timeline
11. ScrollTrigger
12. Responsive GSAP
13. Text Animations
14. SVG Animations
15. React + Next.js GSAP
16. Performance Rules


---

# 1. Animation Fundamentals


Animation means changing an element from one state into another state over time.


Every animation has:


- Starting State
- Ending State
- Duration
- Ease
- Movement Path



## Animation Flow


```
Initial State

      ↓

Transition

(Duration + Ease + Movement)

      ↓

Final State
```



Example:


```
Box Position


x:0


 ↓


animation happens


 ↓


x:500
```


The browser updates frames very quickly, creating the illusion of movement.


---

# 2. CSS Animation vs JavaScript Animation



## CSS Animation


CSS animations are good for simple UI effects.



Examples:

- Hover effects
- Button animations
- Loading animations
- Simple keyframes



Example:


```css
.button{

transition:0.3s;

}


.button:hover{

scale:1.1;

}
```



Problem:


CSS becomes difficult when:

- Multiple animations depend on each other
- Scroll control is required
- Dynamic values are needed



---


# JavaScript Animations


JavaScript animations provide more control.



Used for:


- Complex timelines
- Scroll animations
- Interactive websites
- Game animations
- Dynamic animations



GSAP is a JavaScript animation library.



---


# 3. What Is GSAP?


GSAP:

GreenSock Animation Platform



It is one of the most powerful JavaScript animation libraries.



Advantages:


- High performance
- Easy syntax
- Timeline system
- Scroll based animations
- Works with React
- Browser optimization



---


# 4. Basic GSAP Syntax



```javascript
gsap.method(

"element",

{

properties

}

)
```



Example:



```javascript
gsap.to(".box",{


x:300,


duration:1


})
```



Structure:



```
Target Element


      ↓


GSAP Method


      ↓


Animation Properties
```



---


# 5. GSAP Core Methods


The main methods:


```
gsap.to()

gsap.from()

gsap.fromTo()

gsap.set()
```



---


# gsap.to()



## Meaning


Moves from current/default state to provided ending state.



Flow:



```
Current State


      ↓


Given Ending State
```



Example:



```javascript
gsap.to(".box",{


x:300,


opacity:0,


duration:1


})
```



Before:


```
x = 0

opacity = 1
```


After:


```
x = 300

opacity = 0
```



Use when:


- Element already has starting CSS
- You only define where animation ends



---


# gsap.from()



## Meaning


Creates a temporary starting point.



Flow:


```
Fake Start


      ↓


Original CSS State
```



Example:



```javascript
gsap.from(".box",{


y:100,


opacity:0,


duration:1


})
```



Actually happens:


```
opacity 0


 ↓


opacity 1
```



Best for:


- Page entry animations
- Hero sections
- Text reveals



---


# gsap.fromTo()



## Meaning


You provide both states manually.



Flow:


```
Custom Start


      ↓


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


)
```



Use when:


- Need exact control
- Avoid CSS conflicts



---


# gsap.set()



## Meaning


Instantly changes properties.

No animation.



Example:


```javascript
gsap.set(".box",{


opacity:0,


scale:.5


})
```



Professional pattern:



```javascript
gsap.set(".card",{


opacity:0


})



gsap.to(".card",{


opacity:1


})
```



Flow:


```
Prepare Element

       ↓

Animate Element
```


---

# 6. Transform Properties

GSAP mainly works by changing CSS properties.

For best performance, prefer transform properties.

---

# x and y

Moves an element horizontally and vertically.


Example:


```javascript
gsap.to(".box",{

    x:300,

    y:100,

    duration:1

})
```


Flow:


```
Original Position


        ↓


Move 300px right

Move 100px down
```


Equivalent CSS:

```css
transform:
translate(
300px,
100px
);
```


---

# xPercent and yPercent


Moves elements based on their own size.


Difference:


```
x

=

pixel based movement



xPercent

=

percentage of element size
```



Example:



```javascript
gsap.to(".box",{

xPercent:100

})
```



If box width is:


```
200px
```


Then:


```
xPercent:100

=

move 200px
```



Common use:

Centering animations:

```javascript
gsap.set(".box",{

xPercent:-50,

yPercent:-50

})
```


---

# Scale


Changes element size.



Example:


```javascript
gsap.to(".box",{


scale:2


})
```



Flow:


```
Normal Size


    ↓


2x Bigger
```



Other options:


```javascript
scaleX:2

scaleY:.5
```


---

# Rotation


Rotates an element.



Example:


```javascript
gsap.to(".box",{


rotation:360,


duration:2


})
```



Flow:



```
0 degree

   ↓

360 degree
```



---

# Opacity


Controls visibility.



Example:


```javascript
gsap.to(".box",{


opacity:0


})
```



Flow:


```
Visible

 ↓

Invisible
```



---

# Transform Origin


Controls the point from where transformations happen.


Default:


```
      center

        ↓

    [ BOX ]
```



Example:



```javascript
gsap.to(".box",{


rotation:180,


transformOrigin:"left center"


})
```



Now rotation happens from left side.



Used for:

- Doors
- Menus
- Cards
- SVG animations



---


# 7. Duration, Delay And Ease



# Duration


Controls animation time.


Example:


```javascript
gsap.to(".box",{


duration:2


})
```



Meaning:


```
Animation completes in 2 seconds
```



---

# Delay


Wait before starting.



Example:



```javascript
gsap.to(".box",{


delay:1


})
```



Flow:



```
Wait 1 second

      ↓

Start Animation
```



---

# Ease


Ease controls animation speed behaviour.


Without ease:


```
same speed

---------------->
```



Ease out:


```
FAST

==========

slow
```



Ease in:


```
slow

==========

FAST
```



Ease inOut:


```
slow

====FAST====

slow
```



Example:


```javascript
gsap.to(".box",{


ease:"power4.out"


})
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



Professional choices:


Landing pages:


```javascript
ease:"power4.out"
```


Smooth hero animations:


```javascript
ease:"expo.out"
```


Fun animations:


```javascript
ease:"elastic.out"
```



---

# 8. Repeat And Yoyo


# Repeat


Repeats animation.



Example:


```javascript
gsap.to(".box",{


x:300,


repeat:2


})
```



Meaning:



```
Original animation

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

# Yoyo


Reverses animation after completion.



Example:



```javascript
gsap.to(".box",{


x:300,


repeat:-1,


yoyo:true


})
```



Flow:



```
START


 ---->


END


<----


START
```



---

# 9. Stagger


Used when multiple elements animate one after another.



Example HTML:



```html
<h1>
<span>Hello</span>
<span>World</span>
</h1>
```



GSAP:


```javascript
gsap.from("span",{


y:100,


opacity:0,


stagger:.2


})
```



Without stagger:



```
1 2 3 4


(all together)
```



With stagger:



```
1

  2

    3

      4
```



Advanced:


```javascript
stagger:{

each:.1,

from:"random"

}
```



Options:


```
start

end

center

edges

random
```



---

# 10. GSAP Callbacks


Callbacks allow running code during animation lifecycle.



---

# onStart


Runs when animation starts.



```javascript
gsap.to(".box",{


x:200,


onStart(){


console.log("started")


}


})
```



---

# onUpdate


Runs every animation frame.



Example:


```javascript
onUpdate(){


console.log("running")


}
```



Useful for:

- Counters
- Progress
- Dynamic values



---

# onComplete


Runs after animation finishes.



Example:


```javascript
onComplete(){


console.log("done")


}
```



---

# 11. Timeline Mastery



Timeline manages multiple animations together.



Without timeline:



```javascript
gsap.to(".one",{})

gsap.to(".two",{

delay:1

})
```



Problem:


Too many delays.



Timeline solution:



```javascript
const tl =
gsap.timeline()



tl.to(".one",{})

.to(".two",{})

.to(".three",{})
```



Flow:



```
Animation 1

     ↓

Animation 2

     ↓

Animation 3
```



---

# Timeline Defaults



Instead of repeating:



```javascript
duration:1

ease:"power4.out"
```



Create defaults:



```javascript
const tl =
gsap.timeline({

defaults:{

duration:1,

ease:"power4.out"

}

})
```



Every animation now gets those values.



---

# Timeline Position Parameters



# "<"



Runs with previous animation.



```
Animation 1 -------->


Animation 2 -------->
```



Example:



```javascript
tl.to(".two",{},"<")
```



---

# -= value



Starts before previous animation ends.



Example:



```javascript
"-=0.5"
```



Formula:



```
Previous ending time - 0.5s
```



---

# += value


Adds delay.



Example:


```javascript
"+=1"
```



Meaning:


```
Wait 1 second

then start
```



---

# Labels



Labels create named positions.



Example:



```javascript
tl.add("intro")



tl.to(".box1",{},"intro")


tl.to(".box2",{},"intro")
```



Both start together.



---

# Timeline Controls



Animations can be controlled manually.



Example:



```javascript
tl.pause()


tl.play()


tl.reverse()


tl.restart()
```



Used for:

- Menus
- Modals
- Interactive animations


---

# 12. ScrollTrigger

ScrollTrigger is a GSAP plugin used to control animations using scrolling.

Normal GSAP:

```
Time controls animation
```

ScrollTrigger:

```
Scroll position controls animation
```


Used for:

- Scroll reveal effects
- Landing pages
- Parallax animations
- Pinned sections
- Story based websites


---

# ScrollTrigger Setup


First import:

```javascript
import { ScrollTrigger } from "gsap/ScrollTrigger";
```


Register plugin:


```javascript
gsap.registerPlugin(ScrollTrigger);
```


GSAP plugins must be registered before using.

---

# Basic ScrollTrigger Animation


Example:


```javascript
gsap.to(".box",{

    x:500,

    duration:1,


    scrollTrigger:{

        trigger:".box",

        start:"top 80%",

        end:"top 20%"

    }

})
```


---

# Understanding Trigger


Trigger means:

"The element whose position activates the animation."


Example:


```javascript
scrollTrigger:{

trigger:".section"

}
```


Flow:


```
.section reaches point

          ↓

Animation starts
```


Important:

The animated element and trigger element can be different.


Example:


```javascript
gsap.to(".box",{

x:500,


scrollTrigger:{

trigger:".container"

}

})
```


Meaning:

```
.container controls animation

.box gets animated
```


---

# Understanding Start And End


Example:


```javascript
start:"top 80%"
```


First value:

```
top

=

element position
```


Second value:


```
80%

=

viewport position
```



Meaning:


```
Element top

touches

80% of screen

       ↓

Animation starts
```


---

# Markers


Markers help debugging.


Example:


```javascript
scrollTrigger:{


markers:true


}
```


Shows:

- start point
- end point
- scroll position


Usually:

Development:

```javascript
markers:true
```


Production:

```javascript
markers:false
```


---

# Scrub


Scrub connects animation progress with scrolling.


Without scrub:

```
Scroll reaches point

        ↓

Animation plays automatically
```


With scrub:


```
Scroll Down

      ↓

Animation Forward


Scroll Up

      ↓

Animation Reverse
```



Example:


```javascript
gsap.to(".box",{


x:600,


scrollTrigger:{


trigger:".box",


start:"top 80%",


end:"top 20%",


scrub:true


}


})
```


---

# Smooth Scrub


Instead of:


```javascript
scrub:true
```


You can give number:


```javascript
scrub:1
```


Meaning:

Animation follows scroll with smoothing delay.


---

# Pin


Pin locks an element while scrolling.


Example:


```javascript
gsap.to(".box",{


x:500,


scrollTrigger:{


trigger:".section",


pin:true,


scrub:true


}


})
```


Flow:


```
Reach Section

      ↓

Freeze Section

      ↓

Animation happens

      ↓

Release Section
```


Used for:

- Apple style websites
- Product showcases
- Horizontal scrolling


---

# ScrollTrigger Callbacks


Callbacks allow running functions on scroll states.


---

# onEnter()


Runs when entering animation area.



```javascript
onEnter(){

console.log("entered")

}
```



Flow:


```
Scroll Down

     ↓

Enter Start Point

     ↓

onEnter()
```


---

# onLeave()


Runs when leaving animation area.



Flow:


```
Animation Complete

        ↓

Leave End Point

        ↓

onLeave()
```


---

# onEnterBack()


Runs when scrolling back from ending side.



Flow:


```
End Position

      ↑

Scroll Back

      ↑

onEnterBack()
```


---

# onLeaveBack()


Runs after scrolling back before start.



Flow:


```
Animation Reverse

        ↓

Reach Original State

        ↓

Leave Area

        ↓

onLeaveBack()
```


---

# Toggle Actions


Controls what happens at every scroll stage.


Syntax:


```javascript
scrollTrigger:{


toggleActions:
"play pause resume reverse"


}
```


Four values:


```
1 → onEnter

2 → onLeave

3 → onEnterBack

4 → onLeaveBack
```


Example:


```
play pause resume reverse
```


Means:


```
Enter:
play animation


Leave:
pause animation


Enter Back:
resume


Leave Back:
reverse
```


Options:


```
play

pause

resume

reverse

restart

reset

complete

none
```


---

# ScrollTrigger.refresh()


Recalculates all trigger positions.


Example:


```javascript
ScrollTrigger.refresh()
```


Use after:

- Images loading
- API data rendering
- Layout height changes


---

# 13. Responsive GSAP


Different screen sizes sometimes need different animations.


Example:

Desktop:

Large movement


Mobile:

Small movement


GSAP provides:


```
matchMedia()
```


---

# gsap.matchMedia()


Example:



```javascript
let mm =
gsap.matchMedia();



mm.add("(min-width:768px)",()=>{


gsap.to(".box",{


x:500


})


})
```



Runs only on screens above 768px.



Mobile:



```javascript
mm.add("(max-width:767px)",()=>{


gsap.to(".box",{


x:100


})


})
```


Benefits:

- Responsive animations
- Automatic cleanup


---

# 14. Text Reveal Animations


One of the most common GSAP effects.


Example:


Text hidden first:

```
HELLO

(hidden below)
```


Animation:


```
     ↑

HELLO slides upward
```


HTML:


```html
<h1>

<span>Hello World</span>

</h1>
```


CSS:


```css
h1{

overflow:hidden;

}
```


GSAP:


```javascript
gsap.from("span",{


yPercent:100,


duration:1,


ease:"power4.out"


})
```



Multiple words:


```javascript
gsap.from("span",{


yPercent:100,


stagger:.1


})
```


---

# 15. SVG Animations


GSAP can animate SVG properties.


Used for:

- Logos
- Icons
- Line animations
- Creative websites


---

# SVG Draw Effect


Concept:


```
Invisible Line


0%


------------


100%


Full Line
```



Common properties:


```javascript
strokeDasharray

strokeDashoffset
```



Example:


```javascript
gsap.from("path",{


strokeDashoffset:500,


duration:2


})
```



Flow:


```
Empty Path


      ↓


Line Drawing Animation
```


---

# 16. React / Next.js With GSAP

GSAP works with normal JavaScript.

But React works differently because components:

- mount
- update
- unmount


So animations should be properly created and cleaned.


Without cleanup:

Problems:

- Duplicate animations
- Memory leaks
- React Strict Mode issues


---

# Installing GSAP


```bash
npm install gsap
```


For React helpers:


```bash
npm install @gsap/react
```


---

# Basic React Problem


Example:


```javascript
useEffect(()=>{


gsap.to(".box",{


x:300


})


},[])
```


This works.


But problem:

React Strict Mode can run effects twice during development.


Flow:


```
Component Mount

      ↓

Animation Created

      ↓

React Test Remount

      ↓

Animation Created Again
```


Result:

Duplicate animations.


---

# useGSAP()


Recommended React way.


Import:


```javascript
import { useGSAP } 
from "@gsap/react";
```


Example:


```javascript
useGSAP(()=>{


gsap.to(".box",{


x:300,


duration:1


})


})
```


Benefits:

- Automatically handles cleanup
- Better React integration
- Prevents duplicate animations


---

# Using useRef With GSAP


In React avoid directly selecting global classes.


Instead of:


```javascript
gsap.to(".box",{})
```


Better:


```javascript
const boxRef =
useRef(null);



useGSAP(()=>{


gsap.to(boxRef.current,{


x:300


})


})
```


JSX:


```jsx
<div ref={boxRef}>

</div>
```


Why?

Because React components can repeat.


---

# GSAP Scope


For multiple elements inside a component:


Example:


```jsx
const container =
useRef();



return(

<div ref={container}>


<div className="box">

</div>


<div className="box">

</div>


</div>

)
```



GSAP:



```javascript
useGSAP(()=>{


gsap.to(".box",{


x:300


})


},{

scope:container

})
```



Now:

```
Only boxes inside container animate
```


Not entire website.


---

# gsap.context()


Older React pattern.


Creates animation context.


Example:


```javascript
useEffect(()=>{


let ctx =
gsap.context(()=>{


gsap.to(".box",{


x:300


})


})



return ()=>{


ctx.revert()


}


},[])
```



Flow:


```
Component Mount

      ↓

Create Animations

      ↓

Component Remove

      ↓

Revert Animations
```


---

# Animation Cleanup


Animations should be removed when no longer needed.


Example:


```javascript
const animation =

gsap.to(".box",{


x:200


})



animation.kill()
```



Used when:

- Component removed
- Animation no longer required


---

# 17. Performance Rules


Smooth animations require understanding browser rendering.


Browser does:


```
JavaScript

     ↓

Style Calculation

     ↓

Layout

     ↓

Paint

     ↓

Composite
```



Bad animations trigger expensive steps.


---

# Animate These Properties


GOOD:


```javascript
x

y

scale

rotation

opacity
```


Why?


Because they use:

```
transform
+
composite layer
```


Very fast.


---

# Avoid Animating These


BAD:


```javascript
width

height

top

left

margin

padding
```



Why?


They cause:

```
Layout recalculation

       ↓

Performance drop
```


---

# Example


Avoid:


```javascript
gsap.to(".box",{


left:"500px"


})
```


Better:


```javascript
gsap.to(".box",{


x:500


})
```


---

# will-change


CSS performance hint.


Example:


```css
.box{


will-change:transform;


}
```


Tells browser:

"This element will animate."


Do not apply everywhere.

Only animated elements.


---

# 18. Professional Animation Workflow


A professional GSAP workflow:


```
1. Set Initial State


        ↓


2. Create Animation


        ↓


3. Add Timeline


        ↓


4. Add ScrollTrigger


        ↓


5. Make Responsive


        ↓


6. Cleanup
```



---

# Recommended Order While Building


Step 1:


Create layout first.



Step 2:


Prepare elements.


```javascript
gsap.set()
```



Step 3:


Create simple animation.


```javascript
gsap.to()
```



Step 4:


Combine animations.


```javascript
gsap.timeline()
```



Step 5:


Connect scrolling.


```javascript
ScrollTrigger
```



Step 6:


Optimize for React.


```javascript
useGSAP()
```


---

# Complete GSAP Mental Model


```
                GSAP


                 |


        -------------------


        |                 |


   Tween Animation     Timeline


        |                 |


 to/from/fromTo       Sequence


        |                 |


        -------------------


                 |


          ScrollTrigger


                 |


            User Scroll
```


---

# Beginner → Professional Roadmap


## Level 1


Learn:

```
to()

from()

fromTo()

set()
```


Build:

- Simple animations
- Hover effects
- Loading animations


---

## Level 2


Learn:

```
timeline()

stagger()

ease()
```


Build:

- Landing page animations
- Hero sections


---

## Level 3


Learn:

```
ScrollTrigger

scrub

pin
```


Build:

- Scroll websites
- Portfolio animations


---

## Level 4


Learn:

```
React GSAP

useGSAP

performance
```


Build:

- Production websites
- Client projects


---

# Advanced Topics After This


After mastering these basics:


Learn:


- Lenis Smooth Scroll

- GSAP Flip Plugin

- MotionPath Plugin

- Draggable

- Three.js + GSAP

- Advanced SVG animation


---

# Final Notes


GSAP is not about memorizing methods.


The real skill is understanding:


```
State A

  ↓

Transition Control

  ↓

State B
```


Once you understand states and timelines,
you can create almost any animation.


🚀 End Of GSAP Complete Handbook
