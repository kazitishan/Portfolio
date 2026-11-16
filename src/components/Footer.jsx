import info from "@/data/info.json";

const { profile, links } = info;

function Footer() {
    const socials = [
        { name: "LinkedIn", href: links.linkedin, icon: "/icons/linkedin.svg" },
        { name: "GitHub", href: links.github, icon: "/icons/github.svg" },
        { name: "Email", href: `mailto:${profile.email}`, icon: "/icons/email.svg" }
    ];

    return (
        <footer className="p-6 mt-auto">
            <div className="pt-6 border-t border-gray-700 text-center text-gray-400 text-sm flex">
                <p className="mr-auto">© {new Date().getFullYear()} {profile.name}</p>

                { /* Socials */ }
                <div className="flex space-x-4 justify-center ml-auto">
                    {socials.map((social) => (
                        <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer">
                            <img src={social.icon} alt={social.name} className="h-6 w-6" />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}

export default Footer;