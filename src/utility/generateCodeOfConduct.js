import jsPDF from "jspdf";
import logo from "../assets/logo2.png";
import footer from "../assets/footer.png";

function generateCodeOfConductPDF(doc) {
    doc.addPage();
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;
    const margin = 10; // Equal margins on left and right
    const contentWidth = pageWidth - 2 * margin; // Ensuring content stays within boundaries
    let y = 65; // Starting position after the header

    const addHeader = () => {
        doc.addImage(logo, "PNG", 10, 10, 30, 38);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(16);
        doc.text("Company Code of Conduct", margin, 55);
    };

    const addFooter = () => {
        doc.addImage(footer, "PNG", 0, pageHeight - 29, pageWidth, 29);
    };

    function checkPageEnd(lineHeight = 10) {
        if (y + lineHeight > pageHeight - 30) {
            addFooter();
            doc.addPage();
            addHeader();
            y = 65; // Reset y for the new page
        }
    }

    addHeader();

    const content = [
        { title: "1. Professionalism and Integrity:", isBold: true },
        { text: "• Conduct yourself with honesty, integrity, and respect in all interactions with colleagues, clients, and stakeholders." },
        { text: "• Avoid conflicts of interest and ensure that personal interests do not interfere with your duties to the company." },
        { text: "• Protect company assets and confidential information." },
        { text: "• Dress code formals, semi-formals, and casuals are allowed over the office premises; any nightwear or unusual attire is not supported." },

        { title: "2. Respect and Diversity:", isBold: true },
        { text: "• Treat all individuals with dignity, respect, and fairness, regardless of race, gender, age, religion, sexual orientation, disability, or other characteristics." },
        { text: "• Foster an inclusive environment where diversity is valued and celebrated." },

        { title: "3. Safety and Well-being:", isBold: true },
        { text: "• Prioritize the safety and well-being of yourself and others in the workplace." },
        { text: "• Follow all safety procedures and guidelines to prevent accidents and injuries." },

        { title: "4. Quality and Excellence:", isBold: true },
        { text: "• Strive for excellence in all aspects of your work." },
        { text: "• Take pride in delivering high-quality products, services, and outcomes to clients and customers." },

        { title: "5. Compliance with Laws and Regulations:", isBold: true },
        { text: "• Adhere to all applicable laws, regulations, and company policies during your duties." },
        { text: "• Report any violations or unethical behavior promptly to the appropriate authorities." },

        { title: "6. Confidentiality and Privacy:", isBold: true },
        { text: "• Safeguard confidential information belonging to the company, clients, and colleagues." },
        { text: "• Respect the privacy of individuals and refrain from disclosing personal or sensitive information without authorization." },

        { title: "7. Environmental Responsibility:", isBold: true },
        { text: "• Act responsibly towards the environment by minimizing waste, conserving resources, and promoting sustainable practices whenever possible." },
        { text: "• Power off your device and workspace or office space before leaving the premises or when not in use." },

        { title: "8. Social Responsibility:", isBold: true },
        { text: "• Contribute positively to the communities in which we operate through ethical business practices, philanthropy, and volunteerism." },
        { text: "• Take part in company CSR programs that help society build a better future." },

        { title: "9. Conflict Resolution:", isBold: true },
        { text: "• Resolve conflicts and disagreements constructively, utilizing open communication and seeking mutually beneficial solutions." },

        { title: "10. Continuous Improvement:", isBold: true },
        { text: "• Embrace a culture of learning and continuous improvement, seeking opportunities for personal and professional growth and development." },
    ];

    doc.setFont("helvetica");

    content.forEach((section) => {
        checkPageEnd();

        if (section.isBold) {
            doc.setFontSize(12);
            doc.setFont("helvetica", "bold");
            doc.text(section.title, margin + 5, y);
            y += 4; // **Reduced space after the section title**
        } else {
            doc.setFontSize(10);
            doc.setFont("helvetica", "normal");

            const splitText = doc.splitTextToSize(section.text, contentWidth);
            splitText.forEach((line) => {
                checkPageEnd(7);
                doc.text(line, margin + 5, y);
                y += 4; // **Uniform spacing between bullet points**
            });
        }

        y += 4; // **Reduced spacing after section ends**
    });

    // Adding extra space before the final section (Thank You Part)
    y += 8; // **Slight extra spacing to separate from the above content**

    const finalSection = [
        { text: "By adhering to this Code of Conduct, you demonstrate your commitment to the success and reputation of PaperRabbit Solutions Pvt Ltd. Violations of this Code may result in disciplinary action, including termination of employment." },
        { title: "Thank you for your dedication to upholding these principles and contributing to a positive and productive workplace environment.", isBold: true },
        { title: "PaperRabbit Solutions Pvt Ltd Management", isBold: true },
    ];

    finalSection.forEach((section) => {
        checkPageEnd();

        if (section.isBold) {
            doc.setFontSize(12);
            doc.setFont("helvetica", "bold");
            doc.text(section.title, margin + 5, y);
            y += 5; // **Smaller spacing after bold titles for better readability**
        } else {
            doc.setFontSize(10);
            doc.setFont("helvetica", "normal");

            const splitText = doc.splitTextToSize(section.text, contentWidth);
            splitText.forEach((line) => {
                checkPageEnd(7);
                doc.text(line, margin + 5, y);
                y += 5; // **Normal spacing between lines**
            });
        }

        y += 4; // **Consistent spacing between sections**
    });

    // **Adding extra space for signature section**
    y += 20; // **Enough space for the employee signature**

    const signatureSection = [
        
        { text: "By: ______________________________________ (Employee Signature along with name and date)" },
    ];

    signatureSection.forEach((section) => {
        checkPageEnd();

        if (section.isBold) {
            doc.setFontSize(12);
            doc.setFont("helvetica", "bold");
            doc.text(section.title, margin + 5, y);
            y += 8; // **More space for clarity**
        } else {
            doc.setFontSize(10);
            doc.setFont("helvetica", "normal");
            doc.text(section.text, margin + 5, y);
            y += 5;
        }
    });

    addFooter();
}

export default generateCodeOfConductPDF;
