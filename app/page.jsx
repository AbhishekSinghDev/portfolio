import Image from "next/image";
import Link from "next/link";

import About from "@components/About";
import Explore from "@components/Explore";
import Projects from "@components/Projects";
import Contact from "@components/Contact";

const Home = () => {
  return (
    <main>
      <section className="h-[70vh] flex flex-col items-center justify-center">
        <div className="flex flex-col sm:flex-row items-center justify-center md:gap-24 gap-10 h-[80%] sm:w-[70%] w-[90%] mx-auto">
          <div className="">
            <Image
              src="/images/profile.png"
              height={350}
              width={350}
              className="rounded-full sm:h-full sm:w-full h-[200px] w-[200px] -z-30"
            />
          </div>

          <div className="text-center">
            <p className="font-medium text-xl">Hello, I'm</p>
            <h1 className="font-semibold lg:text-7xl text-5xl mt-2 mb-2 lg:mb-4">
              Abhishek
            </h1>
            <h3 className="font-bold text-gray-600 text-xl lg:text-3xl">
              Full-Stack Developer
            </h3>
            <div className="flex items-center justify-center gap-2 my-3 lg:my-6">
              <Link
                href="https://drive.google.com/file/d/1DV_saPuaIQEpl871oen2zkOlseYM39Pq/view?usp=sharing"
                className="button hover:bg-[#1c1b1b] hover:text-white"
                target="_blank"
              >
                Download CV
              </Link>
              <Link
                href="#contact"
                className="button bg-[#1c1b1b] text-white hover:text-black hover:bg-white"
              >
                Contact Info
              </Link>
            </div>
            <div className="flex items-center justify-center gap-2 mt-4">
              <Link
                href="https://www.linkedin.com/in/abhishek-singh-dev"
                target="_blank"
              >
                <Image src="/icons/linkedin.svg" height={25} width={25} />
              </Link>
              <Link href="https://github.com/AbhishekSinghDev" target="_blank">
                <Image src="/icons/github.svg" height={25} width={25} />
              </Link>
            </div>
          </div>
        </div>

        <div className="items-end justify-end w-[80%] hidden sm:flex">
          <Image src="/icons/down.svg" height={30} width={30} alt="down_icon" />
        </div>
      </section>
      <About />
      <Explore />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;
