import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

export default function RiseText({ text, as: Tag = "p", className = "", style = {}, delay = 0.6, stagger = 0.015 }) {
  const ref = useRef(null);

  useEffect(() => {
    const split = new SplitType(ref.current, { types: "words" }); // words = poore word ek saath uthenge, chars karoge to letter-by-letter hoga
    gsap.fromTo(
      split.words,
      { yPercent: 120, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.8,   // <-- SPEED: rise hone ka time
        stagger,          // <-- SPEED: word-to-word delay
        ease: "power4.out",
        delay,            // <-- SPEED: kitni der baad shuru ho (headline ke baad aana chahiye isliye default 0.6)
      }
    );
    return () => split.revert();
  }, [text, delay, stagger]);

  return (
    <Tag ref={ref} className={`${className} overflow-hidden`} style={style}>
      {text}
    </Tag>
  );
}