import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

function LineHoverText({ as: Tag = "a", href, to, children, className = "" }) {
  const lineRef = useRef(null);
  const [isTouch, setIsTouch] = useState(false);

  const showLine = () => {
    const line = lineRef.current;
    gsap.set(line, { transformOrigin: "left" });
    gsap.to(line, { scaleX: 1, duration: 0.35, ease: "power2.out" });
  };

  const hideLine = () => {
    const line = lineRef.current;
    gsap.set(line, { transformOrigin: "right" });
    gsap.to(line, { scaleX: 0, duration: 0.35, ease: "power2.in" });
  };

  // ===== DESKTOP: mouse hover se chalega =====
  const handleEnter = () => {
    if (!isTouch) showLine();
  };
  const handleLeave = () => {
    if (!isTouch) hideLine();
  };

  // ===== MOBILE: tap karte hi line dikhao, thodi der baad khud hide ho jaye =====
  const handleTouchStart = () => {
    setIsTouch(true);
    showLine();
    setTimeout(hideLine, 600); // <-- 600ms baad line khud gayab, chaho to time badhao/ghatao
  };

  const commonProps = {
    className: `relative inline-block ${className}`,
    onMouseEnter: handleEnter,
    onMouseLeave: handleLeave,
    onTouchStart: handleTouchStart,
    style: { color: "#F5F0EB" },
  };

  const content = (
    <>
      {children}
      <span
        ref={lineRef}
        className="absolute left-0 -bottom-1 w-full h-[1px]"
        style={{ backgroundColor: "#F5F0EB", transform: "scaleX(0)" }}
      />
    </>
  );

  if (Tag === Link) {
    return <Link to={to} {...commonProps}>{content}</Link>;
  }
  return <a href={href} {...commonProps}>{content}</a>;
}

export default function Nav() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[100]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          height: "140px",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          maskImage: "linear-gradient(to bottom, black 0%, black 40%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 40%, transparent 100%)",
          background: "rgba(10,10,10,0.5)",
        }}
      />
      <nav className="relative flex justify-between items-center px-6 md:px-[69.12px] py-4 md:py-6">
        <LineHoverText as={Link} to="/" className="font-semibold text-base md:text-lg">
          Avik Gupta
        </LineHoverText>
        <div className="flex gap-4 md:gap-10">
          <LineHoverText href="/#work" className="text-xs md:text-sm tracking-widest font-medium">
            WORK
          </LineHoverText>
          <LineHoverText href="/#about" className="text-xs md:text-sm tracking-widest font-medium">
            ABOUT
          </LineHoverText>
          <LineHoverText href="/#contact" className="text-xs md:text-sm tracking-widest font-medium">
            CONTACT
          </LineHoverText>
          <LineHoverText href="/google_resume.pdf" target="_blank" className="text-xs md:text-sm tracking-widest font-medium">
            <span className="inline-flex items-center gap-1">
              RESUME
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </span>
          </LineHoverText>
        </div>
      </nav>
    </div>
  );
}