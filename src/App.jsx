
import './App.css'
import Contact from './Components/Contact'
import Personal from './Components/Personal'
import Education from './Components/Education'
import Health from './Components/Health'
import Bank from './Components/Bank';
import Upload from './Components/UploadDocs';
import Declarations from './Components/Declarations';
import Office from './Components/OfficeUse'

function App() {

  return (
    <>
      <div className='max-w-[1200px] space-y-10 bg-blue-200 mx-auto'>
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
      </div>

    </>
  )
}

export default App
