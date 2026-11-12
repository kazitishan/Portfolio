import Link from "next/link";
import info from "@/data/info.json";

const { profile, links } = info;

function NavBar() {
    return (
      <header className="sticky top-0 z-50 backdrop-blur-sm">
        <nav className="p-4 flex justify-between items-center">
          <div className="flex gap-1 items-center">
            <Link href="/" className="flex items-center text-purple-300 text-base px-2 py-2 rounded hover:bg-white/10 transition">
              Home
            </Link>
  
            <Link href="/projects" className="flex items-center text-purple-300 text-base px-2 py-2 rounded hover:bg-white/10 transition">
              Projects
            </Link>
  
            <a href={links.resume} target="_blank" rel="noopener noreferrer" className="flex items-center text-purple-300 text-base px-2 py-2 rounded hover:bg-white/10 transition">
              Resume
            </a>
          </div>
  
          <div className="flex gap-4">
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
              <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
            </a>
  
            <a href={links.github} target="_blank" rel="noopener noreferrer">
              <img src="/icons/github.svg" alt="GitHub" className="w-6 h-6" />
            </a>
  
            <a href={`mailto:${profile.email}`} target="_blank" rel="noopener noreferrer">
              <img src="/icons/email.svg" alt="Email" className="w-6 h-6" />
            </a>
          </div>
        </nav>
      </header>
    );
}

export default NavBar;