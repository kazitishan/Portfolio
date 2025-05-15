function ProjectCard({data}) {
    return (
        <div className="p-3 flex flex-col rounded-xl border bg-card text-card-foreground shadow m-4 w-sm justify-between">
            <img src={data.img} alt={data.title} className="rounded-xl w-auto h-auto"/>

            <h3 className="font-bold">{data.title}</h3>

            <div className="text-sm">
                {data.description}
            </div>

            <div className="flex flex-wrap gap-1 mt-1 justify-center">
                {data.technologies.map((tech, i) => (
                    <div key={i} className="rounded-md bg-gray-700 p-0.5">
                        <p className="text-[10px] font-bold">{tech}</p>
                    </div>
                ))}
            </div>

            <div className="flex gap-2 mt-2 justify-center">
                {data.website && (
                    <a href={`${data.website}`} target="_blank" rel="noopener noreferrer">
                        <div className="flex align-middle p-2 bg-white rounded-lg hover:bg-gray-300 transition cursor-pointer items-center">
                            <p className="text-xs font-semibold text-black">Website</p>
                            <img src="/link.svg" alt="Link" className="w-4 h-4 ml-1 filter invert" />
                        </div>
                    </a>
                )}

                {data.source && (
                    <a href={`${data.source}`} target="_blank" rel="noopener noreferrer">
                        <div className="flex align-middle p-2 bg-white rounded-lg hover:bg-gray-300 transition cursor-pointer items-center">
                            <p className="text-xs font-semibold text-black">Source</p>
                            <img src="/github.svg" alt="Link" className="w-4 h-4 ml-1 filter invert" />
                        </div>
                    </a>
                )}
            </div>
        </div>
    );
}

export default ProjectCard;