import { basePath } from "../next.config";

export default function Project({ project }) {
  const isEven = project.id % 2 === 0;

  return (
    <div
      className={`flex flex-col md:flex-row my-8 py-8 ${
        isEven ? "" : "md:flex-row-reverse"
      }`}
    >
      {/* Image column */}
      <div className="md:basis-2/3 flex flex-col">
        {/* Mobile: image is second */}
        <div className="mt-4 md:mt-0 px-4 md:px-0 transition duration-300 hover:scale-95">
          <img
            src={`${basePath}/assets/img/${project.id}.${project.img_file_type}`}
            alt={project.name}
            className="w-full max-h-[500px] rounded object-cover"
          />
        </div>
      </div>

      {/* Text column */}
      <div className="md:basis-1/3 mt-4 md:mt-0 px-4 md:px-8 flex flex-col justify-start">
        <div className="text-2xl font-semibold">{project.name}</div>

        {/* Description */}
        <div className="my-4 md:my-6 text-sm md:text-base">
          {project.description}
        </div>

        {/* Links */}
        <div className="flex flex-row gap-4 my-4 md:my-6 font-semibold transition duration-500">
          <a
            href={project.demo_url}
            target="_blank"
            className="accent-bottom-border rounded px-2"
          >
            Live Demo
          </a>
          <a
            href={project.github_url}
            target="_blank"
            className="accent-bottom-border rounded px-2"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
