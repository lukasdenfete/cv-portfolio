import React from "react";

function Header() {
  return (
    <header className="fixed w-full top-0 bg-white shadow-md z-50">
      <nav className="max-w-6x1 mx-auto flex justify-between items-center p-4">
        <h1 className="text-x1 font-bold">Lukas Rosendahl</h1>
        <div className="flex gap-6">
          <a href="#about">Om Mig</a>
          <a href="#projects">Projekt</a>
          <a href="#contact">Kontakt</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
