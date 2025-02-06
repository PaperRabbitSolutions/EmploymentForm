import DataProtection from "../Pages/DataProtection";
import AntiBribary from "../Pages/AntiBribary";
import ConflicsOfInterest from "../Pages/ConflictsOfInterest"
import CompanyPolicy from "../Pages/CompanyPolicy";
import Nda from "../Pages/Nda";
import EmploymentContract from "../Pages/EmploymentContract";
import CodeOfConduct from "../Pages/CodeOfConduct";


const Agreements=()=>{

    return(
        <div className="mx-auto w-[70%] text-justify space-y-12">
        <DataProtection/>
        <AntiBribary/>
        <ConflicsOfInterest/>
        <CompanyPolicy/>
        <Nda/>
        <EmploymentContract/>
        <CodeOfConduct/>
        </div>
    )
}
export default Agreements;