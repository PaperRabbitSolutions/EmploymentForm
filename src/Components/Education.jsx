import React from 'react';
import { useState } from 'react';

function Education({ educationInfo, setEducationInfo }) {

  // Function to handle adding a skill
  const handleAddSkill = () => {
    if (!newSkill) return;  // Ensure there's something in the input
    
    if (educationInfo.skills.length >= 8) {
      alert('You can only add up to 8 skills');
      return;
    }

    // Only add the skill if it doesn't already exist
    if (!educationInfo.skills.includes(newSkill)) {
      setEducationInfo(prevState => ({
        ...prevState,
        skills: [...prevState.skills,newSkill]
      }));
      setNewSkill("");
    } else {
      alert('This skill has already been added!');
    }
  };

  // Function to handle deleting a skill
  const handleDeleteSkill = (skillToDelete) => {
    setEducationInfo(prevState => ({
      ...prevState,
      skills: prevState.skills.filter(skill => skill !== skillToDelete),
    }));
  };

  const [newSkill,setNewSkill]=useState("");

  return (
    <>
      <div className="my-12 w-[80%] mx-auto sm:text-sm lg:text-base">
        <h3 className="text-xl font-semibold my-4">Educational Background</h3>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Qualification */}
          <div className="flex flex-col gap-1">
            <label htmlFor="qualification" className="text-sm font-medium">Highest Qualification</label>
            <select
              id="qualification"
              value={educationInfo.qualification}
              onChange={(e) => setEducationInfo({ ...educationInfo, qualification: e.target.value })}
              className="px-2 py-1 rounded-lg border-[1px] outline-none w-full"
            >
              <option value="select">--select--</option>
              <option value="Under Graduate">Under Graduate</option>
              <option value="Post Graduate">Post Graduate</option>
              <option value="Diploma">Diploma</option>
            </select>
          </div>

          {/* University */}
          <div className="flex flex-col gap-1">
            <label htmlFor="university" className="text-sm font-medium">University/Institute</label>
            <input
              type="text"
              id="university"
              value={educationInfo.university}
              onChange={(e) => setEducationInfo({ ...educationInfo, university: e.target.value })}
              className="px-2 py-1 border-[1px] rounded-lg outline-none w-full"
            />
          </div>

          {/* Year of Passing */}
          <div className="flex flex-col gap-1">
            <label htmlFor="yearOfPassing" className="text-sm font-medium">Year of Passing</label>
            <input
              type="date"
              id="yearOfPassing"
              value={educationInfo.yearOfPassing}
              onChange={(e) => setEducationInfo({ ...educationInfo, yearOfPassing: e.target.value })}
              className="px-2 py-1 border-[1px] rounded-lg outline-none w-full"
            />
          </div>

          {/* Certifications */}
          <div className="flex flex-col gap-1">
            <label htmlFor="certifications" className="text-sm font-medium">Certifications/Courses</label>
            <input
              type="text"
              id="certifications"
              value={educationInfo.certifications}
              onChange={(e) => setEducationInfo({ ...educationInfo, certifications: e.target.value })}
              className="px-2 py-1 border-[1px] rounded-lg outline-none w-full"
            />
          </div>

          {/* Tech Domain and Skills (on the same row) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 col-span-2">
            {/* Domain */}
            <div className="flex flex-col gap-1">
              <label htmlFor="tech-domain" className="text-sm font-medium">Domain</label>
              <select
                id="tech-domain"
                value={educationInfo.techDomain}
                onChange={(e) => setEducationInfo({ ...educationInfo, techDomain: e.target.value })}
                className="px-2 py-1 rounded-lg border-[1px] outline-none w-full"
              >
                <option value="select">--select--</option>
                <option value="Software Engineering">Web Developer</option>
                <option value="Full Stack Developer">Full Stack Developer</option>
                <option value="Data Science">Content Writer</option>
                <option value="Cloud Computing">UI/UX Designer</option>
                <option value="Graphic Designer">Graphic Designer</option>
                <option value="Business Development Manager">Business Development Manager</option>
                <option value="HR">HR</option>
              </select>
            </div>

            {/* Skills */}
            <div className="flex flex-col gap-1">
              <label htmlFor="skills" className="text-sm font-medium">Skills</label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  id="skills"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  className="px-2 py-1 border-[1px] rounded-lg outline-none w-full"
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

          {/* Displaying Added Skills */}
          {educationInfo.skills.length > 0 && (
            <div className="mt-4 col-span-2">
              <h4 className="text-lg font-semibold">Your Skills:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {educationInfo.skills.map((skill, index) => (
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
