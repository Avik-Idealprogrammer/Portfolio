import Reveal from "./reveal";

export default function ProjectCard({ title, description, image }) {
  return (
    <Reveal>
      <div className="grid md:grid-cols-2 gap-8 py-16 border-t border-gray-800">
        <img src={image} alt={title} className="rounded-xl object-cover w-full h-64" />
        <div>
          <h3 className="text-2xl font-medium">{title}</h3>
          <p className="text-gray-400 mt-2">{description}</p>
        </div>
      </div>
    </Reveal>
  );
}
