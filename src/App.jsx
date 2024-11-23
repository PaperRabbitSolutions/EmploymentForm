import './App.css';
import Contact from './Components/Contact';
import Personal from './Components/Personal';
import Education from './Components/Education';
import Health from './Components/Health';
import Bank from './Components/Bank';
import Upload from './Components/uploadDocs';
import Declarations from './Components/Declarations';
import Office from './Components/OfficeUse';
import { GiBank, GiBookshelf } from "react-icons/gi";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { MdHealthAndSafety, MdDocumentScanner } from "react-icons/md";
import { useState } from 'react';
import { FaFileSignature } from "react-icons/fa6";
import { Route, Routes, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { jsPDF } from "jspdf";
import "jspdf-autotable";  // Importing the autoTable plugin

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    First_Name: '',
    Last_Name: '',
    DOB: '',
    Gender: '',
    MaritalStatus: '',
    Nationality: '',
    Pan: '',
    Aadhar: '',
    Passport: '',
    FatherName: '',
    MotherName: '',
    SpouseName: '',
    DependentDetails: {
      father: false,
      mother: false,
      wife: false,
      children: "",
    }
  });

  const [employmentDetails, setEmploymentDetails] = useState({
    empId: '',
    department: '',
    designation: '',
    dateOfJoining: '',
    workLocation: '',
    reportingManager: '',
    employmentType: 'full-time',
    probationPeriod: '3',
    noticePeriod: '45',
    workHours: '',
    jobDescription: '',
  });

  const [contactInfo, setContactInfo] = useState({
    Permanent_Address: '',
    Current_Address: '',
    Mobile: '',
    Alternate_No: '',
    Email: '',
    Linkedin:'',
    Github:'',
    Instagram:'',
    Behance:'',
    Portfolio:'',
    Others:'',
  });

  const [educationInfo, setEducationInfo] = useState({
    qualification: '',
    university: '',
    yearOfPassing: '',
    certifications: '',
    techDomain: '',
    skills: [], 
  });

  const [healthInfo, setHealthInfo] = useState({
    bloodGroup: '',
    allergies: '',
    medicalConditions: '',
    medicalInsurance: '',
    EmergencyContact: {
      Name: '',
      Relationship: '',
      Mobile: '',
      Address: '',
    },
  });

  const [bankInfo, setBankInfo] = useState({
    bank: '',           
    branch: '',        
    accountno: '',     
    IFSC: '',           
    pan: '',            
    taxregime: '',      
    PF: '',             
    esi: '',            
    universal: '',      
    gratuity: '',      
  });

  const [uploadDocsInfo, setUploadDocsInfo] = useState({
    photo: false,
    panCard: false,
    resume: false,
    voterId: false,
    aadhaar: false,
    educationalCertificates: false,
    previousEmploymentCertificate: false,
    passbook: false,
    relievingLetter: false,
    payslip: false,
  });

  const [declarationsInfo, setDeclarationsInfo] = useState({
    nda: false,
    employmentAgreement: false,
    codeOfConduct: false,
    companyPolicies: false,
    conflictOfInterest: false,
    antiBriberyPolicy: false,
    dataProtectionAgreement: false,
  });

  const navigate = useNavigate();
  const location = useLocation();

  const formRoutes = [
    '/',
    '/contact',
    '/education',
    '/health',
    '/bank',
    '/upload',
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

    // Collect all form data directly from state
    const formData = {
      personalInfo: personalInfo,
      contactInfo: contactInfo,
      educationInfo: educationInfo,
      healthInfo: healthInfo,
      bankInfo: bankInfo,
      uploadDocsInfo: uploadDocsInfo,
      declarations: declarationsInfo,
      employmentDetails: employmentDetails,
    };

    // Adding form data to PDF with autoTable
    doc.text('Employment Form Details:', 10, 10);

    let y = 20; // Starting Y position for text in the PDF

    // Function to generate tables for each section
    const generateTable = (sectionTitle, sectionData) => {
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text(sectionTitle, 10, y);
      y += 10;
    
      const columns = ['Field', 'Value'];
      const rows = Object.entries(sectionData).map(([field, value]) => {
        // Check for boolean values and convert them to Yes/No
        if (typeof value === 'boolean') {
          value = value ? 'Yes' : 'No';
        } else if (typeof value === 'object') {
          value = JSON.stringify(value); // If the value is an object, stringify it
        }
        return [field, value];
      });
    
      doc.autoTable({
        startY: y,
        head: [columns],
        body: rows,
        theme: 'striped',
        headStyles: {
          fillColor: [0, 56, 104], // Dark Blue for header
          textColor: [255, 255, 255], // White text
          fontSize: 12,
          font: 'helvetica', // Font style for header
          fontStyle: 'bold', // Bold header text
          halign: 'center', // Header alignment
          valign: 'middle', // Center vertically
        },
        bodyStyles: {
          fillColor: [240, 240, 240], // Light gray for body rows
          textColor: [0, 0, 0], // Black text
          fontSize: 10,
          font: 'helvetica', // Font style for body rows
          halign: 'left', // Align text to the left
          valign: 'middle', // Center vertically
          lineWidth: 0.3, // Cell border thickness
          lineColor: [150, 150, 150], // Light gray borders
        },
        alternateRowStyles: {
          fillColor: [255, 255, 255], // White for alternate rows
        },
        margin: { top: 10, left: 10, right: 10 }, // Add margins for spacing
        styles: {
          cellPadding: 5, // Increase padding inside cells for better readability
          overflow: 'linebreak', // Handle overflow text
          fontSize: 11, // Slightly smaller font for body rows
        },
        columnStyles: {
          0: { cellWidth: '30%' }, // First column (Field) takes 30% width
          1: { cellWidth: '70%' }, // Second column (Value) takes 70% width
        },
      });
    
      y = doc.lastAutoTable.finalY + 10;
    };
    

    generateTable('Personal Information', formData.personalInfo);
    generateTable('Contact Information', formData.contactInfo);
    generateTable('Education Information', formData.educationInfo);
    generateTable('Health Information', formData.healthInfo);
    generateTable('Bank Information', formData.bankInfo);
    generateTable('Documents', formData.uploadDocsInfo); // Now this works
    generateTable('Declarations', formData.declarations);
    generateTable('Employee Details', formData.employmentDetails);

    doc.save("employment_form.pdf");
  };

  return (
    <div className='flex flex-col w-full min-h-screen py-10 '>
      <h2 className='text-2xl text-center w-full font-bold underline my-10'>Employment Form</h2>
      <div className='max-w-[1200px] w-full mx-auto flex flex-col justify-center items-center'>
        <Routes>
          <Route path='/' element={<Personal personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />} />
          <Route path='/contact' element={<Contact contactInfo={contactInfo} setContactInfo={setContactInfo}/>} />
          <Route path='/education' element={<Education educationInfo={educationInfo} setEducationInfo={setEducationInfo}/>} />
          <Route path='/health' element={<Health healthInfo={healthInfo} setHealthInfo={setHealthInfo}/>} />
          <Route path='/bank' element={<Bank bankInfo={bankInfo} setBankInfo={setBankInfo}/>} />
          <Route path='/upload' element={<Upload uploadDocsInfo={uploadDocsInfo} setUploadDocsInfo={setUploadDocsInfo}/>} />
          <Route path='/office' element={<Office />} />
          <Route path='/declarations' element={<Declarations declarationsInfo={declarationsInfo} setDeclarationsInfo={setDeclarationsInfo}/>} />
        </Routes>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between w-[80%] md:w-[70%] lg:w-[60%] mt-4 gap-4">
          {/* Hide "Previous" button on the first page */}
          {currentIndex > 0 && (
            <button
              onClick={goToPrevious}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
            >
              Previous
            </button>
          )}

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
  );
}

export default App;
