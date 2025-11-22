import { Document, Page } from "react-pdf";

export function BackCard() {
    return (
      <div className="w-full h-full flex items-center justify-center bg-white">
        <Document file="/CV.pdf">
          <Page pageNumber={2} width={600} />
        </Document>
      </div>
    );
  }