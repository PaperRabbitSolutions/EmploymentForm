

function Emergency ()
{
    return(
        <>
        <div>
            <h2 className="font-semibold underline my-2">Emergency Contact Details:</h2>
            <form action="" className="space-y-2">
              <div>
              <label htmlFor="name">Name</label>
              <input type="text" />
              </div>
              <div>
              <label htmlFor="relation">Relationship</label>
              <input type="text" />
              </div>
               <label htmlFor="name">Name</label>
               <input type="text" />
               <div>
               <label htmlFor="name">Mobile No.</label>
               <input type="number" />
               </div>
               <div>
               <label htmlFor="name">Address</label>
               <input type="text" />
               </div>
            </form>
        </div>
        
        </>
    )

}
export default Emergency;