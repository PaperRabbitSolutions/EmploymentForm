function Education() {
    return (
      <>
        <div className="my-4 w-[90%] mx-auto">
          <h3 className="text-xl font-semibold my-4">Educational Background</h3>
          <form className="space-y-4">
  
            {/* First Row: Highest Qualification, University, Year of Passing */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Highest Qualification */}
              <div className="flex items-center gap-2">
                <label htmlFor="highest-Qualification" className="w-1/3">Highest Qualification</label>
                <select
                  name="qualification"
                  id="qualification"
                  className="px-2 py-1 rounded-lg outline-none w-full"
                >
                  <option value="select">--select--</option>
                  <option value="Under Graduate">Under Graduate</option>
                  <option value="Post Graduate">Post Graduate</option>
                  <option value="Diploma">Diploma</option>
                </select>
              </div>
  
              {/* University/Institute */}
              <div className="flex items-center gap-2">
                <label htmlFor="university" className="w-1/3">University/Institute</label>
                <input
                  type="text"
                  id="university"
                  className="px-2 py-1 rounded-lg outline-none w-full"
                />
              </div>
            </div>
  
            {/* Second Row: Year of Passing, Certificates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Year of Passing */}
              <div className="flex items-center gap-2">
                <label htmlFor="yearOfPassing" className="w-1/3">Year of Passing</label>
                <input
                  type="number"
                  id="yearOfPassing"
                  className="px-2 py-1 rounded-lg outline-none w-full"
                />
              </div>
  
              {/* Certificates */}
              <div className="flex items-center gap-2">
                <label htmlFor="AdditionalCertificates" className="w-1/3">Certificates</label>
                <input
                  type="file"
                  id="AdditionalCertificates"
                  className="px-2 py-1 rounded-lg outline-none w-full"
                />
              </div>
            </div>
  
            {/* Note for file upload */}
            <p className="text-sm text-gray-500 text-center ">
              ** Note: Please send a copy of this certificate in the mail with other required documents
            </p>
          </form>
        </div>
      </>
    );
  }
  
  export default Education;
  