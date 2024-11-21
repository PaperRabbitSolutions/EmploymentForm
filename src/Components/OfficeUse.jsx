function OfficeUse() {
    return (
        <>
            <div className="my-4 w-[80%] mx-auto">
                <h2 className="py-2 text-xl font-semibold">Employment Details</h2>
                <form action="" className="space-y-2">
                    {/* Using grid for two fields per row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Employee Id and Department on the same row */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="emp-id">Employee Id:</label>
                            <input type="text" id="emp-id" className="px-2 py-1 rounded-lg outline-none" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="department">Department</label>
                            <input type="text" id="department" className="px-2 py-1 rounded-lg outline-none" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Designation and Date of Joining on the same row */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="designation">Designation</label>
                            <input type="text" id="designation" className="px-2 py-1 rounded-lg outline-none" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="date-of-joining">Date Of Joining</label>
                            <input type="date" id="date-of-joining" className="px-2 py-1 rounded-lg outline-none" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Work Location and Reporting Manager on the same row */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="work-location">Work Location</label>
                            <input type="text" id="work-location" className="px-2 py-1 rounded-lg outline-none" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="reporting-manager">Reporting Manager</label>
                            <input type="text" id="reporting-manager" className="px-2 py-1 rounded-lg outline-none" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Employment Type and Probation Period on the same row */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="employment-type">Employment Type</label>
                            <select name="employment-type" id="employment-type" className="px-2 py-1 rounded-lg outline-none">
                                <option value="internship">Internship</option>
                                <option value="contract">Contract</option>
                                <option value="full-time">Full Time</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="probation">Probation Period</label>
                            <select name="probation" id="probation" className="px-2 py-1 rounded-lg outline-none">
                                <option value="3">3 Months</option>
                                <option value="6">6 Months</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Notice Period and Work Hours on the same row */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="notice-period">Notice Period</label>
                            <select name="notice-period" id="notice-period" className="px-2 py-1 rounded-lg outline-none">
                                <option value="45">45 days</option>
                                <option value="90">90 days</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="work-hours">Work Hours</label>
                            <input type="text" id="work-hours" className="px-2 py-1 rounded-lg outline-none" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        {/* Job Description on a single row */}
                        <label htmlFor="job-description">Job Description</label>
                        <input type="text" id="job-description" className="px-2 py-1 rounded-lg outline-none" />
                    </div>
                </form>
            </div>
        </>
    );
}

export default OfficeUse;
