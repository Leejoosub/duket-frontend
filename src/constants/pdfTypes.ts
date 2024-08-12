export interface PdfExport {
  content: (PdfContentTable | PdfContentString)[];
}

export interface PdfContentString {
  text: string;
  style: string;
}
export interface PdfContentTable {
  style: string;
  table: {
    body: string[][];
  };
}
