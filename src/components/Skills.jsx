function Skills() {
    const languages = ["Java", "Javascript", "Python", "Racket", "R"];
    const frameworks = ["Spring Boot", "Tailwind CSS", "Express.js", "Next.js"];
    const libraries = ["React", "Matplotlib", "D3.js"];
    const databases = ["PostgreSQL", "MongoDB", "MySQL"];

    return (
        <div className="rounded-xl border bg-card text-card-foreground shadow m-4">
            <div className="rounded-t-xl flex justify-center font-semibold p-1">Skills</div>

            <div className="skills mb-2 px-3">
                <div className="flex items-center">
                    <p>Languages:</p>
                    {languages.map((language, index) => (
                        <div key={`language-${index}`} className="rounded-lg bg-gray-700 m-1 p-1">
                            <p className="text-xs font-bold">{language}</p>
                        </div>
                    ))}
                </div>

                <div className="flex items-center">
                    <p>Frameworks:</p>
                    {frameworks.map((framework, index) => (
                        <div key={`framework-${index}`} className="rounded-lg bg-gray-700 m-1 p-1">
                            <p className="text-xs font-bold">{framework}</p>
                        </div>
                    ))}
                </div>

                <div className="flex items-center">
                    <p>Libraries:</p>
                    {libraries.map((library, index) => (
                        <div key={`library-${index}`} className="rounded-lg bg-gray-700 m-1 p-1">
                            <p className="text-xs font-bold">{library}</p>
                        </div>
                    ))}
                </div>

                <div className="flex items-center">
                    <p>Databases:</p>
                    {databases.map((database, index) => (
                        <div key={`database-${index}`} className="rounded-lg bg-gray-700 m-1 p-1">
                            <p className="text-xs font-bold">{database}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;