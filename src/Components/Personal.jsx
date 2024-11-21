function Personal() {
    return (
        <>
            <div className="w-full mx-auto">
                <h2 className="text-xl ml-14 text-left font-semibold underline py-6">Personal Details:</h2>
                <form className="space-y-2 w-[90%] mx-auto">
                    {/* First Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                            <input type="text" id="firstName" className="px-2 py-1 outline-none rounded-lg w-full" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                            <input type="text" id="lastName" className="px-2 py-1 outline-none rounded-lg w-full" />
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-6 justify-between">
                        {/* Date of Birth */}
                        <div className="flex-1 min-w-[200px] flex flex-col gap-1">
                            <label htmlFor="dob" className="text-sm font-medium">Date of Birth</label>
                            <input type="date" id="dob" className="px-2 py-1 outline-none rounded-lg w-full" />
                        </div>

                        {/* Gender */}
                        <div className="flex-2 min-w-[100px] flex flex-col gap-1">
                            <label htmlFor="gender" className="text-sm font-medium">Gender</label>
                            <div className="flex gap-4 items-center">
                                <div className="space-x-2">
                                    <input type="radio" id="male" name="gender" value="male" />
                                    <label htmlFor="male" className="text-sm">Male</label>
                                </div>
                                <div className="space-x-2">
                                    <input type="radio" id="female" name="gender" value="female" />
                                    <label htmlFor="female" className="text-sm">Female</label>
                                </div>
                            </div>
                        </div>

                        {/* Marital Status */}
                        <div className="flex-1 min-w-[200px] flex flex-col gap-1">
                            <label htmlFor="status" className="text-sm font-medium">Marital Status</label>
                            <select name="maritalStatus" id="marital-status" className="px-2 py-1 outline-none rounded-lg w-full">
                                <option value="select">--select--</option>
                                <option value="single">Single</option>
                                <option value="married">Married</option>
                                <option value="divorced">Divorced</option>
                                <option value="widow">Widow</option>
                            </select>
                        </div>
                    </div>



                    {/* Third Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="nationality" className="text-sm font-medium">Nationality</label>
                            <select name="nationality" id="nationality" className="px-2 py-1 rounded-lg w-full">
                                <option value="">-- select --</option>
                                
                            </select>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="pan" className="text-sm font-medium">Pan no.</label>
                            <input type="text" id="pan" className="px-2 py-1 outline-none rounded-lg w-full" />
                        </div>
                    </div>

                    {/* Fourth Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="aadhar" className="text-sm font-medium">Aadhar no.</label>
                            <input type="text" id="aadhar" className="px-2 py-1 outline-none rounded-lg w-full" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="passport" className="text-sm font-medium">Passport no.</label>
                            <input type="text" id="passport" className="px-2 py-1 outline-none rounded-lg w-full" />
                        </div>
                    </div>

                    {/* Fifth Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="fathername" className="text-sm font-medium">Father's Name</label>
                            <input type="text" id="fathername" className="px-2 py-1 outline-none rounded-lg w-full" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="mothername" className="text-sm font-medium">Mother's Name</label>
                            <input type="text" id="mothername" className="px-2 py-1 outline-none rounded-lg w-full" />
                        </div>
                    </div>

                    {/* Sixth Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="spousename" className="text-sm font-medium">Spouse's Name</label>
                            <input type="text" id="spousename" className="px-2 py-1 outline-none rounded-lg w-full" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="dependent" className="text-sm font-medium">Dependent Details</label>
                            <div className="flex gap-4 flex-wrap">
                                <div className="flex items-center space-x-2">
                                    <input type="checkbox" id="father" name="dependent" />
                                    <label htmlFor="father" className="text-sm">Father</label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <input type="checkbox" id="mother" name="dependent" />
                                    <label htmlFor="mother" className="text-sm">Mother</label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <input type="checkbox" id="wife" name="dependent" />
                                    <label htmlFor="wife" className="text-sm">Wife</label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <label htmlFor="children" className="text-sm">Children</label>
                                    <input type="number" id="children" className="w-12 rounded-lg outline-none" min="1" max="5" step="1"
                                        onInput={(e) => {
                                            const value = e.target.value;
                                            if (value < 1 || value > 5) {
                                                e.target.value = 1;
                                                alert("Please Enter a value between 1 and 5");
                                            }
                                        }} />
                                </div>
                            </div>
                        </div>
                    </div>


                </form>
            </div>
        </>
    );
}

export default Personal;
