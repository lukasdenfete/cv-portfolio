import { Document, Page } from "react-pdf";

interface CardProps {
  width: number;
}

export default function FrontCard({ width }: CardProps) {
  return (
    <div className="flex justify-center items-start w-full h-full bg-white shadow-xl rounded overflow-hidden">
      <Document file="/CV.pdf">
        <Page 
          pageNumber={1} 
          width={width}
          renderTextLayer={false} 
          renderAnnotationLayer={false} 
        />
      </Document>
    </div>
  );
}