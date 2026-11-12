import AboutSection from "./AboutSection";
import info from "@/data/info.json";

const { education } = info;


function Education(){
    return (
        <div className="rounded-xl border bg-card text-card-foreground shadow m-4">
            <div className="rounded-t-xl flex justify-center font-semibold p-1">Education</div>
            {[...education].reverse().map((e,i) => (
                    <AboutSection data={e} key={i}/>
            ))}
        </div>
    );
}

export default Education;