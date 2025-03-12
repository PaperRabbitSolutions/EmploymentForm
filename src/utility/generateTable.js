import logo from "../assets/logo2.png";
import footer from "../assets/footer.png";

const generateTable = (sectionTitle, sectionData, doc,isFirstPage) => {
  if (!isFirstPage) {
    doc.addPage(); // Add a new page only after the first table
  }
  // Add logo
  doc.addImage(logo, "PNG", 10, 10, 30, 38);

  const pageWidth = doc.internal.pageSize.width;
  const pageHeight = doc.internal.pageSize.height;

  // Right-align the "Employment Form" title
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  const titleText = "Employment Form";
  const textWidth = doc.getTextWidth(titleText);
  doc.text(titleText, pageWidth - textWidth - 15, 30);

  // Section title
  doc.setFontSize(12);
  doc.text(sectionTitle, 12, 55);

  // Table columns
  const columns = ["Field", "Details"];

  // Table rows (filter out fields where value is false)
  const rows = Object.entries(sectionData)
    .filter(([_, value]) => value !== false)
    .map(([field, value]) => {
      // Convert field names to proper format
      const formattedField = field
      .replace(/([a-z])([A-Z])/g, "$1 $2")
        .replace(/_/g, " ") // Replace underscores with spaces
        .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word

      if (typeof value === "boolean") {
        value = "Yes";
      } else if (typeof value === "object" && value !== null) {
        value = Object.entries(value)
          .map(([key, val]) => `${key}: ${val}`)
          .join(", ");
      }
      return [formattedField, value]; // Use formatted field
    });

  // Table start position
  const tableY = 60;

  doc.autoTable({
    startY: tableY,
    head: [columns],
    body: rows,
    theme: "plain",
    margin: { top: 10, left: 10, right: 10 },
    styles: {
      cellPadding: 5,
      overflow: "linebreak",
      fontSize: 11,
      halign: "left",
      valign: "middle",
      textColor: [0, 0, 0],
      lineWidth: 0, // No default borders
    },
    headStyles: {
      fillColor: false, // Disable default fill
      textColor: [255, 255, 255],
      fontSize: 12,
      fontStyle: "bold",
      halign: "center",
      valign: "middle",
    },
    bodyStyles: {
      textColor: [0, 0, 0],
      fontSize: 10,
      halign: "left",
      valign: "middle",
    },
    columnStyles: {
      0: { cellWidth: 50 },
      1: { cellWidth: 130 },
    },
    didDrawCell: (data) => {
      const { cell } = data;
      const x = cell.x;
      const y = cell.y;
      const width = cell.width;
      const height = cell.height;
      const borderColor = [200, 200, 200]; // Light border color

      if (data.section === "head") {
        // Headers: Black background with white text and light border
        doc.setFillColor(0, 0, 0);
        doc.roundedRect(x, y, width - 1.5, height - 2, 2, 2, "F");

        doc.setDrawColor(...borderColor);
        doc.setLineWidth(0.3);
        doc.roundedRect(x, y, width - 1.5, height - 2, 2, 2, "S");

        doc.setTextColor(255, 255, 255);
        doc.text(cell.text, x + 5, y + height / 2 + 2);
      } else {
        // Body cells: Gray background with black text, light border, and small row gap
        const grayColor = [240, 240, 240];

        doc.setFillColor(...grayColor);
        doc.roundedRect(x, y, width - 2, height - 2, 2, 2, "F");

        doc.setDrawColor(...borderColor);
        doc.setLineWidth(0.3);
        doc.roundedRect(x, y, width - 2, height - 2, 2, 2, "S");

        doc.setTextColor(0, 0, 0);
        doc.text(cell.text, x + 5, y + height / 2 + 1);
      }
    },
  });

  // Footer
  const footerHeight = 29;
  doc.addImage(footer, "PNG", 0, pageHeight - footerHeight, pageWidth, footerHeight);
};

export default generateTable;
