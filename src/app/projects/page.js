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
  }
]

export const metadata = {
  title: "Kazi Tishan | Projects",
  description: "My projects",
};

export default function Projects() {
  return (
    <main className="container">
      <div className="flex justify-center font-semibold p-1">My Projects</div>
      
      <div className="flex">
        {[...projects].reverse().map((project, i) => (
          <ProjectCard data={project} key={i} />
        ))}
      </div>
      
    </main>
  );
}