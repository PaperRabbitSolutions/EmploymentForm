import './App.css';
import Contact from './Components/Contact';
import Personal from './Components/Personal';
import Education from './Components/Education';
import Health from './Components/Health';
import Bank from './Components/Bank';
import Upload from './Components/UploadDocs';
import Declarations from './Components/Declarations';
import Office from './Components/OfficeUse';
import { GiBank, GiBookshelf } from "react-icons/gi";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { MdHealthAndSafety, MdDocumentScanner } from "react-icons/md";
import { FaFileSignature } from "react-icons/fa6";
import { Route, Routes, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { jsPDF } from "jspdf";
import "jspdf-autotable";  // Importing the autoTable plugin

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const formRoutes = [
    '/',
    '/contact',
    '/education',
    '/health',
    '/bank',
    '/upload',
    '/office',
    '/declarations',
  ];

  const currentIndex = formRoutes.indexOf(location.pathname);

  const goToNext = () => {
    if (currentIndex < formRoutes.length - 1) {
      navigate(formRoutes[currentIndex + 1]);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      navigate(formRoutes[currentIndex - 1]);
    }
  };

  const isLastPage = currentIndex === formRoutes.length - 1;

  // Function to handle form submission and generate PDF
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(12);

    // Collect all form data
    const formData = {
      personalInfo: {
        name: document.getElementById("name")?.value || '',
        dob: document.getElementById("dob")?.value || '',
        gender: document.querySelector('input[name="gender"]:checked')?.value || '',
        maritalStatus: document.querySelector('input[name="maritalStatus"]:checked')?.value || '',
        nationality: document.getElementById("nationality")?.value || '',
      },
      contactInfo: {
        phone: document.getElementById("phone")?.value || '',
        email: document.getElementById("email")?.value || '',
        address: document.getElementById("address")?.value || '',
      },
      educationInfo: {
        highestQualification: document.getElementById("qualification")?.value || '',
        college: document.getElementById("college")?.value || '',
      },
      healthInfo: {
        medicalHistory: document.getElementById("medicalHistory")?.value || '',
        allergies: document.getElementById("allergies")?.value || '',
      },
      bankInfo: {
        bankName: document.getElementById("bank")?.value || '',
        accountNumber: document.getElementById("accountno")?.value || '',
        ifscCode: document.getElementById("IFSC")?.value || '',
      },
      declarations: {
        nda: document.getElementById("nda")?.checked ? 'Yes' : 'No',
        employmentAgreement: document.getElementById("employment-agreement")?.checked ? 'Yes' : 'No',
        codeOfConduct: document.getElementById("code-of-conduct")?.checked ? 'Yes' : 'No',
        companyPolicies: document.getElementById("company-policies")?.checked ? 'Yes' : 'No',
        conflictOfInterest: document.getElementById("conflict-of-interest")?.checked ? 'Yes' : 'No',
        antiBriberyPolicy: document.getElementById("anti-bribery-policy")?.checked ? 'Yes' : 'No',
        dataProtectionAgreement: document.getElementById("data-protection-agreement")?.checked ? 'Yes' : 'No',
      },
    };

    // Adding form data to PDF with autoTable
    doc.text('Employment Form Details:', 10, 10);

    let y = 20; // Starting Y position for text in the PDF

    // Function to generate tables for each section
    const generateTable = (sectionTitle, sectionData) => {
      // Set the section title
      doc.setFontSize(14);
      doc.text(sectionTitle, 10, y);
      y += 10;

      // Prepare the columns and rows for the table
      const columns = ['Field', 'Value'];
      const rows = Object.entries(sectionData).map(([field, value]) => [field, value]);

      // Generate the table using autoTable
      doc.autoTable({
        startY: y,
        head: [columns],
        body: rows,
        theme: 'striped',
        headStyles: { fillColor: [0, 0, 255], textColor: [255, 255, 255] },
        bodyStyles: { fillColor: [240, 240, 240], textColor: [0, 0, 0] },
        margin: { top: 10, left: 10, right: 10 },
      });

      // Update the Y position after the table for the next section
      y = doc.lastAutoTable.finalY + 10;
    };

    // Generate tables for all sections
    generateTable('Personal Information', formData.personalInfo);
    generateTable('Contact Information', formData.contactInfo);
    generateTable('Education Information', formData.educationInfo);
    generateTable('Health Information', formData.healthInfo);
    generateTable('Bank Information', formData.bankInfo);
    generateTable('Declarations', formData.declarations);

    // Save the PDF
    doc.save("employment_form.pdf");
  };

  return (
    <>
      <div className='flex flex-col w-full min-h-screen py-10 bg-blue-100'>
        <h2 className='text-2xl text-center w-full font-bold underline my-10'>Employment Form</h2>
        <div className='max-w-[1200px] w-full mx-auto flex flex-col justify-center items-center'>
          <Routes>
            <Route path='/' element={<Personal />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/education' element={<Education />} />
            <Route path='/health' element={<Health />} />
            <Route path='/bank' element={<Bank />} />
            <Route path='/upload' element={<Upload />} />
            <Route path='/office' element={<Office />} />
            <Route path='/declarations' element={<Declarations />} />
          </Routes>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between w-[80%] md:w-[70%] lg:w-[60%] mt-4 gap-4">
            <button
              onClick={goToPrevious}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
              disabled={currentIndex === 0}
            >
              Previous
            </button>

            {isLastPage ? (
              <button
                onClick={generatePDF} // Call the generatePDF function
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                Submit
              </button>
            ) : (
              <button
                onClick={goToNext}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Next
              </button>
            )}
          </div>
        </div>

        {/* Sidebar with icons */}
        <div className='absolute top-1/4 right-[4%] md:right-[4%] lg:right-[8%] flex flex-col gap-10 text-slate-600'>
          <span className='text-base md:text-xl lg:text-3xl'>
            <NavLink to="/">
              <FaUser />
            </NavLink>
          </span>
          <span className='text-base md:text-xl lg:text-3xl'>
            <NavLink to="/contact">
              <FaPhoneAlt />
            </NavLink>
          </span>

          <span className='text-base md:text-xl lg:text-3xl'>
            <NavLink to="/education">
              <GiBookshelf />
            </NavLink>
          </span>

          <span className='text-base md:text-xl lg:text-3xl'>
            <NavLink to="/health">
              <MdHealthAndSafety />
            </NavLink>
          </span>

          <span className='text-base md:text-xl lg:text-3xl'>
            <NavLink to="/bank">
              <GiBank />
            </NavLink>
          </span>

          <span className='text-base md:text-xl lg:text-3xl'>
            <NavLink to="/upload">
              <MdDocumentScanner />
            </NavLink>
          </span>

          <span className='text-base md:text-xl lg:text-3xl'>
            <NavLink to="/declarations">
              <FaFileSignature />
            </NavLink>
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
