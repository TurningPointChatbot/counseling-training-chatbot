//TODO: Implement functions that generate chat log PDF
import { jsPDF } from 'jspdf';

// message interface
interface Message {
  sender: string;
  text: string;
  timestamp: string;
}

// pdf title interface
interface ModuleDetails {
  attempt_id: number;
  moduleName: string;
  counsellorName: string;
  dateCompleted: string;
}

// Styling Constants
const LINE_OFFSET: number = 8;
const PARAGRAPH_OFFSET: number = 24;
const PAGE_LIMIT: number = 250;
const FONT_NAME: string = 'calibri';

/**
 * Function generates a PDF document containing a counsellor's chatlog
 * @param attempt_id attempt identifier
 * @param moduleName title of module
 * @param counsellorName counsellor's name
 * @param dateCompleted date module completed
 */
export function generatePDF(attempt_id: number, moduleName: string, counsellorName: string, dateCompleted: string): void {
  
  let moduleDetails = { attempt_id, moduleName, counsellorName, dateCompleted };
  let pdf: chatLogPDF = new chatLogPDF(moduleDetails);

  pdf.generate();
}

class chatLogPDF {
  doc: jsPDF;
  moduleDetails: ModuleDetails;
  y_offset: number;     // Add to this number every time you insert text
  messages: Array<Message>;

  constructor(moduleDetails: ModuleDetails) {
    this.doc = new jsPDF();
    this.moduleDetails = moduleDetails;
    this.y_offset = 0;
		this.messages = [];
  }

  /**
   * generates PDF
   */
  generate() {
    this.insertHeader();
		this.retrieveMessages();

		for(let message of this.messages){
			this.insertMessage(message);
      if(this.y_offset > PAGE_LIMIT){
        this.doc.addPage();
        this.y_offset = 0;
      }
		}
    this.doc.output('dataurlnewwindow');
  }

  /** Retrieve messages from API */
  retrieveMessages() {
    //TODO: Replace placeholder values with API GET Request
    let message: Message;
    for (let i = 1; i <= 30; i++) {
			message = {
      	sender: this.moduleDetails.counsellorName,
      	text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis odio id est vestibulum blandit. Duis ultricies urna fermentum ornare rhoncus.',
      	timestamp: 'Placeholder Timestamp ' + String(i)
			}

      this.messages.push(message);
    }
  }

  /**
   * Inserts header into PDF
   */
  insertHeader() {
		let x_offset = 60;
    this.doc.setFontSize(14);

		// Module Name
		this.doc.setFont(FONT_NAME, 'normal', 'bold');
    this.doc.text(`Module Name: `, 10, this.y_offset += LINE_OFFSET);
		this.doc.setFont(FONT_NAME, 'normal', 'normal');
    this.doc.text(`${this.moduleDetails.moduleName}`, x_offset, this.y_offset);

		// Counsellor Name
		this.doc.setFont(FONT_NAME, 'normal', 'bold');
    this.doc.text(`Counsellor Name: `, 10, this.y_offset += LINE_OFFSET);
		this.doc.setFont(FONT_NAME, 'normal', 'normal');
    this.doc.text(`${this.moduleDetails.counsellorName}`, x_offset, this.y_offset);
	
		// Date Completed
		this.doc.setFont(FONT_NAME, 'normal', 'bold');
    this.doc.text(`Completion Date: `, 10, this.y_offset += LINE_OFFSET);
		this.doc.setFont(FONT_NAME, 'normal', 'normal');
    this.doc.text(`${this.moduleDetails.dateCompleted}`, x_offset, this.y_offset);
  }

  /**
   * Inserts message into PDF
   * @param message messafe from chat log
   */
  insertMessage(message: Message) {
    let textArray: string[];
		this.doc.setFontSize(12);

    // Sender and Timestamp
		this.doc.setFont(FONT_NAME, 'normal', 'bold');
		this.doc.text(`${message.sender} [${message.timestamp}]`, 10, this.y_offset += PARAGRAPH_OFFSET);

    //Splitting message text into multiple lines with 1 sentence per line
    textArray = message.text.split('. ');
		this.doc.setFont(FONT_NAME, 'normal', 'normal');
		this.doc.text(textArray, 10, this.y_offset += LINE_OFFSET);
	}
}
