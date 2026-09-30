import { useParams, Link } from "react-router-dom";

const projectData = {
  "national-telehealth": {
    title: "National Telehealth",
    description: "Yahan is project ka detailed description likho — kya banaya, kya challenge tha, kaise solve kiya.",
    client: "Government Client",
    category: "Health",
    year: "2023–25",
  },
  "industrial-monitoring": {
    title: "Industrial Monitoring",
    description: "Yahan is project ka detailed description likho.",
    client: "Client Name",
    category: "Industry 4.0",
    year: "2022–24",
  },
  "remote-lab": {
    title: "Remote Laboratory",
    description: "Yahan is project ka detailed description likho.",
    client: "University Client",
    category: "Education",
    year: "2024",
  },
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ color: "#F5F0EB" }}>
        Project not found. <Link to="/" className="text-orange-500 ml-2">Go back</Link>
      </div>
    );
  }

  return (
    <div className="px-10 md:px-16 py-24" style={{ color: "#F5F0EB" }}>
      <Link to="/#work" className="text-sm text-gray-500 hover:text-orange-500 transition-colors">
        ← Back to work
      </Link>
      <h1 className="text-6xl md:text-8xl font-bold mt-8 mb-6">{project.title}</h1>
      <p className="text-gray-400 text-lg max-w-2xl mb-8">{project.description}</p>
      <div className="flex gap-8 text-sm tracking-widest text-gray-500 uppercase">
        <span>{project.client}</span>
        <span>{project.category}</span>
        <span>{project.year}</span>
      </div>
    </div>
  );
}