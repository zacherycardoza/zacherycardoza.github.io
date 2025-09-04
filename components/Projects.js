import Project from "./Project";

export default function Projects() {
  let Projects = [
    {
      id: 6,
      name: "TaskForge",
      img_file_type: "png",
      demo_url: "https://taskforge-40684ecd074c.herokuapp.com/dashboard",
      description:
        "TaskForge is a modern, lightweight task management web app built with Laravel and Tailwind CSS. It helps users organize, prioritize, and track tasks efficiently with a clean, responsive interface. Features include task categorization, due dates, status tracking, and a fully responsive dashboard, making productivity simple and intuitive",
    },
    {
      id: 1,
      name: "Quick Launch",
      img_file_type: "jpg",
      demo_url:
        "https://chromewebstore.google.com/detail/quick-launch/danchmbbppbephkljlphnofdmlgenhba",
      description:
        "A lightweight Chrome extension built with JavaScript that allows users to instantly open a custom set of websites with a single click. Designed for speed and convenience, it streamlines daily browsing routines and boosts productivity by eliminating repetitive manual tab opening",
    },
    {
      id: 2,
      name: "MiCrypto",
      img_file_type: "png",
      demo_url:
        "https://chromewebstore.google.com/detail/micrypto/ngppjacebelkipmaingmpegkmphaephe",
      description:
        "A Chrome extension built with JavaScript that lets users monitor live cryptocurrency prices across multiple fiat currencies. It delivers fast, accurate updates in a compact interface, making it easy to keep track of market movements without leaving the browser",
    },
    {
      id: 3,
      name: "Movie List",
      img_file_type: "png",
      demo_url: "https://zacherycardoza.github.io/MovieProject/",
      description:
        "A React-based web application that integrates with the MovieDB API, allowing users to search for films, view key details, and curate a personalized favorites list. Built with a focus on responsive design and smooth user experience, it demonstrates dynamic API integration and state management in React",
    },
  ];

  return (
    <section id="project-section" className="py-8 min-h-dvh scroll-mt-[4rem]">
      <h3 className="px-8 text-5xl font-semibold mb-4 text-center">
        <span className="">Projects</span>
      </h3>
      <div className="">
        {Projects.map((project) => {
          return <Project project={project} key={project.name} />;
        })}
      </div>
    </section>
  );
}
