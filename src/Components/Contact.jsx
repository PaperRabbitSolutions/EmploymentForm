import React from 'react';

function Contact({ contactInfo, setContactInfo }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setContactInfo((prevState) => ({
      ...prevState,
      [name]: value, // Update regular contact info
    }));
  };

  return (
    <>
      <div className="my-12 w-[80%] mx-auto sm:text-sm lg:text-base">
        <h2 className="font-semibold text-xl my-4 underline">Contact Details:</h2>
        <form className="space-y-4">
          {/* Permanent Address in its own row */}
         <div className='flex flex-wrap gap-6'>
         <div className="flex-1 min-w-[200px] flex flex-col gap-2">
            <label htmlFor="permanent" className="text-sm font-medium">Permanent Address</label>
            <textarea id="permanent"
              name="Permanent_Address"
              value={contactInfo.Permanent_Address}
              onChange={handleChange}
              className="px-2 py-1 w-full rounded-lg border-[1px] outline-none"></textarea>
          </div>

          {/* Alternate Address in its own row */}
          <div className="flex-1 min-w-[200px] flex flex-col gap-2">
            <label htmlFor="current" className="text-sm font-medium">Alternate Address</label>
            <textarea id="current"
              name="Current_Address"
              value={contactInfo.Current_Address}
              onChange={handleChange}
              className="px-2 py-1 w-full rounded-lg border-[1px] outline-none"></textarea>
          </div>
         </div>

          {/* Mobile and Alternate Numbers on the same line */}
          <div className="flex flex-wrap gap-6">
            <div className="flex-1 min-w-[200px] flex flex-col gap-2">
              <label htmlFor="mobile" className="text-sm font-medium">Mobile No.</label>
              <input
                type="text"  // Use text to avoid issues with numeric input
                id="mobile"
                name="Mobile"
                value={contactInfo.Mobile}
                onChange={handleChange}
                className="px-2 py-1 w-full border-[1px] rounded-lg outline-none"
              />
            </div>
            <div className="flex-1 min-w-[200px] flex flex-col gap-2">
              <label htmlFor="alternate" className="text-sm font-medium">Alternate No.</label>
              <input
                type="text"  // Use text for alternate numbers as well
                id="alternate"
                name="Alternate_No"
                value={contactInfo.Alternate_No}
                onChange={handleChange}
                className="px-2 py-1 w-full border-[1px] rounded-lg outline-none"
              />
            </div>

            <div className="flex-1 flex min-w-[200px] flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="Email"
                value={contactInfo.Email}
                onChange={handleChange}
                className="px-2 py-1 w-full border-[1px] rounded-lg outline-none"
              />
            </div>
          </div>

          {/* social media */}
          <div className='space-y-2'>
            <h3 className='mt-6  underline text-lg font-semibold'>Handles</h3>
            <p className='text-xs md:text-sm '>Please share your profile links in the perticular input fields *</p>
            
            <br /><div className="flex flex-wrap gap-6 ">
              <div className="flex-1 min-w-[200px] flex flex-col gap-2">
                <label htmlFor="linkedin" className="text-sm font-medium">LinkedIn</label>
                <input
                  type="text"
                  id="linkedin"
                  name="Linkedin"
                  value={contactInfo.Linkedin}
                  onChange={handleChange}
                  className="px-2 py-1 w-full border-[1px] rounded-lg outline-none"
                />
              </div>
              <div className="flex-1 min-w-[200px] flex flex-col gap-2">
                <label htmlFor="github" className="text-sm font-medium">Github</label>
                <input
                  type="text"
                  id="github"
                  name="Github"
                  value={contactInfo.Github}
                  onChange={handleChange}
                  className="px-2 py-1 w-full border-[1px] rounded-lg outline-none"
                />
              </div>

              <div className="flex-1 flex min-w-[200px] flex-col gap-2">
                <label htmlFor="instagram" className="text-sm font-medium">Instagram</label>
                <input
                  type="text"
                  id="instagram"
                  name="Instagram"
                  value={contactInfo.Instagram}
                  onChange={handleChange}
                  className="px-2 py-1 w-full border-[1px] rounded-lg outline-none"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex-1 min-w-[200px] flex flex-col gap-2">
                <label htmlFor="behance" className="text-sm  font-medium">Behance</label>
                <input
                  type="text"
                  id="behance"
                  name="Behance"
                  value={contactInfo.Behance}
                  onChange={handleChange}
                  className="px-2 py-1 w-full border-[1px] rounded-lg outline-none"
                />
              </div>
              <div className="flex-1 min-w-[200px] flex flex-col gap-1">
                <label htmlFor="portfolio" className="text-sm font-medium">Portfolio</label>
                <input
                  type="text"
                  id="portfolio"
                  name="Portfolio"
                  value={contactInfo.Portfolio}
                  onChange={handleChange}
                  className="px-2 py-1 w-full border-[1px] rounded-lg outline-none"
                />
              </div>

              <div className="flex-1 flex min-w-[200px] flex-col gap-2">
                <label htmlFor="others" className="text-sm font-medium">Others</label>
                <input
                  type="text"
                  id="others"
                  name="Others"
                  value={contactInfo.Others}
                  onChange={handleChange}
                  className="px-2 py-1 w-full border-[1px] rounded-lg outline-none"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
