function Footer() {
    return (
        <footer className="p-6 mt-auto">
            <div className="container mx-auto">
                <div className="flex flex-col justify-between items-center">
                    <div className="mb-4">
                        <h3 className="text-xl font-bold">Kazi Tishan</h3>
                        <p className="text-gray-400">Undergraduate Student at Stevens Institute of Technology</p>
                    </div>
                    
                    <div className="flex space-x-4">
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
                
                <div className="mt-6 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
                    <p>© {new Date().getFullYear()} Kazi Tishan. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;