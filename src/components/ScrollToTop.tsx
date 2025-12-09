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
      className="fixed bottom-6 right-6 p-3 rounded-full shadow-lg transition-transform hover:scale-110 active:scale-90 md:hidden z-50"
      style={{
        backgroundColor: COLORS.AQUA_FOAM,
        color: COLORS.SHADOW_NAVY,
        border: `2px solid ${COLORS.SUNLIGHT_GOLD}`,
      }}
      aria-label="Till toppen"
    >
      <RxChevronUp size={28} />
    </button>
  );
};

export default ScrollToTop;