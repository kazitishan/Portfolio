function Skills() {
    const languages = ["Java", "JavaScript", "TypeScript", "Python", "Racket", "R", "PostgreSQL", "MySQL", "C/C++"];
    const frameworkslibraries = ["React", "Next.js", "Express.js", "Spring Boot", "Node.js", "Tailwind CSS", "Puppeteer", "Playwright"];
    const tools = ["Git/GitHub", "Microsoft Suite", "Google Suite", "Postman", "Supabase", "Vercel"];

    return (
        <div className="rounded-xl border bg-card text-card-foreground shadow m-4">
            <div className="rounded-t-xl flex justify-center font-semibold p-1">Skills</div>

            <div className="skills mb-2 px-3">
                <div className="flex items-center flex-wrap">
                    <p>Languages:</p>
                    {languages.map((language, index) => (
                        <div key={`language-${index}`} className="rounded-lg bg-gray-700 m-1 p-1">
                            <p className="text-xs font-bold">{language}</p>
                        </div>
                    ))}
                </div>

                <div className="flex items-center flex-wrap">
                    <p>Frameworks/Libraries:</p>
                    {frameworkslibraries.map((frameworklibrary, index) => (
                        <div key={`framework-libraries-${index}`} className="rounded-lg bg-gray-700 m-1 p-1">
                            <p className="text-xs font-bold">{frameworklibrary}</p>
                        </div>
                    ))}
                </div>

                <div className="flex items-center flex-wrap">
                    <p>Tools:</p>
                    {tools.map((tool, index) => (
                        <div key={`tool-${index}`} className="rounded-lg bg-gray-700 m-1 p-1">
                            <p className="text-xs font-bold">{tool}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;