import { jsPDF } from "jspdf";

const DataProtectionAgreement = (doc) => {
  doc.addPage();
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("Data Protection Compliance Agreement", 10, 20);

  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text("Employee Agreement to Comply with Data Protection Regulations", 10, 30);

  doc.text(
    "I, [Employee name], at this moment, acknowledge and agree to the following terms regarding data protection as an employee of PaperRabbit Solutions Pvt Ltd:",
    10,
    40,
    { maxWidth: 180 }
  );

  // Agreement Sections
  const sections = [
    {
      title: "1. Confidentiality and Data Privacy:",
      content:
        "I understand and acknowledge that I may have access to confidential, proprietary, and personal data of the company, its clients, and other employees. I agree to keep such information confidential and use it only for legitimate business purposes as directed by the company.",
    },
    {
      title: "2. Compliance with Laws:",
      content:
        "I agree to comply with all applicable data protection laws and regulations, including but not limited to the Information Technology Act, 2000, and the subsequent rules and amendments, as well as any company-specific data protection policies.",
    },
    {
      title: "3. Data Handling:",
      content:
        "I will handle all personal and sensitive data with the utmost care and according to the company’s data protection policies. This includes collecting, processing, storing, and disposing of data securely to prevent unauthorized access, loss, or damage.",
    },
    {
      title: "4. Data Access and Use:",
      content:
        "I will access and use personal data only to the extent necessary for my job duties and as authorized by PaperRabbit Solutions Pvt Ltd. I will not disclose or share personal data with unauthorized individuals or entities.",
    },
    {
      title: "5. Breach Notification:",
      content:
        "I agree to immediately report any actual or suspected data breaches, security incidents, or violations of data protection policies to the designated data protection officer or relevant authority within PaperRabbit Solutions Pvt Ltd.",
    },
    {
      title: "6. Training and Awareness:",
      content:
        "I acknowledge that I have received, or will receive, adequate training and resources to understand and comply with data protection obligations. I agree to participate in ongoing training sessions as required by the company.",
    },
    {
      title: "7. Consequences of Non-Compliance:",
      content:
        "I understand that non-compliance with data protection regulations and company policies may result in disciplinary action, including termination of employment, and may also subject me to legal penalties under applicable laws.",
    },
  ];

  let agreementY = 55; // Starting position for agreement sections

  sections.forEach((section) => {
    doc.setFont("helvetica", "bold");
    doc.text(section.title, 10, agreementY);
    agreementY += 7;

    doc.setFont("helvetica", "normal");
    doc.text(section.content, 10, agreementY, { maxWidth: 180 });
    agreementY += 15;
  });

  // Confirmation checkbox text
  doc.text(
    "[ ] I confirm that I have read, understood, and agree to comply with the above terms and conditions regarding data protection.",
    10,
    agreementY + 10
  );
};

export default DataProtectionAgreement;
