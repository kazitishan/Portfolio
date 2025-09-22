import Link from "next/link";

function NavBar() {
    return (
      <header className="sticky top-0 z-50 backdrop-blur-sm">
        <nav className="px-8 py-4 flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <Link href="/" className="flex items-center text-purple-300 text-base px-2 py-2 rounded hover:bg-white/10 transition">
              Home
            </Link>
  
            <Link href="/projects" className="flex items-center text-purple-300 text-base px-2 py-2 rounded hover:bg-white/10 transition">
              Projects
            </Link>
  
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center text-purple-300 text-base px-2 py-2 rounded hover:bg-white/10 transition">
              Resume
            </a>
          </div>
  
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/kazitishan/" target="_blank" rel="noopener noreferrer">
              <img src="/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
            </a>
  
            <a href="https://github.com/kazitishan" target="_blank" rel="noopener noreferrer">
              <img src="/github.svg" alt="GitHub" className="w-6 h-6" />
            </a>
  
            <a href="mailto:kazitishan12@gmail.com" target="_blank" rel="noopener noreferrer">
              <img src="/email.svg" alt="Email" className="w-6 h-6" />
            </a>
          </div>
        </nav>
      </header>
    );
}

export default NavBar;