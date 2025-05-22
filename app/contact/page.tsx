"use client";

import { useState } from "react";

import { title } from "@/components/primitives";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Implement form submission logic
      console.log("Form submitted:", formData);
      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className={`${title()} text-center mb-8`}>Advice, Adda and More</h1>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              Get in Touch
            </h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="name"
                >
                  Name *
                </label>
                <input
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="email"
                >
                  Email *
                </label>
                <input
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="message"
                >
                  Message *
                </label>
                <textarea
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <div className="flex justify-end">
                <button
                  className="px-6 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                  type="submit"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              Contact Information
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 text-green-600">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-gray-900">Email</h3>
                  <p className="text-sm text-gray-600">
                    dhrubotara.herbals@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 text-green-600">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-gray-900">
                    Phone / WhatsApp
                  </h3>
                  <p className="text-sm text-gray-600">+91 98315 74424</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 text-green-600">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                    <path
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-gray-900">
                    Location
                  </h3>
                  <p className="text-sm text-gray-600">
                    Kolkata, West Bengal, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="text-lg font-medium text-gray-900 mb-3">
              Need Immediate Assistance?
            </h3>
            <p className="text-gray-600 mb-4">
              If you or someone you know is going through health issues and
              needs help, give us a call for a well-rounded wellness &quot;totka
              &quot; and some wholesome adda, today.
            </p>
            <a
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              href="https://wa.me/919831574424"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                className="-ml-1 mr-2 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  clipRule="evenodd"
                  d="M18 10c0-3.976-3.03-7.25-6.9-7.25-3.87 0-7 3.274-7 7.25 0 1.87.7 3.57 1.85 4.88L5 20l3.08-1.6c1.32.72 2.82 1.1 4.42 1.1 3.87 0 7-3.274 7-7.25zM8.75 7.5c0-.41.34-.75.75-.75h1.5c.41 0 .75.34.75.75v1.5c0 .41-.34.75-.75.75h-1.5a.75.75 0 01-.75-.75v-1.5zm4.5 0c0-.41.34-.75.75-.75h1.5c.41 0 .75.34.75.75v1.5c0 .41-.34.75-.75.75h-1.5a.75.75 0 01-.75-.75v-1.5zm-4.5 5c0-.41.34-.75.75-.75h1.5c.41 0 .75.34.75.75v1.5c0 .41-.34.75-.75.75h-1.5a.75.75 0 01-.75-.75v-1.5zm4.5 0c0-.41.34-.75.75-.75h1.5c.41 0 .75.34.75.75v1.5c0 .41-.34.75-.75.75h-1.5a.75.75 0 01-.75-.75v-1.5z"
                  fillRule="evenodd"
                />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
