function Health() {
  return (
      <>
          <div className="my-4 w-[80%] mx-auto">
              <h2 className="font-semibold text-xl my-2">Health Information:</h2>
              <form className="space-y-4">
                  
                  {/* First Row: Blood Group and Allergies */}
                  <div className="flex flex-wrap gap-4">
                      <div className="flex-1 min-w-[200px] flex flex-col gap-1">
                          <label htmlFor="bloodgrp" className="text-sm font-medium">Blood Group</label>
                          <input
                              type="text"
                              id="bloodgrp"
                              className="px-2 py-1 rounded-lg outline-none w-full"
                          />
                      </div>
                      <div className="flex-1 min-w-[200px] flex flex-col gap-1">
                          <label htmlFor="allergies" className="text-sm font-medium">Allergies</label>
                          <input
                              type="text"
                              id="allergies"
                              className="px-2 py-1 rounded-lg outline-none w-full"
                          />
                      </div>
                  </div>

                  {/* Second Row: Medical Conditions and Medical Insurance */}
                  <div className="flex flex-wrap gap-4">
                      <div className="flex-1 min-w-[200px] flex flex-col gap-1">
                          <label htmlFor="medical-conditions" className="text-sm font-medium">Medical Conditions</label>
                          <input
                              type="text"
                              id="medical-conditions"
                              className="px-2 py-1 rounded-lg outline-none w-full"
                          />
                      </div>
                      <div className="flex-1 min-w-[200px] flex flex-col gap-1">
                          <label htmlFor="medical-insuarance" className="text-sm font-medium">Medical Insurance</label>
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
