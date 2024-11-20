import Emergency from '../Components/Emergency';

function Contact() {
    return (
        <>
            <div className="my-4 w-[90%] mx-auto">
                <h2 className="font-semibold text-xl my-4 underline ">Contact Details:</h2>
                <form className="space-y-4">
                    {/* Permanent and Current Address on the same line */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                            <label htmlFor="permanent" className="w-1/4">Permanent Address</label>
                            <input
                                type="text"
                                id="permanent"
                                className="px-2 py-1 w-full rounded-lg outline-none"
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <label htmlFor="current" className="w-1/4">Current Address</label>
                            <input
                                type="text"
                                id="current"
                                className="px-2 py-1 w-full rounded-lg outline-none"
                            />
                        </div>
                    </div>

                    {/* Mobile and Alternate Numbers on the same line */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                            <label htmlFor="mobile" className="w-1/4">Mobile No.</label>
                            <input
                                type="number"
                                id="mobile"
                                className="px-2 py-1 w-full rounded-lg outline-none"
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <label htmlFor="alternate" className="w-1/4">Alternate No.</label>
                            <input
                                type="number"
                                id="alternate"
                                className="px-2 py-1 w-full rounded-lg outline-none"
                            />
                        </div>
                    </div>

                    {/* Email field */}
                    <div className="flex items-center gap-2">
                        <label htmlFor="email" className="w-[11%]">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="px-2 py-1 w-full rounded-lg outline-none"
                        />
                    </div>
                </form>
                <Emergency />
            </div>
        </>
    );
}

export default Contact;
