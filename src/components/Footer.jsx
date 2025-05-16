function Footer() {
    return (
        <footer className="p-6 mt-auto">
            <div className="pt-6 border-t border-gray-700 text-center text-gray-400 text-sm flex">
                <p className="mr-auto">© {new Date().getFullYear()} Kazi Tishan</p>

                <div className="flex space-x-4 justify-center ml-auto">
                    <a href="https://linkedin.com/in/kazitishan" target="_blank" rel="noopener noreferrer">
                        <span className="sr-only">LinkedIn</span>
                        <img src="/linkedin.svg" alt="LinkedIn" className="h-6 w-6" />
                    </a>
                    <a href="https://github.com/kazitishan" target="_blank" rel="noopener noreferrer">
                        <span className="sr-only">GitHub</span>
                        <img src="/github.svg" alt="GitHub" className="h-6 w-6" />
                    </a>
                    <a href="mailto:kazitishan12@gmail.com" target="_blank" rel="noopener noreferrer">
                        <span className="sr-only">Email</span>
                        <img src="/email.svg" alt="Email" className="h-6 w-6" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;