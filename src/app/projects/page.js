import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    img: "/prisoners.png",
    title: "100 Prisoners Simulation",
    description: "This is a tool that allows users to simulate the unique solution to the 100 prisoners puzzle",
    technologies: [
      "JavaScript",
      "D3.js"
    ],
    website: "https://kazitishan.github.io/100-Prisoners-Sim/",
    source: "https://github.com/kazitishan/100-Prisoners-Sim"
  },
  {
    img: "/wordle.png",
    title: "Wordle Solver Tool",
    description: "An interactive Wordle solver that suggests optimal guesses using letter frequency data and provides real-time data visualizations.",
    technologies: [
      "Python",
      "Matplotlib"
    ],
    source: "https://github.com/kazitishan/Wordle-Solver"
  },
  {
    img: "/kazino-api.png",
    title: "Kazino Sportsbook API",
    description: "A RESTful API that provides live match data, betting odds, and match results for soccer matches.",
    technologies: [
      "Express.js",
      "Puppeteer",
      "Playwright",
      "Supabase",
      "PostgreSQL"
    ],
    source: "https://github.com/kazitishan/Kazino-Sportsbook-API"
  },
  {
    img: "/kazino.png",
    title: "Kazino Sportsbook",
    description: "An application that allows users to bet on real soccer games with virtual currency.",
    technologies: [
      "Next.js",
      "PostgreSQL",
      "Supabase",
      "Supabase Auth",
      "Shadcn UI"
    ],
    source: "https://github.com/kazitishan/Kazino-Sportsbook"
  },
  {
    img: "/cpu.png",
    title: "16-Bit Single-Clock Cycle CPU",
    description: "Architected using Logisim, featuring 4 registers, 3-read-ports, a datapath with an ALU, and separate instruction/data RAM.",
    technologies: [
      "Logisim", 
      "Python", 
      "ARM64"
    ],
    source: "https://github.com/kazitishan/Kazino-Sportsbook"
  }
]

export const metadata = {
  title: "Projects | Kazi Tishan",
  description: "My projects",
};

export default function Projects() {
  return (
    <main className="container flex flex-col max-w-full">
      <h1 className="flex justify-center font-semibold p-2">My Projects</h1>
      
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl">
          {[...projects].reverse().map((project, i) => (
            <ProjectCard data={project} key={i} />
          ))}
        </div>
      </div>
    </main>
  );
}