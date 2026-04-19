"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent successfully 🚀");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen px-6 py-20 flex flex-col items-center overflow-hidden"
    >
      {/* Subtle grid background (same style as About) */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative w-full max-w-2xl">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-xs font-medium tracking-widest uppercase text-gray-400">
            Contact
          </span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Intro */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Let’s build something{" "}
            <span className="text-blue-600">reliable together</span>
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Have a project, DevOps challenge, or collaboration idea? Send a
            message and I’ll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Name */}
            <div>
              <label className="text-xs text-gray-500">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full mt-1 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100"
                placeholder="Your name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-xs text-gray-500">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full mt-1 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100"
                placeholder="you@example.com"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-xs text-gray-500">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="w-full mt-1 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100"
                placeholder="Tell me about your project..."
                required
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="mt-2 px-5 py-2.5 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Direct contact cards */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
            <p className="text-xs font-medium text-gray-900 mb-1">Email</p>
            <p className="text-xs text-gray-500">prabeshuser407@gmail.com</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
            <p className="text-xs font-medium text-gray-900 mb-1">Location</p>
            <p className="text-xs text-gray-500">Chitwan, Nepal</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
            <p className="text-xs font-medium text-gray-900 mb-1">Availability</p>
            <p className="text-xs text-green-600">Open to work</p>
          </div>
        </div>
      </div>
    </section>
  );
}