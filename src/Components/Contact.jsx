import React from 'react';

function Contact({ contactInfo, setContactInfo }) {
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Check if the change is for Emergency Contact info
    if (name in contactInfo.EmergencyContact) {
      setContactInfo((prevState) => ({
        ...prevState,
        EmergencyContact: {
          ...prevState.EmergencyContact,
          [name]: value, // Update only the relevant field
        },
      }));
    } else {
      setContactInfo((prevState) => ({
        ...prevState,
        [name]: value, // Update regular contact info
      }));
    }
  };

  return (
    <>
      <div className="my-4 w-[80%] mx-auto">
        <h2 className="font-semibold text-xl my-4 underline">Contact Details:</h2>
        <form className="space-y-2">
          {/* Permanent Address in its own row */}
          <div className="flex flex-col gap-1">
            <label htmlFor="permanent" className="text-sm font-medium">Permanent Address</label>
            <input
              type="text"
              id="permanent"
              name="Permanent_Address"
              value={contactInfo.Permanent_Address}
              onChange={handleChange}
              className="px-2 py-1 w-full rounded-lg outline-none"
            />
          </div>

          {/* Alternate Address in its own row */}
          <div className="flex flex-col gap-1">
            <label htmlFor="current" className="text-sm font-medium">Alternate Address</label>
            <input
              type="text"
              id="current"
              name="Current_Address"
              value={contactInfo.Current_Address}
              onChange={handleChange}
              className="px-2 py-1 w-full rounded-lg outline-none"
            />
          </div>

          {/* Mobile and Alternate Numbers on the same line */}
          <div className="flex flex-wrap gap-6">
            <div className="flex-1 min-w-[200px] flex flex-col gap-1">
              <label htmlFor="mobile" className="text-sm font-medium">Mobile No.</label>
              <input
                type="number"
                id="mobile"
                name="Mobile"
                value={contactInfo.Mobile}
                onChange={handleChange}
                className="px-2 py-1 w-full rounded-lg outline-none"
              />
            </div>
            <div className="flex-1 min-w-[200px] flex flex-col gap-1">
              <label htmlFor="alternate" className="text-sm font-medium">Alternate No.</label>
              <input
                type="number"
                id="alternate"
                name="Alternate_No"
                value={contactInfo.Alternate_No}
                onChange={handleChange}
                className="px-2 py-1 w-full rounded-lg outline-none"
              />
            </div>

            <div className="flex-1 flex min-w-[200px] flex-col gap-1">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="Email"
                value={contactInfo.Email}
                onChange={handleChange}
                className="px-2 py-1 w-full rounded-lg outline-none"
              />
            </div>
          </div>
        </form>
      </div>

      {/* Emergency Contact Details Section */}
      <div className="my-4 w-[80%] mx-auto">
        <h2 className="font-semibold underline my-4">Emergency Contact Details:</h2>
        <form className="space-y-2">
          {/* Name and Relationship on the same line */}
          <div className="flex flex-wrap gap-6">
            <div className="flex-1 min-w-[200px] flex flex-col gap-1">
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="Name"
                value={contactInfo.EmergencyContact.Name}
                onChange={handleChange}
                className="px-2 py-1 rounded-lg outline-none w-full"
              />
            </div>
            <div className="flex-1 min-w-[200px] flex flex-col gap-1">
              <label htmlFor="relation" className="text-sm font-medium">Relationship</label>
              <input
                type="text"
                id="relation"
                name="Relationship"
                value={contactInfo.EmergencyContact.Relationship}
                onChange={handleChange}
                className="px-2 py-1 rounded-lg outline-none w-full"
              />
            </div>
          </div>

          {/* Mobile and Address on the same line */}
          <div className="flex flex-wrap gap-6">
            <div className="flex-1 min-w-[200px] flex flex-col gap-1">
              <label htmlFor="mobile" className="text-sm font-medium">Mobile No.</label>
              <input
                type="number"
                id="mobile"
                name="Mobile"
                value={contactInfo.EmergencyContact.Mobile}
                onChange={handleChange}
                className="px-2 py-1 rounded-lg outline-none w-full"
              />
            </div>
            <div className="flex-1 min-w-[200px] flex flex-col gap-1">
              <label htmlFor="address" className="text-sm font-medium">Address</label>
              <input
                type="text"
                id="address"
                name="Address"
                value={contactInfo.EmergencyContact.Address}
                onChange={handleChange}
                className="px-2 py-1 rounded-lg outline-none w-full"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
