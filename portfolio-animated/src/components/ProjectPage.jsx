"use client"
import { useRef } from "react";
import TextReveal from "./TextReveal";
import gsap, { ScrollTrigger, useGSAP } from "@/libs/gsap";
import useViewTransition from "@/hooks/useViewTransition";

const ProjectPage = ({ project, nextProject }) => {

    const containerRef = useRef(null);
    const imageRef = useRef(null);

    useGSAP(() => {

        const sections = gsap.utils.toArray("section");

        gsap.to(imageRef.current, {
            clipPath: "inset(0 0 0% 0)",
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            delay: 0.2,
            ease: "power3.out"
        })

        sections.forEach((section, idx) => {
            const container = section.children[0];

            gsap.to(container, {
                rotate: 0,
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    start: 'top bottom',
                    end: 'top 20%',
                    scrub: true
                }
            })

            if(idx === sections.length -1 ) return;

            ScrollTrigger.create({
                ease: "power3.out",
                trigger: section,
                start: "bottom bottom",
                end: "bottom top",
                pin: true,
                pinSpacing: false
            })
        })

        


    }, {scope: containerRef})

    const {navigateTo} = useViewTransition();

    const handleClick = () => {
        navigateTo(`/project/${nextProject.slug}`);
    }

  return (
    <>
      <main ref={containerRef}>
        <section className="h-screen flex w-full    ">
            <div className="sectionContainer h-full flex w-full pt-[6rem] pb-[4rem] px-[3rem]">
                <div className="firstSegment h-full w-[10%]">
                <TextReveal className="text-[2rem]" splitBy="chars" delay="0.35">
                    <h3>{project.number}</h3>
                </TextReveal>
            </div>
            <div 
            className="secondSegment h-[90%] w-[30%] overflow-hidden">
                    <img
                     style={{clipPath: "inset(0 0 100% 0)"}}
                     ref={imageRef}
                     className="imageDiv h-full w-full object-cover scale-[1.6]" src={project.coverImage} alt="" />
            </div>
            <div className="thirdSegment pl-[5rem] w-[60%] h-[90%] flex flex-col justify-end">
                <TextReveal className="heading text-[3rem] leading-[1.1] tracking-tight [word-spacing:-0.8rem]" splitBy="chars" duration="0.4">
                    <h1>{project.title}</h1>
                </TextReveal>

                <TextReveal className="sub-heading text-[1.5rem]" splitBy="words">
                    <h1>{project.subtitle}</h1>
                </TextReveal>

                <TextReveal className="description w-[75%] text-balanced mt-5" splitBy="lines" duration="0.8" delay="0.5">
                    <p className="text-[1rem]">{project.longDescription}</p>
                </TextReveal>
            </div>
            </div>
        </section>
        {project.gallery.map((elem, idx) =>{
         
            return <section key={idx} className="h-screen w-full">
                <div
                 style={{transformOrigin: "bottom left"}}
                 className="sectionContainer rotate-[30deg] h-full w-full">
                    <img src={elem} 
                    alt=""
                    className="h-full w-full object-cover"
                     />
                </div>
            </section>
        })}
        <footer className="h-screen w-full flex items-center justify-center">
            <h1>Next Project</h1>
            <h1 onClick={handleClick}>{nextProject.title}</h1>
        </footer>
      </main>
    </>
  );
};

export default ProjectPage;
