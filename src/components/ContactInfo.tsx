import React, { useState } from "react";
import { FaPhone, FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa6";

function ContactInfo({ iconSize = 18, linkSize = 22 }) {
  const [emailHover, setEmailHover] = useState(false);

  return (
    <div className="flex flex-col space-y-3">
      <p className="flex items-center justify-center">
        <FaEnvelope size={iconSize} className="mr-2" />
        <a
          href="mailto:lukas.rosendahl@hotmail.com"
          onMouseEnter={() => setEmailHover(true)}
          onMouseLeave={() => setEmailHover(false)}
          style={{
            fontWeight: emailHover ? "500" : "400",
            transition: "all 0.3s",
          }}
        >
          lukas.rosendahl@hotmail.com
        </a>
      </p>
      <p className="flex items-center justify-center">
        <FaPhone size={iconSize} className="mr-2" />
        <span>070 260 60 44</span>
      </p>
      <div className="flex items-center justify-center gap-2">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/lukas-rosendahl-7380052aa/"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin
            size={linkSize}
            className="text-blue-700 hover:text-blue-900 transition-colors"
          />
        </a>
        <a
          target="_blank"
          href="https://github.com/lukasdenfete"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub
            size={linkSize}
            className="text-gray-900 hover:text-gray-600 transition-colors"
          />
        </a>
      </div>
    </div>
  );
}

export default ContactInfo;
