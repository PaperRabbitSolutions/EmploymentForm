function UploadDocs() {
    return (
        <>
            <div className="my-4 w-[90%] mx-auto">
                <h2 className="font-semibold text-xl">Document Submission</h2>
                <p>Please send all the documents to the given email and verify it</p>
                <form action="" className="space-y-2">
                    {/* Each checkbox and label on a new line with minimal space */}
                    <div className="flex items-center gap-2">
                        <input type="checkbox" id="photo" />
                        <label htmlFor="photo">Passport Size Photo</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" id="pan-card-photo" />
                        <label htmlFor="pan-card-photo">PAN Card Photo</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" id="voter-id" />
                        <label htmlFor="voter-id">Voter ID</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" id="aadhaar-photo" />
                        <label htmlFor="aadhaar-photo">Aadhaar Card Photo (of both sides)</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" id="educational-certificates" />
                        <label htmlFor="educational-certificates">Educational Certificates</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" id="previous-employment-certificate" />
                        <label htmlFor="previous-employment-certificate">Previous Employment Certificate</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" id="passbook" />
                        <label htmlFor="passbook">Bank Passbook</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" id="relieving-letter" />
                        <label htmlFor="relieving-letter">Relieving Letter from previous office</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" id="payslip" />
                        <label htmlFor="payslip">Last Pay Slip</label>
                    </div>
                </form>
            </div>
        </>
    );
}

export default UploadDocs;
