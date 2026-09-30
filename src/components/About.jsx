import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-gray-800 px-6 md:px-[69.12px]"
      style={{ paddingTop: "80px", paddingBottom: "80px" }}
    >
      {/* ===== GRID: left column sticky, right column content ===== */}
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12">

        {/* ===== LEFT: "ABOUT" label — sticky rehta hai jab tak section scroll ho raha hai ===== */}
        <div className="relative">
          <span
            className="md:sticky text-sm tracking-[0.2em] text-gray-400 uppercase font-medium block"
            style={{ top: "120px" }}
          // ^ 120px = navbar ke neeche kitni space chhod ke stick ho. Nav height ke hisab se adjust karo
          >
            About
          </span>
        </div>

        {/* ===== RIGHT: content ===== */}
        <div>
          <Reveal>
            <p
              className="about-lede about-reveal font-bold mb-10 text-[28px] md:text-[38px] lg:text-[46.4px]"
              style={{ lineHeight: "1.15", color: "#F5F0EB" }}
            >
              I'm a backend developer who builds <br />
              systems that scale, stay reliable, <br />
              and just work.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mb-16">
              I spent time building and maintaining backend systems across different domains.
              I'm based in India, working on APIs, databases, and infrastructure that power real products.
            </p>
          </Reveal>

          {/* ===== SKILLS TAGS ===== */}
          <Reveal delay={0.2}>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm tracking-widest text-gray-400 uppercase font-medium mb-20">
              <span>Node.js</span><span className="text-gray-600">·</span>
              <span>Databases</span><span className="text-gray-600">·</span>
              <span>API Design</span><span className="text-gray-600">·</span>
              <span>System Architecture</span><span className="text-gray-600">·</span>
              <span>DevOps</span>
            </div>
          </Reveal>

          {/* ===== RECOGNITION ===== */}
          <Reveal delay={0.3}>
            <span className="text-sm tracking-[0.2em] text-gray-400 uppercase font-medium block mb-4">
              Recognition
            </span>
            <div className="border-t border-gray-800 pt-4 space-y-2 text-gray-500 text-sm">
              <p>Add any awards, certifications, or notable mentions here.</p>
              <p>Contributed to open-source projects and internal tools.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}