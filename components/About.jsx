import Image from "next/image";

const About = () => {
  return (
    <section className="sm:mt-10 h-auto mx-0" id="about">
      <div className="sm:w-[85%] mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm text-gray-700 font-light">Get To Know More</p>
          <h1 className="sm:text-4xl text-xl font-semibold mt-2">About Me</h1>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-evenly w-full gap-6 lg:gap-0">
          <div className="flex items-center justify-center md:w-1/2 w-full">
            <Image
              src="/images/profile-4.jpg"
              height={300}
              width={300}
              className="grayscale -rotate-45 rounded-full"
              alt="profile"
            />
          </div>
          <div className="flex flex-col items-center justify-center md:w-1/2 w-full">
            <div className="flex flex-col sm:flex-row sm:gap-6 gap-3 mt-10 sm:mt-0 w-full items-center justify-center">
              <div className="box">
                <Image
                  src="/icons/experience.svg"
                  height={35}
                  width={35}
                  alt="experience"
                />
                <h1 className="font-bold text-lg">Experience</h1>
                <p className="text-sm">1+ years</p>
                <p className="font-semibold text-sm line-clamp-1">
                  Full-Stack Development
                </p>
              </div>
              <div className="box w-[50%]">
                <Image
                  src="/icons/education.svg"
                  height={35}
                  width={35}
                  alt="education"
                />
                <h1 className="font-bold text-lg">Education</h1>
                <p className="text-sm line-clamp-1">12th Remal Public School</p>
                <p className="font-semibold text-sm hidden sm:line-clamp-1">
                  Bachelor's of Computer Application
                </p>
                <p className="font-semibold text-sm sm:hidden block">BCA</p>
              </div>
            </div>
            <div className="w-[70%] sm:w-[100%]">
              <p className="mt-4 p-2 text-justify">
                As an aspiring Full Stack Developer adept in MERN stack and
                Next.js, I thrive in both server-full and serverless
                environments. Proficient in Data Structures and Algorithms
                (DSA), I specialize in crafting diverse projects leveraging the
                MERN stack. My expertise lies in architecting robust backend
                APIs with Express and Node.js while seamlessly integrating
                captivating frontends using React.js. Committed to innovation
                and continual learning, I'm passionate about creating impactful
                solutions in the dynamic world of web development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
