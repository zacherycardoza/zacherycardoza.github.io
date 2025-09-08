import { basePath } from "../next.config";

export default function Project({ project }) {
  const isEven = project.id % 2 === 0;

  return (
    <div
      className={`flex flex-col ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } my-8 py-8`}
    >
      {/* Text content */}
      <div className="md:basis-1/3 mt-4 md:mt-8 px-4 md:px-8 flex flex-col">
        <div className="text-2xl font-semibold mt-4 md:mt-8">
          {project.name}
        </div>
        <div className="my-4 md:my-6 text-sm md:text-base">
          {project.description}
        </div>
        <div className="my-4 md:my-6 font-semibold transition duration-500">
          <a
            href={project.demo_url}
            target="_blank"
            className="accent-bottom-border rounded px-2"
          >
            Live Demo
          </a>
        </div>
        <div className="mb-4 md:mb-6 font-semibold transition duration-500">
          <a
            href={project.github_url}
            target="_blank"
            className="accent-bottom-border rounded px-2"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Image */}
      <div className="md:basis-2/3 mt-4 md:mt-0 transition duration-300 hover:scale-95">
        <img
          src={`${basePath}/assets/img/${project.id}.${project.img_file_type}`}
          alt={project.name}
          className="w-full max-h-[500px] rounded object-cover"
        />
      </div>
    </div>
  );
}
