"use client"
import InfiniteCarousel from "@/components/InfiniteCarousel";
import { projects } from "@/data/projects";
// import TextReveal from "@/components/TextReveal";
import { useRef } from "react";

export default function Home() {


  // const handleHoverEnter = () => {
  //   triggerRef.current.play();
  // }

  // const handleHoverLeave = () => {
  //   triggerRef.current.reverse();
  // }

  // const triggerRef = useRef(null);
  // return (
  //   <main className="h-[300vh] w-full">
  //   <div 
  //     className="h-[8rem] w-[12rem] bg-red-500"
  //     onMouseEnter={handleHoverEnter}
  //     onMouseLeave={handleHoverLeave}
  //     ></div>
  //     <TextReveal 
  //     ref={triggerRef}
  //     trigger="manual"
  //     splitBy="chars"
  //     staggerDirection = "start"
  //     ease = "back.out(1.7)"
  //     className="text-[3rem]">
  //       Hello everyone
  //     </TextReveal>
  //   </main>
  // );


  return (
    <main className="h-screen w-full flex items-center">
      <InfiniteCarousel projects={projects}/>
    </main>
  )
}
