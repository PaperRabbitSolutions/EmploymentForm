function Bank() {
  return (
      <>
          <div className="my-4 w-[90%] mx-auto">
              <h3 className="text-xl font-semibold my-2">Bank Details</h3>
              <form className="space-y-4">
                  
                  {/* First Row: Bank Name, Branch Name */}
                  <div className="flex flex-wrap gap-4">
                      <div className="flex-1 min-w-[200px] flex flex-col gap-1">
                          <label htmlFor="bank" className="text-sm font-medium">Bank Name</label>
                          <input
                              type="text"
                              id="bank"
                              className="px-2 py-1 rounded-lg outline-none w-full"
                          />
                      </div>
                      <div className="flex-1 min-w-[200px] flex flex-col gap-1">
                          <label htmlFor="branch" className="text-sm font-medium">Branch Name</label>
                          <input
                              type="text"
                              id="branch"
                              className="px-2 py-1 rounded-lg outline-none w-full"
                          />
                      </div>
                  </div>

                  {/* Second Row: Account No., IFSC Code */}
                  <div className="flex flex-wrap gap-4">
                      <div className="flex-1 min-w-[200px] flex flex-col gap-1">
                          <label htmlFor="accountno" className="text-sm font-medium">Account No.</label>
                          <input
                              type="number"
                              id="accountno"
                              className="px-2 py-1 rounded-lg outline-none w-full"
                          />
                      </div>
                      <div className="flex-1 min-w-[200px] flex flex-col gap-1">
                          <label htmlFor="IFSC" className="text-sm font-medium">IFSC Code</label>
                          <input
                              type="text"
                              id="IFSC"
                              className="px-2 py-1 rounded-lg outline-none w-full"
                              required
                          />
                      </div>
                  </div>

                  {/* Third Row: TAN No., Tax Regime Preference */}
                  <div className="flex flex-wrap gap-4">
                      <div className="flex-1 min-w-[200px] flex flex-col gap-1">
                          <label htmlFor="pan" className="text-sm font-medium">TAN No.</label>
                          <input
                              type="text"
                              id="pan"
                              className="px-2 py-1 rounded-lg outline-none w-full"
                          />
                      </div>
                      <div className="flex-1 min-w-[200px] flex flex-col gap-1">
                          <label htmlFor="taxregime" className="text-sm font-medium">Tax Regime Preference</label>
                          <div className="flex items-center gap-2">
                              <input
                                  type="radio"
                                  id="old"
                                  name="taxregime"
                                  className="w-auto"
                              />
                              <label htmlFor="old" className="text-sm">Old</label>
                              <input
                                  type="radio"
                                  id="new"
                                  name="taxregime"
                                  className="w-auto"
                              />
                              <label htmlFor="new" className="text-sm">New</label>
                          </div>
                      </div>
                  </div>

                  {/* Fourth Row: Provident Fund, Employee State Insurance */}
                  <div className="flex flex-wrap gap-4">
                      <div className="flex-1 min-w-[200px] flex flex-col gap-1">
                          <label htmlFor="PF" className="text-sm font-medium">Provident Fund Account No.</label>
                          <input
                              type="text"
                              id="PF"
                              className="px-2 py-1 rounded-lg outline-none w-full"
                          />
                      </div>
                      <div className="flex-1 min-w-[200px] flex flex-col gap-1">
                          <label htmlFor="esi" className="text-sm font-medium">Employee State Insurance No.</label>
                          <input
                              type="text"
                              id="esi"
                              className="px-2 py-1 rounded-lg outline-none w-full"
                          />
                      </div>
                  </div>

                  {/* Fifth Row: Universal Account No., Gratuity Nominee Detail */}
                  <div className="flex flex-wrap gap-4">
                      <div className="flex-1 min-w-[200px] flex flex-col gap-1">
                          <label htmlFor="universal" className="text-sm font-medium">Universal Account No.</label>
                          <input
                              type="text"
                              id="universal"
                              className="px-2 py-1 rounded-lg outline-none w-full"
                          />
                      </div>
                      <div className="flex-1 min-w-[200px] flex flex-col gap-1">
                          <label htmlFor="gratuity" className="text-sm font-medium">Gratuity Nominee Detail</label>
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
