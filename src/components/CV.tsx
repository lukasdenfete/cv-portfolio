import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import FlipCard from "../components/FlipCard";
import FrontCard from "../components/FrontCard";
import BackCard from "../components/BackCard";
import { RxCross1 } from "react-icons/rx";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function CV() {
  const [numPages, setNumPages] = useState(0);
  const [showFull, setShowFull] = useState(false);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  function onDocumentLoaded(pdf: any) {
    setNumPages(pdf.numPages);
  }

  useEffect(() => {
    if (showFull && overlayRef.current) {
      overlayRef.current.scrollTop = 0;
    }
  }, [showFull]);

  return (
    <>
      {!showFull && (
        <div onClick={() => setShowFull(true)} className="cursor-pointer">
          <Document file="/CV.pdf" onLoadSuccess={onDocumentLoaded}>
            <Page pageNumber={1} width={300} />
          </Document>
        </div>
      )}

      {showFull && (
        <div
          ref={overlayRef}
          className="fixed inset-0 bg-black bg-opacity-80 overflow-auto z-50"
        >
          <button
            className="fixed top-6 right-6 text-white hover:scale-125 transition-transform z-50"
            onClick={() => setShowFull(false)}
          >
            <RxCross1 size={28} />
          </button>

          <div className="min-h-screen flex justify-center items-start pt-24 pb-16">
            <div className="p-4 rounded">
              <FlipCard front={<FrontCard />} back={<BackCard />} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
