import React, { useState } from "react";
import { FaPhone, FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa6";
import { COLORS } from "../Colors";

function ContactInfo({ iconSize = 18, linkSize = 22 }) {
  const [emailHover, setEmailHover] = useState(false);
  const [linkedinHover, setLinkedinHover] = useState(false);
  const [githubHover, setGithubHover] = useState(false);

  const linkStyle = {
    color: COLORS.TEXT_LIGHT,
    transition: "color 0.3s ease, transform 0.2s ease",
  };

  const getIconStyle = (isHovered: boolean, baseColor: string, hoverColor: string) => ({
    color: isHovered ? hoverColor : baseColor,
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    transition: "all 0.2s ease",
    cursor: "pointer",
    display: "inline-block"
  });

  return (
    <div className="flex flex-col space-y-3" style={{ color: COLORS.TEXT_LIGHT }}>
      
      <p className="flex items-center justify-center">
        <FaEnvelope size={iconSize} className="mr-2 opacity-80" />
        <a
          href="mailto:lukas.rosendahl@hotmail.com"
          onMouseEnter={() => setEmailHover(true)}
          onMouseLeave={() => setEmailHover(false)}
          style={{
            ...linkStyle,
            fontWeight: emailHover ? "500" : "400",
            textShadow: COLORS.TEXT_SHADOW,
          }}
        >
          lukas.rosendahl@hotmail.com
        </a>
      </p>

      <p className="flex items-center justify-center">
        <FaPhone size={iconSize} className="mr-2 opacity-80" />
        <span style={{ textShadow: COLORS.TEXT_SHADOW }}>070 260 60 44</span>
      </p>

      <div className="flex items-center justify-center gap-4 mt-2">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/lukas-rosendahl-7380052aa/"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          onMouseEnter={() => setLinkedinHover(true)}
          onMouseLeave={() => setLinkedinHover(false)}
          style={getIconStyle(linkedinHover, "#0077b5", "#005582")}
        >
          <FaLinkedin size={linkSize} />
        </a>
        
        <a
          target="_blank"
          href="https://github.com/lukasdenfete"
          rel="noopener noreferrer"
          aria-label="GitHub"
          onMouseEnter={() => setGithubHover(true)}
          onMouseLeave={() => setGithubHover(false)}
          style={getIconStyle(githubHover, COLORS.TEXT_LIGHT, "#94a3b8")}
        >
          <FaGithub size={linkSize} />
        </a>
      </div>
    </div>
  );
}

export default ContactInfo;