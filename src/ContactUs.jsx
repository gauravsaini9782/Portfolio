import React, { useState } from "react";
import axios from "axios";
import { Element } from "react-scroll";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    to: "",
    subject: "",
    text: "",
    name: "",
    phoneNumber: "",
    serviceOfInterest: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Reset error message on new submission
    try {
      const response = await axios.post(
        "http://localhost:4000/send-mail",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        setShowPopup(true);

        // Hide the popup after 3 seconds
        setTimeout(() => {
          setShowPopup(false);
        }, 3000);

        // Reset form
        setFormData({
          to: "",
          subject: "",
          text: "",
          name: "",
          phoneNumber: "",
          serviceOfInterest: "",
        });
      } else {
        console.error("Error in response", response);
        setErrorMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending form data", error);
      if (error.response) {
        setErrorMessage(
          error.response.data.message || "Failed to send message."
        );
      } else if (error.request) {
        setErrorMessage("No response received from the server.");
      } else {
        setErrorMessage("Error: " + error.message);
      }
    }
  };

  return (
    <Element name="contact">
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-4">
            Contact Us
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Let us know how we can help you with your next project. Fill out the
            form below, and we'll get back to you soon.
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
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-300"
              >
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-white focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                placeholder="Enter your phone number"
                required
              />
            </div>

            {/* Service of Interest (Dropdown) */}
            <div>
              <label
                htmlFor="serviceOfInterest"
                className="block text-sm font-medium text-gray-300"
              >
                Service of Interest
              </label>
              <select
                name="serviceOfInterest"
                id="serviceOfInterest"
                value={formData.serviceOfInterest}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-white focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                required
              >
                <option value="">Select a service</option>
                <option value="web development">Web Development</option>
                <option value="app development">App Development</option>
                <option value="website design">Website Design</option>
                <option value="logo design">Logo Design</option>
                <option value="graphic design">Graphic Design</option>
              </select>
            </div>

            {/* To */}
            <div>
              <label
                htmlFor="to"
                className="block text-sm font-medium text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                name="to"
                id="to"
                value={formData.to}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-white focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                placeholder="Enter recipient's email"
                required
              />
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-white focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                placeholder="Enter the subject"
                required
              />
            </div>

            {/* Text */}
            <div>
              <label
                htmlFor="text"
                className="block text-sm font-medium text-gray-300"
              >
                Text
              </label>
              <textarea
                name="text"
                id="text"
                value={formData.text}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-white focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                placeholder="Enter your message"
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

            {/* Error Message */}
            {errorMessage && (
              <div className="text-red-500 text-center">{errorMessage}</div>
            )}
          </form>

          {/* Popup Notification */}
          {showPopup && (
            <div className="fixed top-4 right-4 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg">
              Email sent successfully!
            </div>
          )}
        </div>
      </section>
    </Element>
  );
};

export default ContactUs;
