import React from 'react';

function Declarations({ declarationsInfo, setDeclarationsInfo }) {
  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    
    setDeclarationsInfo({
      ...declarationsInfo,
      [id]: checked,
    });
  };

  return (
    <>
      <div className="my-4 w-[80%] mx-auto">
        <h2 className="text-xl font-semibold my-4">Declarations</h2>
        <form action="" className="space-y-2">
          <div className="flex flex-wrap gap-4">
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
                id="employment-agreement"
                checked={declarationsInfo.employmentAgreement}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="employment-agreement">Employment Agreement</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="code-of-conduct"
                checked={declarationsInfo.codeOfConduct}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="code-of-conduct">Code Of Conduct</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="company-policies"
                checked={declarationsInfo.companyPolicies}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="company-policies">Company Policies</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="conflict-of-interest"
                checked={declarationsInfo.conflictOfInterest}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="conflict-of-interest">Conflict of Interest</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="anti-bribery-policy"
                checked={declarationsInfo.antiBriberyPolicy}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="anti-bribery-policy">Anti-Bribery Policy</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="data-protection-agreement"
                checked={declarationsInfo.dataProtectionAgreement}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="data-protection-agreement">Data Protection Agreement</label>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Declarations;
