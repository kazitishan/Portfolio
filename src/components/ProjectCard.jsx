function ProjectCard({project}){
    return(
        <div className="p-2 flex flex-col rounded-xl border bg-card text-card-foreground shadow m-4">
            <div className="w-xs h-xs">
                <img src={project.img} alt={project.name} className="rounded-xl"/>
            </div>
        </div>
    );
}

export default ProjectCard;