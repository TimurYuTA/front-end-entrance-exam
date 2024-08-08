function generatePDF() {
  const doc = {
    filename: "cv.pdf",
    margin: [6, 5, 5, 5],
    html2canvas: { width: 570 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };

  const element = document.getElementById("contentPdf");
  html2pdf().from(element).set(doc).save();
}
