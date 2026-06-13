# Animations

## Important Concepts

Every animation mainly depends on:

- Starting Point
- Ending Point
- Duration
- Easing
- Path of the Animation


### Animation Flow

```
Initial State
      |
      |
      v
Transition (Duration + Easing + Path)
      |
      |
      v
Final State
```

---

# Web Animations

Types of web animations:

- CSS Animations
- JavaScript Animations

---

# Animation Libraries

## GSAP (GreenSock Animation Platform)

Why GSAP?

- Most used animation library
- Simple syntax
- Optimizes animations internally to an extent

---

# Basic GSAP Syntax

```javascript
gsap.method("element", {
    properties
});
```

Example:

```javascript
gsap.to(".box", {
    x: 300,
    duration: 1
});
```

---

# GSAP Methods

---

# gsap.to()

`gsap.to()` moves an element:

```
Current / Default State
          |
          |
          v
Given Ending State
```


### Syntax

```javascript
gsap.to(".box", {
    delay: 0.6,
    x: 300,
    duration: 1,
});
```

### Flow

```
.box
x: 0

 |
 | animation
 v

.box
x: 300
```

---

# gsap.from()

`gsap.from()` moves an element:

```
Given Starting State
          |
          |
          v
Current / Default State
```


### Syntax

```javascript
gsap.from(".box", {
    delay: 0.6,
    x: 300,
    duration: 1,
});
```

### Flow

```
.box
x:300

 |
 | animation
 v

.box
original position
```

---

# gsap.fromTo()

`gsap.fromTo()` allows us to define both:

- Starting State
- Ending State


### Flow

```
Custom Start
      |
      |
      v
Custom End
```


### Syntax

```javascript
gsap.fromTo(
    ".box",
    {
        x: 0,
    },
    {
        duration: 1,
        delay: 0.6,
        x: 400
    }
);
```

Flow:

```
x:0
 |
 |
 v
x:400
```

---

# gsap.set()

`gsap.set()` immediately sets properties of an element without animation.

Usually used for setting the initial desired state before starting an animation.


### Syntax

```javascript
gsap.set(".box", {
    x: 200,
    y: 100,
    opacity: 0.5,
    scale: 2
});
```


Flow:

```
Element
   |
   |
   v

Properties Applied Instantly

(no animation)
```

---

# Selecting Multiple Elements


```javascript
gsap.to([".box", ".box2"], {
    properties
});
```

Flow:

```
.box
.box2
.box3

 |
 |
 v

Same Animation Applied
```

---

# Custom Property Animation

GSAP can also animate object values.

Example:

```javascript
const obj = {
    a: 0,
};


gsap.to(obj, {
    a: 100
});
```

Flow:

```
a:0
 |
 |
 v
a:100
```

---

# Repeat Property

Used for repeating animations.


## Fixed Repeat

```javascript
repeat:2
```


Flow:

```
Original Animation
        |
        |
        v
Repeat 1
        |
        |
        v
Repeat 2
```

Total runs:

```
1 default + 2 repeats = 3 times
```


## Infinite Repeat


```javascript
repeat:-1
```


Flow:

```
Animation
    |
    |
    v
Animation
    |
    |
    v
Animation
    |
    |
    v

(infinite)
```

---

# Stagger

Used when multiple elements have the same class.

Instead of animating all together, GSAP runs them one by one.

Can run:

- Sequence order
- Reverse order
- Random order
- From center


## Syntax

```javascript
gsap.from("h1 span", {

    yPercent:100,
    duration:1.5,
    ease:"expo.out",

    stagger:{
        each:0.08,
        from:"random"
    },

    opacity:0

});
```


Flow:

Without stagger:

```
Element 1 ---->
Element 2 ---->
Element 3 ---->
Element 4 ---->

(all together)
```


With stagger:

```
Element 1 ---->

     Element 2 ---->

          Element 3 ---->

               Element 4 ---->
```

---

# Timeline

Timeline helps us run a sequence of animations.

Useful when different animations need to run in a desired order.


Example:

