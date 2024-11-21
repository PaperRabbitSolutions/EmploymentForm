function Emergency() {
    return (
        <>
            <div className="my-4 w-[100%] mx-auto">
                <h2 className="font-semibold underline my-4">Emergency Contact Details:</h2>
                <form className="space-y-2">
                    {/* Name and Relationship on the same line */}
                    <div className="flex flex-wrap gap-6">
                        <div className="flex-1 min-w-[200px] flex flex-col gap-1">
                            <label htmlFor="name" className="text-sm font-medium">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="px-2 py-1 rounded-lg outline-none w-full"
                            />
                        </div>
                        <div className="flex-1 min-w-[200px] flex flex-col gap-1">
                            <label htmlFor="relation" className="text-sm font-medium">Relationship</label>
                            <input
                                type="text"
                                id="relation"
                                className="px-2 py-1 rounded-lg outline-none w-full"
                            />
                        </div>
                    </div>

                    {/* Mobile and Address on the same line */}
                    <div className="flex flex-wrap gap-6">
                        <div className="flex-1 min-w-[200px] flex flex-col gap-1">
                            <label htmlFor="mobile" className="text-sm font-medium">Mobile No.</label>
                            <input
                                type="number"
                                id="mobile"
                                className="px-2 py-1 rounded-lg outline-none w-full"
                            />
                        </div>
                        <div className="flex-1 min-w-[200px] flex flex-col gap-1">
                            <label htmlFor="address" className="text-sm font-medium">Address</label>
                            <input
                                type="text"
                                id="address"
                                className="px-2 py-1 rounded-lg outline-none w-full"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Emergency;
