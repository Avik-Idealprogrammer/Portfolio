import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import gsap from "gsap";

export const projects = [
  {
    id: "nest-living",
    number: "02",
    title: "NestLiving",
    client: "Personal Project",
    category: "Co-living Platform",
    year: "2025",
    shortDescription: "Co-living and roommate-matching platform built with Next.js.",
    fullDescription:
      "A full-stack co-living platform where users can find roommates, list available spaces, and manage co-living arrangements — built on Next.js 14 with Prisma and MongoDB Atlas.",
    role: "Full Stack Developer",
    technologies: ["Next.js 14", "Prisma", "MongoDB Atlas", "Tailwind CSS"],
    features: [
      "Roommate matching system",
      "Listing creation and management",
      "User authentication",
      "Responsive design across devices",
    ],
    challenge: "Apna real challenge yahan likho.",
    solution: "Apna real solution yahan likho.",
    learnings: "Apna real learning yahan likho.",
    githubLink: "https://github.com/thethinkingstack13-eng/nestliving",
    liveLink: "https://nestliving-ten.vercel.app/"},
  {
    id: "Asaaan",
    number: "01",
    title: "Asaaan",
    client: "Personal Project",
    category: "SaaS / Restaurant Tech",
    year: "2025",
    shortDescription: "QR-based table ordering platform for Indian restaurants.",
    fullDescription:
      "A SaaS platform that lets restaurants set up QR-code based table ordering — customers scan a code at their table, browse the menu, and order directly without needing a waiter.",
    role: "Full Stack Developer",
    technologies: ["Node.js", "Express", "MongoDB", "React", "REST APIs"],
    features: [
      "QR code generation per table",
      "Live menu management for restaurant owners",
      "Real-time order tracking",
      "Admin dashboard for order history",
    ],
    challenge: "Apna real challenge yahan likho.",
    solution: "Apna real solution yahan likho.",
    learnings: "Apna real learning yahan likho.",
    githubLink: "https://github.com/yourusername/asaaan",
    liveLink: "",
  },
  {
    id: "notice-board",
    number: "03",
    title: "Notice Board",
    client: "Personal Project",
    category: "MERN / Local Business Platform",
    year: "2025",
    shortDescription: "Local digital notice board and business ad platform.",
    fullDescription:
      "A MERN stack platform letting local businesses and communities post digital notices and advertisements — built from a full PRD to a deployed product.",
    role: "Full Stack Developer",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    features: [
      "Notice posting and categorization",
      "Local business ad listings",
      "Search and filter functionality",
      "Admin moderation panel",
    ],
    challenge: "Apna real challenge yahan likho.",
    solution: "Apna real solution yahan likho.",
    learnings: "Apna real learning yahan likho.",
    githubLink: "https://github.com/Avik-Idealprogrammer/Notice-Board",
    liveLink: "https://notice-board-kappa-one.vercel.app/",
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
    <section id="work" className="px-6 md:px-[69.12px] py-10 md:py-24">
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