"use client";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // Faqat xabar ko'rsatish uchun
  };

  return (
    <div className="min-h-screen pt-[15vh]">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-12 bg-white rounded-xl shadow-lg -mt-12 md:-mt-16 relative z-10">
        {/* Left Side Info */}
        <div className="space-y-6">
          {/* Location 1 */}
          <div className="flex items-start gap-4">
            <div className="text-blue-600 text-3xl">📍</div>
            <div>
              <h3 className="font-bold text-xl">Address</h3>
              <p>
                Namangan viloyati, Namangan shahar, K.Otamirzayev ko&apos;chasi.
                1-uy
              </p>
            </div>
          </div>
          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="text-blue-600 text-3xl">📞</div>
            <div>
              <h3 className="font-bold text-xl">Phone</h3>
              <p>Uzbekistan: +998958845171</p>
              <p>WhatsApp: +998958845171</p>
              <p>Telegram: +998958845171</p>
            </div>
          </div>
          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="text-blue-600 text-3xl">✉️</div>
            <div>
              <h3 className="font-bold text-xl">Email</h3>
              <p>info@impulsmi.uz</p>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Your name"
            className="w-full border border-gray-300 p-3 rounded"
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Your email"
            className="w-full border border-gray-300 p-3 rounded"
            onChange={handleChange}
            required
          />
          <input
            name="mobile"
            placeholder="Your Mobile"
            className="w-full border border-gray-300 p-3 rounded"
            onChange={handleChange}
          />
          <input
            name="subject"
            placeholder="Subject"
            className="w-full border border-gray-300 p-3 rounded"
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your message (optional)"
            rows="4"
            className="w-full border border-gray-300 p-3 rounded"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 transition w-full"
          >
            Submit
          </button>
          {submitted && (
            <p className="text-green-600 font-medium mt-2">
              ✅ Habaringiz yuborildi!
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
