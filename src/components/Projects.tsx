import { DiBootstrap, DiCss3, DiJava, DiMysql, DiReact  } from "react-icons/di";
import { SiMysql, SiTailwindcss, SiTypescript } from "react-icons/si";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { ComponentType } from 'react';

const COLORS = {
    REACT: "#61DAFB",
    TAILWIND: "#06B6D4",
    DOTNET: "#512BD4",
    MYSQL: "#4479A1",
    JAVA: "#007396",
    TYPESCRIPT: "#3178C6",
    AZURE: "#06B6D4",
    BOOTSTRAP: "#512BD4",
    CSS: ""
};

const TechBadge = ({ 
  Icon, 
  name, 
  color 
}: { 
  Icon: ComponentType<{ size: number }>, 
  name: string, 
  color: string 
}) => (
  <div 
      className="flex items-center space-x-1 px-3 py-1 text-sm font-medium rounded-full transition-colors duration-150"
      style={{ 
          backgroundColor: `${color}22`, 
          color: color,
          border: `1px solid ${color}`
      }}
      title={name}
  >
      <Icon size={20} />
      <span className="hidden sm:inline">{name}</span>
  </div>
);

function Projects() {
    const projectList = [
        { title: "Whiskey Sour Carparts", 
          description: "Hobbyprojekt, en e-handelsplattform med användarforum. Användare kan skapa konton, följa varandra, skicka DMs samt skapa trådar och kommentera. Man kan även söka och bläddra bland produkter och lägga till i kundvagnen.",
          badges: [
            {Icon: DiBootstrap, name: "Bootstrap", color: COLORS.BOOTSTRAP},
            {Icon: VscAzure, name: "Azure", color: COLORS.AZURE}
          ] },
        { title: "CV-projektet", 
          description: "Skolprojekt, en webbaserad CV-plattform byggd i ASP.NET MVC med Identity för autentisering. Systemet innehåller bland annat meddelanden med aviseringar, sökfunktioner, filuppladdning och export av profiler via serialization.",
          badges: [
            {Icon: DiMysql, name: "MySQL", color: COLORS.MYSQL},
            {Icon: DiCss3, name: "CSS", color: COLORS.CSS}
          ] },
        { title: "Hattmakarna", description: "Skolprojekt, Ett affärssystem för en hattmakare utvecklat i Java med JForms och MySQL. Projektets huvudfokus låg på att arbeta enligt Scrum, använda krav från produktägare och omsätta dessa i fungerande design och implementation." },
        { title: "Men in Black", description: "Skolprojekt, Ett system för men in black-agenter byggt i Java med databas i MySQL. " },
        { title: "Podcastprojektet", description: "Skolprojekt, en desktopapplikation för att hantera och organisera RSS-flöden. Asynkron hämtning av data, LINQ-hantering av samlingar samt strukturerad validering och exception-hantering. Utvecklad i C#/.NET med Windows Forms." },
        { title: "CV-Portfolio", description: "Den här sidan är byggt i React med TypeScript och Tailwind CSS." },
      ];
    return (
        
        <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Skol- och hobbyprojekt</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {projectList.map((project, index) => (
            <div key={index} className="p-6 border rounded-lg shadow" style={{ backgroundColor: '#F5E6CC' }}>
                <h3 className="text-x1 font-semibold mb-2">{project.title}</h3>
                <p className="text-grey-700">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.badges?.map((badge, badgeIndex) => (
                    <TechBadge key={badgeIndex} Icon={badge.Icon} name={badge.name} color={badge.color} />
                  ))}
                  </div>
                </div>
        ))}
        </div>
    </div>
    );
}
export default Projects;