import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import gsap from "gsap";

const projects = [
  {
    id: "national-telehealth",
    number: "01",
    title: "Notice Board",       // <-- apna project naam yahan
    client: "DDU Gorakhpur",         // <-- client/company naam
    category: "Health",                  // <-- category/industry
    year: "2023–25",                     // <-- saal
  },
  {
    id: "industrial-monitoring",
    number: "02",
    title: "Industrial Monitoring",
    client: "Client Name",
    category: "Industry 4.0",
    year: "2022–24",
  },
  {
    id: "remote-lab",
    number: "03",
    title: "Remote Laboratory",
    client: "University Client",
    category: "Education",
    year: "2024",
  },
];

function ProjectRow({ project }) {
  const rowRef = useRef(null);
  const arrowRef = useRef(null);

  const handleEnter = () => {
    // ===== HOVER: title right shift =====
    gsap.to(rowRef.current, {
      x: 24,              // <-- kitna right shift ho (px). Bada number = zyada shift
      duration: 0.4,       // <-- SPEED: shift hone ka time
      ease: "power3.out",
    });
    gsap.to(arrowRef.current, {
      opacity: 1,
      x: 0,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const handleLeave = () => {
    gsap.to(rowRef.current, { x: 0, duration: 0.4, ease: "power3.out" });
    gsap.to(arrowRef.current, { opacity: 0, x: -10, duration: 0.3, ease: "power2.out" });
  };

  return (
    <Link to={`/work/${project.id}`} className="block">
      <div
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        // ===== ROW SPACING: py-12 = upar-neeche gap, border-b = neeche line =====
className="flex items-center justify-between py-8 md:py-12 border-b border-gray-800 cursor-pointer"      >
        <div ref={rowRef} className="flex items-baseline gap-8">
          {/* number ka size/color yahan */}
          <span className="text-sm text-gray-500 font-medium">{project.number}</span>
          {/* title ka size — text-5xl md:text-7xl badlo zarurat ke hisab se */}
          <h3
            className="text-5xl md:text-7xl font-bold"
            style={{ color: "#F5F0EB" }}
          >
            {project.title}
          </h3>
        </div>

        <div className="flex items-center gap-8">
          {/* meta info: client · category · year */}
          <span className="text-xs md:text-sm tracking-widest text-gray-500 uppercase hidden md:block">
            {project.client} · {project.category}
          </span>
          <span className="text-xs md:text-sm tracking-widest text-gray-500 hidden md:block">
            {project.year}
          </span>
          {/* hover pe aane wala arrow */}
          <span
            ref={arrowRef}
            className="text-orange-500 text-2xl opacity-0"
            style={{ transform: "translateX(-10px)" }}
          >
            →
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function Work() {
  return (
    // ===== SECTION PADDING: px-10 md:px-16 (left-right), py-24 (top-bottom) =====
    <section id="work" className="px-10 md:px-69.12 py-60">
      <div className="flex items-center justify-between mb-12">
        <span className="text-sm tracking-[0.2em] text-gray-400 uppercase font-medium">
          Selected Work
        </span>
        <span className="text-sm tracking-widest text-gray-500">
          ({String(projects.length).padStart(2, "0")})
        </span>
      </div>

      <div>
        {projects.map((p) => (
          <ProjectRow key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}