function Health()
{
return (
    <>
    <div className="">
        <h2 className="font-semibold text-xl my-2">Health Information:</h2>
        <form action="" className="space-y-2">
        <div>
            <label htmlFor="bloodgrp">Blood Group</label>
            <input type="text" />
        </div>
        <div>
            <label htmlFor="allergies">Allergies</label>
            <input type="text" />
        </div>
        <div>
            <label htmlFor="medical-conditions">Medical Conditions</label>
            <input type="text" />
        </div>
        <div>
            <label htmlFor="medical-insuarance">Medical Insuarance</label>
            <input type="text" />
        </div>
        </form>
    </div>
    </>
)
}
export default Health;