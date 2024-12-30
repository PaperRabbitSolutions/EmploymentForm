function UploadDocs({ uploadDocsInfo, setUploadDocsInfo }) {
    // Function to handle checkbox changes
    const handleCheckboxChange = (e) => {
      const { id, checked } = e.target;
      setUploadDocsInfo({
        ...uploadDocsInfo,
        [id]: checked, // Dynamically update the specific checkbox value
      });
    };
  
    return (
      <>
        <div className="my-4 w-[80%] mx-auto sm:text-sm lg:text-base">
          <h2 className="font-semibold text-xl my-4">Document Submission</h2>
  
          <form className="space-y-2">
            {/* Grid Layout for two rows */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="photo"
                  checked={uploadDocsInfo.photo}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="photo">Passport Size Photo</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="panCard"
                  checked={uploadDocsInfo.panCard}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="panCard">PAN Card Photo</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="resume"
                  checked={uploadDocsInfo.resume}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="resume">Resume</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="voterId"
                  checked={uploadDocsInfo.voterId}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="voterId">Voter ID</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="aadhaar"
                  checked={uploadDocsInfo.aadhaar}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="aadhaar">Aadhaar Card Photo (of both sides)</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="educationalCertificates"
                  checked={uploadDocsInfo.educationalCertificates}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="educationalCertificates">Educational Certificates</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="previousEmploymentCertificate"
                  checked={uploadDocsInfo.previousEmploymentCertificate}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="previousEmploymentCertificate">Previous Employment Certificate</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="passbook"
                  checked={uploadDocsInfo.passbook}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="passbook">Bank Passbook</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="relievingLetter"
                  checked={uploadDocsInfo.relievingLetter}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="relievingLetter">Relieving Letter from previous office</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="payslip"
                  checked={uploadDocsInfo.payslip}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="payslip">Last Pay Slip</label>
              </div>
            </div>
            <p className="text-sm w-full text-slate-700">
              ** Note: All the documents mentioned here should be sent to the official 
              <a href="mailto:hr@paperrabbit.world" className="text-blue-700"> email-id</a>
            </p>
          </form>
        </div>
      </>
    );
  }
  
  export default UploadDocs;
  