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

  const headerGlassStyle: React.CSSProperties = {
    backgroundColor: "rgba(15, 23, 42, 0.85)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    borderBottom: `1px solid ${COLORS.GLASS_BORDER}`,
    color: COLORS.TEXT_LIGHT,
    zIndex: 60,
  };

  return (
    <header
      className="fixed w-full top-0 shadow-md md:hidden"
      style={ headerGlassStyle }
    >
      <div className="flex justify-between items-center p-4">
        <h1 className="text-xl font-bold tracking-tight" style={{ textShadow: COLORS.TEXT_SHADOW}}>
          Lukas Rosendahl</h1>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-full transition-colors"
          style={{ color: COLORS.TEXT_LIGHT}}
        >
          {isOpen ? <RxCross1 size={28} /> : <RxHamburgerMenu size={28} />}
        </button>
      </div>

      {isOpen && (
        <nav
          className="absolute top-full left-0 w-full shadow-lg border-t"
          style={{
            backgroundColor: COLORS.GLASS_CARD_BG,
            backdropFilter: "blur(16px)",
            borderTopColor: COLORS.GLASS_BORDER,
            borderBottom: `1px solid ${COLORS.GLASS_BORDER}`,
          }}
        >
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleScroll(e, link.id)}
                className="py-4 px-6 font-medium"
                style={{ color: COLORS.TEXT_LIGHT }}
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
