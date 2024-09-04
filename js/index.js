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
let clickElements = document.querySelectorAll('button, [contenteditable="true"]');

clickElements.forEach(function (element) {
  element.addEventListener('click', function (event) {
    const ripple = document.createElement("div");

    ripple.className = "ripple";
    document.body.appendChild(ripple);
  
    ripple.style.left = `${event.clientX}px`;
    ripple.style.top = `${event.clientY}px`; 
  
    ripple.style.animation = "ripple-effect .4s  linear";
    ripple.onanimationend = () => document.body.removeChild(ripple);
  });
})


// ===== Saving changes in Storage =================================
document.addEventListener('DOMContentLoaded', function () {
  let changeContents = {};
  const memory = sessionStorage;

  document.addEventListener('input', function(event) {
    changeContents[event.target.getAttribute('id')] = event.target.innerHTML;
    memory.setItem('changeContents', JSON.stringify(changeContents));
  });

  if (memory.getItem('changeContents')) {
    changeContents = JSON.parse(memory.getItem('changeContents'));
    for (let key in changeContents) {
      document.getElementById(key).innerHTML = changeContents[key];
    }
  }
})
