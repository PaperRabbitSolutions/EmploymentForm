import React from 'react';

function Bank({ bankInfo, setBankInfo }) {
  // Function to handle input change and update the state
  const handleChange = (e) => {
    const { id, value,type } = e.target;
    if(type==='radio')
    {
      setBankInfo((prev)=>({
        ...prev,
        taxregime:value,
      }))
    }
   else{
    setBankInfo((prevState) => ({
      ...prevState,
      [id]: value,  // Update the specific field by id
    }));
   }
  };

  return (
    <>
      <div className="my-4 w-[80%] mx-auto">
        <h3 className="text-xl font-semibold my-2">Bank Details</h3>
        <form className="space-y-4">
          
          {/* First Row: Bank Name, Branch Name */}
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px] flex flex-col gap-1">
              <label htmlFor="bank" className="text-sm font-medium">Bank Name</label>
              <input
                type="text"
                id="bank"
                value={bankInfo.bank || ''}
                onChange={handleChange}
                className="px-2 py-1 rounded-lg outline-none w-full"
              />
            </div>
            <div className="flex-1 min-w-[200px] flex flex-col gap-1">
              <label htmlFor="branch" className="text-sm font-medium">Branch Name</label>
              <input
                type="text"
                id="branch"
                value={bankInfo.branch || ''}
                onChange={handleChange}
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
                value={bankInfo.accountno || ''}
                onChange={handleChange}
                className="px-2 py-1 rounded-lg outline-none w-full"
              />
            </div>
            <div className="flex-1 min-w-[200px] flex flex-col gap-1">
              <label htmlFor="IFSC" className="text-sm font-medium">IFSC Code</label>
              <input
                type="text"
                id="IFSC"
                value={bankInfo.IFSC || ''}
                onChange={handleChange}
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
                value={bankInfo.pan || ''}
                onChange={handleChange}
                className="px-2 py-1 rounded-lg outline-none w-full"
              />
            </div>
            <div className="flex-1 min-w-[200px] flex flex-col gap-1">
              <label htmlFor="taxregime" className="text-sm font-medium">Tax Regime Preference</label>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="old"
                  name="taxregime" // Ensure both radio buttons have the same name
                  value="old"
                  checked={bankInfo.taxregime === 'old'}  // Update the checked property to reflect state
                  onChange={handleChange}
                  className="w-auto"
                />
                <label htmlFor="old" className="text-sm">Old</label>
                <input
                  type="radio"
                  id="new"
                  name="taxregime" // Same name for both radio buttons
                  value="new"
                  checked={bankInfo.taxregime === 'new'}  // Update the checked property to reflect state
                  onChange={handleChange}
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
                value={bankInfo.PF || ''}
                onChange={handleChange}
                className="px-2 py-1 rounded-lg outline-none w-full"
              />
            </div>
            <div className="flex-1 min-w-[200px] flex flex-col gap-1">
              <label htmlFor="esi" className="text-sm font-medium">Employee State Insurance No.</label>
              <input
                type="text"
                id="esi"
                value={bankInfo.esi || ''}
                onChange={handleChange}
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
                value={bankInfo.universal || ''}
                onChange={handleChange}
                className="px-2 py-1 rounded-lg outline-none w-full"
              />
            </div>
            <div className="flex-1 min-w-[200px] flex flex-col gap-1">
              <label htmlFor="gratuity" className="text-sm font-medium">Gratuity Nominee Detail</label>
              <input
                type="text"
                id="gratuity"
                value={bankInfo.gratuity || ''}
                onChange={handleChange}
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
