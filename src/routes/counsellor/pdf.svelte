<script>
  console.log('PDF page');
  // require dependencies
  import { jsPDF } from 'jspdf';
  var doc = new jsPDF();

  doc.text('Hello world!', 10, 10);
  doc.output('dataurlnewwindow');
</script>

<html lang="en" data-theme="cupcake" />
<div class="m-3">
  <h1>PDF Page</h1>
</div>
