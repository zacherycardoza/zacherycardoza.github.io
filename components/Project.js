import { basePath } from "../next.config";

export default function Project({ project }) {
  const isEven = project.id % 2 === 0;

  return (
    <div
      className={`flex flex-col md:flex-row ${
        isEven ? "" : "md:flex-row-reverse"
      } my-8 py-8`}
    >
      {/* Left/Right column on desktop */}
      <div className="md:basis-2/3 flex flex-col">
        {/* Title */}
        <div className="text-2xl font-semibold mt-4 md:mt-0 px-4 md:px-0">
          {project.name}
        </div>

        {/* Image */}
        <div className="mt-4 md:mt-4 px-4 md:px-0 transition duration-300 hover:scale-95">
          <img
            src={`${basePath}/assets/img/${project.id}.${project.img_file_type}`}
            alt={project.name}
            className="w-full max-h-[500px] rounded object-cover"
          />
        </div>

        {/* Description */}
        <div className="my-4 md:my-6 px-4 md:px-0 text-sm md:text-base">
          {project.description}
        </div>

        {/* Links */}
        <div className="flex flex-row gap-4 px-4 md:px-0 my-4 md:my-6 font-semibold transition duration-500">
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
