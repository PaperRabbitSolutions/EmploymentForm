
import './App.css'
import Contact from './Components/Contact'
import Personal from './Components/Personal'
import Education from './Components/Education'
import Health from './Components/Health'
import Bank from './Components/Bank';
import Upload from './Components/UploadDocs';
import Declarations from './Components/Declarations';
import Office from './Components/OfficeUse'
import { GiBank ,GiBookshelf } from "react-icons/gi";
import { FaUser,FaPhoneAlt } from "react-icons/fa";
import { MdHealthAndSafety,MdDocumentScanner } from "react-icons/md";
import { FaFileSignature } from "react-icons/fa6";
import { Route,Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <div className='flex relative bg-blue-200'>
        <div className='max-w-[1200px] space-y-10 mx-auto'>
          <Routes>
            Route
          </Routes>
          <Personal />
          <Contact />
          <Education />
          <Health />
          <Bank />
          <Upload />
          <Office />
          <Declarations />

          <div className="flex justify-center mt-4">
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Submit</button>
          </div>
          <div className='absolute top-[30%] text-slate-600 right-[3%] md:right-[4%] lg:right-[6%] flex-col gap-10 flex'>
            <span className='sm:text-base md:text-xl lg:text-3xl'>
              <GiBank />
            </span>
            <span className='sm:text-lg md:text-xl lg:text-3xl '>
            <FaUser />
            </span>
            <span className='sm:text-lg md:text-xl lg:text-3xl '>
            <GiBookshelf />
            </span>
            <span className='sm:text-lg md:text-xl lg:text-3xl '>
            <MdHealthAndSafety />
            </span>
            <span className='sm:text-lg md:text-xl lg:text-3xl '>
            <FaPhoneAlt />
            </span>
            <span className='sm:text-lg md:text-xl lg:text-3xl '>
            <MdDocumentScanner />
            </span>
            <span className='sm:text-lg md:text-xl lg:text-3xl '>
            <FaFileSignature />
            </span>
             
          </div>
        </div>

      </div>


    </>
  )
}

export default App
