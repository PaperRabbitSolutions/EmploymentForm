import React from 'react';

function Declarations({ declarationsInfo, setDeclarationsInfo }) {
  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
  

    setDeclarationsInfo((prevState) => ({
      ...prevState,
      [id]: checked, // Update the specific checkbox state
    }));
  };
  
  

  return (
    <>
      <div className="my-4 w-[80%] mx-auto">
        <h2 className="text-xl font-semibold my-4 underline">Declarations</h2>
        <form action="" className="space-y-2">
          <div className="flex flex-wrap gap-16">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="nda"
                checked={declarationsInfo.nda}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="nda">Non Disclosure Agreement</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="employmentAgreement"
                checked={declarationsInfo.employmentAgreement}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="employmentAgreement">Employment Agreement</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="codeOfConduct"
                checked={declarationsInfo.codeOfConduct}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="codeOfConduct">Code Of Conduct</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="companyPolicies"
                checked={declarationsInfo.companyPolicies}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="companyPolicies">Company Policies</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="conflictOfInterest"
                checked={declarationsInfo.conflictOfInterest}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="conflictOfInterest">Conflict of Interest</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="antiBriberyPolicy"
                checked={declarationsInfo.antiBriberyPolicy}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="antiBriberyPolicy">Anti-Bribery Policy</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="dataProtectionAgreement"
                checked={declarationsInfo.dataProtectionAgreement}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="dataProtectionAgreement">Data Protection Agreement</label>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Declarations;
