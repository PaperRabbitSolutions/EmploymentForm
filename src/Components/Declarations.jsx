function Declarations() {
    return (
      <>
        <div className="my-4 w-[80%] mx-auto">
          <h2 className="text-xl font-semibold my-4">Declarations</h2>
          <form action="" className="space-y-2">
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="nda" />
                <label htmlFor="nda">Non Disclosure Agreement</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="employment-agreement" />
                <label htmlFor="employment-agreement">Employment Agreement</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="code-of-conduct" />
                <label htmlFor="code-of-conduct">Code Of Conduct</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="company-policies" />
                <label htmlFor="company-policies">Company Policies</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="conflict-of-interest" />
                <label htmlFor="conflict-of-interest">Conflict of Interest</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="anti-bribery-policy" />
                <label htmlFor="anti-bribery-policy">Anti-Bribery Policy</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="data-protection-agreement" />
                <label htmlFor="data-protection-agreement">Data Protection Agreement</label>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
  
  export default Declarations;
  