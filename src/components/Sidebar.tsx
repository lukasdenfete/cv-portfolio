import React from "react";
import ContactInfo from "./ContactInfo";
import { COLORS } from "../Colors";

function Sidebar() {
  const AQUA_FOAM = COLORS.AQUA_FOAM;
  const SUNLIGHT_GOLD = COLORS.SUNLIGHT_GOLD;
  const SHADOW_NAVY = COLORS.SHADOW_NAVY;

  return (
    <aside className="w-64 shadow-lg border-r
        p-6 flex flex-col justify-between sticky top-0 h-screen" 
        style={{ backgroundColor: AQUA_FOAM , color: SHADOW_NAVY, borderRightColor: SUNLIGHT_GOLD }}>
      <div>
        <h1 className="text-xl font-bold mb-4">Lukas Rosendahl</h1>
        <p className="text-sm mb-6">
          Systemvetarstudent
        </p>
        <nav className="flex flex-col gap-2">
          <a href="#about" className="transform transition-transform hover:scale-105">Om mig</a>
          <a href="#CV" className="transform transition-transform hover:scale-105">CV</a>
          <a href="#projects" className="transform transition-transform hover:scale-105">Projekt</a>
          <a href="#contact" className="transform transition-transform hover:scale-105">Kontakt</a>
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
