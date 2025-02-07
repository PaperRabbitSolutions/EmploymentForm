import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from "./Contact";
import Personal from "./Personal";
import Education from "./Education";
import Health from "./Health";
import Bank from "./Bank";
import Upload from "./uploadDocs";
import Declarations from "./Declarations";
import Agreements from "./Agreements"
import Office from "./OfficeUse"


const Routing = ({personalInfo={personalInfo},
    setPersonalInfo={setPersonalInfo},
    contactInfo={contactInfo},
    setContactInfo={setContactInfo},
    educationInfo={educationInfo},
    setEducationInfo={setEducationInfo},
    healthInfo={healthInfo},
    setHealthInfo={setHealthInfo},
    bankInfo={bankInfo},
    setBankInfo={setBankInfo},
    uploadDocsInfo={uploadDocsInfo},
    setUploadDocsInfo={setUploadDocsInfo},
    declarationsInfo={declarationsInfo},
    setDeclarationsInfo={setDeclarationsInfo},
    validatFormData={validatFormData}}) => {
  return (
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
          <Route path="/agreements" element={<Agreements />} />

          
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
      
      </div>
  )
}

export default Routing