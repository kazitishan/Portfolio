"use client";

import { useState } from "react";
import Experiences from "./Experiences";
import Education from "./Education";

const tabs = [
    { id: "experience", label: "Experience", Component: Experiences },
    { id: "education", label: "Education", Component: Education },
];

function ExperienceAndEducation() {
    const [selected, setSelected] = useState(tabs[0].id);
    const { Component } = tabs.find((tab) => tab.id === selected);

    return (
        <div>
            <div className="mx-4 flex justify-center gap-2">
                {tabs.map(({ id, label }) => (
                    <button
                        key={id}
                        type="button"
                        onClick={() => setSelected(id)}
                        aria-pressed={selected === id}
                        className={`cursor-pointer rounded-lg px-3 py-1 font-semibold transition ${selected === id ? "bg-gray-600" : "hover:bg-gray-700"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>

            <Component />
        </div>
    );
}

export default ExperienceAndEducation;
