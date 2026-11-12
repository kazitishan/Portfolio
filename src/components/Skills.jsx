import info from "@/data/info.json";

const { skills } = info;

function Skills() {
    return (
        <div className="rounded-xl border bg-card text-card-foreground shadow m-4">
            <div className="rounded-t-xl flex justify-center font-semibold p-1">Skills</div>

            <div className="skills mb-2 px-3">
                {skills.map(({ category, items }) => (
                    <div key={category} className="flex items-center flex-wrap">
                        <p>{category}:</p>
                        {items.map((item) => (
                            <div key={item} className="rounded-lg bg-gray-700 m-1 p-1">
                                <p className="text-xs font-bold">{item}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
