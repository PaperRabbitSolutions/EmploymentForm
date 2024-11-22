import Emergency from '../Components/Emergency';

function Contact({ contactInfo, setContactInfo }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
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
        <Emergency />
      </div>
    </>
  );
}

export default Contact;
