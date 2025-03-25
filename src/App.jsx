import "./App.css";
import { useState } from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import SideBar from "./Components/SideBar";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import generateTable from "./utility/generateTable";
import Routing from "./Components/Routing";
import DataProtectionAgreement from "./utility/DataProtectionAgreement.js"
import generateConflictOfInterestPDF from "./utility/conflictOfInterestAgreement.js";
import generateAntiBriberyPolicyPDF from   "./utility/generateAntiBribaryAgreement" ;
import generateCompanyPolicyPDF from   "./utility/generateCompanyPolicy.js" ;
import generateNdaAgreement from   "./utility/generateNdaAgreement.js" ;
import generateEmployeContract from "./utility/generateEmployeContract.js";
import generateCodeOfConductPDF from  "./utility/generateCodeOfConduct.js";
import SendEmailWithPDF from "./utility/SendEmailWithPDF.js";

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
  const generatePDF = async() => {
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
  
    let isFirstTable = true; // Track if it's the first table

    const generateTableWithCheck = (title, data) => {
      if (Object.keys(data).length > 0) {  // Ensure section has data before adding
        generateTable(title, data, doc, isFirstTable);
        isFirstTable = false; // Set to false after first table is added
      }
    };
  
    generateTableWithCheck("Personal Information", formData.personalInfo, doc);
    generateTableWithCheck("Contact Information", formData.contactInfo, doc);
    generateTableWithCheck("Education Information", formData.educationInfo, doc);
    generateTableWithCheck("Health Information", formData.healthInfo, doc);
    generateTableWithCheck("Bank Information", formData.bankInfo, doc);
    generateTableWithCheck("Documents", formData.uploadDocsInfo, doc);
    generateTableWithCheck("Declarations", formData.declarations, doc);
    generateTableWithCheck("Employee Details", formData.employmentDetails, doc);
  
  DataProtectionAgreement(doc);
  generateConflictOfInterestPDF(doc);
  generateAntiBriberyPolicyPDF(doc);
  generateCompanyPolicyPDF(doc);
  generateNdaAgreement(doc);
  generateEmployeContract(doc);
  generateCodeOfConductPDF(doc);
    doc.save("employment_form.pdf");

    // const pdfBlob = doc.output("blob");

    // const pdfFile = new File([pdfBlob], "document.pdf", { type: "application/pdf" });
    // // PDF ko email me send karo
    // await SendEmailWithPDF(pdfFile);
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
