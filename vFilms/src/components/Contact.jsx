import axios from "axios";
import React, { useState } from "react";

function Contact() {
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSending(true);
    try {
      const response = await axios.post(
        "https://vernanbackend.ezlab.in/api/contact-us/",
        formData
      );

      if (response) {
        setSending(false);
        setShowSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }
      console.log(response.data);
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full pt-[60px] mobile:pt-[70px] 
      laptop:pt-[100px] pb-10 px-4 mobile:px-6 tablet:px-10 laptop:px-[26px] 
      flex flex-col laptop:flex-row gap-8 tablet:gap-12 laptop:gap-16 
      items-center justify-center"
    >
      {/* Loading overlay */}
      {sending && (
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm 
        z-50 flex items-center justify-center">
          <p className="font-sub-heading text-[32px] mobile:text-[40px] 
          tablet:text-[50px] laptop:text-[60px] text-center">
            Sending ...
          </p>
        </div>
      )}

      {/* Left part */}
      <div className="w-full laptop:w-1/2 flex items-center justify-center">
        <h3 className="font-text text-[14px] mobile:text-[16px] 
        tablet:text-[20px] laptop:text-[22px] desktop:text-[24px] 
        max-w-[95%] tablet:max-w-[500px] text-center laptop:text-left 
        leading-relaxed">
          Whether you have an idea, a question, or simply want to explore how V
          can work together, V're just a message away. 
          <br className="hidden tablet:block" /> 
          <br className="hidden tablet:block" />
          catch up over coffee. 
          <br className="hidden tablet:block" /> 
          <br className="hidden tablet:block" />
          Great stories always begin with a good conversation
        </h3>
      </div>

      {/* Right part - Form */}
      <div className="w-full laptop:w-1/2 flex flex-col gap-6 mobile:gap-8">
        {/* Form heading */}
        <div className="text-center">
          <h2 className="font-sub-heading text-[28px] mobile:text-[32px] 
          tablet:text-[36px] laptop:text-[40px] text-[#252729] mb-2">
            Join the Story
          </h2>
          <p className="font-text text-[14px] mobile:text-[16px] 
          tablet:text-[18px]">
            Ready to bring your vision to life? Let's talk.
          </p>
        </div>

        {/* Success message */}
        {showSuccess && (
          <p className="text-green-600 text-center font-medium text-[14px] 
          mobile:text-[16px] tablet:text-[18px] bg-green-50 p-3 rounded-lg">
            Form submitted successfully!
          </p>
        )}

        {/* Form */}
        <form className="w-full flex flex-col gap-4 mobile:gap-5 
        max-w-[95%] mobile:max-w-[500px] tablet:max-w-[600px] mx-auto">
          {/* Name Field */}
          <div>
            <input
              type="text"
              id="name"
              required
              onChange={handleChange}
              name="name"
              value={formData.name}
              placeholder="Your name*"
              className={`w-full px-3 mobile:px-4 py-2.5 mobile:py-3 
              tablet:py-3.5 bg-gray-50 border rounded-lg 
              text-[14px] mobile:text-[16px] focus:outline-none 
              focus:ring-2 focus:ring-[#F15D2B] focus:bg-white 
              transition-all ${
                errors.name
                  ? "border-red-500 bg-red-50"
                  : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-[12px] mobile:text-[13px] 
              mt-1">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <input
              type="email"
              required
              id="email"
              onChange={handleChange}
              name="email"
              value={formData.email}
              placeholder="Your email*"
              className={`w-full px-3 mobile:px-4 py-2.5 mobile:py-3 
              tablet:py-3.5 bg-gray-50 border rounded-lg 
              text-[14px] mobile:text-[16px] focus:outline-none 
              focus:ring-2 focus:ring-[#F15D2B] focus:bg-white 
              transition-all ${
                errors.email
                  ? "border-red-500 bg-red-50"
                  : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-[12px] mobile:text-[13px] 
              mt-1">
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <input
              type="tel"
              id="phone"
              name="phone"
              maxLength={10}
              onChange={handleChange}
              value={formData.phone}
              placeholder="Phone"
              className="w-full px-3 mobile:px-4 py-2.5 mobile:py-3 
              tablet:py-3.5 bg-gray-50 border border-gray-300 rounded-lg 
              text-[14px] mobile:text-[16px] focus:outline-none 
              focus:ring-2 focus:ring-[#F15D2B] focus:bg-white 
              transition-all"
            />
          </div>

          {/* Message Field */}
          <div>
            <textarea
              id="message"
              name="message"
              onChange={handleChange}
              value={formData.message}
              rows="4"
              placeholder="Your message*"
              className={`w-full px-3 mobile:px-4 py-2.5 mobile:py-3 
              tablet:py-3.5 bg-gray-50 border rounded-lg 
              text-[14px] mobile:text-[16px] focus:outline-none 
              focus:ring-2 focus:ring-[#F15D2B] focus:bg-white 
              transition-all resize-none ${
                errors.message
                  ? "border-red-500 bg-red-50"
                  : "border-gray-300"
              }`}
            />
            {errors.message && (
              <p className="text-red-500 text-[12px] mobile:text-[13px] 
              mt-1">
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-2 mobile:pt-4">
            <button
              onClick={handleSubmit}
              type="submit"
              className="bg-[#F15D2B] text-white font-bold 
              py-2.5 mobile:py-3 tablet:py-3.5 px-8 mobile:px-10 
              tablet:px-12 rounded-full hover:bg-[#d64d1f] 
              hover:scale-105 transition-all cursor-pointer 
              text-[14px] mobile:text-[16px] tablet:text-[18px]"
            >
              Submit
            </button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col mobile:flex-row items-center 
          justify-center gap-2 mobile:gap-4 pt-2 mobile:pt-4">
            <p className="font-sub-heading text-[#F15D2B] 
            text-[14px] mobile:text-[16px] tablet:text-[17px] 
            font-bold break-all text-center">
              vernita@varnanfilms.co.in
            </p>
            <span className="text-[#F15D2B] text-[14px] mobile:text-[16px] 
            tablet:text-[17px] font-bold hidden mobile:inline">
              |
            </span>
            <p className="font-sub-heading text-[#F15D2B] 
            text-[14px] mobile:text-[16px] tablet:text-[17px] font-bold">
              +91 98736 84567
            </p>
          </div>
        </form>
      </div>

      {/* Decorative circles */}
      <img
        src="/assets/Footerircle.svg"
        alt="decoration"
        className="absolute -z-10 top-[20%] left-0 -translate-x-1/2 
        w-[100px] tablet:w-[150px] laptop:w-[200px] opacity-30"
      />
      <img
        src="/assets/Footerircle.svg"
        alt="decoration"
        className="absolute -z-10 bottom-[20%] right-0 translate-x-1/2 
        w-[100px] tablet:w-[150px] laptop:w-[200px] opacity-30"
      />
    </section>
  );
}

export default Contact;
