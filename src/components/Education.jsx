import AboutSection from "./AboutSection";
import info from "@/data/info.json";

const { education } = info;


function Education(){
    return (
        <div className="text-card-foreground shadow m-4">
            {[...education].reverse().map((e,i) => (
                    <AboutSection data={e} key={i}/>
            ))}
        </div>
    );
}

export default Education;