import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

export default function HeroText() {
  const containerRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const highlightRef = useRef(null);

  useEffect(() => {
    const split1 = new SplitType(line1Ref.current, { types: "words, chars" });
    const split2 = new SplitType(line2Ref.current, { types: "words, chars" });
    const splitHighlight = new SplitType(highlightRef.current, { types: "words, chars" });

    const allWhiteChars = [...split1.chars, ...split2.chars];
    const highlightChars = splitHighlight.chars;

    gsap.fromTo(
      [...allWhiteChars, ...highlightChars],
      { yPercent: 120, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1, stagger: 0.02, ease: "power4.out", delay: 0.2 }
    );

    const handleMouseMove = (e) => {
      allWhiteChars.forEach((char) => {
        const rect = char.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 90;

        if (dist < maxDist) {
          const force = (1 - dist / maxDist) * 18;
          const angle = Math.atan2(dy, dx);
          gsap.to(char, { x: -Math.cos(angle) * force, y: -Math.sin(angle) * force, duration: 0.4, ease: "power2.out" });
        } else {
          gsap.to(char, { x: 0, y: 0, duration: 0.5, ease: "power2.out" });
        }
      });
    };

    highlightChars.forEach((char) => {
      char.addEventListener("mouseenter", () => {
        gsap.to(char, { scale: 1.2, duration: 0.35, ease: "back.out(2)" });
      });
      char.addEventListener("mouseleave", () => {
        gsap.to(char, { scale: 1, duration: 0.4, ease: "power2.out" });
      });
    });

    const container = containerRef.current;
    const isTouchDevice = window.matchMedia("(hover: none)").matches;
    if (!isTouchDevice) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (!isTouchDevice) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="relative z-10 w-full">
      <h1
        className="font-bold leading-[0.9] tracking-tight text-[40px] sm:text-[56px] md:text-[90px] lg:text-[144px]"
        style={{ color: "#F5F0EB" }}
      >
        <div ref={line1Ref} className="overflow-hidden py-1">Designing products</div>
        <div className="flex flex-wrap items-baseline gap-x-4">
          <span ref={line2Ref} className="overflow-hidden py-1">used by</span>
          <span
            ref={highlightRef}
            className="italic overflow-hidden inline-block"
            style={{ color: "#ff5722" }}
          >
            millions.
          </span>
        </div>
      </h1>
    </div>
  );
}