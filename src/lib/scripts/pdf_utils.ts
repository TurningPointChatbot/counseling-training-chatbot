//TODO: Implement functions that generate chat log PDF
import { jsPDF } from 'jspdf';

interface Message {
  sender: string;
  text: string;
  timestamp: string;
}

export function generatePDF(
  attempt_id: number,
  moduleName: string,
  counsellorName: string,
  dateCompleted: string
): void {
  let pdf: chatLogPDF = new chatLogPDF(
    attempt_id,
    moduleName,
    counsellorName,
    dateCompleted
  );

  pdf.generate();
}

class chatLogPDF {
  doc: jsPDF;
  messages: Array<Message>;
  y_offset: number;

  constructor(
    attempt_id: number,
    moduleName: string,
    counsellorName: string,
    dateCompleted: string
  ) {
    this.doc = new jsPDF();
  }

  generate() {
    this.doc.output('dataurlnewwindow');
  }

  /** Retrieve messages from API */
  retrieveMessages() {}

  insertHeader() {}

  insertMessage(message: Message) {}
}
