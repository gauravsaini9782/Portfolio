import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    projectDetails: '',
  });
  const [showPopup, setShowPopup] = useState(false); // Popup state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send the data to an API or email)
    console.log('Form Data Submitted: ', formData);
    setShowPopup(true); // Show popup after successful submission

    // Hide the popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);

    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      projectDetails: '',
    });
  };

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          Contact Us
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Let us know how we can help you with your next project. Fill out the form below, and we'll get back to you soon.
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-black shadow-md rounded-lg p-8 space-y-6"
        >
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-white focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-300"
            >
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-white focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-white focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Service of Interest */}
          <div>
            <label
              htmlFor="service"
              className="block text-sm font-medium text-gray-300"
            >
              Service of Interest
            </label>
            <select
              name="service"
              id="service"
              value={formData.service}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-white focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              required
            >
              <option value="" disabled>Select a service</option>
              <option value="Website Development">Website Development</option>
              <option value="Web Design">Web Design</option>
              <option value="App Design">App Design</option>
              <option value="Logo Design">Logo Design</option>
              <option value="Desktop App Design">Desktop App Design</option>
              <option value="Others">Others</option>
            </select>
          </div>

          {/* Project Details */}
          <div>
            <label
              htmlFor="projectDetails"
              className="block text-sm font-medium text-gray-300"
            >
              Project Details
            </label>
            <textarea
              name="projectDetails"
              id="projectDetails"
              value={formData.projectDetails}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-white focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              rows="5"
              placeholder="Tell us more about your project"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-right">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Popup Notification */}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
            <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-bold mb-2">Message Sent!</h3>
              <p>Your information has been successfully sent.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactUs;
