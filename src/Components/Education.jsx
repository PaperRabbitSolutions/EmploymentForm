import { useState } from 'react';

function Education() {
  const [skills, setSkills] = useState([]);  // State to store the skills
  const [newSkill, setNewSkill] = useState('');  // State to handle the current input value
  const [techDomain, setTechDomain] = useState('');  // State to handle selected tech domain

  // Function to handle adding a skill
  const handleAddSkill = () => {
    if (newSkill && !skills.includes(newSkill)) {
      if (skills.length < 8) {  // Limit to 8 skills
        setSkills([...skills, newSkill]);
        setNewSkill('');  // Clear the input field after adding the skill
      } else {
        alert('You can only add up to 8 skills');
      }
    }
  };

  // Function to handle deleting a skill
  const handleDeleteSkill = (skillToDelete) => {
    setSkills(skills.filter(skill => skill !== skillToDelete));
  };

  return (
    <>
      <div className="my-4 w-[80%] mx-auto">
        <h3 className="text-xl font-semibold my-4">Educational Background</h3>
        <form className="space-y-4">
          {/* First Row: Highest Qualification, University, Year of Passing */}
          <div className="flex flex-wrap gap-4">
            {/* Highest Qualification */}
            <div className="flex-1 min-w-[200px] flex flex-col gap-1">
              <label htmlFor="highest-Qualification" className="text-sm font-medium">Highest Qualification</label>
              <select
                name="qualification"
                id="qualification"
                className="px-2 py-1 rounded-lg outline-none w-full"
              >
                <option value="select">--select--</option>
                <option value="Under Graduate">Under Graduate</option>
                <option value="Post Graduate">Post Graduate</option>
                <option value="Diploma">Diploma</option>
              </select>
            </div>

            {/* University/Institute */}
            <div className="flex-1 min-w-[200px] flex flex-col gap-1">
              <label htmlFor="university" className="text-sm font-medium">University/Institute</label>
              <input
                type="text"
                id="university"
                className="px-2 py-1 rounded-lg outline-none w-full"
              />
            </div>
          </div>

          {/* Second Row: Year of Passing, Certificates */}
          <div className="flex flex-wrap gap-4">
            {/* Year of Passing */}
            <div className="flex-1 min-w-[200px] flex flex-col gap-1">
              <label htmlFor="yearOfPassing" className="text-sm font-medium">Year of Passing</label>
              <input
                type="date"
                id="yearOfPassing"
                className="px-2 py-1 rounded-lg outline-none w-full"
              />
            </div>

            {/* Certificates */}
            <div className="flex-1 min-w-[200px] flex flex-col gap-1">
              <label htmlFor="AdditionalCertificates" className="text-sm font-medium">Certifications</label>
              <input
                type="text"
                id="AdditionalCertificates"
                className="px-2 py-1 rounded-lg outline-none w-full"
              />
            </div>
          </div>

          {/* Tech Domain and Skills Input Section */}
          <div className="flex flex-wrap gap-4">
            {/* Tech Domain */}
            <div className="flex-1 min-w-[200px] flex flex-col gap-1">
              <label htmlFor="tech-domain" className="text-sm font-medium">Domain</label>
              <select
                name="tech-domain"
                id="tech-domain"
                value={techDomain}
                onChange={(e) => setTechDomain(e.target.value)}
                className="px-2 py-1 rounded-lg outline-none w-full"
              >
                <option value="select">--select--</option>
                <option value="Software Engineering">Web Developer</option>
                <option value="Software Engineering">Full Stack Developer</option>
                <option value="Data Science">Content Writer</option>
                <option value="Cloud Computing">UI/UX Designer</option>
                <option value="Cloud Computing">Graphic Designer</option>
                <option value="Artificial Intelligence">Business Development Manager</option>
                <option value="Cybersecurity">HR</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Skills Input */}
            <div className="flex-1 min-w-[200px] flex flex-col gap-1">
              <label htmlFor="skills" className="text-sm font-medium">Skills</label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  id="skills"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  className="px-2 py-1 rounded-lg outline-none w-full"
                  placeholder="Type a skill and press Enter"
                />
                <button
                  type="button"
                  onClick={handleAddSkill}
                  className="px-2 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600"
                >
                  Add
                </button>
              </div>
            </div>
          </div>

          {/* Displaying Added Skills in Four Columns */}
          {skills.length > 0 && (
            <div className="mt-4">
              <h4 className="text-lg font-semibold">Your Skills:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex justify-between items-center bg-gray-100 p-2 rounded-lg">
                    <span>{skill}</span>
                    <button
                      type="button"
                      onClick={() => handleDeleteSkill(skill)}
                      className="ml-2 text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </form>
      </div>
    </>
  );
}

export default Education;
