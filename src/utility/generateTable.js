import logo from "../assets/logo2.png";
import footer from "../assets/footer.png";


const generateTable = (sectionTitle, sectionData, doc) => {
  doc.addPage(); // Start each section on a new page

  // Add logo (with reduced width and increased height)
  doc.addImage(logo, 'PNG', 10, 10, 30, 30); // Reduced width and increased height
  
  const pageWidth = doc.internal.pageSize.width;
  const pageHeight = doc.internal.pageSize.height;

  // Add header text next to the logo
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Employment Form", 50, 25); // Positioning of the "Employment Form" text
  
  // Set title for the section (after logo and header text)
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text(sectionTitle, 12, 50); // Title now placed just below the header

  // Create the columns for the table
  const columns = ["Field", "Details"];
  
  // Create the rows from section data
  const rows = Object.entries(sectionData).map(([field, value]) => {
    if (typeof value === "boolean") {
      value = value ? "Yes" : "No";
    } else if (typeof value === "object" && value !== null) {
      value = Object.entries(value)
        .map(([key, value]) => `${key}:${value}`)
        .join(", ");
    }
    return [field, value];
  });

  // Adjust the table starting position to be below the logo and title
  doc.autoTable({
    startY: 55, // Start the table below the title
    head: [columns],
    body: rows,
    theme: "striped",
    headStyles: {
      fillColor: [0, 0, 0], // Dark Blue for header
      textColor: [255, 255, 255], // White text
      fontSize: 12,
      font: "helvetica", // Font style for header
      fontStyle: "bold", // Bold header text
      halign: "center", // Header alignment
      valign: "middle", // Center vertically
    },
    bodyStyles: {
      fillColor: [240, 240, 240], // Light gray for body rows
      textColor: [0, 0, 0], // Black text
      fontSize: 10,
      font: "helvetica", // Font style for body rows
      halign: "left", // Align text to the left
      valign: "middle", // Center vertically
      lineWidth: 0.3, // Cell border thickness
      lineColor: [150, 150, 150], // Light gray borders
    },
    alternateRowStyles: {
      fillColor: [255, 255, 255], // White for alternate rows
    },
    margin: { top: 10, left: 10, right: 10 }, // Add margins for spacing
    styles: {
      cellPadding: 5, // Increase padding inside cells for better readability
      overflow: "linebreak", // Handle overflow text
      fontSize: 11, // Slightly smaller font for body rows
    },
    columnStyles: {
      0: { cellWidth: 50 }, // First column (Field) takes 30% width
      1: { cellWidth: 140 }, // Second column (Value) takes 70% width
    },

    
  });
  const footerHeight = 40; // Adjust the height of the footer image as needed
  doc.addImage(footer, 'PNG', 0, pageHeight - footerHeight, pageWidth, footerHeight);
};

export default generateTable;
