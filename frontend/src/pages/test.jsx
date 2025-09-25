import React from "react";
import LandingPage from "./LandingPage";
import { useNavigate } from "react-router-dom";
import { div } from "framer-motion/client";

function Test() {
  const navigate = useNavigate();
  return (
       <div className="min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Left Side: Resume Form */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Resume Builder
          </h2>

          <form className="space-y-4">
            {/* Personal Info */}
            <div>
              <label className="block text-sm font-medium text-gray-600">Full Name</label>
              <input
                type="text"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">Email</label>
              <input
                type="email"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your email"
              />
            </div>

            {/* Education */}
            <div>
              <label className="block text-sm font-medium text-gray-600">Education</label>
              <textarea
                rows="3"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                placeholder="Write about your education"
              />
            </div>

            {/* Skills */}
            <div>
              <label className="block text-sm font-medium text-gray-600">Skills</label>
              <input
                type="text"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                placeholder="e.g., JavaScript, React, Node.js"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition"
            >
              Generate Resume
            </button>
          </form>
        </div>

        {/* Right Side: Helpful Prompts */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Resume Writing Prompts ✨
          </h2>

          <ul className="space-y-4 text-gray-700">
            <li className="p-4 bg-indigo-50 border-l-4 border-indigo-600 rounded">
              <strong>Tip 1:</strong> Highlight measurable achievements (e.g., 
              “Increased sales by 30% in 6 months”).
            </li>
            <li className="p-4 bg-green-50 border-l-4 border-green-600 rounded">
              <strong>Tip 2:</strong> Use action verbs like *developed, designed,
              led, implemented*.
            </li>
            <li className="p-4 bg-yellow-50 border-l-4 border-yellow-600 rounded">
              <strong>Tip 3:</strong> Keep descriptions concise and focused on 
              your impact.
            </li>
            <li className="p-4 bg-pink-50 border-l-4 border-pink-600 rounded">
              <strong>Tip 4:</strong> Tailor your resume for the job role you’re 
              applying to.
            </li>
            <li className="p-4 bg-blue-50 border-l-4 border-blue-600 rounded">
              <strong>Tip 5:</strong> Add skills relevant to the position 
              (both technical & soft skills).
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Test;
