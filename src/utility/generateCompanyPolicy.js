import jsPDF from "jspdf";
import logo from "../assets/logo2.png"; // Company Logo
import footer from "../assets/footer.png"; // Footer Image

function generateCompanyPolicyPDF(doc) {
    doc.addPage();
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;
    const margin = 15;
    let y = margin + 20; // Start below the header

    const addHeader = () => {
        doc.addImage(logo, "PNG", 10, 10, 30, 38);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(14);
        const titleText = "Company Policies & Guidelines";
        const textWidth = doc.getTextWidth(titleText);
        doc.text(titleText, pageWidth - textWidth - 10, 25);
    };

    const addFooter = () => {
        const footerHeight = 29;
        doc.addImage(footer, "PNG", 0, pageHeight - footerHeight, pageWidth, footerHeight);
    };

    function checkPageEnd(lineHeight = 10) {
        if (y + lineHeight > pageHeight - 40) { 
            addFooter();
            doc.addPage();
            addHeader();
            y = margin + 20; // Reset y-position after adding a new page
        }
    }

    addHeader();

    const content = [
        { title: "1. Leave Policy", isBold: true },
        { title: "1.1. Purpose", text: "The Leave Policy provides guidelines on the types of leave available, eligibility criteria, and the process for applying for and approving leave." },
        { title: "1.2. Types of Leave", text: "- Annual Leave: Employees are entitled to [12 days] of paid annual leave per year.\n- Sick Leave: Employees are entitled to [6 days] of paid sick leave per year.\n- Maternity/Paternity Leave: Female employees are entitled to [24 weeks] of paid maternity leave, and male employees are entitled to [30 days] of paid paternity leave.\n- Casual Leave: Employees can avail of [4 days] of casual leave for personal reasons.\n- Bereavement Leave: Employees are entitled to [5 days] of paid leave in the event of the death of an immediate family member.\n- Unpaid Leave: Employees may apply for unpaid leave for extended time off, subject to management approval." },
        { title: "1.3. Leave Application Process", text: "- Employees must apply for leave through the company's HR portal at least [15 days] in advance.\n- Emergency leave requests should be communicated to the immediate supervisor immediately.\n- Leave approval is subject to managerial discretion and business requirements." },
        { title: "1.4. Leave Accrual and Carry Forward", text: "- Annual leave accrues at a monthly rate of [X] days.\n- Unused annual leave will not be carried forward to the next year and cannot be taken at the year-end." },

        { title: "2. IT Policy", isBold: true },
        { title: "2.1. Purpose", text: "The IT Policy outlines the proper usage of the company's information technology resources to ensure data security and efficient operations." },
        { title: "2.2. Acceptable Use", text: "- Employees should use IT resources, including email, the internet, and devices, for business purposes.\n- Personal use of IT resources should be minimal and not interfere with work duties." },
        { title: "2.3. Data Security", text: "- Employees must protect sensitive information by using strong passwords, logging off when not in use, and not sharing login credentials.\n- Data encryption should be used for sensitive information." },

        { title: "3. Code of Conduct", isBold: true },
        { title: "3.1. Purpose", text: "The Code of Conduct sets out the standards of behavior expected from employees to ensure a respectful, ethical, and professional work environment." },
        { title: "3.2. Professionalism", text: "- Employees are expected to perform their duties with integrity and honesty.\n- Respect for colleagues, clients, and stakeholders is mandatory." },

        { title: "4. Anti-Harassment Policy", isBold: true },
        { title: "4.1. Purpose", text: "The Anti-Harassment Policy ensures a work environment free from harassment and discrimination." },
        { title: "4.2. Definition", text: "- Harassment includes any unwelcome behavior that creates a hostile work environment.\n- Discrimination based on race, gender, age, religion, or any other protected characteristic is prohibited." },

        { title: "5. Confidentiality Agreement", isBold: true },
        { title: "5.1. Purpose", text: "The Confidentiality Agreement ensures that employees protect the company's confidential information." },
        { title: "5.2. Obligations", text: "- Employees must not disclose confidential information during or after their employment.\n- Breach of confidentiality may result in disciplinary action and legal consequences." },

        { title: "6. Social Media Policy", isBold: true },
        { title: "6.1. Purpose", text: "The Social Media Policy governs employees' conduct on social media to protect the company's reputation." },
        { title: "6.2. Guidelines", text: "- Employees should not post negative or confidential information about the company.\n- Social media usage should not interfere with work responsibilities." },

        { title: "7. Health and Safety Policy", isBold: true },
        { title: "7.1. Purpose", text: "The Health and Safety Policy promotes a safe working environment." },
        { title: "7.2. Responsibilities", text: "- Employees must follow safety protocols and report hazards.\n- The company will provide necessary safety training and equipment." },

        { title: "8. Expense Reimbursement Policy", isBold: true },
        { title: "8.1. Purpose", text: "The Expense Reimbursement Policy outlines the process for claiming business-related expenses." },

        { title: "9. Employee Onboarding Policy", isBold: true },
        { title: "9.1. Purpose", text: "The Employee Onboarding Policy ensures a smooth transition for new hires." },

        { title: "10. Performance Evaluation Policy", isBold: true },
        { title: "10.1. Purpose", text: "The Performance Evaluation Policy ensures a fair and transparent assessment of employee performance." },

        { title: "Acknowledgment", text: "☐ I hereby acknowledge and accept all terms and conditions outlined in the company policies and guidelines mentioned above." }
    ];

    doc.setFont("helvetica");

    content.forEach(section => {
        checkPageEnd();
        
        if (section.isBold) {
            doc.setFontSize(14);
            doc.setFont("helvetica", "bold");
        } else {
            doc.setFontSize(12);
            doc.setFont("helvetica", "normal");
        }
        
        doc.text(section.title, margin, y);
        y += 8;

        if (section.text) {
            checkPageEnd();
            const splitText = doc.splitTextToSize(section.text, pageWidth - 2 * margin);
            doc.setFontSize(11);
            doc.text(splitText, margin, y);
            y += splitText.length * 5;
        }

        y += 10; // Extra space after each section
    });

    addFooter();
}

export default generateCompanyPolicyPDF;
