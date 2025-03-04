import jsPDF from "jspdf";
import logo from "../assets/logo2.png"; // Company Logo
import footer from "../assets/footer.png"; // Footer Image

const generateNdaPdf = (doc) => {
    doc.addPage();
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;
    const margin = 15;
    const headerHeight = 50; // Space for header
    let y = margin + headerHeight + 5; // Start content with adequate spacing

    const addHeader = () => {
        doc.addImage(logo, "PNG", 10, 10, 30, 38);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(14);
        const titleText = "Non-Disclosure Agreement (NDA)";
        // const textWidth = doc.getTextWidth(titleText);
        doc.text(titleText, 10, 60);
    };

    const addFooter = () => {
        const footerHeight = 25;
        doc.addImage(footer, "PNG", 0, pageHeight - footerHeight, pageWidth, footerHeight);
    };

    function checkPageEnd(lineHeight = 10) {
        if (y + lineHeight > pageHeight - 40) {
            addFooter();
            doc.addPage();
            addHeader();
            y = margin + headerHeight + 5; // Reset position after header
        }
    }

    addHeader();

    const content = [
        { title: "1. Purpose", text: "This Agreement ensures that the Employee maintains the confidentiality of the Company's proprietary and confidential information during and after employment." },
        { title: "2. Definitions", text: "Confidential Information refers to all non-public information disclosed by the Company to the Employee, including but not limited to:" },
        { text: "- Business strategies and plans\n- Financial information\n- Customer and supplier details\n- Product designs and specifications\n- Marketing and sales strategies\n- Research and development projects\n- Trade secrets\n- Any other information that is designated as confidential" },
        { title: "3. Obligations of the Employee", text: "The Employee agrees not to disclose, publish, or disseminate Confidential Information to any third party without the Company’s prior written consent." },
        { title: "4. Return of Confidential Information", text: "Upon termination of employment, the Employee must return all confidential materials to the Company." },
        { title: "5. Term", text: "This Agreement shall remain in effect as long as the Employee is employed by the Company and for a period of [5 years] post-employment." },
        { title: "6. Remedies", text: "Any breach of this Agreement may cause irreparable harm to the Company. Legal action may be pursued." },
        { title: "7. Miscellaneous", text: "This Agreement is governed by the laws of India. No modification is valid unless in writing and signed by both parties." },
        { title: "Acknowledgment", text: "The Employee acknowledges that they have read and understood this Agreement and agree to be bound by its terms." }
    ];

    doc.setFont("helvetica");

    content.forEach(section => {
        checkPageEnd();

        if (section.title) {
            doc.setFontSize(12);
            doc.setFont("helvetica", "bold");
            doc.text(section.title, margin, y);
            y += 5;
        }

        if (section.text) {
            checkPageEnd();
            doc.setFontSize(10);
            doc.setFont("helvetica", "normal");
            const splitText = doc.splitTextToSize(section.text, pageWidth - 2 * margin);
            doc.text(splitText, margin, y);
            y += splitText.length * 4.5; // Optimized text spacing
        }

        y += 5; // Minimal space between sections
    });

    addFooter();
};

export default generateNdaPdf;
