import { useRef } from "react";
import gsap from "gsap";
import Reveal from "./reveal";

function LetsTalkHeading() {
  const talkRef = useRef(null);
  const lineRef = useRef(null);

  const showEffect = () => {
    gsap.to(talkRef.current, { color: "#ff5722", duration: 0.3, ease: "power2.out" });
    gsap.set(lineRef.current, { transformOrigin: "left" });
    gsap.to(lineRef.current, { scaleX: 1, duration: 0.4, ease: "power2.out" });
  };

  const hideEffect = () => {
    gsap.to(talkRef.current, { color: "#F5F0EB", duration: 0.3, ease: "power2.out" });
    gsap.set(lineRef.current, { transformOrigin: "right" });
    gsap.to(lineRef.current, { scaleX: 0, duration: 0.4, ease: "power2.in" });
  };

  const handleTouchStart = () => {
    showEffect();
    setTimeout(hideEffect, 700);
  };

  return (
    <div
      className="relative inline-block cursor-pointer"
      onMouseEnter={showEffect}
      onMouseLeave={hideEffect}
      onTouchStart={handleTouchStart}
    >
      <h2 className="font-bold leading-[0.95] mb-2 text-[40px] md:text-[65px] lg:text-[90px]" style={{ color: "#F5F0EB" }}>
        Let's <span ref={talkRef} className="italic" style={{ color: "#F5F0EB" }}>talk.</span>
      </h2>
      <span ref={lineRef} className="absolute left-0 -bottom-2 w-full h-[2px]" style={{ backgroundColor: "#F5F0EB", transform: "scaleX(0)" }} />
    </div>
  );
}

function LineHoverLink({ href, children, target, rel }) {
  const lineRef = useRef(null);

  const showLine = () => {
    gsap.set(lineRef.current, { transformOrigin: "left" });
    gsap.to(lineRef.current, { scaleX: 1, duration: 0.4, ease: "power2.out" });
  };

  const hideLine = () => {
    gsap.set(lineRef.current, { transformOrigin: "right" });
    gsap.to(lineRef.current, { scaleX: 0, duration: 0.4, ease: "power2.in" });
  };

  const handleTouchStart = () => {
    showLine();
    setTimeout(hideLine, 600);
  };

  return (
    
      <a href={href}
      target={target}
      rel={rel}
      onMouseEnter={showLine}
      onMouseLeave={hideLine}
      onTouchStart={handleTouchStart}
      className="relative inline-block text-base md:text-lg text-gray-300"
    >
      {children}
      <span ref={lineRef} className="absolute left-0 -bottom-1 w-full h-[1px]" style={{ backgroundColor: "#9ca3af", transform: "scaleX(0)" }} />
    </a>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="border-t border-gray-800 px-6 md:px-[69.12px]" style={{ paddingTop: "100px", paddingBottom: "24px" }}>
      <Reveal>
        <span className="text-sm tracking-[0.2em] text-gray-400 uppercase font-medium block mb-6">Next</span>
      </Reveal>

      <Reveal delay={0.1}>
        <LetsTalkHeading />
      </Reveal>

      <Reveal delay={0.2}>
        <div className="flex flex-wrap gap-x-16 gap-y-4 mt-16 mb-20">
          <LineHoverLink href="mailto:idealprogrammer01@gmail.com">Gmail</LineHoverLink>
          <LineHoverLink href="https://www.linkedin.com/in/avik-gupta-84b35231b?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer">LinkedIn</LineHoverLink>
          <LineHoverLink href="https://www.instagram.com/not_like_avik/?hl=en">Instagram</LineHoverLink>
        </div>
      </Reveal>

      <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row flex-wrap justify-between items-start md:items-center gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-sm text-gray-500">No Licence</span>
          <span className="text-sm text-gray-500">Developed by Avik Gupta</span>
        </div>
        <a href="#top" className="text-sm text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-1">Back to top ↑</a>
      </div>
    </section>
  );
}
