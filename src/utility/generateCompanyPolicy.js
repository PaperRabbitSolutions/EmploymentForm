import jsPDF from "jspdf";
import logo from "../assets/logo2.png"; // Company Logo
import footer from "../assets/footer.png"; // Footer Image

function generateCompanyPolicyPDF(doc) {
    doc.addPage();
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;
    const margin = 10; // For headings
    const contentMargin = 15; // For paragraph text
    const headerHeight = 50; // Space reserved for the header
    let y = margin + headerHeight + 5; // Start position for content

    // Function to add header
    const addHeader = () => {
        doc.addImage(logo, "PNG", 10, 10, 30, 38);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(14);
        doc.text("Company Policies & Guidelines", margin, 55);
    };

    // Function to add footer
    const addFooter = () => {
        const footerHeight = 29;
        doc.addImage(footer, "PNG", 0, pageHeight - footerHeight, pageWidth, footerHeight);
    };

    // Function to check for page end
    function checkPageEnd(lineHeight = 10) {
        if (y + lineHeight > pageHeight - 40) {
            addFooter();
            doc.addPage();
            addHeader();
            y = margin + headerHeight + 5; // Reset y position
        }
    }

    addHeader();

    const content = [
        { title: "1. Leave Policy", isBold: true },
        { title: "1.1. Purpose", text: "The Leave Policy provides guidelines on the types of leave available, eligibility criteria, and the process for applying for and approving leave.", isSubBold: true },
        { title: "1.2. Types of Leave", text: "- Annual Leave: Employees are entitled to [12 days] of paid annual leave per year.\n\n- Sick Leave: Employees are entitled to [6 days] of paid sick leave per year.\n\n- Maternity/Paternity Leave: Female employees are entitled to [24 weeks] of paid maternity leave, and male employees are entitled to [30 days] of paid paternity leave.\n\n- Casual Leave: Employees can avail of [4 days] of casual leave for personal reasons.\n\n- Bereavement Leave: Employees are entitled to [5 days] of paid leave in the event of the death of an immediate family member.\n\n- Unpaid Leave: Employees may apply for unpaid leave for extended time off, subject to management approval.", isSubBold: true },
        { title: "1.3. Leave Application Process", text: "- Employees must apply for leave through the company's HR portal at least [15 days] in advance.\n\n- Emergency leave requests should be communicated to the immediate supervisor immediately.\n\n- Leave approval is subject to managerial discretion and business requirements.", isSubBold: true },
        { title: "2. IT Policy", isBold: true },
        { title: "2.1. Purpose", text: "The IT Policy outlines the proper usage of the company's information technology resources to ensure data security and efficient operations.", isSubBold: true },
        { title: "2.2. Acceptable Use", text: "- Employees should use IT resources, including email, the internet, and devices, for business purposes.\n\n- Personal use of IT resources should be minimal and not interfere with work duties.", isSubBold: true },
        { title: "3. Code of Conduct", isBold: true },
        { title: "3.1. Purpose", text: "The Code of Conduct sets out the standards of behavior expected from employees to ensure a respectful, ethical, and professional work environment.", isSubBold: true },
        { title: "3.2. Professionalism", text: "- Employees are expected to perform their duties with integrity and honesty.\n\n- Respect for colleagues, clients, and stakeholders is mandatory.", isSubBold: true },
        { title: "Acknowledgment", text: "I hereby acknowledge and accept all terms and conditions outlined in the company policies and guidelines mentioned above.", isSubBold: true },
        { title: "Signature:__________________                                                         Date: __________________" }
    ];

    doc.setFont("helvetica");

    content.forEach(section => {
        checkPageEnd();

        if (section.isBold) {
            // y += 3; // Extra space before new section
            doc.setFontSize(12);
            doc.setFont("helvetica", "bold");
        } else if (section.isSubBold) {
            y += 2; // Space before subheading
            doc.setFontSize(10);
            doc.setFont("helvetica", "bold");
        }

        doc.text(section.title, contentMargin, y);
        y += 6;

        if (section.text) {
            checkPageEnd();
            const splitText = doc.splitTextToSize(section.text, pageWidth - 2 * contentMargin);
            doc.setFont("helvetica", "normal");
            doc.text(splitText, contentMargin, y);
            y += splitText.length * 5; // Increased spacing between bullet points
        }

        y += 2; // Extra space before next heading/subheading
    });

    addFooter();
}

export default generateCompanyPolicyPDF;
