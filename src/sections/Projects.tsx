import rojgarSabailai from "@/assets/images/rojgarSabailai.png";
import nepDocPage from "@/assets/images/nepDoc.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { url } from "inspector";
import grainImage from "@/assets/images/grain.jpg";

const portfolioProjects = [
  {
    company: "nepDoc",

    year: "2024",
    title: "A Doctor Appointment Application",
    results: [
      { title: "A Smooth & Functional UI/UX" },
      { title: "All the details about Doctor" },
      { title: "User Can Logged In to get access" },
    ],
    link: "https://nep-doc.vercel.app/",
    image: nepDocPage,
  },
  {
    company: "Rojgar Sabailai",
    year: "2021",
    title: "Rojgar Sabailai - A Online Job Portal",
    results: [
      { title: "Created a responsive UI/UX" },
      { title: "User can create and post a job." },
      { title: "Filter of a relative job." },
    ],
    link: "https://rojgarsabailai.netlify.app/",
    image: rojgarSabailai,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://abishekn.com.np",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent ">
            Real-world Results
          </p>
        </div>
        <h2 className="font-serif text-3xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center text-white/60 mt-4 ">
          See how I transformed concepts into engaging digital experience.
        </p>
        <div className="flex flex-col mt-10 gap-20">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl relative  z-0 overflow-hidden after:z-10 after:contents-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8"
            >
              <div
                className="absolute inset-0 "
                style={{
                  backgroundImage: `url(${grainImage})`,
                }}
              ></div>
              <div className="bg-gradient-to-tr from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                <span>{project.company}</span>
                <span>&bull;</span>
                <span>{project.year}</span>
              </div>
              <h3 className="font-serif text-2xl mt-2 ">{project.title}</h3>
              <hr className="border-t-2 border-white/5 mt-4" />
              <ul className="flex flex-col gap-4 mt-4 ">
                {project.results.map((result) => (
                  <li className="flex gap-2 text-sm text-white/50">
                    <CheckCircleIcon className="size-5" />
                    <span>{result.title}</span>
                  </li>
                ))}
              </ul>
              <a href={project.link}>
                <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                  <span>Visit Live Site</span>
                  <ArrowUpRightIcon className="size-4" />
                </button>
              </a>
              <Image
                className="mt-8 -mb-4 rounded-xl md:rounded-3xl"
                src={project.image}
                alt={project.title}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
