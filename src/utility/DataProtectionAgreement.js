import jsPDF from "jspdf";
import logo from "../assets/logo2.png";
import footer from "../assets/footer.png";

const addHeader = (doc) => {
  doc.addImage(logo, "PNG", 10, 10, 30, 38); // Increased logo height
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("Data Protection Compliance Agreement", 10, 58);
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text(
    "Employee Agreement to Comply with Data Protection Regulations",
    10,
    66
  );
};

const addAgreementSections = (doc, startY) => {
  const sections = [
    {
      title: "1. Confidentiality and Data Privacy:",
      content:
        "I understand and acknowledge that I may have access to confidential, proprietary, and personal data of the company, its clients, and other employees. " +
        "I agree to keep such information confidential and use it only for legitimate business purposes as directed by the company.",
    },
    {
      title: "2. Compliance with Laws:",
      content:
        "I agree to comply with all applicable data protection laws and regulations, including but not limited to the Information Technology Act, 2000, " +
        "and the subsequent rules and amendments, as well as any company-specific data protection policies.",
    },
    {
      title: "3. Data Handling:",
      content:
        "I will handle all personal and sensitive data with the utmost care and according to the company’s data protection policies. " +
        "This includes collecting, processing, storing, and disposing of data securely to prevent unauthorized access, loss, or damage.",
    },
    {
      title: "4. Data Access and Use:",
      content:
        "I will access and use personal data only to the extent necessary for my job duties and as authorized by PaperRabbit Solutions Pvt Ltd. " +
        "I will not disclose or share personal data with unauthorized individuals or entities.",
    },
    {
      title: "5. Breach Notification:",
      content:
        "I agree to immediately report any actual or suspected data breaches, security incidents, or violations of data protection policies " +
        "to the designated data protection officer or relevant authority within PaperRabbit Solutions Pvt Ltd.",
    },
    {
      title: "6. Training and Awareness:",
      content:
        "I acknowledge that I have received, or will receive, adequate training and resources to understand and comply with data protection obligations. " +
        "I agree to participate in ongoing training sessions as required by the company.",
    },
    {
      title: "7. Consequences of Non-Compliance:",
      content:
        "I understand that non-compliance with data protection regulations and company policies may result in disciplinary action, including termination of employment, " +
        "and may also subject me to legal penalties under applicable laws.",
    },
    {
      title: "8. Declaration:",
      content:
        "I confirm that I have read, understood, and agree to comply with the above terms and conditions regarding data protection.",
    },
    {
      title: "Signature: _____________________:                                                        Date: _________________",
      content:""
       ,
    },
  ];

  let yPos = startY;
  sections.forEach((section) => {

    doc.setFont("helvetica", "bold");
    doc.text(section.title, 15, yPos);
    yPos += 5;

    doc.setFont("helvetica", "normal");
    doc.text(section.content, 15, yPos, { maxWidth: 180 });
    yPos += 15; // Increased spacing between sections
  });

  return yPos;
};

const addFooter = (doc) => {
  const pageWidth = doc.internal.pageSize.width;
  const pageHeight = doc.internal.pageSize.height;
  const footerHeight = 29;
  doc.addImage(footer, "PNG", 0, pageHeight - footerHeight, pageWidth, footerHeight);
};

const DataProtectionAgreement = (doc) => {
  doc.addPage();
  addHeader(doc);
  let contentStartY = 75; // Adjusted content position after increased logo size
  const newY = addAgreementSections(doc, contentStartY);
  // addConfirmationCheckbox(doc, newY);
  addFooter(doc);
};

export default DataProtectionAgreement;
