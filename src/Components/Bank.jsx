function Bank()
{
return(
    <>
    <div>
        <h3 className="text-xl font-semibold">Bank Details</h3>
        <form action="" className="space-y-2">
            <div>
                <label htmlFor="bank">Bank Name</label>
                <input type="text" className="px-2 py-1"/>
            </div>
            <div>
                <label htmlFor="branch">Branch Name</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="accountno">Account No.</label>
               <input type="number" />
            </div>
            <div>
                <label htmlFor="IFSC">IFSC Code</label>
                <input type="text" required />
            </div>
            <div>
                <label htmlFor="pan">TAN no.</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="taxregime">Tax Regime Preference</label>
                <input type="radio"  name="taxregime"  />
                <label htmlFor="old">Old</label>
                <input type="radio"  name="taxregime"  />
                <label htmlFor="new">New</label>
            </div>

            <div>
                <label htmlFor="PF">Provident Fund Account No.</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="PF">Employee State Insurance no.</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="PF">Universal Account No.</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="gratuity">Gratuity Nominee Detail</label>
                <input type="text" />
            </div>

        </form>
    </div>
    </>
)
}
export default Bank;