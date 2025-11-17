import { useState } from "react";
import { Document, Page } from "react-pdf";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";




function CV() {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [showFull, setShowFull] = useState(false);
  const nextPage = () =>
    setPageNumber(p => p + 1 > numPages ? 1 : p + 1);
  const prevPage = () =>
    setPageNumber(p => p - 1 < 1 ? numPages : p - 1);

    function onDocumentLoaded(pdf: any){
        setNumPages(pdf.numPages);

    }
    return (
        <>
        {!showFull && (
            <div onClick={() => setShowFull(true)} className="cursor-pointer">
            <Document file='/CV.pdf' onLoadSuccess={onDocumentLoaded}>
            <Page pageNumber={1} width={200}/>
            </Document>
            </div>
        )}
        
        {showFull && (
            <div className="fixed inset-0 bg-black overflow-auto flex justify-center items-start py-12">
                <div className="bg-white p-4 rounded relative">
                    <button className="absolute top-2 right-2" onClick={() => setShowFull(false)}>X</button>
                    <Document file='/CV.pdf' onLoadSuccess={onDocumentLoaded}>
                        <Page pageNumber={pageNumber} width={600} />
                    </Document>
                        <button onClick={prevPage} className="absolute left-2 top-1/2"><FaArrowLeft /></button>
                        <button onClick={nextPage} className="absolute right-2 top-1/2"><FaArrowRight/></button>
                    </div>
                </div>
        )}
        </>
    );
    
}
export default CV;

/*
<div className="relative flex flex-col items-center">
                <button onClick={() => setShowFull(false)} 
                className="absolute top-1 right-2 px-3 py-1 bg-gray-500 text-white border rounded font-bold z-50"> 
                X 
                    </button> 
            

            <div className="flex gap-4">
            <button onClick={() => setPageNumber((p) => Math.max(1, p - 1))} 
                className="px-4 py-2 border rounded"> Föregående
            </button>
            <button onClick={() => setPageNumber((p) => Math.min(numPages, p + 1))} 
                className="px-4 py-2 border rounded"> Nästa
                </button>
            </div>
            </div>

*/
