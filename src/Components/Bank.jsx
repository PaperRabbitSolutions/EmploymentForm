function Bank() {
    return (
      <>
        <div className="my-4 w-[90%] mx-auto">
          <h3 className="text-xl font-semibold my-2">Bank Details</h3>
          <form className="space-y-4">
            {/* First Row: Bank Name, Branch Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <label htmlFor="bank" className="w-1/3">Bank Name</label>
                <input
                  type="text"
                  id="bank"
                  className="px-2 py-1 rounded-lg outline-none w-full"
                />
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="branch" className="w-1/3">Branch Name</label>
                <input
                  type="text"
                  id="branch"
                  className="px-2 py-1 rounded-lg outline-none w-full"
                />
              </div>
            </div>
  
            {/* Second Row: Account No., IFSC Code */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <label htmlFor="accountno" className="w-1/3">Account No.</label>
                <input
                  type="number"
                  id="accountno"
                  className="px-2 py-1 rounded-lg outline-none w-full"
                />
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="IFSC" className="w-1/3">IFSC Code</label>
                <input
                  type="text"
                  id="IFSC"
                  className="px-2 py-1 rounded-lg outline-none w-full"
                  required
                />
              </div>
            </div>
  
            {/* Third Row: TAN No., Tax Regime Preference */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <label htmlFor="pan" className="w-1/3">TAN No.</label>
                <input
                  type="text"
                  id="pan"
                  className="px-2 py-1 rounded-lg outline-none w-full"
                />
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="taxregime" className="w-1/3">Tax Regime Preference</label>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="old"
                    name="taxregime"
                    className="w-auto"
                  />
                  <label htmlFor="old">Old</label>
                  <input
                    type="radio"
                    id="new"
                    name="taxregime"
                    className="w-auto"
                  />
                  <label htmlFor="new">New</label>
                </div>
              </div>
            </div>
  
            {/* Fourth Row: Provident Fund, Employee State Insurance */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <label htmlFor="PF" className="w-1/3">Provident Fund Account No.</label>
                <input
                  type="text"
                  id="PF"
                  className="px-2 py-1 rounded-lg outline-none w-full"
                />
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="esi" className="w-1/3">Employee State Insurance No.</label>
                <input
                  type="text"
                  id="esi"
                  className="px-2 py-1 rounded-lg outline-none w-full"
                />
              </div>
            </div>
  
            {/* Fifth Row: Universal Account No., Gratuity Nominee Detail */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <label htmlFor="universal" className="w-1/3">Universal Account No.</label>
                <input
                  type="text"
                  id="universal"
                  className="px-2 py-1 rounded-lg outline-none w-full"
                />
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="gratuity" className="w-1/3">Gratuity Nominee Detail</label>
                <input
                  type="text"
                  id="gratuity"
                  className="px-2 py-1 rounded-lg outline-none w-full"
                />
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
  
  export default Bank;
  