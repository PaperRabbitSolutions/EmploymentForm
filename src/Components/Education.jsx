function Education() {
  return (
      <>
          <div className="my-4 w-[80%] mx-auto">
              <h3 className="text-xl font-semibold my-4">Educational Background</h3>
              <form className="space-y-4">

                  {/* First Row: Highest Qualification, University, Year of Passing */}
                  <div className="flex flex-wrap gap-4">
                      {/* Highest Qualification */}
                      <div className="flex-1 min-w-[200px] flex flex-col gap-1">
                          <label htmlFor="highest-Qualification" className="text-sm font-medium">Highest Qualification</label>
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
                      <div className="flex-1 min-w-[200px] flex flex-col gap-1">
                          <label htmlFor="university" className="text-sm font-medium">University/Institute</label>
                          <input
                              type="text"
                              id="university"
                              className="px-2 py-1 rounded-lg outline-none w-full"
                          />
                      </div>
                  </div>

                  {/* Second Row: Year of Passing, Certificates */}
                  <div className="flex flex-wrap gap-4">
                      {/* Year of Passing */}
                      <div className="flex-1 min-w-[200px] flex flex-col gap-1">
                          <label htmlFor="yearOfPassing" className="text-sm font-medium">Year of Passing</label>
                          <input
                              type="date"
                              id="yearOfPassing"
                              className="px-2 py-1 rounded-lg outline-none w-full"
                          />
                      </div>

                      {/* Certificates */}
                      <div className="flex-1 min-w-[200px] flex flex-col gap-1">
                          <label htmlFor="AdditionalCertificates" className="text-sm font-medium">Certifications</label>
                          <input
                              type="text"
                              id="AdditionalCertificates"
                              className="px-2 py-1 rounded-lg outline-none w-full"
                          />
                      </div>
                  </div>

                  
              </form>
          </div>
      </>
  );
}

export default Education;
