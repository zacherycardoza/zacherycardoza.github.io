import { basePath } from "../next.config";

export default function Project({ project }) {
  return project.id % 2 == 0 ? (
    <div className="flex my-8 py-8">
      <div className="basis-1/3 mt-8 px-8 flex flex-col">
        <div className="text-2xl font-semibold mt-8">{project.name}</div>
        <div className="my-6">{project.description}</div>
        <div
          className="
              my-6 
              font-semibold 
              transition
              duration-500
            "
        >
          <a
            href={project.demo_url}
            target="_blank"
            className="
              accent-bottom-border
              rounded 
              px-2 
            "
          >
            Live Demo
          </a>
        </div>
        <div
          className="
              mb-6 
              font-semibold 
              transition
              duration-500
            "
        >
          <a
            href={project.github_url}
            target="_blank"
            className="
              accent-bottom-border
              rounded 
              px-2 
            "
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="basis-2/3 transition duration-300 hover:scale-x-[0.95]">
        <img
          src={`${basePath}/assets/img/${project.id}.${project.img_file_type}`}
          alt={`${project.name}`}
          className=" w-full max-h-[500px] rounded"
        />
      </div>
    </div>
  ) : (
    <div className="flex my-8 py-8">
      <div className="basis-2/3 transition duration-300 hover:scale-x-[0.95]">
        <img
          src={`${basePath}/assets/img/${project.id}.${project.img_file_type}`}
          alt={`${project.name}`}
          className=" w-full max-h-[500px] rounded"
        />
      </div>
      <div className="basis-1/3 mt-8 px-8 flex flex-col">
        <div className="text-2xl font-semibold mt-8">{project.name}</div>
        <div className="my-6">{project.description}</div>
        <div
          className="
              my-6 
              font-semibold 
              transition
              duration-500
            "
        >
          <a
            href={project.demo_url}
            target="_blank"
            className="
              accent-bottom-border
              rounded 
              px-2 
            "
          >
            Live Demo
          </a>
        </div>
        <div
          className="
              mb-6 
              font-semibold 
              transition
              duration-500
            "
        >
          <a
            href={project.github_url}
            target="_blank"
            className="
              accent-bottom-border
              rounded 
              px-2 
            "
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
