function AboutSection({data}){
    return(
        <div className="flex flex-col ml-3 mr-3 mb-3">
            <div className="flex items-center">
                <img src={`/${data.img}`} alt={data.subtitle} className="rounded-full w-[7%]"/>

                <div className="flex flex-col ml-3 text-left">
                    <h3 className="font-bold">{data.title}</h3>
                    <p className="italic">{data.subtitle}</p>
                    <p className="italic">{data.time_frame}</p>
                </div>
            </div>

            {data.bullets && data.bullets.length > 0 && (
                <ul className="ml-15 mt-2 text-left">
                    {data.bullets.map((detail, index) => (
                        <li key={index} className="list-disc ml-5">
                            {detail}
                        </li>
                    ))}
                </ul>
            )}

            {data.attachments && data.attachments.length > 0 && (
                <div className="ml-15 mt-2 text-left flex">
                    {data.attachments.map((attachment, index) => (
                        <a key={index} href={`${attachment.link}`} target="_blank" rel="noopener noreferrer">
                            <div className="flex align-middle p-2 mr-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition cursor-pointer items-center">
                                <p className="text-xs font-semibold">{attachment.name}</p>
                                <img src="/link.svg" alt="Link" className="w-4 h-4 ml-1" />
                            </div>
                        </a>
                    ))}
                </div>
            )}


        </div>
    );
}

export default AboutSection;