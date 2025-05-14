import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
    // CRM
    { name: "Salesforce Apex", level: 90, category: "crm" },
    { name: "Salesforce Lightning Web Components", level: 85, category: "crm" },
    { name: "Salesforce Workflows", level: 80, category: "crm" },
    { name: "Salesforce Flows", level: 80, category: "crm" },
    { name: "SOQL", level: 80, category: "crm" },
    { name: "SOSL", level: 75, category: "crm" },

    // Frontend
    { name: "React JS", level: 75, category: "frontend" },

    // Backend
    { name: "Node JS", level: 70, category: "backend" },
    { name: "SQL", level: 70, category: "backend" }, // General SQL, as it's listed broadly

    // Mobile
    { name: "React Native", level: 80, category: "mobile" },
    { name: "Flutter", level: 80, category: "mobile" },

    // Tools
    { name: "Git", level: 85, category: "tools" }, // Assuming strong Git usage is implied
];

const categories = ["all", "crm", "frontend", "backend", "mobile", "tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-secondary/70 text-forefround hover:bd-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div
                            key={key}
                            className="bg-card p-6 rounded-lg shadow-xs card-hover"
                        >
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg"> {skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div
                                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                    style={{ width: skill.level + "%" }}
                                />
                            </div>

                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">
                                    {skill.level}%
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};