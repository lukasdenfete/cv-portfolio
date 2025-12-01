import { DiBootstrap, DiCss3, DiJava, DiMysql, DiReact  } from "react-icons/di";
import { SiMysql, SiTailwindcss, SiTypescript, SiDotnet, SiJavascript, SiCsharp, SiMicrosoftsqlserver, SiDocker } from "react-icons/si";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa6";
import { VscAzure } from "react-icons/vsc";
import { ComponentType } from 'react';

const COLORS = {
  HTML: "#E34F26",
  CSS: "#1572B6",
  BOOTSTRAP: "#7952B3",
  JAVA: "#007396",
  REACT: "#61DAFB",
  MYSQL: "#4479A1",
  DOTNET: "#512BD4",
  TAILWIND: "#06B6D4",
  TYPESCRIPT: "#3178C6",
  JAVASCRIPT: "#F7DF1E",
  VUEJS: "#4FC08D",
  AZURE: "#0078D4",
  CSHARP: "#239120",
  SQLSERVER: "#CC2927",
  DOCKER: "#2496ED",
};

const TechBadge = ({ 
  Icon, 
  name, 
  color 
}: { 
  Icon: ComponentType<{ size: number }>, 
  name?: string,
  color: string 
}) => (
 
  <div 
      className={`flex items-center px-3 py-1 text-sm font-medium rounded-full transition-colors duration-150 ${name ? 'space-x-1' : ''}`}
      style={{ 
          backgroundColor: `${color}22`, 
          color: color,
          border: `1px solid ${color}`
      }}
      title={name || "Teknikikon"}>
      <Icon size={25} />
      {name && <span className="hidden sm:inline">{name}</span>}
  </div>
);

function Projects() {
    const projectList = [
        { title: "Whiskey Sour Carparts", 
          description: "Hobbyprojekt: en e-handelsplattform med communitydel. Byggd med ASP.NET Core MVC, C#, Entity Framework Core och databas i Azure, projektet kan även köras lokalt via SQL Server i Docker. Frontend är byggt med Razor Views och Bootstrap. Funktioner inkluderar användarhantering, följarsystem, DMs, trådar och kommentarer, notiser, produktsökning och varukorg.",
          badges: [
            {Icon: SiDotnet, color: COLORS.DOTNET},
            {Icon: SiCsharp, color: COLORS.CSHARP},
            {Icon: DiBootstrap, color: COLORS.BOOTSTRAP},
            {Icon: VscAzure, color: COLORS.AZURE},
            {Icon: SiMicrosoftsqlserver, color: COLORS.SQLSERVER},
            {Icon: SiDocker, color:COLORS.DOCKER},

          ] },
        { title: "CV-projektet", 
          description: "Skolprojekt: en webbaserad CV-plattform byggd i ASP.NET MVC med Identity för autentisering. Systemet innehåller bland annat meddelanden med aviseringar, sökfunktioner, filuppladdning och export av profiler via serialization.",
          badges: [
            {Icon: SiCsharp, color: COLORS.CSHARP},
            {Icon: SiDotnet, color: COLORS.DOTNET},
            {Icon: SiMicrosoftsqlserver, color: COLORS.SQLSERVER},
            {Icon: SiDocker, color:COLORS.DOCKER},
            {Icon: DiCss3, color: COLORS.CSS},
          ] },
        { title: "Hattmakarna", 
          description: "Skolprojekt: Ett affärssystem för en hattmakare utvecklat i Java med JForms och MySQL. Projektets huvudfokus låg på att arbeta enligt Scrum, använda krav från produktägare och omsätta dessa i fungerande design och implementation.",
          badges: [
            {Icon: DiJava, color: COLORS.JAVA},
            {Icon: DiMysql, color: COLORS.MYSQL}

          ] },
        { title: "Responsiv företagswebbplats",
            description: "Skolprojekt: en responsiv webbplats för fiktivt företag. Projektet innehåller företagspresentation, personalsidor, kontaktsida med realtidsvalidering, bildspel, animerade skillbars samt ett projektgalleri där data läses från JSON och kan filtreras och sorteras i realtid.",
            badges: [
              {Icon: FaHtml5, color: COLORS.HTML},
              {Icon: FaCss3Alt, color: COLORS.CSS},
              {Icon: SiJavascript, color: COLORS.JAVASCRIPT},
              {Icon: FaVuejs, color: COLORS.VUEJS}
         ]
          },
        { title: "Podcastprojektet", 
          description: "Skolprojekt: en desktopapplikation för att hantera och organisera RSS-flöden. Asynkron hämtning av data, LINQ-hantering av samlingar samt strukturerad validering och exception-hantering. Utvecklad i .NET med Windows Forms.",
          badges: [
            {Icon: SiCsharp, color: COLORS.CSHARP},
            {Icon: SiDotnet, color: COLORS.DOTNET}, 
            
          ]
        },
        { title: "CV-Portfolio", 
          description: "Hobbyprojekt: Den här sidan är byggt i React med TypeScript och Tailwind CSS.",
          badges: [
            {Icon: DiReact, color: COLORS.REACT},
            {Icon: SiTailwindcss, color: COLORS.TAILWIND},
            {Icon: SiTypescript, color: COLORS.TYPESCRIPT}
          ] },
        { title: "Men in Black", 
            description: "Skolprojekt: ett Java-baserat administrations- och söksystem för MiB-agenter utvecklat i NetBeans. Systemet hanterade autentisering, rollstyrd åtkomst, registrering och uppdatering av agenter och aliens samt validerad datahantering och flera sök- och filtreringsfunktioner.",
            badges: [
            {Icon: DiJava, color: COLORS.JAVA},
            {Icon: DiMysql, color: COLORS.MYSQL}
          ] },
        
      ];
    return (
        
        <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Skol- och hobbyprojekt</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {projectList.map((project, index) => (
            <div key={index} className="p-6 border rounded-lg shadow" style={{ backgroundColor: '#C3E0E9', color: '#003442' }}>
                <h3 className="text-x1 font-semibold mb-2">{project.title}</h3>
                <p className="text-grey-700">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.badges?.map((badge, badgeIndex) => (
                    <TechBadge key={badgeIndex} Icon={badge.Icon} color={badge.color} />
                  ))}
                  </div>
                </div>
        ))}
        </div>
    </div>
    );
}
export default Projects;