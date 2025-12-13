import { useEffect, useRef, useState } from "react";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import FlipCard from "../components/FlipCard";
import FrontCard from "../components/FrontCard";
import BackCard from "../components/BackCard";
import { RxCross1 } from "react-icons/rx";
import { COLORS } from "../Colors";

export default function CV() {
  const [showFull, setShowFull] = useState(false);
  const [pdfDims, setPdfDims] = useState({ width: 300, height: 424 });
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function updateDimensions() {
      const width = window.innerWidth;
      let newWidth;
      
      if (width < 640) {
        newWidth = width - 40;
      } else {
        newWidth = 600;
      }

      const newHeight = newWidth * 1.414;
      setPdfDims({ width: newWidth, height: newHeight });
    }

    window.addEventListener("resize", updateDimensions);
    updateDimensions(); 

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (showFull && overlayRef.current) {
      overlayRef.current.scrollTop = 0;
    }
  }, [showFull]);

  return (
    <>
      {!showFull && (
        <div 
          onClick={() => setShowFull(true)} 
          className="cursor-pointer text-center flex flex-col items-center"
        >
          <h2 className="text-4xl font-bold mb-4 text-center">CV</h2>
          <p className="mb-8">Klicka för att öppna och snurra.</p>
          <div 
            className="shadow-lg rounded overflow-hidden"
          >
            <Document file="/CV.pdf">
              <Page 
                pageNumber={1} 
                width={300} 
                renderTextLayer={false} 
                renderAnnotationLayer={false} 
              />
            </Document>
          </div>
        </div>
      )}

      {showFull && (
        <div
          ref={overlayRef}
          className="fixed inset-0 flex justify-center overflow-auto"
          style={{ 
            zIndex: 70
          }}
        >
          <button
            className="fixed top-6 right-8 p-3 rounded-full"
            style={{ 
                zIndex: 71,
                backgroundColor: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)"
            }}
            onClick={() => setShowFull(false)}
          >
            <RxCross1 size={28} />
          </button>

          <div className="min-h-screen flex justify-center items-start pt-24 pb-16 px-4">
            <FlipCard 
              width={pdfDims.width}
              height={pdfDims.height}
              front={<FrontCard width={pdfDims.width} />} 
              back={<BackCard width={pdfDims.width} />} 
            />
          </div>
        </div>
      )}
    </>
  );
}