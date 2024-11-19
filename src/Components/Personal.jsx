

function Personal() {
    return (
        <>
            <h2>Personal Details</h2>
            <form action="" className="space-y-2">
                <div className="flex items-center gap-10">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="px-2 py-1" />
                </div>
                <div className="flex items-center gap-10">
                    <label htmlFor="dob">Date Of Birth</label>
                    <input type="date" className="px-2 py-1" />
                </div>
                <div className="flex items-center gap-10">
                    <label htmlFor="gender">Gender</label>
                    <div className="space-x-2">
                        <input type="radio" id="male" name="gender" value="male" className="px-2 py-1" />
                        <label htmlFor="male">Male</label>
                    </div>
                    <div className="space-x-2">
                        <input type="radio" id="female" name="gender" value="female" className="px-2 py-1" />
                        <label htmlFor="male">Female</label>
                    </div>
                </div>
                <div className="flex items-center gap-10">
                    <label htmlFor="status">Marital Status</label>
                    <select name="maritalStatus" id="marital-status">
                        <option value="married">Married</option>
                        <option value="married">Single</option>
                    </select>
                </div>
                <div className="flex items-center gap-10">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="px-2 py-1" />
                </div>
                <div className="flex items-center gap-10">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="px-2 py-1" />
                </div>
                <div className="flex items-center gap-10">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="px-2 py-1" />
                </div>
                <div className="flex items-center gap-10">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="px-2 py-1" />
                </div>
                <div className="flex items-center gap-10">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="px-2 py-1" />
                </div>
                <div className="flex items-center gap-10">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="px-2 py-1" />
                </div>
                <div className="flex items-center gap-10">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="px-2 py-1" />
                </div>
                <div className="flex items-center gap-10">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="px-2 py-1" />
                </div>
                <div className="flex items-center gap-10">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="px-2 py-1" />
                </div>
            </form>
        </>
    )
}
export default Personal
