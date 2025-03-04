import jsPDF from "jspdf";
import logo from "../assets/logo2.png";
import footer from "../assets/footer.png";

function generateEmploymentContractPDF(doc) {
    doc.addPage();
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;
    const margin = 10; // Left & Right margin set to 10
    let y = 65; // Start content after header

    const addHeader = () => {
        doc.addImage(logo, "PNG", 10, 10, 30, 38);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(14);
        doc.text("Employment Contract", margin, 55); // Header title
    };

    const addFooter = () => {
        doc.addImage(footer, "PNG", 0, pageHeight - 29, pageWidth, 29);
    };

    function checkPageEnd(extraHeight = 10) {
        if (y + extraHeight > pageHeight - margin - 30) {
            addFooter(); // Add footer before new page
            doc.addPage();
            addHeader();
            y = 65; // Reset content position
        }
    }

    addHeader();

    const content = [
        { title: "1. Position and Responsibilities:", isBold: true },
        { title: "1.1", text: "The Company currently employs the Employee in the position of [Job Title]. The Employee agrees to perform all duties and responsibilities associated with this position.", isSubTitle: true },
        { title: "1.2", text: "The Employee's primary responsibilities include but are not limited to [list of primary responsibilities].", isSubTitle: true },
        { title: "1.3", text: "The Employee agrees to abide by all Company policies, procedures, and guidelines as may be established or amended occasionally.", isSubTitle: true },

        { title: "2. Compensation:", isBold: true },
        { title: "2.1", text: "The Employee shall receive a monthly salary of [Amount] for the services rendered under this Contract.", isSubTitle: true },
        { title: "2.2", text: "Payment shall be made on the [Last Day] of each month via direct deposit or as agreed upon by the Parties.", isSubTitle: true },
        { title: "2.3", text: "The Employee is entitled to additional benefits outlined in the Company's employee handbook or policies.", isSubTitle: true },

        { title: "3. Working Hours:", isBold: true },
        { title: "3.1", text: "The Employee's regular working hours shall be [09:00am] to [06:00pm], Monday through Friday.", isSubTitle: true },
        { title: "3.2", text: "The Employee agrees to work additional hours as necessary to fulfill the position's duties.", isSubTitle: true },
        { title: "3.3", text: "Saturday would be a team-building activity which the Employee agrees to attend.", isSubTitle: true },

        { title: "4. Confidentiality:", isBold: true },
        { title: "4.1", text: "The Employee agrees to maintain the confidentiality of all Company proprietary and sensitive information.", isSubTitle: true },
        { title: "4.2", text: "This obligation of confidentiality shall survive the termination of this Contract.", isSubTitle: true },
        { title: "4.3", text: "Not disclosing each other's salary part with colleagues within the organization.", isSubTitle: true },

        { title: "5. Intellectual Property:", isBold: true },
        { title: "5.1", text: "Any intellectual property created by the Employee during the term of this Contract shall belong to the Company.", isSubTitle: true },
        { title: "5.2", text: "The Employee agrees to promptly disclose and assign any such intellectual property to the Company.", isSubTitle: true },

        { title: "6. Property Damage:", isBold: true },
        { title: "6.1", text: "Any company property damage made or happened by the employee is to be paid back.", isSubTitle: true },
        { title: "6.2", text: "The Employee could be terminated if any violence or carelessness towards the company property or assets occurs.", isSubTitle: true },
        { title: "6.3", text: "At the point of relieving, any property surrendered back to the company that is found damaged will be deducted from the Employee’s final settlement.", isSubTitle: true },

        { title: "7. Termination:", isBold: true },
        { title: "7.1", text: "Either Party may terminate this Contract with [60 days] written notice.", isSubTitle: true },
        { title: "7.2", text: "The Company reserves the right to terminate this Contract immediately for cause, including but not limited to breach of confidentiality, misconduct, or poor performance.", isSubTitle: true },

        { title: "8. Governing Law:", isBold: true },
        { title: "8.1", text: "This Contract shall be governed by and construed by the laws of India.", isSubTitle: true },
        { title: "8.2", text: "Any disputes arising out of or in connection with this Contract shall be resolved through arbitration by the rules of the Indian Constitution Laws.", isSubTitle: true },

        // Section that needs smaller font size and increased spacing
        { title: "IN WITNESS WHEREOF, the Parties hereto have executed this Contract as of the date first above written.", isFinalSection: true },
        { title: "PaperRabbit Solutions Pvt Ltd                                                      Authorized Signature:_____________________", isFinalSection: true },
        { title: "Employee Name: ________________                                                    Employee Signature: ____________________", isFinalSection: true },
    ];

    doc.setFont("helvetica");

    content.forEach(section => {
        checkPageEnd();
    
        if (section.isBold) {
            doc.setFontSize(12);
            doc.setFont("helvetica", "bold");
            doc.text(section.title, margin + 5, y);
            y += 5; // Reduced spacing after bold headings
        } else if (section.isFinalSection) {
            // Reduce font size and increase spacing for final section
            doc.setFontSize(10);
            doc.setFont("helvetica", "bold");
            doc.text(section.title, margin + 5, y);
            y += 30; // Increased spacing for readability
        } else {
            let fullText = section.title; // Start with title
            
            if (section.text) {
                fullText += " " + section.text; // Append text after a space
            }
    
            const splitText = doc.splitTextToSize(fullText, pageWidth - 2 * margin);
            doc.setFontSize(10);
            doc.setFont("helvetica", "normal");
            
            splitText.forEach((line, index) => {
                checkPageEnd(8); // Less extra height check
                doc.text(line, margin + 5, y);
                y += index === 0 ? 5 : 4; // Less spacing between wrapped lines
            });
    
            y += 3; // Smaller spacing after sub-sections
        }
    });

    addFooter();
}

export default generateEmploymentContractPDF;
