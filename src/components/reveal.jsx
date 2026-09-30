import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            el,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 1, delay, ease: "power3.out" }
          );
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}