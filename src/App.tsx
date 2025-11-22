import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CV from './components/CV';
import { pdfjs } from 'react-pdf';
import Sidebar from './components/Sidebar';

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
      
      <main className="flex-1 text-yellow-100" style={{ backgroundColor: '#0a1f44' }}>
        <div className="md:hidden">
          <Header />
        </div>
        <section id="about" className="min-h-screen flex items-center bg-sand">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 w-full">
            <div className="flex items-center">
              <About />
            </div>
            <div className="flex items-center justify-center">
              <CV />
            </div>
          </div>
        </section>
        <section id="projects" className="min-h-screen flex items-center ">
          <Projects />
        </section>
        <section id="contact" className="min-h-screen flex items-center ">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
