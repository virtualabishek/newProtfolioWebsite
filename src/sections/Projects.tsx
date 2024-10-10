import rojgarSabailai from "@/assets/images/rojgarSabailai.png";
import nepDocPage from "@/assets/images/nepDoc.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";

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
      { title: "User can create and post a job" },
      { title: "Filter of a relative job" },
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
  return <div>Projects Section</div>;
};
