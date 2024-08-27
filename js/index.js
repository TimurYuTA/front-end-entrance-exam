// ===== Converting a page to PDF =========================================

function generatePDF() {
  const doc = {
    filename: "cv.pdf",
    margin: [6, 7, 0, 2],
    html2canvas: { width: 570 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };

  const element = document.getElementById("contentPdf");
  html2pdf().from(element).set(doc).save();
}


// ===== Ripple effect ====================================================

document.onclick = () => applyCursorRippleEffect(event); 

function applyCursorRippleEffect(e) {
  const ripple = document.createElement("div");

  ripple.className = "ripple";
  document.body.appendChild(ripple);

  ripple.style.left = `${e.clientX}px`;
  ripple.style.top = `${e.clientY}px`; 

  ripple.style.animation = "ripple-effect .4s  linear";
  ripple.onanimationend = () => document.body.removeChild(ripple);
}


// ===== Saving changes in sessionStorage =================================

document.addEventListener('input', e => {
  console.log(sessionStorage);
  sessionStorage.setItem(e.target.getAttribute('name'), e.target.innerHTML);
  console.log(sessionStorage);
});


