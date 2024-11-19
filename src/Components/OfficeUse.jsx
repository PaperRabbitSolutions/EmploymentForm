


function OfficeUse ()
{
    return(
        <>
        <div>
            <h2 className="py-2 text-xl font-semibold">Employment Details</h2>
            <form action="" className="space-y-2">
                <div>
                    <label htmlFor="emp-id">Employee Id: </label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="department">Department </label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="designation">Designation</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="date-of-joining">Date Of Joining</label>
                    <input type="date" />
                </div>
                <div>
                    <label htmlFor="emp-id">Work Location</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="emp-id">Reporting Manager</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="employement-type">Employment Type</label>
                        <select name="employement-type" id="employment-type">
                            <option value="internship">Internship</option>
                            <option value="internship">Contract</option>
                            <option value="internship">Full Time</option>
                        </select>
                    
                </div>
                <div>
                    <label htmlFor="probation">Probation Period</label>
                    <select name="probation" id="probation">
                        <option value="3">3 Months</option>
                        <option value="6">6 Months</option>       
                    </select>
                </div>
                <div>
                    <label htmlFor="notice-period">Notice Period</label>
                    <select name="notice-period" id="notice-period">
                        <option value="45">45 days</option>
                        <option value="90">90 days</option>           
                    </select>
                </div>
                <div>
                    <label htmlFor="work-hours">Work Hours</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="job-description">Job Description</label>
                    <input type="text" />
                </div>
            </form>
        </div>
        </>
    )
}
export default OfficeUse;