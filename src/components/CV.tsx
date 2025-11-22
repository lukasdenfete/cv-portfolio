import { useState } from "react";
import { Document, Page } from "react-pdf";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";





function CV() {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [showFull, setShowFull] = useState(false);
  const [flipDirection, setFlipDirection] = useState<"" | "left" | "right">("");


    function onDocumentLoaded(pdf: any){
        setNumPages(pdf.numPages);

    }
    const nextPageNumber = pageNumber + 1 > numPages ? 1 : pageNumber + 1;
    const prevPageNumber = pageNumber - 1 < 1 ? numPages : pageNumber - 1;
    
    function nextPage() {
        setFlipDirection("right");
        setTimeout(() => {
          setPageNumber(nextPageNumber);
          setFlipDirection("");
        });
      }
      
      function prevPage() {
        setFlipDirection("left");
        setTimeout(() => {
          setPageNumber(prevPageNumber);
          setFlipDirection("");
        });
      }
      
    return (
        <>
        {!showFull && (
            <div onClick={() => setShowFull(true)} className="cursor-pointer">
                <h2 className="text-2xl text-center mb-4">CV</h2>
            <Document file='/CV.pdf' onLoadSuccess={onDocumentLoaded}>
            <Page pageNumber={1} width={300} />
            </Document>
            </div>
        )}
        
        {showFull && (
            <div className="fixed inset-0 bg-gray-100 overflow-auto flex justify-center items-start py-12">
                <div className="bg-white p-4 rounded relative">
                    <button className="absolute top-6 right-4 transform transition-transform hover:scale-125 z-50" onClick={() => setShowFull(false)}>
                        <RxCross1 />
                        </button>
                        


                    <Document file='/CV.pdf' onLoadSuccess={onDocumentLoaded} >
                        <Page pageNumber={pageNumber} width={600} />
                    </Document>


                    <button onClick={prevPage}
                            className="absolute left-2 top-1/2 transform transition-transform hover:scale-150 z-50" >
                            <FaArrowLeft />
                        </button>
                    <button onClick={nextPage} 
                            className="absolute right-2 top-1/2 transform transition-transform hover:scale-150 z-50">
                           <FaArrowRight />
                        </button>
                    </div>
                </div>
        )}
        </>
    );
    
}
export default CV;