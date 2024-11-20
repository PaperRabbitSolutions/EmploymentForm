function Health() {
    return (
      <>
        <div className="my-4 w-[90%] mx-auto">
          <h2 className="font-semibold text-xl my-2">Health Information:</h2>
          <form className="space-y-4">
            {/* First Row: Blood Group and Allergies */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <label htmlFor="bloodgrp" className="w-1/3">Blood Group</label>
                <input
                  type="text"
                  id="bloodgrp"
                  className="px-2 py-1 rounded-lg outline-none w-full"
                />
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="allergies" className="w-1/3">Allergies</label>
                <input
                  type="text"
                  id="allergies"
                  className="px-2 py-1 rounded-lg outline-none w-full"
                />
              </div>
            </div>
  
            {/* Second Row: Medical Conditions and Medical Insurance */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <label htmlFor="medical-conditions" className="w-1/3">Medical Conditions</label>
                <input
                  type="text"
                  id="medical-conditions"
                  className="px-2 py-1 rounded-lg outline-none w-full"
                />
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="medical-insuarance" className="w-1/3">Medical Insurance</label>
                <input
                  type="text"
                  id="medical-insuarance"
                  className="px-2 py-1 rounded-lg outline-none w-full"
                />
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
  
  export default Health;
  