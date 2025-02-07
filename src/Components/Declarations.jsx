import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


function Declarations({ declarationsInfo, setDeclarationsInfo, validatFormData }) {
  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
  

    setDeclarationsInfo((prevState) => ({
      ...prevState,
      [id]: checked, // Update the specific checkbox state

    })
  );

};

useEffect(()=>{
  validatFormData();
},[declarationsInfo])



  return (
    <>
      <div className="my-12 w-[80%] mx-auto">
        <h2 className="text-xl font-semibold my-4 underline">Declarations</h2>
        <form action="" className="space-y-2 sm:text-sm lg:text-base">
          <div className="space-y-4 md:space-y-6 xl:space-y-8">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="nda"
                checked={declarationsInfo.nda}
                onChange={handleCheckboxChange}
              />
             <Link to="/nda"> <label htmlFor="nda" className='cursor-pointer hover:text-blue-500 ' >Non Disclosure Agreement</label></Link>
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
              <label htmlFor="codeOfConduct" className='cursor-pointer hover:text-blue-500'><Link to="/codeofconduct">Code Of Conduct</Link></label>
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
              <label htmlFor="antiBriberyPolicy" className='cursor-pointer hover:text-blue-500'><Link to="/antibribary">Anti-Bribery Policy</Link></label>
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
          <h4 className='text-sm '>Note:Please send all the required documents along with this downloaded employment form to the official <Link href="mailto:hr@paperrabbit.world" className="text-blue-700"> email-id</Link></h4>
        </form>
      </div>
    </>
  );
}

export default Declarations;
