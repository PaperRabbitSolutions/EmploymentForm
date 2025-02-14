import logo from "../assets/logo2.png";
import footer from "../assets/footer.png";

const generateTable = (sectionTitle, sectionData, doc) => {
  doc.addPage(); // Start each section on a new page

  // Add logo
  doc.addImage(logo, "PNG", 10, 10, 30, 38);

  const pageWidth = doc.internal.pageSize.width;
  const pageHeight = doc.internal.pageSize.height;

  // Align "Employment Form" to the right
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  const titleText = "Employment Form";
  const textWidth = doc.getTextWidth(titleText);
  doc.text(titleText, pageWidth - textWidth - 15, 30); // Right-aligned with padding

  // Set title for the section
  doc.setFontSize(12);
  doc.text(sectionTitle, 12, 55);

  // Create table columns
  const columns = ["Field", "Details"];

  // Create table rows
  const rows = Object.entries(sectionData).map(([field, value]) => {
    if (typeof value === "boolean") {
      value = value ? "Yes" : "No";
    } else if (typeof value === "object" && value !== null) {
      value = Object.entries(value)
        .map(([key, val]) => `${key}: ${val}`)
        .join(", ");
    }
    return [field, value];
  });

  // Adjust the table starting position dynamically
  const tableY = 60;
  doc.autoTable({
    startY: tableY,
    head: [columns],
    body: rows,
    theme: "striped",
    headStyles: {
      fillColor: [0, 0, 0],
      textColor: [255, 255, 255],
      fontSize: 12,
      fontStyle: "bold",
      halign: "center",
      valign: "middle",
    },
    bodyStyles: {
      fillColor: [240, 240, 240],
      textColor: [0, 0, 0],
      fontSize: 10,
      halign: "left",
      valign: "middle",
      lineWidth: 0.3,
      lineColor: [150, 150, 150],
    },
    alternateRowStyles: {
      fillColor: [255, 255, 255],
    },
    margin: { top: 10, left: 10, right: 10 },
    styles: {
      cellPadding: 5,
      overflow: "linebreak",
      fontSize: 11,
    },
    columnStyles: {
      0: { cellWidth: 50 },
      1: { cellWidth: 140 },
    },
  });

  // Ensure footer is always at the bottom of the page
  const footerHeight = 29;
  doc.addImage(footer, "PNG", 0, pageHeight - footerHeight, pageWidth, footerHeight);
};

export default generateTable;
