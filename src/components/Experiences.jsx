import AboutSection from "./AboutSection";
import info from "@/data/info.json";

const { experiences } = info;


function Experiences(){
    return (
        <div className="rounded-xl border bg-card text-card-foreground shadow m-4">
            <div className="rounded-t-xl flex justify-center font-semibold p-1">Experience</div>
            {[...experiences].reverse().map((experience,i) => (
                    <AboutSection data={experience} key={i}/>
            ))}
        </div>
    );
}

export default Experiences;