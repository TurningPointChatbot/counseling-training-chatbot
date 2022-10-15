//TODO: Implement functions that generate chat log PDF
import { jsPDF } from 'jspdf';

interface Message {
    sender: string,
    text: string,
    timestamp: string
}

export function generatePDF() {
  let doc: jsPDF = new jsPDF();

  for(let i = 0; i < 10; i++){
    doc.setFontSize(8 + i);
    doc.text(`Text no. ${i}`, 10, 10*i);
  }
  doc.output('dataurlnewwindow');
}

function getMessages(): Array<Message> {
    let messages: Array<Message>

    return messages;
}

/** Inserts Header to pdf and returns y co-ordinate offset */
function insertHeader(moduleName: string, counsellorName: string, dateCompleted: string): number {
    let y_ptr: number;

    return y_ptr;
}


/** Inserts a Message to pdf and returns y co-ordinate offset */
function insertMessage(message: Message): number {
    let y_ptr: number;

    return y_ptr;
}