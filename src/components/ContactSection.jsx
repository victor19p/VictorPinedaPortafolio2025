import {
    Github,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Send,
    Twitch,
    Twitter,
} from "lucide-react";
//import { cn } from "@/lib/utils";
//import { useToast } from "@/hooks/use-toast";
//import { useState } from "react";

export const ContactSection = () => {
    /*
    const { toast } = useToast();
    
    const [isSubmitting, setIsSubmitting] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        setTimeout(() => {
            toast({
                title: "Message sent!",
                description: "Thank you for your message. I'll get back to you soon.",
            });
            setIsSubmitting(false);
        }, 1500);
    };
    */
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out.
                    I'm always open to discussing new opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-1 gap-12">
                    <div className="space-y-8 flex flex-col items-center justify-center">
                        <h3 className="text-2xl font-semibold mb-6 text-center">
                            Contact Information
                        </h3>

                        {/* Outer grid for the entire contact info block, centered */}
                        <div className="grid grid-cols-1 gap-6 justify-items-center">

                            {/* Email Contact Item */}
                            <div className="grid grid-cols-[auto_1fr] gap-4 items-center max-w-sm w-full"> {/* Define two columns: auto for icon, 1fr for text */}
                                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0"> {/* flex-shrink-0 to prevent icon shrinking */}
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left w-full"> {/* text-left to align text within its column */}
                                    <h4 className="font-medium"> Email</h4>
                                    <a
                                        href="mailto:victor19cod@gmail.com" target="_blank"
                                        className="text-muted-foreground hover:text-primary transition-colors block"
                                    >
                                        victor19cod@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Phone Contact Item */}
                            <div className="grid grid-cols-[auto_1fr] gap-4 items-center max-w-sm w-full">
                                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left w-full">
                                    <h4 className="font-medium"> Phone</h4>
                                    <a
                                        href="https://wa.me/50433505652" target="_blank"
                                        className="text-muted-foreground hover:text-primary transition-colors block"
                                    >
                                        +504 3350-5652
                                    </a>
                                </div>
                            </div>

                            {/* Location Contact Item */}
                            <div className="grid grid-cols-[auto_1fr] gap-4 items-center max-w-sm w-full">
                                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left w-full">
                                    <h4 className="font-medium"> Location</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors block">
                                        Tegucigalpa, Honduras
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 text-center">
                            <h4 className="font-medium mb-4"> Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/vi-pineda/?locale=en_US" target="_blank">
                                    <Linkedin />
                                </a>
                                {/* <a href="https://twitter.com/victor19pa" target="_blank">
                    <Twitter />
                </a> */}
                                <a href="https://www.instagram.com/victor19pa/" target="_blank">
                                    <Instagram />
                                </a>

                                <a href="https://github.com/victor19p" target="_blank">
                                    <Github />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};