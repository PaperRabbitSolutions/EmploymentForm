import Emergency from '../Components/Emergency'

function Contact()
 {
    return(
        <>
        <div className=" my-4 ">
            <h2 className="font-semibold text-xl my-2">Contact Details</h2>
            <form action="" className="my-2 space-y-6">
                <div className="space-x-2">
                <label htmlFor="permanent">Permanent Address</label>
                <input type="text" className="px-2 py-1" />
                </div>
                <div className="space-x-2">
                    <label htmlFor="current">Current Address</label>
                    <input type="text" className="px-2 py-1"/>
                </div>
                <div>
                    <label htmlFor="mobile">Mobile No.</label>
                    <input type="number" className="px-2 py-1" />
                </div>
                <div>
                    <label htmlFor="alternate">Alternate No.</label>
                    <input type="number" className="px-2 py-1" />
                </div>
                <div className="space-x-4">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="px-2 py-1" />
                </div>
                
            </form>
            <Emergency/>
        </div>
        </>
    )

 }
 export default Contact;