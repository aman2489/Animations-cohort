import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import React, { useRef } from 'react'

const AnimateOnX = ({children}) => {
    
    const elementRef = useRef([]);
    
    
    useGSAP(() => {
        
        gsap.set(elementRef.current, {
                opacity: 0
            })
        

        gsap.to(elementRef.current, {
            x: 500,
            duration: 1.3,
            delay: 0.5,
            ease: "power2.out",
            opacity: 1,
            stagger: 0.2,
        })
    })
  
    return React.Children.map(children, (child, index) => {

        return React.cloneElement(child,{
            ref:(el)=>{
                elementRef.current[index] = el;
            }
        })

    })

}

export default AnimateOnX
