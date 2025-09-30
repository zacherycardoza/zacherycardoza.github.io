import Project from "./Project";

export default function Projects() {
  let Projects = [
    {
      id: 8,
      name: "ApplyWise",
      img_file_type: "png",
      demo_url: "https://applywise.laravel.cloud",
      github_url: "https://github.com/zacherycardoza/applywise",
      description:
        "A full-stack AI-powered ATS resume scanner built with Laravel and deployed on Laravel Cloud. Leverages AI to analyze resumes against job descriptions, extract key skills, and provide actionable recommendations to help candidates optimize their applications. Designed for scalability with queued jobs, dynamic resume processing, and real-time scoring",
    },
    {
      id: 7,
      name: "HeadlinesAI",
      img_file_type: "png",
      demo_url: "https://headlinesai-34b8270aa712.herokuapp.com/",
      github_url: "https://github.com/zacherycardoza/headlinesAI",
      description:
        "A full-stack news aggregator built with Laravel and Tailwind CSS, leveraging AI to summarize articles in real-time. Fetches the latest content via RSS feeds and APIs, categorizes by topics, and delivers personalized summaries to users. Optimized for scalability with queued jobs and dynamic topic selection",
    },
    {
      id: 6,
      name: "TaskForge",
      img_file_type: "png",
      demo_url: "https://taskforge-40684ecd074c.herokuapp.com/dashboard",
      github_url: "https://github.com/zacherycardoza/TaskForge",
      description:
        "TaskForge is a modern, lightweight task management web app built with Laravel and Tailwind CSS. It helps users organize, prioritize, and track tasks efficiently with a clean, responsive interface. Features include task categorization, due dates, status tracking, and a fully responsive dashboard, making productivity simple and intuitive",
    },
    {
      id: 1,
      name: "Quick Launch",
      img_file_type: "jpg",
      demo_url:
        "https://chromewebstore.google.com/detail/quick-launch/danchmbbppbephkljlphnofdmlgenhba",
      github_url: "https://github.com/zacherycardoza/quick-launch",
      description:
        "A lightweight Chrome extension built with JavaScript that allows users to instantly open a custom set of websites with a single click. Designed for speed and convenience, it streamlines daily browsing routines and boosts productivity by eliminating repetitive manual tab opening",
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
