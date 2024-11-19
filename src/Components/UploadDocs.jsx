


function UploadDocs()
{
    return(
        <>
        <div>
            <h2 className="font-semibold text-xl">Document Submission</h2>
            <p>Please send all the documents to the given email and verify it</p>
            <form action="">
                <div className="">
                <input type="checkbox" />
                <label htmlFor="Photo">Passport Size Photo</label>
                </div>
                <div className="">
                <input type="checkbox" />
                <label htmlFor="Pan-card-photo">PAN Card Photo</label>
                </div>
                <div className="">
                <input type="checkbox" />
                <label htmlFor="voter-id">Voter ID</label>
                </div>
                <div className="">
                <input type="checkbox" />
                <label htmlFor="Aadhaar-photo">Aadhaar Card Photo(of both the sides)</label>
                </div>
                <div className="">
                <input type="checkbox" />
                <label htmlFor="educational-certificates">Educational Certificates</label>
                </div>
                <div className="">
                <input type="checkbox" />
                <label htmlFor="Previous-employment-certificate">Previous Employment Certificate</label>
                </div>
                <div className="">
                <input type="checkbox" />
                <label htmlFor="Passbook">Bank Passbook</label>
                </div>
                <div className="">
                <input type="checkbox" />
                <label htmlFor="relieving-letter">Relieving Letter from previous office</label>
                </div>
                <div className="">
                <input type="checkbox" />
                <label htmlFor="Payslip">Last Pay Slip</label>
                </div>
            </form>
        </div>
       
        </>
    )
}
export default UploadDocs