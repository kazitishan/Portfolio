import info from "@/data/info.json";

const { skills } = info;

function Skills() {
    return (
        <div className="rounded-xl border bg-card text-card-foreground shadow m-4">
            <div className="rounded-t-xl flex justify-center font-semibold p-1">Skills</div>

            <div className="grid grid-cols-1 sm:grid-cols-3 border-t">
                {skills.map(({ category, items }) => (
                    <div key={category} className="border-b sm:border-b-0 sm:border-r last:border-0">
                        <p className="text-center font-semibold p-1 border-b">{category}</p>

                        <div className="grid grid-cols-2 gap-1 p-2">
                            {items.map((item) => (
                                <div key={item} className="rounded-lg bg-gray-700 p-1 text-center">
                                    <p className="text-xs font-bold">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
