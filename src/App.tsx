import React, { useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CV from "./components/CV";
import { pdfjs } from "react-pdf";
import Sidebar from "./components/Sidebar";
import { COLORS } from "./Colors";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./components/ScrollToTop"
import bgImage from "./images/bg-balloons.png";
import { RxBorderRight } from "react-icons/rx";

pdfjs.GlobalWorkerOptions.workerSrc = pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const glassStyle = {
    backgroundColor: "rgba(20, 20, 20, 0.6)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)", //safaristöd
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)",
  };


  return (
    <div
      className="flex min-h-screen"
    >
      <div className="fixed inset-0 z-0" style={{ backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed", 
        filter: " brightness(0.4)"
      }} />

      

      <div className="hidden md:block sticky top-0 h-screen z-50">
        <Sidebar />
      </div>
      <div className="md:hidden">
          <ScrollToTop />
          <Header />
        </div>

      <main
        className="flex-1 relative z-10"
      >
        <section
          id="about"
          className="min-h-screen flex items-center justify-center p-4 pt-24 md:p-8 md:sticky md:top-0"
          style={{
            color: COLORS.TEXT_LIGHT,
            zIndex: 10,
          }}
        >
          <div className="w-full">
            <About />
          </div>
        </section>
        <section
          id="CV"
          className="min-h-screen flex items-center justify-center p-4 md:p-8 w-full md:sticky md:top-0"
          style={{
            ...glassStyle,
            color: COLORS.TEXT_LIGHT,
            textShadow: COLORS.TEXT_SHADOW,
            zIndex: 20,
          }}
        >
          <div>
            <CV />
          </div>
        </section>
        <section
          id="projects"
          className="min-h-screen flex items-start justify-center p-4 py-20 md:p-8 w-full relative"
          style={{
            ...glassStyle,
            color: COLORS.TEXT_LIGHT,
            zIndex: 30,
          }}
        >
          <Projects />
        </section>
        <section
          id="contact"
          className="min-h-screen flex items-center justify-center p-4 md:p-8 w-full relative"
          style={{
            ...glassStyle,
            color: COLORS.TEXT_LIGHT,
            textShadow: COLORS.TEXT_SHADOW,
            zIndex: 40,
          }}
        >
            <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
