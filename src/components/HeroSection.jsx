import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-2 pt-16 md:pt-0"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">
                            {" "}
                            Victor
                        </span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                            {" "}
                            Pineda
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3 text-justify">
                    
                    Systems Engineer with 3 years of experience as a Salesforce Developer, specializing in CRM platforms. 
                    Proven track record in designing, developing, and deploying scalable Salesforce solutions,
                    including seamless integrations with ERP systems via REST and SOAP APIs.
                    Skilled in optimizing large-scale processes using Batch Apex and in developing dynamic interfaces through 
                    Lightning Web Components (LWC), complemented by robust backend logic in Apex (Triggers, Schedulables, and Queues). 
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {" "}
                                Get In Touch
                            </a>

                            <a
                                href="https://drive.google.com/drive/folders/1IoDpCn09-jMFp4FrHhJT6NzGJhgJtLlb?usp=sharing" 
                                target="_blank"
                                className="cosmic-button"
                            >
                                Download CV
                            </a>
                        </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    );
};