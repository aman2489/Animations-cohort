import { useRef } from 'react'
import { useGSAP } from "@gsap/react"
import './App.css'
import { gsap } from 'gsap';
import AnimateOnX from './components/AnimateOnX';

function App() {

  // const boxRef = useRef([]);
  const containerRef = useRef(null);
  

  // const {contextSafe} = useGSAP(() => {
  //   gsap.to(boxRef.current, {
  //     x: 500,
  //     delay: 0.3,
  //     duration: 1.2,
  //     ease: "power3.inOut"
  //   }, { scope: containerRef.current, dependencies: [], revertOnUpdate: true });
  // });
  // });

 return <div ref={containerRef}>
          {/* <button onClick={contextSafe(() => {
            gsap.to(boxRef.current, {
              y: 200,
              opacity: 0,
              duration: 1,
              ease: "expo.out"
            })
          })}>Click Me</button> */}
          <AnimateOnX>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          </AnimateOnX>

          {/* <div ref={(el) => boxRef.current.push(el)} className="box"></div>
          <div ref={(el) => boxRef.current.push(el)} className="box"></div>
          <div ref={(el) => boxRef.current.push(el)} className="box"></div> */}
        </div>
}

export default App
