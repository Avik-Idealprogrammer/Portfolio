import Reveal from "./reveal";

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-gray-800 px-6 md:px-[69.12px]"
      style={{ paddingTop: "80px", paddingBottom: "80px", color: "#F5F0EB" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12">
        <div className="relative">
          <span
            className="md:sticky text-sm tracking-[0.2em] text-gray-400 uppercase font-medium block"
            style={{ top: "120px" }}
          >
            About
          </span>
        </div>

        <div>
          {/* ===== INTRO HEADING ===== */}
          <Reveal>
            <p
              className="font-bold mb-16 text-[28px] md:text-[38px] lg:text-[46px]"
              style={{ lineHeight: "1.15" }}
            >
              I'm a backend-focused developer who builds <br className="hidden md:block" />
              practical, scalable web applications.
            </p>
          </Reveal>

          {/* ===== EDUCATION ===== */}
          <Reveal delay={0.1}>
            <span className="text-sm tracking-[0.2em] text-gray-400 uppercase font-medium block mb-8">
              Education
            </span>
            <div className="space-y-10 mb-20">

              <div className="relative pl-6 border-l-2" style={{ borderColor: "#ff5722" }}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1">
                  <h3 className="text-xl md:text-2xl font-bold">
                    B.Tech, Computer Science Engineering
                  </h3>
                  <span className="text-sm text-gray-500 tracking-widest uppercase">
                    2024 — 2028 {/* college years */}
                  </span>
                </div>
                <p className="text-gray-400 mt-1">
                  Deen Dayal Upadhyaya Gorakhpur University
                </p>
                <p className="text-sm text-gray-500 mt-2 tracking-wide">
                  CGPA: 7.40 / 10 {/* till 4sem */}
                </p>
              </div>

              <div className="relative pl-6 border-l-2 border-gray-700">
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1">
                  <h3 className="text-xl md:text-2xl font-bold">
                    Senior Secondary (XII)
                  </h3>
                  <span className="text-sm text-gray-500 tracking-widest uppercase">
                    2022 — 2024
                  </span>
                </div>
                <p className="text-gray-400 mt-1">
                  HLP international School
                </p>
                <p className="text-sm text-gray-500 mt-2 tracking-wide">
                  Percentage: 74% {/* pata hai ki kam aaya hai */}
                </p>
              </div>

              <div className="relative pl-6 border-l-2 border-gray-700">
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1">
                  <h3 className="text-xl md:text-2xl font-bold">
                    Secondary (X)
                  </h3>
                  <span className="text-sm text-gray-500 tracking-widest uppercase">
                    2020 — 2022
                  </span>
                </div>
                <p className="text-gray-400 mt-1">
                  Albright Global School
                </p>
                <p className="text-sm text-gray-500 mt-2 tracking-wide">
                  Percentage: 79.90%
                </p>
              </div>

            </div>
          </Reveal>

          {/* ===== EXPERIENCE ===== */}
          <Reveal delay={0.2}>
            <span className="text-sm tracking-[0.2em] text-gray-400 uppercase font-medium block mb-8">
              Experience
            </span>
            <div className="space-y-10 mb-20">

              <div className="relative pl-6 border-l-2" style={{ borderColor: "#ff5722" }}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1">
                  <h3 className="text-xl md:text-2xl font-bold">
                    Head of Event Management
                  </h3>
                  <span className="text-sm text-gray-500 tracking-widest uppercase">
                    Current
                  </span>
                </div>
                <p className="text-gray-400 mt-1">
                  IET TechSphere — 100+ member technical community
                </p>
              </div>

              <div className="relative pl-6 border-l-2 border-gray-700">
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1">
                  <h3 className="text-xl md:text-2xl font-bold">
                    Open Source Contributor
                  </h3>
                  <span className="text-sm text-gray-500 tracking-widest uppercase">
                    2026
                  </span>
                </div>
                <p className="text-gray-400 mt-1">
                  GSSoC 2026 — Open Source & AI/Agents tracks
                </p>
              </div>

            </div>
          </Reveal>

          {/* ===== SKILLS ===== */}
          <Reveal delay={0.3}>
            <span className="text-sm tracking-[0.2em] text-gray-400 uppercase font-medium block mb-6">
              Skills
            </span>
            <div className="flex flex-wrap gap-3 mb-16">
              {[
                "Node.js", "Express", "MongoDB", "PostgreSQL", "SQL","REST APIs",
                "Docker", "Git", "React", "System Design", "Java", "Tailwind CSS",
              ].map((skill) => (
                <span
                  key={skill}
                  className="text-sm px-4 py-2 border border-gray-700 rounded-full text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>

          {/* ===== LINKS ===== */}
          <Reveal delay={0.4}>
            <div className="flex flex-wrap gap-6">
              <a
                href="https://github.com/Avik-Idealprogrammer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm tracking-widest uppercase border border-gray-700 px-6 py-3 rounded-full hover:border-orange-500 hover:text-orange-500 transition-colors"
              >
                GitHub ↗
              </a>
              <a
                href="/google_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm tracking-widest uppercase border border-gray-700 px-6 py-3 rounded-full hover:border-orange-500 hover:text-orange-500 transition-colors"
              >
                Resume ↗
                
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}