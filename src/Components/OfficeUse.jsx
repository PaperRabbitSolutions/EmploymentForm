import React from 'react';

function OfficeUse({ employmentDetails, setEmploymentDetails }) {
  // Function to handle form changes
  const handleChange = (e) => {
    const { id, value, type } = e.target;

    // Handle the change based on the input type
    if (type === 'select-one') {
      setEmploymentDetails({ [id]: value }); // Update the specific field
    } else {
      setEmploymentDetails({ [id]: value }); // Update the specific field for text inputs
    }
  };

  return (
    <>
      <div className="my-12 w-[80%] mx-auto sm:text-sm lg:text-base">
        <h2 className="py-2 text-xl font-semibold">Employment Details</h2>
        <form action="" className="space-y-2">
          {/* Using grid for two fields per row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1">
              <label htmlFor="emp-id">Employee Id:</label>
              <input
                type="text"
                id="emp-id"
                className="px-2 py-1 rounded-lg outline-none"
                value={employmentDetails.empId}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="department">Department</label>
              <input
                type="text"
                id="department"
                className="px-2 py-1 rounded-lg outline-none"
                value={employmentDetails.department}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1">
              <label htmlFor="designation">Designation</label>
              <input
                type="text"
                id="designation"
                className="px-2 py-1 rounded-lg outline-none"
                value={employmentDetails.designation}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="date-of-joining">Date Of Joining</label>
              <input
                type="date"
                id="date-of-joining"
                className="px-2 py-1 rounded-lg outline-none"
                value={employmentDetails.dateOfJoining}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1">
              <label htmlFor="work-location">Work Location</label>
              <input
                type="text"
                id="work-location"
                className="px-2 py-1 rounded-lg outline-none"
                value={employmentDetails.workLocation}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="reporting-manager">Reporting Manager</label>
              <input
                type="text"
                id="reporting-manager"
                className="px-2 py-1 rounded-lg outline-none"
                value={employmentDetails.reportingManager}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1">
              <label htmlFor="employment-type">Employment Type</label>
              <select
                id="employment-type"
                className="px-2 py-1 rounded-lg outline-none"
                value={employmentDetails.employmentType}
                onChange={handleChange}
              >
                <option value="internship">Internship</option>
                <option value="contract">Contract</option>
                <option value="full-time">Full Time</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="probation">Probation Period</label>
              <select
                id="probation"
                className="px-2 py-1 rounded-lg outline-none"
                value={employmentDetails.probationPeriod}
                onChange={handleChange}
              >
                <option value="3">3 Months</option>
                <option value="6">6 Months</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="notice-period">Notice Period</label>
              <select
                id="notice-period"
                className="px-2 py-1 rounded-lg outline-none"
                value={employmentDetails.noticePeriod}
                onChange={handleChange}
              >
                <option value="45">45 days</option>
                <option value="90">90 days</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="work-hours">Work Hours</label>
              <input
                type="text"
                id="work-hours"
                className="px-2 py-1 rounded-lg outline-none"
                value={employmentDetails.workHours}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="job-description">Job Description</label>
            <input
              type="text"
              id="job-description"
              className="px-2 py-1 rounded-lg outline-none"
              value={employmentDetails.jobDescription}
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default OfficeUse;
