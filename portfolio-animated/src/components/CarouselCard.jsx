import { useRef } from "react";
import TextReveal from "./TextReveal";
import gsap from "@/libs/gsap";
import useViewTransition from "@/hooks/useViewTransition";

const CARD_W = 300;
const CARD_H = 380;
const SCALE = 1.2;

const CarouselCard = ({ project, onHoverStart, onHoverEnd }) => {
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  const numberRef = useRef(null);
  const titleRef = useRef(null);

  const onEnter = () => {
    onHoverStart?.();

    gsap.to(cardRef.current, {
      width: CARD_W * SCALE,
      height: CARD_H * SCALE,
      duration: 0.45,
      ease: "power3.out",
    });

    gsap.to(imgRef.current, {
      scale: 1,
      duration: 0.47,
      ease: "power3.out"
    })

    numberRef.current?.play();
    titleRef.current?.play();
  };

  const onLeave = () => {
    onHoverEnd?.();

    gsap.to(cardRef.current, {
      width: CARD_W,
      height: CARD_H,
      duration: 0.24,
      ease: "power3.out",
    });

    gsap.to(imgRef.current, {
      scale: 1.6,
      duration: 0.47,
      ease: "power3.out"
    })

    numberRef.current?.reverse();
    titleRef.current?.reverse();
  };

  const {navigateTo} = useViewTransition();

  const handleClick = () => {
    navigateTo(`/project/${project.slug}`);
  }

  return (
    <div
      ref={cardRef}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="relative"
      style={{
        width: CARD_W,
        height: CARD_H,
        flexShrink: 0,
        overflow: "visible",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      {/* title panel */}
      <div
        className="titlePanel absolute left-0 pointer-events-none, flex flex-col gap-[0.2rem]"
        style={{ bottom: "calc(100% + 1rem)" }}
      >
        <TextReveal ref={numberRef} duration="0.25" trigger="manual" splitBy="chars">
          <h3 className="text-[1rem] number">{project.number}</h3>
        </TextReveal>

        <TextReveal ref={titleRef} duration="0.25" trigger="manual" splitBy="words">
          <h3  className="text-[1rem] text-[#010101]">{project.title}</h3>
        </TextReveal>
      </div>

      <div className="imageDiv absolute h-full w-full overflow-hidden">
        <img
          className="h-full w-full object-cover scale-[1.4]"
          style={{ transformOrigin: "center center", userSelect: "none" }}
          ref={imgRef}
          src={project.coverImage}
          alt={project.title}
        />
      </div>
    </div>
  );
};

export default CarouselCard;
