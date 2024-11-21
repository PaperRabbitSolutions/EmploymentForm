import './App.css';
import Contact from './Components/Contact';
import Personal from './Components/Personal';
import Education from './Components/Education';
import Health from './Components/Health';
import Bank from './Components/Bank';
import Upload from './Components/UploadDocs';
import Declarations from './Components/Declarations';
import Office from './Components/OfficeUse';
import { GiBank, GiBookshelf } from "react-icons/gi";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { MdHealthAndSafety, MdDocumentScanner } from "react-icons/md";
import { FaFileSignature } from "react-icons/fa6";
import { Route, Routes, NavLink, useNavigate, useLocation } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // List of route paths for the form sections
  const formRoutes = [
    '/',
    '/contact',
    '/education',
    '/health',
    '/bank',
    '/upload',
    '/office',
    '/declarations',
  ];

  // Find the index of the current route
  const currentIndex = formRoutes.indexOf(location.pathname);

  // Function to navigate to the next route
  const goToNext = () => {
    if (currentIndex < formRoutes.length - 1) {
      navigate(formRoutes[currentIndex + 1]);
    }
  };

  // Function to navigate to the previous route
  const goToPrevious = () => {
    if (currentIndex > 0) {
      navigate(formRoutes[currentIndex - 1]);
    }
  };

  // Check if we're on the last page
  const isLastPage = currentIndex === formRoutes.length - 1;

  return (
    <>
      <div className='flex flex-col w-full min-h-screen py-10 bg-blue-100'>
        <h2 className='text-2xl text-center w-full font-bold underline my-10'>Employement Form</h2>
        <div className='max-w-[1200px] w-full mx-auto flex flex-col justify-center items-center'>
          <Routes>
            <Route path='/' element={<Personal />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/education' element={<Education />} />
            <Route path='/health' element={<Health />} />
            <Route path='/bank' element={<Bank />} />
            <Route path='/upload' element={<Upload />} />
            <Route path='/office' element={<Office />} />
            <Route path='/declarations' element={<Declarations />} />
          </Routes>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between w-[80%] md:w-[70%] lg:w-[60%] mt-4 gap-4">
            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
              disabled={currentIndex === 0} // Disable if it's the first route
            >
              Previous
            </button>

            {/* Next Button or Submit Button */}
            {isLastPage ? (
              <button
                onClick={() => alert('Form submitted!')}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                Submit
              </button>
            ) : (
              <button
                onClick={goToNext}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Next
              </button>
            )}
          </div>
        </div>

        {/* Sidebar with icons */}
        <div className='absolute top-1/4 right-[4%] md:right-[4%] lg:right-[8%] flex flex-col gap-10'>
          
        <span className='text-base md:text-xl lg:text-3xl'>
            <NavLink to="/">
              <FaUser />
            </NavLink>
          </span>
          <span className='text-base md:text-xl lg:text-3xl'>
            <NavLink to="/contact">
              <FaPhoneAlt />
            </NavLink>
          </span>

          <span className='text-base md:text-xl lg:text-3xl'>
            <NavLink to="/education">
              <GiBookshelf />
            </NavLink>
          </span>

          <span className='text-base md:text-xl lg:text-3xl'>
            <NavLink to="/health">
              <MdHealthAndSafety />
            </NavLink>
          </span>

          <span className='text-base md:text-xl lg:text-3xl'>
            <NavLink to="/bank">
              <GiBank />
            </NavLink>
          </span>      
         
          <span className='text-base md:text-xl lg:text-3xl'>
            <NavLink to="/upload">
              <MdDocumentScanner />
            </NavLink>
          </span>

          <span className='text-base md:text-xl lg:text-3xl'>
            <NavLink to="/declarations">
              <FaFileSignature />
            </NavLink>
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
