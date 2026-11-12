import info from "@/data/info.json";

const { profile, links } = info;

function Footer() {
    return (
        <footer className="p-6 mt-auto">
            <div className="pt-6 border-t border-gray-700 text-center text-gray-400 text-sm flex">
                <p className="mr-auto">© {new Date().getFullYear()} {profile.name}</p>

                <div className="flex space-x-4 justify-center ml-auto">
                    <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
                        <span className="sr-only">LinkedIn</span>
                        <img src="/icons/linkedin.svg" alt="LinkedIn" className="h-6 w-6" />
                    </a>
                    <a href={links.github} target="_blank" rel="noopener noreferrer">
                        <span className="sr-only">GitHub</span>
                        <img src="/icons/github.svg" alt="GitHub" className="h-6 w-6" />
                    </a>
                    <a href={`mailto:${profile.email}`} target="_blank" rel="noopener noreferrer">
                        <span className="sr-only">Email</span>
                        <img src="/icons/email.svg" alt="Email" className="h-6 w-6" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;