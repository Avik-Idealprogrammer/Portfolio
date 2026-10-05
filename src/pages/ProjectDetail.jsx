import { useParams, Link } from "react-router-dom";
import { projects } from "../components/Work";

export default function ProjectDetail() {
  const { id } = useParams();
  const currentIndex = projects.findIndex((p) => p.id === id);
  const project = projects[currentIndex];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ color: "#F5F0EB" }}>
        Project not found. <Link to="/" className="text-orange-500 ml-2">Go back</Link>
      </div>
    );
  }

  // ===== NEXT PROJECT LOGIC: agar last project hai, loop back first pe =====
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="px-6 md:px-[69.12px] py-24" style={{ color: "#F5F0EB" }}>
      {/* ===== BACK LINK ===== */}
      <Link to="/#work" className="text-sm text-gray-500 hover:text-orange-500 transition-colors">
        ← Back to work
      </Link>

      {/* ===== TITLE + SHORT DESCRIPTION ===== */}
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mt-8 mb-4">{project.title}</h1>
      <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-12">{project.shortDescription}</p>

      {/* ===== METADATA ROW ===== */}
      <div className="flex flex-wrap gap-x-10 gap-y-2 text-sm tracking-widest text-gray-500 uppercase border-t border-b border-gray-800 py-6 mb-16">
        <div>
          <span className="block text-gray-600 text-xs mb-1">Role</span>
          {project.role}
        </div>
        <div>
          <span className="block text-gray-600 text-xs mb-1">Category</span>
          {project.category}
        </div>
        <div>
          <span className="block text-gray-600 text-xs mb-1">Year</span>
          {project.year}
        </div>
      </div>

      {/* ===== OVERVIEW ===== */}
      <section className="mb-16 max-w-2xl">
        <h2 className="text-sm tracking-[0.2em] text-gray-400 uppercase font-medium mb-4">Overview</h2>
        <p className="text-gray-300 text-lg leading-relaxed">{project.fullDescription}</p>
      </section>

      {/* ===== KEY FEATURES ===== */}
      <section className="mb-16 max-w-2xl">
        <h2 className="text-sm tracking-[0.2em] text-gray-400 uppercase font-medium mb-4">Key Features</h2>
        <ul className="space-y-2">
          {project.features.map((f, i) => (
            <li key={i} className="text-gray-300 text-lg flex gap-3">
              <span style={{ color: "#ff5722" }}>—</span> {f}
            </li>
          ))}
        </ul>
      </section>

      {/* ===== CHALLENGE ===== */}
      <section className="mb-16 max-w-2xl">
        <h2 className="text-sm tracking-[0.2em] text-gray-400 uppercase font-medium mb-4">Challenge</h2>
        <p className="text-gray-300 text-lg leading-relaxed">{project.challenge}</p>
      </section>

      {/* ===== SOLUTION ===== */}
      <section className="mb-16 max-w-2xl">
        <h2 className="text-sm tracking-[0.2em] text-gray-400 uppercase font-medium mb-4">Solution</h2>
        <p className="text-gray-300 text-lg leading-relaxed">{project.solution}</p>
      </section>

      {/* ===== TECHNOLOGY ===== */}
      <section className="mb-16">
        <h2 className="text-sm tracking-[0.2em] text-gray-400 uppercase font-medium mb-4">Technology</h2>
        <div className="flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
            <span key={tech} className="text-sm px-4 py-2 border border-gray-700 rounded-full text-gray-300">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* ===== WHAT I LEARNED ===== */}
      <section className="mb-16 max-w-2xl">
        <h2 className="text-sm tracking-[0.2em] text-gray-400 uppercase font-medium mb-4">What I Learned</h2>
        <p className="text-gray-300 text-lg leading-relaxed">{project.learnings}</p>
      </section>

      {/* ===== LINKS: sirf wahi dikhao jo real hain ===== */}
      <section className="mb-24 flex flex-wrap gap-6">
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm tracking-widest uppercase border border-gray-700 px-6 py-3 rounded-full hover:border-orange-500 hover:text-orange-500 transition-colors"
          >
            View Live Project ↗
          </a>
        )}
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm tracking-widest uppercase border border-gray-700 px-6 py-3 rounded-full hover:border-orange-500 hover:text-orange-500 transition-colors"
          >
            View GitHub ↗
          </a>
        )}
      </section>

      {/* ===== NEXT PROJECT ===== */}
      <Link to={`/work/${nextProject.id}`} className="block border-t border-gray-800 pt-10">
        <span className="text-sm tracking-[0.2em] text-gray-400 uppercase font-medium block mb-4">
          Next Project
        </span>
        <h3 className="text-4xl md:text-6xl font-bold hover:text-orange-500 transition-colors">
          {nextProject.title} →
        </h3>
      </Link>
    </div>
  );
}