function UploadDocs() {
    return (
        <>
            <div className="my-4 w-[80%] mx-auto">
                <h2 className="font-semibold text-xl my-4">Document Submission</h2>
               
                <form action="" className="space-y-2">
                    {/* Grid Layout for two rows */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
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
                        <p className="text-sm text-slate-700">** Note  All the documents mentioned here should be sent to the office <a href="">email-id</a></p>
                    </div>
                </form>
            </div>
        </>
    );
}

export default UploadDocs;
