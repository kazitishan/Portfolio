import AboutSection from "./AboutSection";
import info from "@/data/info.json";

const { experiences } = info;


function Experiences(){
    return (
        <div className="text-card-foreground shadow m-4">
            {[...experiences].reverse().map((experience,i) => (
                    <AboutSection data={experience} key={i}/>
            ))}
        </div>
    );
}

export default Experiences;