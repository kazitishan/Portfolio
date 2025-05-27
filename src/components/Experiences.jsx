import AboutSection from "./AboutSection";

const experiences = [
    {
        img: "doris.png",
        title: "IT Support Intern", 
        subtitle: "NYC Department of Records & Information Services", 
        time_frame: "Jul 2023 - Aug 2023", 
        bullets:[
            "Provided technical support for the main office and remote sites, troubleshooting 5-10 computers daily.",
            "Assisted in the department's transition to a new location in Industry City by troubleshooting and setting up hardware/software for over 50 devices.",
            "Performed PC maintenance, hardware/software installation, upgrades, and inventory management, managing over 100 assets.",
            "Managed LAN systems, including 75+ computers, Wi-Fi networks, printers, switches, and UPS devices."
        ],
        attachments:[
            {
                link: "/appreciation.pdf",
                name: "Certificate of Appreciation"
            },
        ]
    },
    {
        img: "stevens.png",
        title: "Undergraduate Research Office Assistant", 
        subtitle: "Stevens Institute of Technology", 
        time_frame: "Feb 2025 - Current", 
        bullets:[
            "Updated the Undergraduate Research portal daily with new events and opportunities for students.",
            "Analyzed undergraduate demographic data using R.",
            "Communicated directly with students awarded research funding, providing updates on remaining balances."
        ],
        attachments:[
            {
                link: "https://github.com/kazitishan/UG-Research-data-analysis",
                name: "Data Analysis Script"
            },
        ]
    },
]

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