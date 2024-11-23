import React from 'react';

function Health({ healthInfo, setHealthInfo }) {
  // Function to handle health-related input changes
  const handleHealthChange = (e) => {
    const { id, value } = e.target;
    setHealthInfo(prevState => ({
      ...prevState,
      [id]: value,  // Update the specific field by id for healthInfo
    }));
  };

  // Function to handle emergency contact input changes
  const handleEmergencyContactChange = (e) => {
    const { id, value } = e.target;
    setHealthInfo(prevState => ({
      ...prevState,
      EmergencyContact: {
        ...prevState.EmergencyContact,
        [id]: value,  // Update the specific field for EmergencyContact
      },
    }));
  };

  return (
    <>
      <div className="my-4 w-[80%] mx-auto">
        <h2 className="font-semibold text-xl my-2 underline">Health Information:</h2>
        <form className="space-y-4">
          {/* First Row: Blood Group and Allergies */}
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px] flex flex-col gap-1">
              <label htmlFor="bloodGroup" className="text-sm font-medium">Blood Group</label>
              <input
                type="text"
                id="bloodGroup"  // Ensure the id matches the property in state
                value={healthInfo.bloodGroup || ''}
                onChange={handleHealthChange}
                className="px-2 py-1 rounded-lg outline-none w-full"
              />
            </div>
            <div className="flex-1 min-w-[200px] flex flex-col gap-1">
              <label htmlFor="allergies" className="text-sm font-medium">Allergies</label>
              <input
                type="text"
                id="allergies"
                value={healthInfo.allergies || ''}
                onChange={handleHealthChange}
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
                onChange={handleHealthChange}
                className="px-2 py-1 rounded-lg outline-none w-full"
              />
            </div>
            <div className="flex-1 min-w-[200px] flex flex-col gap-1">
              <label htmlFor="medicalInsurance" className="text-sm font-medium">Medical Insurance</label>
              <input
                type="text"
                id="medicalInsurance"
                value={healthInfo.medicalInsurance || ''}
                onChange={handleHealthChange}
                className="px-2 py-1 rounded-lg outline-none w-full"
              />
            </div>
          </div>
        </form>
      </div>

      {/* Emergency Contact Details Section */}
      <div className="my-4 w-[80%] mx-auto">
        <h2 className="font-semibold underline my-4">Emergency Contact Details:</h2>
        <form className="space-y-2">
          {/* Name and Relationship on the same line */}
          <div className="flex flex-wrap gap-6">
            <div className="flex-1 min-w-[200px] flex flex-col gap-1">
              <label htmlFor="Name" className="text-sm font-medium">Name</label>
              <input
                type="text"
                id="Name"  // Ensure this matches the state property name
                value={healthInfo.EmergencyContact.Name || ''}
                onChange={handleEmergencyContactChange}
                className="px-2 py-1 rounded-lg outline-none w-full"
              />
            </div>
            <div className="flex-1 min-w-[200px] flex flex-col gap-1">
              <label htmlFor="Relationship" className="text-sm font-medium">Relationship</label>
              <input
                type="text"
                id="Relationship"  // Ensure this matches the state property name
                value={healthInfo.EmergencyContact.Relationship || ''}
                onChange={handleEmergencyContactChange}
                className="px-2 py-1 rounded-lg outline-none w-full"
              />
            </div>
          </div>

          {/* Mobile and Address on the same line */}
          <div className="flex flex-wrap gap-6">
            <div className="flex-1 min-w-[200px] flex flex-col gap-1">
              <label htmlFor="Mobile" className="text-sm font-medium">Mobile No.</label>
              <input
                type="text"
                id="Mobile"  // Ensure this matches the state property name
                value={healthInfo.EmergencyContact.Mobile || ''}
                onChange={handleEmergencyContactChange}
                className="px-2 py-1 rounded-lg outline-none w-full"
              />
            </div>
            <div className="flex-1 min-w-[200px] flex flex-col gap-1">
              <label htmlFor="Address" className="text-sm font-medium">Address</label>
              <input
                type="text"
                id="Address"  // Ensure this matches the state property name
                value={healthInfo.EmergencyContact.Address || ''}
                onChange={handleEmergencyContactChange}
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
