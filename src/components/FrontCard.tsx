import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc =
  `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

  export default function FrontCard() {
    return (
      <div className="flex justify-center items-start">
        <Document file="/CV.pdf">
          <Page pageNumber={1} width={600} />
        </Document>
      </div>
    );
  }
