const generateTable = (sectionTitle, sectionData, doc, y) => {
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text(sectionTitle, 12, y);
    y += 10;
  
    const columns = ["Field", "Details"];
    const rows = Object.entries(sectionData).map(([field, value]) => {
      // Check for boolean values and convert them to Yes/No
      if (typeof value === "boolean") {
        value = value ? "Yes" : "No";
      } else if (typeof value === "object" && value !== null) {
        value = Object.entries(value)
          .map(([key, value]) => `${key}:${value}`)
          .join(", ");
      }
  
      return [field, value];
    });
  
    doc.autoTable({
      startY: y,
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
  
    // Update and return the Y position after table is added
    return doc.lastAutoTable.finalY + 10;
  };
export default generateTable;