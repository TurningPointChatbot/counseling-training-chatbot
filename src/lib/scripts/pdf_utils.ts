//TODO: Implement functions that generate chat log PDF
import { jsPDF } from 'jspdf';

export function generatePDF() {
  console.log('PDF page');
  // require dependencies
  var doc = new jsPDF();

  //set font formatting
  const headerSize = 25;
  const msgTitleSize = 16;
  const msgSize = 12;

  /**
   * Header, display: Module name | Counsellor name | Date
   */

  // retrieve variables, hardcoded atm
  let moduleName = 'Test Module';
  let counsellorName = 'Peter Parker';
  let dateCompleted = '01/01/0101';

  // print to pdf
  doc.setFontSize(10);
  //doc.setFontStyle("italic"); -- doesnt like this
  doc.text(
    moduleName + ' | ' + counsellorName + ' | ' + dateCompleted,
    10,
    10
  );

  /**
   * Messages, display:
   * Message Number | User name (can just say counsellor if difficult) | Timestamp
   * > Msg
   *
   * atm hardcoded
   */
  var msgNo;
  var senderType;
  var alignment;
  var timestamp;

  for (let i = 0; i < 5; i++) {
    // retrtieve variables
    msgNo = i;
    senderType = 'Counsellor';
    timestamp = 'date';
    if (senderType == 'Counsellor') {
      alignment = 'left';
    } else {
      alignment = 'right';
    }

    //print msg title

    //doc.setFontSize(msgTitleSize);
    //doc.setFontStyle("bold");
    doc.text(
      (msgNo as string) + ' | ' + senderType + ' | ' + timestamp,
      10,
      10 + i * 20,
      alignment
    );

    //print msg body

    //doc.setFontsize(msgSize);
    //doc.setFontStyle("italic");
    doc.text(
      'hello brent, test test test, 1 2 3, seek help, youre in trouble brent,  ----------------------',
      10,
      10 + i * 30,
      alignment
    );
  }

  doc.output('dataurlnewwindow');
}
