import Image from "next/image";
import Link from "next/link";
import { projects } from "@constants";

const Projects = () => {
  return (
    <section className="h-auto sm:w-full" id="projects">
      <div className="text-center lg:w-[50%] lg:mx-auto">
        <div className="text-center my-20 w-[50%] mx-auto">
          <p className="text-sm">Browse My Recent</p>
          <h1 className="text-5xl font-bold my-2">Projects</h1>
        </div>

        <div className="flex flex-col gap-3 w-full">
          {projects &&
            projects.map((project, index) =>
              index % 2 === 0 ? (
                <div className="flex w-full" key={index}>
                  <div className="w-1/2">
                    <Image
                      src={project.image}
                      alt="project"
                      height={480}
                      width={480}
                    />
                  </div>
                  <div className="flex items-center justify-center flex-col w-1/2 sm:gap-6 gap-2">
                    <p className="project_title">{project.title}</p>
                    <p className="w-[70%] sm:text-justify line-clamp-5 xl:block">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-center gap-6">
                      <Link
                        href={project.live}
                        className="project_button bg-black text-white hover:text-black hover:bg-white"
                        target="_blank"
                      >
                        Live
                      </Link>
                      <Link
                        href={project.github}
                        className="project_button hover:bg-black hover:text-white"
                        target="_blank"
                      >
                        Github
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex justify-between w-full" key={index}>
                  <div className="flex items-center justify-center flex-col w-1/2 sm:gap-6 gap-2">
                    <p className="project_title">{project.title}</p>
                    <p className="w-[70%] sm:text-justify line-clamp-5 xl:block">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-center gap-6">
                      <Link
                        href={project.live}
                        className="project_button bg-black text-white hover:text-black hover:bg-white"
                        target="_blank"
                      >
                        Live
                      </Link>
                      <Link
                        href={project.github}
                        className="project_button hover:bg-black hover:text-white"
                        target="_blank"
                      >
                        Github
                      </Link>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <Image
                      src={project.image}
                      alt="project"
                      height={480}
                      width={480}
                    />
                  </div>
                </div>
              )
            )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
