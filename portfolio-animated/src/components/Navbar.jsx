"use client"
import TextReveal from "./TextReveal"
import useViewTransition from "@/hooks/useViewTransition"


const Navbar = () => {
    
    const {navigateTo} = useViewTransition();
    
    const handleClick = (path) => {
        navigateTo(path)
    }

  return (
    <div
 
     style={{borderBottom:"1px solid var(--border)"}}
     className="navbar fixed z-[30] top-0 left-0 h-[6vh] w-full flex items-center justify-between px-[3rem]">
      <div className="leftNameSide text-[1rem]">
        <TextReveal splitBy="words" className="logo">
            <h3>AMAN VISHNOI</h3>
        </TextReveal>
      </div>
      <div className="rightLinkSide flex gap-[1rem]">
        <TextReveal splitBy="chars" className="nav-link" onClick={() => {
            handleClick("/");
        }}>
            <h3 className="text-[0.8rem] cursor-pointer">Home</h3>
        </TextReveal>
        <TextReveal splitBy="chars" className="nav-link" onClick={() => handleClick("/about")}>
            <h3 className="text-[0.8rem] cursor-pointer">About</h3>
        </TextReveal>
        <TextReveal splitBy="chars" className="nav-link">
            <h3 className="text-[0.8rem] cursor-pointer">Contact</h3>
        </TextReveal>
      </div>
    </div>
  )
}

export default Navbar
