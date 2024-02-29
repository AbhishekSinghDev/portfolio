import Image from "next/image";

const Explore = () => {
  return (
    <section className="h-auto my-40" id="explore">
      <div className="h-auto w-[80%] mx-auto">
        <div className="text-center my-20">
          <p className="text-sm font-light">Explore My</p>
          <h1 className="text-4xl font-bold">Experience with Languages</h1>
        </div>

        <div className="flex md:flex-row flex-col gap-10 items-center justify-evenly mt-10">
          <div className="experience_box">
            <div className="text-center">
              <p className="sm:text-2xl text-md font-semibold text-gray-600">
                Frontend Development
              </p>
            </div>
            <div className="grid grid-cols-2">
              <div className="tabs">
                <Image src="/icons/tick.svg" height={30} width={30} />
                <div>
                  <p className="tabs_skill">HTML/CSS</p>
                  <p className="tabs_experience">Experienced</p>
                </div>
              </div>
              <div className="tabs">
                <Image src="/icons/tick.svg" height={30} width={30} />
                <div>
                  <p className="tabs_skill">Typescript</p>
                  <p className="tabs_experience">Intermediate</p>
                </div>
              </div>
              <div className="tabs">
                <Image src="/icons/tick.svg" height={30} width={30} />
                <div>
                  <p className="tabs_skill">JavaScript</p>
                  <p className="tabs_experience">Intermediate</p>
                </div>
              </div>
              <div className="tabs">
                <Image src="/icons/tick.svg" height={30} width={30} />
                <div>
                  <p className="tabs_skill">ReactJS</p>
                  <p className="tabs_experience">Intermediate</p>
                </div>
              </div>
              <div className="tabs">
                <Image src="/icons/tick.svg" height={30} width={30} />
                <div>
                  <p className="tabs_skill">Shadcn</p>
                  <p className="tabs_experience">Intermediate</p>
                </div>
              </div>
              <div className="tabs">
                <Image src="/icons/tick.svg" height={30} width={30} />
                <div>
                  <p className="tabs_skill">NextJS</p>
                  <p className="tabs_experience">Intermediate</p>
                </div>
              </div>
            </div>
          </div>

          <div className="experience_box">
            <div className="text-center">
              <p className="sm:text-2xl text-md font-semibold text-gray-600">
                Backend Development
              </p>
            </div>
            <div className="grid grid-cols-2">
              <div className="tabs">
                <Image src="/icons/tick.svg" height={30} width={30} />
                <div>
                  <p className="tabs_skill">NodeJS</p>
                  <p className="tabs_experience">Intermediate</p>
                </div>
              </div>
              <div className="tabs">
                <Image src="/icons/tick.svg" height={30} width={30} />
                <div>
                  <p className="tabs_skill">MongoDB</p>
                  <p className="tabs_experience">Intermediate</p>
                </div>
              </div>
              <div className="tabs">
                <Image src="/icons/tick.svg" height={30} width={30} />
                <div>
                  <p className="tabs_skill">ExpressJS</p>
                  <p className="tabs_experience">Intermediate</p>
                </div>
              </div>
              <div className="tabs">
                <Image src="/icons/tick.svg" height={30} width={30} />
                <div>
                  <p className="tabs_skill">NextAuth</p>
                  <p className="tabs_experience">Intermediate</p>
                </div>
              </div>
              <div className="tabs">
                <Image src="/icons/tick.svg" height={30} width={30} />
                <div>
                  <p className="tabs_skill">Socket.io</p>
                  <p className="tabs_experience">Intermediate</p>
                </div>
              </div>
              <div className="tabs">
                <Image src="/icons/tick.svg" height={30} width={30} />
                <div>
                  <p className="tabs_skill">JWT Token</p>
                  <p className="tabs_experience">Intermediate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
