"use client";

import { useId, useState } from "react";

function AboutSection({ data }) {
    const [expanded, setExpanded] = useState(false);
    const detailsId = useId();

    const hasBullets = data.bullets?.length > 0;
    const hasAttachments = data.attachments?.length > 0;
    const expandable = hasBullets || hasAttachments;

    return (
        <div className="mb-3 flex flex-col rounded-xl border p-4">
            {expandable ? (
                <button type="button" onClick={() => setExpanded((prev) => !prev)} aria-expanded={expanded} aria-controls={detailsId} className="flex w-full cursor-pointer items-center">
                    <img src={data.img} alt={data.subtitle} className="w-[50px] min-w-[50px] rounded-full" />
                    
                    <div className="ml-3 flex flex-col text-left">
                        <h3 className="font-bold">{data.title}</h3>
                        <p className="italic">{data.subtitle}</p>
                        <p className="italic">{data.time_frame}</p>
                    </div>

                    <img src="/icons/chevron.svg" alt="" className={`ml-auto h-5 w-5 shrink-0 opacity-70 transition-transform duration-300 ease-in-out ${expanded ? "rotate-180" : ""}`}/>
                </button>
            ) : (
                <div className="flex items-center">{header}</div>
            )}

            {expandable && (
                <div
                    id={detailsId}
                    inert={!expanded}
                    className={`grid transition-all duration-300 ease-in-out ${expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                    {/* Details are indented to line up with the title (50px logo + 12px gap) */}
                    <div className="min-h-0 overflow-hidden pl-[62px] text-left">
                        {hasBullets && (
                            <ul className="mt-2 list-disc">
                                {data.bullets.map((detail, index) => (
                                    <li key={index}>{detail}</li>
                                ))}
                            </ul>
                        )}

                        {hasAttachments && (
                            <div className="mt-2 flex flex-wrap gap-2">
                                {data.attachments.map((attachment, index) => (
                                    <a
                                        key={index}
                                        href={attachment.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center rounded-lg bg-gray-700 p-2 transition hover:bg-gray-600"
                                    >
                                        <span className="text-xs font-semibold">{attachment.name}</span>
                                        <img src="/icons/link.svg" alt="" className="ml-1 h-4 w-4" />
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default AboutSection;
