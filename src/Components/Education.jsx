function Education()
{
return (
    <>
    <div className="my-4 ">
        <h3 className="text-xl font-semibold my-4">Educational Background</h3>
        <form action="" className="space-y-6">
            <div className="flex gap-4">
                <label htmlFor="highest-Qualification">Highest Qualification</label>
                  <select name="qualification" id="qualification">
                    <option value="select">--select--</option>
                    <option value="Under Graduate">Under Graduate</option>
                    <option value="Post Graduate">Post Graduate</option>
                    <option value="Diploma">Diploma</option>
                  </select>
            </div>
            <div>
                <label htmlFor="university">University/Institute Name</label>
                <input type="text" className="px-2 py-1"/>
            </div>
            <div>
                <label htmlFor="yearOfPassing">Year Of Passing</label>
                <input type="" />
            </div>
            <div>
                <label htmlFor="Additional Certificates">certificates</label>
                <input type="file" /> <br />
                <p>** Note: plzz send a copy of this in the mail with other required documents</p>
            </div>
        </form>

    </div>
    </>
)
}
export default Education;