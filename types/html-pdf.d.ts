declare module 'html-pdf' {
  export interface PDFOptions {
    format?: string;
    orientation?: 'portrait' | 'landscape';
    border?: {
      top?: string;
      right?: string;
      bottom?: string;
      left?: string;
    };
    header?: {
      height?: string;
      contents?: string;
    };
    footer?: {
      height?: string;
      contents?: string;
    };
    timeout?: number;
    [key: string]: any;
  }

  export interface PDF {
    toBuffer(callback: (err: Error | null, buffer: Buffer) => void): void;
    toFile(filePath: string, callback: (err: Error | null, filePath: string) => void): void;
    toStream(callback: (err: Error | null, stream: NodeJS.ReadableStream) => void): void;
  }

  export function create(html: string, options?: PDFOptions): PDF;
}