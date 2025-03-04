import jsPDF from "jspdf";
import logo from "../assets/logo2.png"; // Company Logo
import footer from "../assets/footer.png"; // Footer Image

const addHeader = (doc) => {
  doc.addImage(logo, "PNG", 10, 10, 30, 38); // Logo at the top
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("Anti-Bribery Policy Agreement", 10, 58); // Adjusted title position
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text("Employee Agreement to Comply with Anti-Bribery Regulations", 10, 63);
};

const addFooter = (doc) => {
  const pageWidth = doc.internal.pageSize.width;
  const pageHeight = doc.internal.pageSize.height;
  const footerHeight = 29;
  doc.addImage(footer, "PNG", 0, pageHeight - footerHeight, pageWidth, footerHeight);
};

const addAgreementSections = (doc, startY) => {
  const sections = [
    {
      title: "1. Purpose:",
      content: "This Agreement ensures that all PaperRabbit Solutions Pvt. Ltd. employees understand and comply with the Company’s strict policy against bribery and corruption.",
    },
    {
      title: "2. Policy Statement:",
      content: "PaperRabbit Solutions Pvt. Ltd. is committed to conducting business ethically and lawfully. The company strictly prohibits bribery and corruption in any form. " +
        "This policy applies to all employees, officers, directors, agents, consultants, and other third-party representatives.",
    },
    {
      title: "3. Definition of Bribery:",
      content: "Bribery is the offering, giving, receiving, or soliciting of any valuable item to influence the actions of an official or any person in charge of a public or legal duty.",
    },
    {
      title: "4. Employee Obligations:",
      content: "• Employees shall not engage in bribery directly or through a third party.\n" +
        "• Employees shall not offer, promise, give, request, or accept any bribe.\n" +
        "• Employees must act with integrity in all business dealings and maintain accurate records.\n" +
        "• Employees shall report any suspicion or knowledge of bribery to the Company’s compliance officer.",
    },
    {
      title: "5. Gifts and Hospitality:",
      content: "• Gifts and hospitality must be reasonable, proportionate, and not intended to influence business decisions.\n" +
        "• Employees must seek approval from their line manager or compliance officer before offering or accepting gifts that could be perceived as inappropriate.",
    },
    {
      title: "6. Facilitation Payments:",
      content: "The Company strictly prohibits facilitation payments or 'grease payments' intended to expedite or secure the performance of a routine governmental action.",
    },
    {
      title: "7. Compliance and Training:",
      content: "• Employees must undergo regular training on anti-bribery and anti-corruption laws and policies.\n" +
        "• Employees must comply with all applicable anti-bribery laws, including the Indian Prevention of Corruption Act, 1988.\n" +
        "• Any suspected or actual violations must be reported immediately.\n" +
        "• Reports can be made confidentially through the Company’s whistleblower policy.",
    },
    {
      title: "8. Consequences of Non-Compliance:",
      content: "Non-compliance with this policy may result in disciplinary action, including termination of employment, " +
        "and may also attract legal consequences under applicable laws.",
    },
    {
      title: "9. Declaration:",
      content: "I confirm that I have read, understood, and agree to comply with the above terms regarding anti-bribery regulations.",
    },
    {
      title: "Signature: _____________________                                                       Date: _________________",
      content: "",
    },
  ];

  let yPos = startY;
  const pageHeight = doc.internal.pageSize.height;
  const marginBottom = 40;
  const lineHeight = 7; // Adjusted line height for better readability

  sections.forEach((section) => {
    // Check if there's space for title; if not, add a new page
    if (yPos + lineHeight > pageHeight - marginBottom) {
      addFooter(doc);
      doc.addPage();
      addHeader(doc);
      yPos = 75; // Reset position on new page
    }

    // Add Section Title
    doc.setFont("helvetica", "bold");
    doc.text(section.title, 18, yPos);
    yPos += lineHeight;

    // Wrap text dynamically
    doc.setFont("helvetica", "normal");
    const textLines = doc.splitTextToSize(section.content, 180);
    textLines.forEach((line) => {
      // Check if there's space for this line, else go to the next page
      if (yPos + lineHeight > pageHeight - marginBottom) {
        addFooter(doc);
        doc.addPage();
        addHeader(doc);
        yPos = 75;
      }
      doc.text(line, 15, yPos);
      yPos += lineHeight;
    });

    yPos += 5; // Extra spacing between sections
  });

  addFooter(doc); // Ensure footer is added to the last page
};

const AntiBriberyPolicyAgreement = (doc) => {
  doc.addPage();
  addHeader(doc);
  addAgreementSections(doc, 70); // Adjusted starting position for "Purpose"
};

export default AntiBriberyPolicyAgreement;
