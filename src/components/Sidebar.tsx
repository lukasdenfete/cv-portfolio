import React, { useState } from "react";
import ContactInfo from "./ContactInfo";
import { COLORS } from "../Colors";

const NavLink = ({
  href,
  text,
  id,
  handleScroll,
}: {
  href: string;
  text: string;
  id: string;
  handleScroll: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      onClick={(e) => handleScroll(e, id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="block w-full py-3 px-4 rounded-lg font-medium transition-all duration-300"
      style={{
        color: COLORS.SHADOW_NAVY,
        backgroundColor: isHovered ? "rgba(255, 255, 255, 0.6)" : "transparent",
        paddingLeft: isHovered ? "1.5rem" : "1rem",
      }}
    >
      {text}
    </a>
  );
};

function Sidebar() {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();

    if (targetId === "about") {
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

      while (previousElement) {
        //tryhardversion pga gick inte att scrolla uppåt till CV (knas med sticky?)
        offsetTop += previousElement.offsetHeight;
        previousElement = previousElement.previousElementSibling as HTMLElement;
      }
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <aside
      className="w-64 shadow-2xl border-r
        p-6 flex flex-col justify-between sticky top-0 h-screen"
      style={{
        backgroundColor: COLORS.AQUA_FOAM,
        color: COLORS.SHADOW_NAVY,
        borderRightColor: COLORS.SUNLIGHT_GOLD,
        borderRightWidth: "4px",
      }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-6 relative group">
          <div
            className="w-32 h-32 rounded-full overflow-hidden border-4 shadow-sm transition-transform duration-500 hover:scale-105"
            style={{ borderColor: COLORS.SUNLIGHT_GOLD }}
          >
            <img
              src="/Profilbild.jpg"
              alt="Profilbild"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-2xl font-extrabold mb-1 tracking-tight">
          Lukas Rosendahl
        </h1>
        <p
          className="text-xs uppercase tracking-widest font-bold opacity-70 mb-10"
          style={{ color: COLORS.SHADOW_NAVY }}
        >
          Systemvetarstudent
        </p>

        <nav className="w-full flex flex-col gap-1 text-left">
          <NavLink
            href="#about"
            id="about"
            text="Om mig"
            handleScroll={handleScroll}
          />
          <NavLink href="#CV" id="CV" text="CV" handleScroll={handleScroll} />
          <NavLink
            href="#projects"
            id="projects"
            text="Projekt"
            handleScroll={handleScroll}
          />
          <NavLink
            href="#contact"
            id="contact"
            text="Kontakt"
            handleScroll={handleScroll}
          />
        </nav>
      </div>

      <div className="flex flex-col items-center pt-10">
        <ContactInfo iconSize={18} linkSize={24} />
      </div>
      <div className="flex flex-col opacity-60 mt-2 items-center text-xs">
        © 2025 lukasdenfete
      </div>
    </aside>
  );
}

export default Sidebar;
