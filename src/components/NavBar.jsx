import Link from "next/link";
import info from "@/data/info.json";

const { profile, links } = info;

function NavBar() {
  const pages = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Resume", href: "/resume" }
  ];

  const socials = [
    { name: "LinkedIn", href: links.linkedin, icon: "/icons/linkedin.svg" },
    { name: "GitHub", href: links.github, icon: "/icons/github.svg" },
    { name: "Email", href: `mailto:${profile.email}`, icon: "/icons/email.svg" }
  ];

    return (
      <header className="sticky top-0 z-50 backdrop-blur-sm">
        <nav className="p-4 flex justify-between items-center">
          { /* Pages */ }
          <div className="flex gap-1 items-center">
            {pages.map((page) => (
              <Link key={page.href} href={page.href} className="flex items-center text-purple-300 text-base px-2 py-2 rounded hover:bg-white/10 transition font-bold">
                {page.name}
              </Link>
            ))}
          </div>

          { /* Socials */ }
          <div className="flex gap-4">
            {socials.map((social) => (
              <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer">
                <img src={social.icon} alt={social.name} className="w-6 h-6" />
              </a>
            ))}
          </div>
        </nav>
      </header>
    );
}

export default NavBar;
