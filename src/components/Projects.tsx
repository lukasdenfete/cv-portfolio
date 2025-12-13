import { DiBootstrap, DiCss3, DiJava, DiMysql, DiReact } from "react-icons/di";
import {
  SiTailwindcss,
  SiTypescript,
  SiDotnet,
  SiJavascript,
  SiCsharp,
  SiMicrosoftsqlserver,
  SiDocker,
} from "react-icons/si";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa6";
import { VscAzure } from "react-icons/vsc";
import { ComponentType, useEffect } from "react";
import { COLORS, ICON_COLORS } from "../Colors";
import AOS from 'aos';
import 'aos/dist/aos.css';

const TechBadge = ({
  Icon,
  name,
  color,
}: {
  Icon: ComponentType<{ size: number }>;
  name?: string;
  color: string;
}) => {

  return (
    <div
      className="flex items-center px-3 py-1 text-sm font-medium rounded-lg transition-colors duration-150"
      style={{
        backgroundColor: `${color}20`,
        color: color,
        border: `1px solid ${color}40`,
      }}
      title={name || "Teknikikon"}
    >
      <Icon size={25} />
    </div>
  );
};

const projectList = [
  {
    title: "Whiskey Sour Carparts",
    description:
      "Hobbyprojekt: en e-handelsplattform med communitydel. Byggd med ASP.NET Core MVC, C#, Entity Framework Core och databas i Azure, projektet kan även köras lokalt via SQL Server i Docker. Frontend är byggt med Razor Views och Bootstrap. Funktioner inkluderar användarhantering, följarsystem, DMs, trådar och kommentarer, notiser, produktsökning och varukorg.",
    badges: [
      { Icon: SiDotnet, name: ".NET", color: ICON_COLORS.DOTNET },
      { Icon: SiCsharp, name: "C#", color: ICON_COLORS.CSHARP },
      { Icon: DiBootstrap, name: "Bootstrap", color: ICON_COLORS.BOOTSTRAP },
      { Icon: VscAzure, name: "Azure", color: ICON_COLORS.AZURE },
      {
        Icon: SiMicrosoftsqlserver,
        name: "Sql Server",
        color: ICON_COLORS.SQLSERVER,
      },
      { Icon: SiDocker, name: "Docker", color: ICON_COLORS.DOCKER },
    ],
  },
  {
    title: "CV-projektet",
    description:
      "Skolprojekt: en webbaserad CV-plattform byggd i ASP.NET MVC med Identity för autentisering. Systemet innehåller bland annat meddelanden med aviseringar, sökfunktioner, filuppladdning och export av profiler via serialization.",
    badges: [
      { Icon: SiCsharp, name: "C#", color: ICON_COLORS.CSHARP },
      { Icon: SiDotnet, name: ".NET", color: ICON_COLORS.DOTNET },
      {
        Icon: SiMicrosoftsqlserver,
        name: "Sql Server",
        color: ICON_COLORS.SQLSERVER,
      },
      { Icon: SiDocker, name: "Docker", color: ICON_COLORS.DOCKER },
      { Icon: DiCss3, name: "CSS", color: ICON_COLORS.CSS },
    ],
  },
  {
    title: "Hattmakarna",
    description:
      "Skolprojekt: Ett affärssystem för en hattmakare utvecklat i Java med JForms och MySQL. Projektets huvudfokus låg på att arbeta enligt Scrum, använda krav från produktägare och omsätta dessa i fungerande design och implementation.",
    badges: [
      { Icon: DiJava, name: "Java", color: ICON_COLORS.JAVA },
      { Icon: DiMysql, name: "MySQL", color: ICON_COLORS.MYSQL },
    ],
  },
  {
    title: "Responsiv företagswebbplats",
    description:
      "Skolprojekt: en responsiv webbplats för fiktivt företag. Projektet innehåller företagspresentation, personalsidor, kontaktsida med realtidsvalidering, bildspel, animerade skillbars samt ett projektgalleri där data läses från JSON och kan filtreras och sorteras i realtid.",
    badges: [
      { Icon: FaHtml5, name: "HTML", color: ICON_COLORS.HTML },
      { Icon: FaCss3Alt, name: "CSS", color: ICON_COLORS.CSS },
      { Icon: SiJavascript, name: "JavaScript", color: ICON_COLORS.JAVASCRIPT },
      { Icon: FaVuejs, name: "Vue.js", color: ICON_COLORS.VUEJS },
    ],
  },
  {
    title: "Podcastprojektet",
    description:
      "Skolprojekt: en desktopapplikation för att hantera och organisera RSS-flöden. Asynkron hämtning av data, LINQ-hantering av samlingar samt strukturerad validering och exception-hantering. Utvecklad i .NET med Windows Forms.",
    badges: [
      { Icon: SiCsharp, name: "C#", color: ICON_COLORS.CSHARP },
      { Icon: SiDotnet, name: ".NET", color: ICON_COLORS.DOTNET },
    ],
  },
  {
    title: "CV-Portfolio",
    description:
      "Hobbyprojekt: Den här sidan är byggd i React med TypeScript och Tailwind CSS.",
    badges: [
      { Icon: DiReact, name: "React", color: ICON_COLORS.REACT },
      { Icon: SiTailwindcss, name: "Tailwind", color: ICON_COLORS.TAILWIND },
      { Icon: SiTypescript, name: "TypeScript", color: ICON_COLORS.TYPESCRIPT },
      { Icon: SiJavascript, name: "Javascript", color: ICON_COLORS.JAVASCRIPT },
    ],
  },
  {
    title: "Men in Black",
    description:
      "Skolprojekt: ett Java-baserat administrations- och söksystem för MiB-agenter utvecklat i NetBeans. Systemet hanterade autentisering, rollstyrd åtkomst, registrering och uppdatering av agenter och aliens samt validerad datahantering och flera sök- och filtreringsfunktioner.",
    badges: [
      { Icon: DiJava, name: "Java", color: ICON_COLORS.JAVA },
      { Icon: DiMysql, name: "MySQL", color: ICON_COLORS.MYSQL },
    ],
  },
];

function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold mb-12 text-center" data-aos="fade-down">
        Skol- och hobbyprojekt
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg shadow"
            data-aos="zoom-in-up" data-aos-duration="800" data-aos-delay={index * 150}
            style={{
              backgroundColor: COLORS.TEXT_SHADOW,
              backdropFilter: "blur(5px)", // Extra blur inuti kortet
              border: `1px solid ${COLORS.GLASS_BORDER}`, 
              color: COLORS.TEXT_LIGHT 
            }}
          >
            <h3 className="text-x1 font-semibold mb-2">{project.title}</h3>
            <p className="leading-relaxed text-sm mb-6" 
              style={{ color: COLORS.TEXT_MUTED }}>{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.badges?.map((badge, badgeIndex) => (
                <TechBadge
                  key={badgeIndex}
                  Icon={badge.Icon}
                  name={badge.name}
                  color={badge.color}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Projects;
