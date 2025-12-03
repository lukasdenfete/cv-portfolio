import React from "react";
import ContactInfo from "./ContactInfo";
import { COLORS } from "../Colors";

function Sidebar() {

  const handleScroll = 
    (e: React.MouseEvent<HTMLAnchorElement>,
        targetId: string
      ) =>  {
    e.preventDefault();

    if(targetId === "about") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }
    const element = document.getElementById(targetId);
    if (element) {
      let offsetTop = 0;
      let previousElement = element.previousElementSibling as HTMLElement;

      while (previousElement) { //tryhardversion pga gick inte att scrolla uppåt till CV (knas med sticky?)
        offsetTop += previousElement.offsetHeight;
        previousElement = previousElement.previousElementSibling as HTMLElement;
      }
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const NavLink = ({href, text, id} : {href : string, text : string, id : string}) => (
    <a href={href} onClick={(e) => handleScroll(e, id)}
    className="block w-full py-3 px-4 rounded-lg transition-all duration-300 font-medium hover:bg-white/60 hover:pl-6"
    style={{ color: COLORS.SHADOW_NAVY}}>
      {text}
    </a>
  )

  return (
    <aside className="w-64 shadow-2xl border-r
        p-6 flex flex-col justify-between sticky top-0 h-screen" 
        style={{ backgroundColor: COLORS.AQUA_FOAM , color: COLORS.SHADOW_NAVY, borderRightColor: COLORS.SUNLIGHT_GOLD, borderRightWidth: "4px" }}>
      <div>
        <h1 className="text-xl font-bold mb-4">Lukas Rosendahl</h1>
        <p className="text-sm mb-6">
          Systemvetarstudent
        </p>
        <nav className="flex flex-col gap-2">
          <a href="#about" onClick={(e) => handleScroll(e, "about")}
          className="transform transition-transform hover:scale-105">Om mig</a>
          <a href="#CV" onClick={(e) => handleScroll(e, "CV")}
          className="transform transition-transform hover:scale-105">CV</a>
          <a href="#projects" onClick={(e) => handleScroll(e, "projects")}
          className="transform transition-transform hover:scale-105">Projekt</a>
          <a href="#contact" onClick={(e) => handleScroll(e, "contact")}
          className="transform transition-transform hover:scale-105">Kontakt</a>
        </nav>
      </div>

      <div className="flex flex-col items-center space-y-3 text-sm">
        <ContactInfo iconSize={20} linkSize={22} />
        <div className="text-xs text-gray-500 mt-4">© 2025 lukasdenfete</div>
      </div>
    </aside>
  );
}

export default Sidebar;
