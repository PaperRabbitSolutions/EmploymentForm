import DataProtection from "../Pages/DataProtection";
import AntiBribary from "../Pages/AntiBribary";
import ConflicsOfInterest from "../Pages/ConflictsOfInterest";
import CompanyPolicy from "../Pages/CompanyPolicy";
import Nda from "../Pages/Nda";
import EmploymentContract from "../Pages/EmploymentContract";
import CodeOfConduct from "../Pages/CodeOfConduct";
import { useState } from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const Agreements = () => {
  const totalPages = 7;
  const [currentPage, setCurrentPage] = useState(1);
  let progress = (currentPage / totalPages) * 100;

  return (
    <div className="mx-auto w-full text-justify space-y-12 mb-20">
      <div className="w-[70%] mx-auto rounded-full h-1.5 bg-slate-300 mt-8">
        <div
          className="bg-green-500 h-1.5 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="w-[70%] mx-auto">
        {/* Dynamically render pages */}
      {currentPage === 1 && <DataProtection />}
      {currentPage === 2 && <AntiBribary />}
      {currentPage === 3 && <ConflicsOfInterest />}
      {currentPage === 4 && <CompanyPolicy />}
      {currentPage === 5 && <Nda />}
      {currentPage === 6 && <EmploymentContract />}
      {currentPage === 7 && <CodeOfConduct />}
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-8 justify-center">
        {/* Show "Prev" button only if currentPage > 1 */}
        {currentPage > 1 && (
          <button
            className="text-lg bg-blue-500 text-white px-2 rounded"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <FaArrowLeftLong />
          </button>
        )}

        {/* Current page number */}
        <div className="bg-blue-500 text-white w-8 h-8 text-xl flex items-center justify-center rounded-full">
          {currentPage}
        </div>

        {/* Show "Next" button only if currentPage < 7 */}
        {currentPage < 7 && (
          <button
            className="text-lg bg-blue-500 text-white px-2 rounded"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <FaArrowRightLong />
          </button>
        )}
      </div>
    </div>
  );
};

export default Agreements;
