import React from 'react';

function Health({ healthInfo, setHealthInfo }) {
  // Function to handle input change and update the state
  const handleChange = (e) => {
    const { id, value } = e.target;
    setHealthInfo(prevState => ({
      ...prevState,
      [id]: value,  // Update the specific field by id
    }));
  };

  return (
    <>
      <div className="my-4 w-[80%] mx-auto">
        <h2 className="font-semibold text-xl my-2">Health Information:</h2>
        <form className="space-y-4">
          
          {/* First Row: Blood Group and Allergies */}
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px] flex flex-col gap-1">
              <label htmlFor="bloodgrp" className="text-sm font-medium">Blood Group</label>
              <input
                type="text"
                id="bloodgrp"
                value={healthInfo.bloodgrp || ''}
                onChange={handleChange}
                className="px-2 py-1 rounded-lg outline-none w-full"
              />
            </div>
            <div className="flex-1 min-w-[200px] flex flex-col gap-1">
              <label htmlFor="allergies" className="text-sm font-medium">Allergies</label>
              <input
                type="text"
                id="allergies"
                value={healthInfo.allergies || ''}
                onChange={handleChange}
                className="px-2 py-1 rounded-lg outline-none w-full"
              />
            </div>
          </div>

          {/* Second Row: Medical Conditions and Medical Insurance */}
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px] flex flex-col gap-1">
              <label htmlFor="medicalConditions" className="text-sm font-medium">Medical Conditions</label>
              <input
                type="text"
                id="medicalConditions"
                value={healthInfo.medicalConditions || ''}
                onChange={handleChange}
                className="px-2 py-1 rounded-lg outline-none w-full"
              />
            </div>
            <div className="flex-1 min-w-[200px] flex flex-col gap-1">
              <label htmlFor="medicalInsurance" className="text-sm font-medium">Medical Insurance</label>
              <input
                type="text"
                id="medicalInsurance"
                value={healthInfo.medicalInsurance || ''}
                onChange={handleChange}
                className="px-2 py-1 rounded-lg outline-none w-full"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Health;
