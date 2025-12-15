import React, { useState, useEffect } from "react";
import { RxChevronUp } from "react-icons/rx";
import { COLORS } from "../Colors";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 p-3 rounded-full shadow-lg md:hidden z-50"
      style={{
        zIndex: 50,
        backgroundColor: COLORS.GLASS_HOVER,
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        border: COLORS.GLASS_BORDER,
        color: COLORS.TEXT_LIGHT,
        boxShadow: COLORS.TEXT_SHADOW
      }}
      aria-label="Till toppen"
    >
      <RxChevronUp size={28} />
    </button>
  );
};

export default ScrollToTop;