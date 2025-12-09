import React, { useState } from "react";
import { COLORS } from "../Colors";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    setIsOpen(false);

    if (targetId === "about") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - 80; // headerns höjd

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navLinks = [
    { id: "about", text: "Om Mig" },
    { id: "CV", text: "CV" },
    { id: "projects", text: "Projekt" },
    { id: "contact", text: "Kontakt" },
  ];

  return (
    <header
      className="fixed w-full top-0 shadow-md md:hidden"
      style={{ backgroundColor: COLORS.AQUA_FOAM, color: COLORS.SHADOW_NAVY, zIndex: 60 }}
    >
      <div className="flex justify-between items-center p-4">
        <h1 className="text-xl font-bold tracking-tight">Lukas Rosendahl</h1>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 focus:outline-none hover:bg-black/5 rounded-full transition-colors"
        >
          {isOpen ? <RxCross1 size={28} /> : <RxHamburgerMenu size={28} />}
        </button>
      </div>

      {isOpen && (
        <nav
          className="absolute top-full left-0 w-full shadow-lg border-t"
          style={{
            backgroundColor: COLORS.AQUA_FOAM,
            borderColor: COLORS.SUNLIGHT_GOLD,
          }}
        >
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleScroll(e, link.id)}
                className="py-4 px-6 border-b border-black/5 font-medium hover:bg-white/40 transition-colors"
              >
                {link.text}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
