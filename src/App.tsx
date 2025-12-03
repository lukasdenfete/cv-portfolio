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

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div
      className="flex min-h-screen"
      style={{ backgroundColor: COLORS.POOL_BLUE }}
    >
      <div className="hidden md:block sticky top-0 z-50">
        <Sidebar />
      </div>

      <main
        className="flex-1 relative"
      >
        <div className="md:hidden">
          <Header />
        </div>
        <section
          id="about"
          className="sticky top-0 min-h-screen flex items-center justify-center p-8"
          style={{
            backgroundColor: COLORS.POOL_BLUE,
            color: COLORS.ELLIS_BUTTER,
            zIndex: 10,
          }}
        >
          <div className="w-full">
            <About />
          </div>
        </section>
        <section
          id="CV"
          className="sticky top-0 min-h-screen flex items-center justify-center p-8 w-full"
          style={{
            backgroundColor: COLORS.POOL_BLUE,
            color: COLORS.ELLIS_BUTTER,
            zIndex: 20,
          }}
        >
          <div>
            <CV />
          </div>
        </section>
        <section
          id="projects"
          className="relative min-h-screen flex items-start justify-center p-8 py-20 w-full"
          style={{
            backgroundColor: COLORS.POOL_BLUE,
            color: COLORS.ELLIS_BUTTER,
            zIndex: 30,
          }}
        >
          <Projects />
        </section>
        <section
          id="contact"
          className="relative min-h-screen flex items-center justify-center p-8 w-full"
          style={{
            backgroundColor: COLORS.POOL_BLUE,
            color: COLORS.ELLIS_BUTTER,
            zIndex: 40,
          }}
        >
          <div>
            <Contact />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
