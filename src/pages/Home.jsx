import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    {/*Theme Toggle*/  }
    <ThemeToggle />
    {/*Background Effect*/  }
    <StarBackground />
    {/*Navbar*/  }
    <Navbar />

    {/*Main Content*/  }
    <main>
        <HeroSection />
        <div className="block md:hidden w-full h-[1px] bg-border/50 my-4" />
        <ProjectsSection />
        <div className="block md:hidden w-full h-[1px] bg-border/50 my-4" />
        <AboutSection />
        <div className="block md:hidden w-full h-[1px] bg-border/50 my-4" />
        <SkillsSection />
        <div className="block md:hidden w-full h-[1px] bg-border/50 my-4" />
        <ContactSection />
    </main>

    {/*Footer*/  }
    <Footer />
    </div>;
};
