"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,

      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),

      smoothWheel: true,
      smoothTouch: true,

      wheelMultiplier: 1,
      touchMultiplier: 2,

      infinite: false,
    });

    // Sync Lenis scroll with ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Use GSAP ticker instead of requestAnimationFrame
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Disable GSAP lag smoothing to avoid delay conflicts
    gsap.ticker.lagSmoothing(0);

    ScrollTrigger.refresh();

    return () => {
        
        gsap.ticker.remove((time) => {
            lenis.raf(time * 1000);
        });

        lenis.destroy();
    };
  }, []);
};

export default useLenis;
