import React from "react";

function Personal({ personalInfo, setPersonalInfo }) {
  const handleChange = (e) => {
    const { id, value, type, name, checked } = e.target;

    if (type === 'checkbox') {
      setPersonalInfo((prev) => ({
        ...prev,
        DependentDetails: {
          ...prev.DependentDetails,
          [name]: checked, // Update dependent details based on the checkbox state
        },
      }));

    }
    else if (type === 'radio') {
      setPersonalInfo((prev) => ({
        ...prev,
        Gender: value, // This will update the Gender field correctly
      }));
    }
    else if (type === 'select-one' || type === 'date') {
      setPersonalInfo((prev) => ({
        ...prev,
        [id]: value, // Update basic field values
      }));
    } else if (type === 'number' && id === 'Children') {
      const childrenValue = value ? parseInt(value, 10) : 0; // Convert empty string to 0
      setPersonalInfo((prev) => ({
        ...prev,
        DependentDetails: {
          ...prev.DependentDetails,
          children: childrenValue, // Update children field with number
        },
      }));

    } else {
      setPersonalInfo((prev) => ({
        ...prev,
        [id]: value, // For text input fields
      }));
    }
  };

  return (
    <>
      <div className="w-[80%] mx-auto">
        <h2 className="text-xl text-left font-semibold underline py-6">Personal Details:</h2>
        <form className="space-y-2 mx-auto">
          {/* First Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1">
              <label htmlFor="First_Name" className="text-sm font-medium">First Name</label>
              <input
                type="text"
                id="First_Name"
                className="px-2 py-1 outline-none rounded-lg w-full"
                value={personalInfo.First_Name}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="Last_Name" className="text-sm font-medium">Last Name</label>
              <input
                type="text"
                id="Last_Name"
                className="px-2 py-1 outline-none rounded-lg w-full"
                value={personalInfo.Last_Name}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-wrap gap-6 justify-between">
            {/* Date of Birth */}
            <div className="flex-1 min-w-[200px] flex flex-col gap-1">
              <label htmlFor="DOB" className="text-sm font-medium">Date of Birth</label>
              <input
                type="date"
                id="DOB"
                className="px-2 py-1 outline-none rounded-lg w-full"
                value={personalInfo.DOB}
                onChange={handleChange}
              />
            </div>

            {/* Gender */}
            <div className="flex-2 min-w-[100px] flex flex-col gap-1">
              <label htmlFor="gender" className="text-sm font-medium">Gender</label>
              <div className="flex gap-4 items-center">
                <div className="space-x-2">
                  <input
                    type="radio"
                    id="Male"
                    name="Gender"
                    value="male"
                    checked={personalInfo.Gender === "male"}
                    onChange={handleChange}
                  />
                  <label htmlFor="Male" className="text-sm">Male</label>
                </div>
                <div className="space-x-2">
                  <input
                    type="radio"
                    id="Female"
                    name="Gender"
                    value="female"
                    checked={personalInfo.Gender === "female"}
                    onChange={handleChange}
                  />
                  <label htmlFor="Female" className="text-sm">Female</label>
                </div>
              </div>
            </div>

            {/* Marital Status */}
            <div className="flex-1 min-w-[200px] flex flex-col gap-1">
              <label htmlFor="MaritalStatus" className="text-sm font-medium">Marital Status</label>
              <select
                id="MaritalStatus"
                className="px-2 py-1 outline-none rounded-lg w-full"
                value={personalInfo.MaritalStatus}
                onChange={handleChange}
              >
                <option value="select">--select--</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
                <option value="widow">Widow</option>
              </select>
            </div>
          </div>

          {/* Third Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1">
              <label htmlFor="Nationality" className="text-sm font-medium">Nationality</label>
              <select
                id="Nationality"
                className="px-2 py-1 rounded-lg w-full"
                value={personalInfo.Nationality}
                onChange={handleChange}
              >
                <option value="">-- select --</option>
                <option value="Afghanistan">Afghanistan</option>
                <option value="India">India</option>
                <option value="United States">United States</option>
                <option value="Zimbabwe">Zimbabwe</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="Pan" className="text-sm font-medium">Pan no.</label>
              <input
                type="text"
                id="Pan"
                className="px-2 py-1 outline-none rounded-lg w-full"
                value={personalInfo.Pan}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Fourth Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1">
              <label htmlFor="Aadhar" className="text-sm font-medium">Aadhar no.</label>
              <input
                type="text"
                id="Aadhar"
                className="px-2 py-1 outline-none rounded-lg w-full"
                value={personalInfo.Aadhar}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="Passport" className="text-sm font-medium">Passport no.</label>
              <input
                type="text"
                id="Passport"
                className="px-2 py-1 outline-none rounded-lg w-full"
                value={personalInfo.Passport}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Fifth Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1">
              <label htmlFor="FatherName" className="text-sm font-medium">Father's Name</label>
              <input
                type="text"
                id="FatherName"
                className="px-2 py-1 outline-none rounded-lg w-full"
                value={personalInfo.FatherName}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="MotherName" className="text-sm font-medium">Mother's Name</label>
              <input
                type="text"
                id="MotherName"
                className="px-2 py-1 outline-none rounded-lg w-full"
                value={personalInfo.MotherName}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Sixth Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1">
              <label htmlFor="SpouseName" className="text-sm font-medium">Spouse's Name</label>
              <input
                type="text"
                id="SpouseName"
                className="px-2 py-1 outline-none rounded-lg w-full"
                value={personalInfo.SpouseName}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="DependentDetails" className="text-sm font-medium">Dependent Details</label>
              <div className="flex gap-4 flex-wrap">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="Father"
                    name="father"
                    checked={personalInfo.DependentDetails.father || false}
                    onChange={handleChange}
                  />
                  <label htmlFor="Father" className="text-sm">Father</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="Mother"
                    name="mother"
                    checked={personalInfo.DependentDetails.mother || false}
                    onChange={handleChange}
                  />
                  <label htmlFor="Mother" className="text-sm">Mother</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="Wife"
                    name="wife"
                    checked={personalInfo.DependentDetails.wife || false}
                    onChange={handleChange}
                  />
                  <label htmlFor="Wife" className="text-sm">Wife</label>
                </div>
                <div className="flex items-center space-x-2">
                  <label htmlFor="children" className="text-sm">Children</label>
                  <input
                    type="number"
                    id="Children"
                    className=" rounded-lg outline-none px-1 text-center"
                    min="1"
                    max="5"
                    value={personalInfo.DependentDetails.children || ""}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Personal;
