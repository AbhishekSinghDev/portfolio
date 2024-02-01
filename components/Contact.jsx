import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";

const Contact = () => {
  return (
    <section className="h-[100vh]" id="contact">
      <div>
        <div className="h-[100vh] flex flex-col items-center justify-center">
          <p className="text-xs">Get In Touch</p>
          <h1 className="font-bold text-4xl mt-4">Contact Me</h1>

          <div className="flex flex-col sm:flex-row items-center justify-between sm:gap-8 gap-2 mt-10 border-2 border-gray-600 rounded-3xl sm:p-6 p-4 text-sm sm:text-lg">
            <div className="flex items-center justify-center gap-3">
              <Image
                src="/icons/email.svg"
                height={25}
                width={25}
                alt="email"
              />
              <Link
                href="mailto:abhisheksingh.pf@gmail.com"
                className="hover:underline hover:underline-offset-8 hover:text-gray-600"
                target="_blank"
              >
                abhisheksingh.pf@gmail.com
              </Link>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Image
                src="/icons/linkedin.svg"
                height={25}
                width={25}
                alt="linkedin"
              />
              <Link
                href="https://www.linkedin.com/in/abhishek-singh-dev"
                className="hover:underline hover:underline-offset-8 hover:text-gray-600"
                target="_blank"
              >
                Linkedin
              </Link>
            </div>
          </div>

          <div className="mt-44">
            <ul className="flex md:flex-row flex-col lg:items-center lg:gap-[1vw] gap-8">
              <li className="m-4">
                <Link
                  href="#about"
                  className="font-normal text-2xl hover:text-gray-500"
                >
                  About
                </Link>
              </li>
              <li className="m-4">
                <Link
                  href="#projects"
                  className="font-normal text-2xl hover:text-gray-500"
                >
                  Projects
                </Link>
              </li>
              <li className="m-4">
                <Link
                  href="#explore"
                  className="font-normal text-2xl hover:text-gray-500"
                >
                  Languages
                </Link>
              </li>
              <li className="m-4">
                <Link
                  href="#contact"
                  className="font-normal text-2xl hover:text-gray-500"
                >
                  Contact
                </Link>
              </li>
            </ul>

            <div className="text-center mt-10">
              <p className="text-sm sm:text-base">
                Copyright © 2024 Abhishek Singh, All Rights Reserved
              </p>
              <p className="text-sm sm:text-base">
                Made with ❤ by Abhishek Singh
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
