import AboutSection from "./AboutSection";

const education = [
    { 
        img: "brooklyntech.png",
        title: "Brooklyn Technical High School", 
        subtitle: "High School Diploma, Software Engineering", 
        time_frame: "Sep 2020 - Jun 2024", 
        bullets:[
            "GPA: 96.75",
            "Key Courses: AP Computer Science Advanced, AP Computer Science Principles, AP Calculus AB, AP Statistics, Web Development, Fundamentals of IT Infrastructure, PLTW Digital Electronics, Cybersecurity, Big Data: Warehousing and Analytics",
            "Awards & Honors: AP Scholar"
        ]
    },
    { 
        img: "stevens.png",
        title: "Stevens Institute of Technology", 
        subtitle: "Bachelor of Science in Computer Science", 
        time_frame: "Sep 2024 - May 2028", 
        bullets:[
            "GPA: 3.84",
            "Relevant Coursework: Data Structures, Algorithms, Discrete Structures, Computer Architecture, Systems Programming, Programming Languages, DevOps Principles and Practices, Linear Algebra",
            "Awards & Honors: Kaminski Family Endowed Scholarship, Deans List (Fall 2024, Spring 2025, Fall 2025)"
        ],
        attachments:[
            {
                link: "transcript.pdf",
                name: "Unofficial Transcript"
            },
        ]
    }
]

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