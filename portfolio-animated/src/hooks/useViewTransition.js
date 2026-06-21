"use client"
import gsap from "@/libs/gsap";
import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

const STRIP_COUNT = 7;

const createStrips = () => {
  const overlay = document.createElement("div");
  overlay.id = "page-transition-overlay";
  overlay.style.cssText = `
        position: fixed;
        inset: 0;
        z-index: 9999;
        pointer-events: none;
        display: flex;
    `;

  for (let i = 0; i < STRIP_COUNT; i++) {
    const strip = document.createElement("div");
    strip.style.cssText = `
        flex: 1;
        height: 100%;
        background-color: var(--accent);
        transform: scaleY(0);
        transform-origin: bottom;
        `;
    overlay.appendChild(strip);
  }
  document.body.appendChild(overlay);

  return overlay;
};

const removeOverlay = () => {
  const overlay = document.getElementById("page-transition-overlay");
  if (overlay) overlay.remove();
};

const useViewTransition = () => {

const pathName = usePathname();
  

  const router = useRouter();

  const navigateTo = useCallback(
    (href) => {

      if(href === pathName) return;

      removeOverlay();

      const overlay = createStrips();

      const strips = Array.from(overlay.children);

      gsap.to(strips, {
        scaleY: 1,
        duration: 0.58,
        ease: "power3.inOut",
        stagger: {
          each: 0.06,
          from:"start"
        },
        onComplete: () => {
          router.push(href);

          gsap.to(strips, {
            scaleY: 0,
            duration: 0.58,
            ease: "power3.inOut",
            delay: 0.12,
            stagger: {
          each: 0.06,
          from:"start"
        },
            transformOrigin: "top",
            onComplete: removeOverlay,
          });
        },
      });
    },
    [router, pathName],
  );

  return { navigateTo };
};

export default useViewTransition;
