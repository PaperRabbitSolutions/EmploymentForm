import "./App.css";
import Contact from "./Components/Contact";
import Personal from "./Components/Personal";
import Education from "./Components/Education";
import Health from "./Components/Health";
import Bank from "./Components/Bank";
import Upload from "./Components/uploadDocs";
import Declarations from "./Components/Declarations";
import Office from "./Components/OfficeUse";
// import Personal from "./Personal";
import logo from "../src/assets/Logo.svg";
import { useState } from "react";

import {
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { jsPDF } from "jspdf";
import "jspdf-autotable"; // Importing the autoTable plugin
import Nda from "./Pages/Nda";
import AntiBribery from "./Pages/AntiBribary";
import CodeOfConduct from "./Pages/CodeOfConduct";
import Agreements from "./Components/Agreements";
import SideBar from "./Components/SideBar";
import Header from "./Components/Header";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    First_Name: "",
    Last_Name: "",
    DOB: "",
    Gender: "",
    MaritalStatus: "",
    Nationality: "",
    Pan: "",
    Aadhar: "",
    Passport: "",
    FatherName: "",
    MotherName: "",
    SpouseName: "",
    DependentDetails: {
      father: false,
      mother: false,
      wife: false,
      children: "",
    },
  });

  const [employmentDetails, setEmploymentDetails] = useState({
    empId: "",
    department: "",
    designation: "",
    dateOfJoining: "",
    workLocation: "",
    reportingManager: "",
    employmentType: "full-time",
    probationPeriod: "3",
    noticePeriod: "45",
    workHours: "",
    jobDescription: "",
  });

  const [contactInfo, setContactInfo] = useState({
    Permanent_Address: "",
    Current_Address: "",
    Mobile: "",
    Alternate_No: "",
    Email: "",
    Linkedin: "",
    Github: "",
    Instagram: "",
    Behance: "",
    Portfolio: "",
    Others: "",
  });

  const [educationInfo, setEducationInfo] = useState({
    qualification: "",
    university: "",
    yearOfPassing: "",
    certifications: "",
    techDomain: "",
    skills: [],
  });

  const [healthInfo, setHealthInfo] = useState({
    bloodGroup: "",
    allergies: "",
    medicalConditions: "",
    medicalInsurance: "",
    EmergencyContact: {
      Name: "",
      Relationship: "",
      Mobile: "",
      Address: "",
    },
  });

  const [bankInfo, setBankInfo] = useState({
    bank: "",
    branch: "",
    accountno: "",
    IFSC: "",
    pan: "",
    taxregime: "",
    PF: "",
    esi: "",
    universal: "",
    gratuity: "",
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

  const [isDisable, setIsDisable] = useState(true);

  const formRoutes = [
    "/",
    "/contact",
    "/education",
    "/health",
    "/bank",
    "/upload",
    "/agreements",
    "/declarations",
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

  //** validation */
  
  const validatFormData = () => {
    let errors = {};  // Object to store error messages
    // Personal Details
    if (personalInfo.First_Name.length < 1) {
      errors.firstName = "First name is required.";
    }
    if (personalInfo.Last_Name.length < 1) {
      errors.lastName = "Last name is required.";
    }
    if (personalInfo.Aadhar.length !== 12) {
      errors.aadhar = "Aadhar number must be exactly 12 digits.";
    }
    if (personalInfo.Pan.length !== 10) {
      errors.pan = "PAN number must be exactly 10 characters.";
    }
    if (personalInfo.FatherName.length < 1) {
      errors.fatherName = "Father's name is required.";
    }
    if (personalInfo.MotherName.length < 1) {
      errors.motherName = "Mother's name is required.";
    }
    if (!personalInfo.DOB) {
      errors.dob = "Date of birth is required.";
    }
    if (!personalInfo.Gender) {
      errors.gender = "Gender is required.";
    }
    if (!personalInfo.Nationality) {
      errors.nationality = "Nationality is required.";
    }
    if (!personalInfo.MaritalStatus) {
      errors.maritalStatus = "Marital status is required.";
    }
  
    // Contact Info
    if (contactInfo.Current_Address.length < 1) {
      errors.currentAddress = "Current address is required.";
    }
    if (contactInfo.Permanent_Address.length < 1) {
      errors.permanentAddress = "Permanent address is required.";
    }
    if (contactInfo.Mobile.length !== 10) {
      errors.mobile = "Mobile number must be 10 digits.";
    }
    if (contactInfo.Linkedin.length < 1) {
      errors.linkedin = "LinkedIn profile is required.";
    }
    if (contactInfo.Email.length < 1) {
      errors.email = "Email is required.";
    }
  
    // Education Info
    if (!educationInfo.yearOfPassing) {
      errors.yearOfPassing = "Year of passing is required.";
    }
    if (educationInfo.university.length < 1) {
      errors.university = "University is required.";
    }
    if (!educationInfo.techDomain) {
      errors.techDomain = "Technical domain is required.";
    }
    if (educationInfo.qualification.length < 1) {
      errors.qualification = "Qualification is required.";
    }
  
    // Health Info
    if (healthInfo.EmergencyContact.Name.length < 1) {
      errors.emergencyName = "Emergency contact name is required.";
    }
    if (healthInfo.EmergencyContact.Relationship.length < 1) {
      errors.emergencyRelationship = "Emergency contact relationship is required.";
    }
    if (healthInfo.EmergencyContact.Mobile.length !== 10) {
      errors.emergencyMobile = "Emergency contact mobile must be 10 digits.";
    }
    if (healthInfo.EmergencyContact.Address.length < 1) {
      errors.emergencyAddress = "Emergency contact address is required.";
    }
  
    // Declarations
    if (!declarationsInfo.nda) {
      errors.nda = "NDA declaration is required.";
    }
    if (!declarationsInfo.employmentAgreement) {
      errors.employmentAgreement = "Employment agreement declaration is required.";
    }
    if (!declarationsInfo.conflictOfInterest) {
      errors.conflictOfInterest = "Conflict of interest declaration is required.";
    }
    if (!declarationsInfo.antiBriberyPolicy) {
      errors.antiBriberyPolicy = "Anti-bribery policy declaration is required.";
    }
    if (!declarationsInfo.dataProtectionAgreement) {
      errors.dataProtectionAgreement = "Data protection agreement declaration is required.";
    }
    if (!declarationsInfo.codeOfConduct) {
      errors.codeOfConduct = "Code of conduct declaration is required.";
    }
  
    // Upload Documents
    if (!uploadDocsInfo.resume) {
      errors.resume = "Resume is required.";
    }
    if (!uploadDocsInfo.photo) {
      errors.photo = "Photo is required.";
    }
    if (!uploadDocsInfo.panCard) {
      errors.panCard = "PAN card is required.";
    }
    if (!uploadDocsInfo.aadhaar) {
      errors.aadhaar = "Aadhar card is required.";
    }
    if (!uploadDocsInfo.voterId) {
      errors.voterId = "Voter ID is required.";
    }
  
    // Bank Info
    if (bankInfo.bank.length < 1) {
      errors.bank = "Bank name is required.";
    }
    if (bankInfo.branch.length < 1) {
      errors.branch = "Branch name is required.";
    }
    if (bankInfo.accountno.length < 5) {
      errors.accountno = "Account number must be at least 5 digits.";
    }
    if (bankInfo.IFSC.length < 2) {
      errors.ifsc = "IFSC code is required.";
    }
    if (bankInfo.PF.length < 1) {
      errors.pf = "Provident Fund number is required.";
    }
  
    // If any error exists, return and display it
    if (Object.keys(errors).length > 0) {
        // Set the error object to be displayed in the UI
      setIsDisable(true);  // Disable the form submission if there are errors
      
      return;  // Exit function if validation fails
    }
  
    // If no errors, enable form submission
    setIsDisable(false);
    return true;  // Form is valid
  };
  

  const isLastPage = currentIndex === formRoutes.length - 1;

  // Function to handle form submission and generate PDF
  const generatePDF = () => {
    
if(isDisable)
{
  console.log(errors);
}
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
    doc.text("Employment Form Details:", 10, 10);

    let y = 20; // Starting Y position for text in the PDF

    // Function to generate tables for each section
    const generateTable = (sectionTitle, sectionData) => {
      doc.setFontSize(12);
      doc.setFont("helvetica", "bold");
      doc.text(sectionTitle, 12, y);
      y += 10;

      const columns = ["Field", "Details"];
      const rows = Object.entries(sectionData).map(([field, value]) => {
        // Check for boolean values and convert them to Yes/No
        if (typeof value === "boolean") {
          value = value ? "Yes" : "No";
        } else if (typeof value === "object" && value !== null) {
          value = Object.entries(value)
              .map(([key, value]) => `${key}:${value}`)
              .join(", ");
      }
     
        return [field, value];
      });

      doc.autoTable({
        startY: y,
        head: [columns],
        body: rows,
        theme: "striped",
        headStyles: {
          fillColor: [0, 0, 0], // Dark Blue for header
          textColor: [255, 255, 255], // White text
          fontSize: 12,
          font: "helvetica", // Font style for header
          fontStyle: "bold", // Bold header text
          halign: "center", // Header alignment
          valign: "middle", // Center vertically
        },
        bodyStyles: {
          fillColor: [240, 240, 240], // Light gray for body rows
          textColor: [0, 0, 0], // Black text
          fontSize: 10,
          font: "helvetica", // Font style for body rows
          halign: "left", // Align text to the left
          valign: "middle", // Center vertically
          lineWidth: 0.3, // Cell border thickness
          lineColor: [150, 150, 150], // Light gray borders
        },
        alternateRowStyles: {
          fillColor: [255, 255, 255], // White for alternate rows
        },
        margin: { top: 10, left: 10, right: 10 }, // Add margins for spacing
        styles: {
          cellPadding: 5, // Increase padding inside cells for better readability
          overflow: "linebreak", // Handle overflow text
          fontSize: 11, // Slightly smaller font for body rows
        },
        columnStyles: {
          0: { cellWidth: 50 }, // First column (Field) takes 30% width
          1: { cellWidth: 140 }, // Second column (Value) takes 70% width
        },
      });

      y = doc.lastAutoTable.finalY + 10;
    };

    generateTable("Personal Information", formData.personalInfo);
    generateTable("Contact Information", formData.contactInfo);
    generateTable("Education Information", formData.educationInfo);
    generateTable("Health Information", formData.healthInfo);
    generateTable("Bank Information", formData.bankInfo);
    generateTable("Documents", formData.uploadDocsInfo); 
    generateTable("Declarations", formData.declarations);
    generateTable("Employee Details", formData.employmentDetails);

    doc.save("employment_form.pdf");
  };

  return (
    <div className="flex flex-col w-full min-h-screen py-10 max-w-[1200px] mx-auto ">
      <Header/>
      <div className="max-w-[1200px] w-full mx-auto flex flex-col justify-center items-center">
        <Routes>
          <Route
            path="/"
            element={
              <Personal
                personalInfo={personalInfo}
                setPersonalInfo={setPersonalInfo}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <Contact
                contactInfo={contactInfo}
                setContactInfo={setContactInfo}
              />
            }
          />
          <Route
            path="/education"
            element={
              <Education
                educationInfo={educationInfo}
                setEducationInfo={setEducationInfo}
              />
            }
          />
          <Route
            path="/health"
            element={
              <Health healthInfo={healthInfo} setHealthInfo={setHealthInfo} />
            }
          />
          <Route
            path="/bank"
            element={<Bank bankInfo={bankInfo} setBankInfo={setBankInfo} />}
          />
          <Route
            path="/upload"
            element={
              <Upload
                uploadDocsInfo={uploadDocsInfo}
                setUploadDocsInfo={setUploadDocsInfo}
              />
            }
          />
          <Route path="/agreements" element={<Agreements/>}/>
         
          <Route path="/nda" element={<Nda/>}/>
          <Route path="/antibribary" element={<AntiBribery/>}/>
          <Route path="/codeofconduct" element={<CodeOfConduct/>}/>
          <Route path="/office" element={<Office />} />
          <Route
            path="/declarations"
            element={
              <Declarations
                declarationsInfo={declarationsInfo}
                setDeclarationsInfo={setDeclarationsInfo}
                validatFormData={validatFormData}
              />
            }
          />
        </Routes>

        <div className="w-full max-w-[900px] bg-white px-10 py-10 bottom-0 fixed flex items-center justify-between">
  {/* Previous Button */}
  <button
    onClick={goToPrevious}
    className={`px-4 py-2 rounded-lg ${currentIndex > 0 ? 'bg-gray-500 text-white hover:bg-gray-600' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
    disabled={currentIndex === 0}
  >
    Previous
  </button>

  {/* Next Button */}
  {currentIndex !== formRoutes.length - 1 ? (
    <button
      onClick={goToNext}
      className={`px-4 py-2 text-white rounded-lg ${currentIndex < formRoutes.length - 1 ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-300 cursor-not-allowed'}`}
      disabled={currentIndex === formRoutes.length - 1}
      title={currentIndex === formRoutes.length - 1 ? 'Cannot go next on the last page' : ''}
    >
      Next
    </button>
  ) : (
    <button
      onClick={generatePDF} // Call the generatePDF function
      className={`px-4 py-2 text-white rounded-lg ${isDisable ? 'bg-red-500 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}`}
      disabled={isDisable}
    >
      Submit
    </button>
  )}
</div>


      </div>

     <SideBar/>
      
    </div>
  );
}

export default App;
