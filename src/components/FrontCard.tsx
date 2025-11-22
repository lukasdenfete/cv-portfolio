import { Document, Page } from "react-pdf";

export function FrontCard() {
    return (
      <div className="w-full h-full flex items-center justify-center bg-white">
        <Document file="/CV.pdf">
          <Page pageNumber={1} width={600} />
        </Document>
      </div>
    );
  }