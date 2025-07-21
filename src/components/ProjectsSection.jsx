import { ArrowRight, ExternalLink, Github } from "lucide-react";
import adminCert from "../assets/certifications/sfAdmin.png";
import devCert from "../assets/certifications/sfDev1.png";
import appBuilderCert from "../assets/certifications/sfAppBuilder.png";
import agentforceCert from "../assets/certifications/sfAgentforce.png";


const projects = [
    {
        id: 1,
        title: "Platform Developer I",
        description: "This certification recognizes my ability to develop and deploy business logic and user interfaces using the programmatic capabilities of the Lightning Platform. I demonstrate skills in Apex, SOQL, process automation, UI development, and code testing within Salesforce.",
        image: devCert,
        tags: ["Development", "Apex", "Lightning", "SOQL", "Automation", "Programming"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 2,
        title: "Agentforce Specialist",
        description: "This certification demonstrates my advanced knowledge in configuring and managing AI agents in Salesforce. I master prompt creation, Data Cloud integration, agent customization for sales and service, and ethical AI practices.",
        image: agentforceCert,
        tags: ["Artificial Intelligence", "Automation", "Prompt Engineering", "Data Cloud", "Sales", "Service"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 3,
        title: "Administrator",
        description: "This certification validates my ability to manage, configure, and optimize the Salesforce platform, ensuring security, data quality, and process automation. As a certified administrator, I am responsible for user management, platform customization, reporting, and continuously improving the user experience.",
        image: adminCert,
        tags: ["CRM", "Automation", "Security", "Data", "Reporting"],
        demoUrl: "#",
        githubUrl: "#",
    },
    
    {
        id: 4,
        title: "Platform App Builder",
        description: "This certification validates my expertise in designing, building, and deploying custom applications on Salesforce using declarative tools. I master data modeling, process automation, UI customization, and app deployment on the platform.",
        image: appBuilderCert,
        tags: ["Declarative", "Automation", "Data Modeling", "Lightning"],
        demoUrl: "#",
        githubUrl: "#",
    },
    
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "}
                    My <span className="text-primary"> Certifications </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are my official Salesforce certifications. Each one represents a significant achievement
                    in my professional career and demonstrates my commitment to continuous learning.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div
                            key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-32 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12 flex justify-center gap-4">
                    <a
                        className="cosmic-button w-fit flex items-center gap-2"
                        target="_blank"
                        href="https://github.com/victor19p"
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                    <a
                        className="cosmic-button w-fit flex items-center gap-2"
                        target="_blank"
                        href="https://www.salesforce.com/trailblazer/vpinedaahn"
                    >
                        Get My Trailhead Profile <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};