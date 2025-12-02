import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CV from './components/CV';
import { pdfjs } from 'react-pdf';
import Sidebar from './components/Sidebar';
import { COLORS } from './Colors';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

function App() {
  return (
    
    <div className="flex min-h-screen">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      
      <main className="flex-1" style={{ backgroundColor: COLORS.POOL_BLUE, color: COLORS.ELLIS_BUTTER }} >
        <div className="md:hidden">
          <Header />
        </div>
        <section id="about" className="min-h-screen flex items-center justify-center p-8">
              <About />
        </section>
        <section id="CV" className="min-h-screen flex items-center justify-center p-8 w-full">
              <CV />
        </section>
        <section id="projects" className="min-h-screen flex items-center justify-center p-8">
          <Projects />
        </section>
        <section id="contact" className="min-h-screen flex items-center justify-center p-8">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
