function Emergency() {
    return (
        <>
            <div>
                <h2 className="font-semibold underline my-4">Emergency Contact Details:</h2>
                <form className="space-y-4">
                    {/* Name and Relationship on the same line */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                            <label htmlFor="name" className="w-1/4">Name</label>
                            <input type="text" id="name" className="px-2 py-1 rounded-lg outline-none w-full" />
                        </div>
                        <div className="flex items-center gap-2">
                            <label htmlFor="relation" className="w-1/4">Relationship</label>
                            <input type="text" id="relation" className="px-2 py-1 rounded-lg outline-none w-full" />
                        </div>
                    </div>

                    {/* Mobile and Address on the same line */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                            <label htmlFor="mobile" className="w-1/4">Mobile No.</label>
                            <input type="number" id="mobile" className="px-2 py-1 w-full rounded-lg outline-none" />
                        </div>
                        <div className="flex items-center gap-2">
                            <label htmlFor="address" className="w-1/4">Address</label>
                            <input type="text" id="address" className="px-2 py-1 w-full rounded-lg outline-none" />
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Emergency;