```javascript
const tl = gsap.timeline();


tl.to(".box1",{})
  .to(".box2",{})
  .to(".box3",{});
```


Default Flow:

```
Animation 1
      |
      |
      v
Animation 2
      |
      |
      v
Animation 3
```

---

# Timeline Position Parameters


## "<"

Runs current animation together with previous animation.

Flow:

```
Animation 1 -------->

Animation 2 -------->

(same time)
```


Example:

```
"<0.2"
```

Adds delay of 0.2 seconds after previous animation starts.


Flow:

```
Animation 1 -------->

    Animation 2 -------->
       ^
       |
     0.2 sec
```

---

# "-=0.3"

Runs current animation before previous animation ends.

Formula:

```
Previous Animation End Time - 0.3 sec
```


Flow:

```
Animation 1 ------------------>


              Animation 2 -------->
              ^
              |
        starts 0.3 sec earlier
```

---

# "+=0.3"

Adds delay after previous animation.


Flow:

```
Animation 1 ------>

              gap

                    Animation 2 ------>
```

---

# Labels

Labels are like giving a name to a timeline position.

Animations with same labels run together.


Example:

```
A1 -> label "aman"

A4 -> label "aman"
```


Flow:

```
A1 Animation -------->

A4 Animation -------->

(same starting point)
```

---

## label -= value


Example:

```
aman-=0.2
```


Runs animation before label time.


Flow:

```
Animation
    ^
    |
0.2 sec before "aman"
```

---

## label += value


Example:

```
aman+=0.2
```


Runs animation after label time.

Works like delay.

---

# ScrollTrigger

ScrollTrigger helps us run animations while scrolling.


## Basic Setup

```javascript
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
```

Example:

```javascript
gsap.to(".box", {

    x:650,
    duration:1.3,
    ease:"power4.out",

    scrollTrigger:{

        trigger:".box",
        start:"top 30%",
        end:"top 10%"

    }

});
```

---

# ScrollTrigger Start And End

Example:

```javascript
start:"top 30%"
```


Meaning:

```
Element top
      |
      |
      v
Touches

30% position of screen

      |
      |
      v

Animation Starts
```

---

# Scrub

Scrub connects animation progress with scrolling.

Animation becomes completely dependent on scroll.

Duration is not important.


Example:

```javascript
gsap.to(".box", {

    x:650,
    ease:"power4.out",

    scrollTrigger:{

        trigger:".box",

        start:"top 30%",
        end:"top 10%",

        scrub:true

    }

});
```

Flow:

```
Scroll Forward
        |
        v
Animation Forward


Scroll Backward
        |
        v
Animation Reverse
```

---

# Pin

Pin fixes an element in place until the ScrollTrigger animation completes.


Example:

```javascript
gsap.to(".box", {

    x:650,

    scrollTrigger:{

        trigger:".page2",

        start:"top top",
        end:"top -40%",

        scrub:1,

        pin:true

    }

});
```


Flow:

```
Reach Trigger Point

        |
        v

Element Gets Pinned

        |
        v

Scroll Animation Runs

        |
        v

Animation Ends

        |
        v

Element Releases
```

---

# ScrollTrigger Callbacks


## onEnter()

Runs when we enter animation.

```
Start Point Crossed
        |
        v
onEnter()
```


---

## onLeave()

Runs when animation leaves/completes.

```
Animation Running

        |
        v

Animation Ends

        |
        v

onLeave()
```


---

## onUpdate()

Runs on every update/frame of animation.

Same as normal GSAP update callbacks.


Flow:

```
Frame 1 -> onUpdate()

Frame 2 -> onUpdate()

Frame 3 -> onUpdate()
```

---

# Reverse Scroll Callbacks


## onEnterBack()


Flow:

```
Animation Start

      |
      v

Running

      |
      v

End State

      |
      v

Re-enter from end side

      |
      v

onEnterBack()
```


---

# onLeaveBack()


Flow:

```
Animation Completed

        |
        v

Scroll Back Reverse

        |
        v

Element reaches start state

        |
        v

Leave animation area

        |
        v

onLeaveBack()
```

---

# End Of Notes