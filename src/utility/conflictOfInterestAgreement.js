import jsPDF from "jspdf";
import logo from "../assets/logo2.png"; // Company Logo
import footer from "../assets/footer.png"; // Footer Image

const addHeader = (doc) => {
    doc.addImage(logo, "PNG", 10, 10, 30, 38);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);

    // Title positioned below the logo with a gap
    const titleText = "Disclosure of Any Potential Conflicts of Interest";
    // const pageWidth = doc.internal.pageSize.width;
    // const textWidth = doc.getTextWidth(titleText);
    doc.text(titleText, 10, 55);
};

const addFooter = (doc) => {
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;
    const footerHeight = 29;
    doc.addImage(footer, "PNG", 0, pageHeight - footerHeight, pageWidth, footerHeight);
};

const addTextWithWrap = (doc, text, x, y, maxWidth, lineHeight) => {
    doc.setFontSize(10); // Ensure font size consistency
    const lines = doc.splitTextToSize(text, maxWidth);
    lines.forEach((line) => {
        if (y + lineHeight > doc.internal.pageSize.height - 40) {
            addFooter(doc);
            doc.addPage();
            addHeader(doc);
            y = 75;
            doc.setFontSize(10); // Reset font size after adding a new page
        }
        doc.text(line, x, y);
        y += lineHeight;
    });
    return y;
};

const generateConflictOfInterestPDF = (doc) => {
    doc.addPage();
    addHeader(doc);

    let yPos = 65; // Adjusted for proper spacing after logo
    const maxWidth = 170;
    const lineHeight = 6;

    const sections = [
        { title: "Purpose", content: "This Disclosure aims to identify and address potential conflicts of interest during the Employee’s engagement with PaperRabbit Solutions Pvt. Ltd." },
        { title: "Definition of Conflict of Interest", content: "A conflict of interest occurs when an employee’s interests could potentially interfere with their ability to perform their duties and make impartial decisions on behalf of the Company. This includes, but is not limited to:" }
    ];

    sections.forEach(({ title, content }) => {
        if (yPos + lineHeight > doc.internal.pageSize.height - 40) {
            addFooter(doc);
            doc.addPage();
            addHeader(doc);
            yPos = 75;
        }
        doc.setFont("helvetica", "bold");
        doc.setFontSize(12);
        doc.text(title, 12, yPos);
        yPos += lineHeight;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
        yPos = addTextWithWrap(doc, content, 12, yPos, maxWidth, lineHeight);
        yPos += 5;
    });

    // Bullet Points
    const bulletPoints = [
        "Financial interests in competitors, clients, or suppliers",
        "Personal relationships with competitors, clients, or suppliers",
        "Outside employment or consultancy",
        "Moonlighting work without consent of company management in the same domain",
        "Any other activity that may impair objectivity and loyalty to the Company"
    ];

    bulletPoints.forEach((point) => {
        if (yPos + lineHeight > doc.internal.pageSize.height - 40) {
            addFooter(doc);
            doc.addPage();
            addHeader(doc);
            yPos = 70;
        }
        doc.text("• " + point, 12, yPos);
        yPos += lineHeight;
    });

    // Employee Declaration
    if (yPos + 20 > doc.internal.pageSize.height - 40) {
        addFooter(doc);
        doc.addPage();
        addHeader(doc);
        yPos = 70;
    }
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12); // Ensure font size remains consistent for headings
    doc.text("Employee Declaration", 12, yPos+5);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    yPos += 10;
    yPos = addTextWithWrap(doc, "I, [Employee Name], at this moment, disclose the following potential conflicts of interest:", 12, yPos, maxWidth, lineHeight);

    // Declaration Sections with Checkboxes
    const declarationSections = [
        "1. Financial Interests:",
        "2. Personal Relationships:",
        "3. Outside Employment:",
        "4. Other Activities:"
    ];

    declarationSections.forEach((section) => {
        if (yPos + 30 > doc.internal.pageSize.height - 40) {
            addFooter(doc);
            doc.addPage();
            addHeader(doc);
            yPos = 75;
        }
        doc.setFont("helvetica", "bold");
        doc.setFontSize(12); // Ensuring heading size remains 12 for all sections
        doc.text(section, 12, yPos);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
        yPos = addTextWithWrap(doc, "- Do you or any immediate family member have a financial interest in any competitor, client, or supplier of PaperRabbit Solutions Pvt. Ltd.?", 16, yPos + 5, maxWidth - 10, lineHeight);
        doc.rect(16, yPos + 4, 4, 4);
        doc.text("Yes", 24, yPos + 7);
        doc.rect(50, yPos + 4, 4, 4);
        doc.text("No", 58, yPos + 7);
        yPos += 20;
    });

    // Duty to Update Section
    if (yPos + 20 > doc.internal.pageSize.height - 40) {
        addFooter(doc);
        doc.addPage();
        addHeader(doc);
        yPos = 75;
    }
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text("Duty to Update", 12, yPos);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    yPos = addTextWithWrap(doc, "I understand that it is my ongoing responsibility to promptly disclose any potential conflicts of interest that may arise during my employment with PaperRabbit Solutions Pvt. Ltd.", 15, yPos + 5, maxWidth, lineHeight);

    // Final Confirmation Checkbox
    if (yPos + 20 > doc.internal.pageSize.height - 40) {
        addFooter(doc);
        doc.addPage();
        addHeader(doc);
        yPos = 75;
    }
    // doc.rect(12, yPos, 4, 4);
    yPos = addTextWithWrap(doc, "I affirm that I have read and understood the Company’s policy on conflicts of interest and that the information provided in this Disclosure is accurate and complete to the best of my knowledge.", 15, yPos + 3, maxWidth - 10, lineHeight);

    // Ensure footer is added to the last page
    addFooter(doc);
};

export default generateConflictOfInterestPDF;
