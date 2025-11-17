import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CV from './components/CV';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

function App() {
  return (
    <>
      <Header />
      <main className='flex flex-col gap-1'>
        <section id='about' className='min-h-screen flex items-center justify-center bg-white'>
          <About />
        </section>
        <section id='cv' className='min-h-screen flex items-center justify-center bg-gray-50'>
          <CV/>
        </section>
        <section id='projects' className="min-h-screen flex items-center justify-center bg-white">
          <Projects />
        </section>
        <section id='contact' className="min-h-screen flex items-center justify-center bg-gray-50">
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App;
