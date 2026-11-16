import ProjectCard from "@/components/ProjectCard";
import info from "@/data/info.json";

const { projects } = info;


export const metadata = {
  title: `Projects | ${info.profile.name}`,
  description: "Full-stack web apps, APIs, and systems work built with Next.js, Playwright, and more.",
};

export default function Projects() {
  return (
    <main className="container flex flex-col max-w-full">
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
