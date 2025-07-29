import { ArrowDownNarrowWide, Briefcase, Code, LucidePhone, PencilLine, Phone, Shield, ShieldHalf, Smartphone, User } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Salesforce Developer & CRM Solution Architect
                        </h3>

                        <p className="text-muted-foreground">
                            A Systems Engineer with 3 years of professional experience
                            specializing in CRM platforms, particularly Salesforce.
                            I excel in designing, implementing, and optimizing solutions that enhance operational
                            efficiency and user experience.
                        </p>

                        <p className="text-muted-foreground">
                            With a strong focus on results and a commitment to continuous improvement,
                            I leverage technological innovation to deliver tangible impact in every project.
                            My expertise includes Apex development, custom UI creation with Lightning Web Components, advanced automation, and
                            seamless integration with other systems.

                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {" "}
                                Get In Touch
                            </a>

                            <a
                                href="https://drive.google.com/drive/folders/1IoDpCn09-jMFp4FrHhJT6NzGJhgJtLlb?usp=sharing" 
                                target="_blank"
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Salesforce Development</h4>
                                    <p className="text-muted-foreground">
                                        Developing custom Salesforce solutions using Apex, Lightning Web Components, and
                                        implementing automations via Flows and Workflows.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <PencilLine className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">CRM Customization</h4>
                                    <p className="text-muted-foreground">
                                        Designing and customizing Salesforce to meet specific business needs,
                                        focusing on user experience and efficient workflows.

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <ShieldHalf className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Salesforce Implementation</h4>
                                    <p className="text-muted-foreground">
                                        Implementing Salesforce solutions, including user management, permissions, data management,
                                        and integrations with other systems.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Smartphone className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Mobile Development</h4>
                                    <p className="text-muted-foreground">
                                        Developing cross-platform mobile applications using Flutter, C# Maiu and React Native.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};