import info from "@/data/info.json";

const { skills } = info;

function Skills() {
    return (
        <div className="text-card-foreground shadow m-4">
            <div className="mb-2 flex justify-center font-semibold">Skills</div>

            {skills.map(({ category, items }) => (
                <div key={category} className="mb-3 rounded-xl border p-4 text-left bg-card">
                    <h3 className="font-bold">{category}</h3>

                    <div className="mt-2 flex flex-wrap gap-2">
                        {items.map((item) => (
                            <span key={item} className="rounded-lg bg-gray-700 px-2 py-1 text-xs font-semibold">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Skills;
