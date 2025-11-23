import React from "react";
import { FaPhone, FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa6";

function Sidebar() {
  return (
    <aside className="w-64 shadow-lg border-r
        p-6 flex flex-col justify-between sticky top-0 h-screen" style={{ backgroundColor: '#F5E6CC', color: '#2F3E46' }}>
      <div>
        <h1 className="text-xl font-bold mb-4">Lukas Rosendahl</h1>
        <p className="text-sm mb-6">
          Systemvetarstudent och fullstackutvecklare med 38 års erfarenhet
        </p>
        <nav className="flex flex-col gap-2">
          <a href="#about">Om mig</a>
          <a href="#projects">Projekt</a>
          <a href="#contact">Kontakt</a>
        </nav>
      </div>

      <div className="flex flex-col items-center space-y-3 text-sm">
        <p className="flex items-center justify-center">
          <FaEnvelope size={18} className="mr-2" />
          <span>lukas.rosendahl@hotmail.com</span>
        </p>
        <p className="flex items-center justify-center">
          <FaPhone size={18} className="mr-2" />
          <span>070 260 60 44</span>
        </p>
        <div className="flex justify-center gap-3 mt-2">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/lukas-rosendahl-7380052aa/"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              size={22}
              className="text-blue-700 hover:scale-110 transition"
            />
          </a>
          <a
            target="_blank"
            href="https://github.com/lukasdenfete"
            rel="noopener noreferrer"
          >
            <FaGithub size={22} className="hover:scale-110 transition" />
          </a>
        </div>

        <div className="text-xs text-gray-500 mt-4">© 2025 lukasdenfete</div>
      </div>
    </aside>
  );
}

export default Sidebar;
