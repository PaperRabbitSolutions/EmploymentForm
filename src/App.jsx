import "./App.css";
import Contact from "./Components/Contact";
import Personal from "./Components/Personal";
import Education from "./Components/Education";
import Health from "./Components/Health";
import Bank from "./Components/Bank";
import Upload from "./Components/uploadDocs";
import Declarations from "./Components/Declarations";
import Office from "./Components/OfficeUse";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import Agreements from "./Components/Agreements";
import SideBar from "./Components/SideBar";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import generateTable from "./utility/generateTable";
import Routing from "./Components/Routing";
import DataProtectionAgreement from "./utility/DataProtectionAgreement.js"

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

  const [isDisable, setIsDisable] = useState(true);

  //** validation */

  const validatFormData = () => {
    let errors = {}; // Object to store error messages
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
      errors.emergencyRelationship =
        "Emergency contact relationship is required.";
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
      errors.employmentAgreement =
        "Employment agreement declaration is required.";
    }
    if (!declarationsInfo.conflictOfInterest) {
      errors.conflictOfInterest =
        "Conflict of interest declaration is required.";
    }
    if (!declarationsInfo.antiBriberyPolicy) {
      errors.antiBriberyPolicy = "Anti-bribery policy declaration is required.";
    }
    if (!declarationsInfo.dataProtectionAgreement) {
      errors.dataProtectionAgreement =
        "Data protection agreement declaration is required.";
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
      setIsDisable(true); // Disable the form submission if there are errors

      return; // Exit function if validation fails
    }
    // If no errors, enable form submission
    setIsDisable(false);
    return true; // Form is valid
  };

  // Function to handle form submission and generate PDF
  const generatePDF = () => {
    if (isDisable) {
      // Handle errors here if needed
      console.log(errors);
    }
  
    const doc = new jsPDF();
    doc.setFontSize(12);
  
    // Collect all form data directly from state
    const formData = {
      personalInfo,
      contactInfo,
      educationInfo,
      healthInfo,
      bankInfo,
      uploadDocsInfo,
      declarations: declarationsInfo,
      employmentDetails,
    };
  
    // Adding header image (if required) and footer image (if required)
    // doc.addImage(headerImage, 'JPEG', 10, 10, 180, 30); // Example
  
    // Generate tables for each section
    // doc.text("Employment Form Details:", 10, 10); // Title on the first page
  
    generateTable("Personal Information", formData.personalInfo, doc);
    generateTable("Contact Information", formData.contactInfo, doc);
    generateTable("Education Information", formData.educationInfo, doc);
    generateTable("Health Information", formData.healthInfo, doc);
    generateTable("Bank Information", formData.bankInfo, doc);
    generateTable("Documents", formData.uploadDocsInfo, doc);
    generateTable("Declarations", formData.declarations, doc);
    generateTable("Employee Details", formData.employmentDetails, doc);
  
    // Optionally, you can add footer image at the end
    // doc.addImage(footerImage, 'JPEG', 10, 270, 180, 20); // Example
  
    doc.save("employment_form.pdf");
  };
  
  return (
    <div className="flex flex-col w-full min-h-screen py-10 max-w-[1200px] mx-auto ">
      <Header />
      <SideBar />
      <Routing
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
        contactInfo={contactInfo}
        setContactInfo={setContactInfo}
        educationInfo={educationInfo}
        setEducationInfo={setEducationInfo}
        healthInfo={healthInfo}
        setHealthInfo={setHealthInfo}
        bankInfo={bankInfo}
        setBankInfo={setBankInfo}
        uploadDocsInfo={uploadDocsInfo}
        setUploadDocsInfo={setUploadDocsInfo}
        declarationsInfo={declarationsInfo}
        setDeclarationsInfo={setDeclarationsInfo}
        validatFormData={validatFormData}
        isDisable={isDisable}
      />
       <Navigation isDisable={isDisable} generatePDF={generatePDF} />
    </div>
  );
}

export default App;
