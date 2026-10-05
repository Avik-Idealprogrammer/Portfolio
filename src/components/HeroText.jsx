import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

export default function HeroText() {
  const containerRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const highlightRef = useRef(null);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(hover: none)").matches;

    const split1 = new SplitType(line1Ref.current, { types: "words, chars" });
    const split2 = new SplitType(line2Ref.current, { types: "words, chars" });
    const splitHighlight = new SplitType(highlightRef.current, { types: "words, chars" });

    const allWhiteChars = [...split1.chars, ...split2.chars];
    const highlightChars = splitHighlight.chars;

    // ===== LOAD ANIMATION =====
    // Mobile pe WORDS animate hote hain (kerning/spacing sahi rehta hai)
    // Desktop pe CHARS animate hote hain (zyada detailed effect, magnetic hover ke liye zaroori)
    const animTargets = isTouchDevice
      ? [...split1.words, ...split2.words, ...splitHighlight.words]
      : [...allWhiteChars, ...highlightChars];

    gsap.fromTo(
      animTargets,
      { yPercent: 120, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1,
        stagger: isTouchDevice ? 0.06 : 0.02, // words thode slower stagger pe achhe lagte hain
        ease: "power4.out",
        delay: 0.2,
      }
    );

    // ===== MAGNETIC HOVER — sirf desktop pe =====
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

    // ===== "users." HOVER — sirf desktop pe =====
    if (!isTouchDevice) {
      highlightChars.forEach((char) => {
        char.addEventListener("mouseenter", () => {
          gsap.to(char, { scale: 1.2, duration: 0.35, ease: "back.out(2)" });
        });
        char.addEventListener("mouseleave", () => {
          gsap.to(char, { scale: 1, duration: 0.4, ease: "power2.out" });
        });
      });
    }

    const container = containerRef.current;
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
        className="font-bold leading-[1.1] md:leading-[0.9] tracking-tight text-[40px] sm:text-[56px] md:text-[90px] lg:text-[144px]"
        style={{ color: "#F5F0EB" }}
      >
        <div ref={line1Ref} className="overflow-hidden py-1">Designing products</div>
        <div className="flex flex-wrap items-baseline gap-x-4">
          <span ref={line2Ref} className="overflow-hidden py-1">used by real</span>
          <span
            ref={highlightRef}
            className="italic overflow-hidden inline-block"
            style={{ color: "#ff5722" }}
          >
            users.
          </span>
        </div>
      </h1>
    </div>
  );
}