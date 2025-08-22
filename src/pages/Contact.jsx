import React from 'react'
import TopBar from '../components/TopBar'
import Footer from '../components/Footer'
import image from '../assets/installing-solar-panels-on-pitched-roof-770x500.jpg'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "3618979c-fa0d-4752-b2fa-8a5e57a505ee");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <TopBar />

      {/* Hero Section */}
      <div className="relative w-full h-[50vh]">
        <img
          src={image}
          alt="Contact Background"
          className="w-full h-full object-cover opacity-60 blur-sm"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-600 drop-shadow-lg">
            Contact Us
          </h2>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto mt-12 mb-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-6">
        {/* Left Column - Form */}
        <div className="bg-white p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Schedule Your Consultation
          </h3>
          <form className="space-y-5" onSubmit={onSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                placeholder="First Name*"
                className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-green-600"
                type="text"
                name="first_name"
                required
              />
              <input
                placeholder="Last Name"
                className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-green-600"
                type="text"
                name="last_name"
              />
            </div>

            <input
              placeholder="Email Address*"
              className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-green-600"
              type="email"
              name="email"
              required
            />

            <input
              placeholder="Phone Number*"
              className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-green-600"
              type="tel"
              name="phone"
              required
            />

            <input
              placeholder="Project Location"
              className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-green-600"
              type="text"
              name="project_location"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="date"
                name="preferred_date"
                className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-green-600"
                required
              />
              <input
                type="time"
                name="preferred_time"
                className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-green-600"
              />
            </div>

            <select
              name="consultation_type"
              className="w-full border-b border-gray-300 p-2 bg-transparent focus:outline-none focus:border-green-600"
            >
              <option value="">Select Consultation Type</option>
              <option value="online">Online</option>
              <option value="on-site">On-Site</option>
            </select>

            <input
              placeholder="Estimated Budget (Optional)"
              className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-green-600"
              type="text"
              name="budget"
            />

            <textarea
              placeholder="Project Details"
              className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-green-600"
              rows="4"
              name="project_details"
            ></textarea>

            <button
              className="w-full bg-green-700 text-white py-6 rounded-lg hover:bg-green-600 transition-all duration-300"
              type="submit"
            >
              Confirm Appoinment
            </button>
          </form>
          <span className="block mt-4 text-green-700">{result}</span>
        </div>

        {/* Right Column - Image */}
        <div className="hidden lg:flex items-center justify-center">
          <img
            src={image}
            alt="Consultation"
            className="rounded-[50%] object-cover w-[400px] h-[400px] shadow-xl"
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
