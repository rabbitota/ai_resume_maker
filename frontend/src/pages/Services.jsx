import React from "react";
import { useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();
  return ( 
    <div className="min-h-screen bg-gray-50 flex flex-col">
      
      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-0 to-indigo-100 py-16 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Our <span className="text-indigo-600">Services</span>
        </h2>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          Discover the tools and services we provide to help you create 
          professional, AI-powered resumes that stand out in today’s job market.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {/* Service Card */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-indigo-600">AI Resume Builder</h3>
            <p className="mt-4 text-gray-600">
              Instantly generate a tailored resume with AI-powered suggestions. 
              Our system adapts your skills and experience for specific job roles.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-indigo-600">Professional Templates</h3>
            <p className="mt-4 text-gray-600">
              Choose from modern, ATS-friendly resume templates designed to impress 
              recruiters while staying clean and easy to read.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-indigo-600">Instant Export</h3>
            <p className="mt-4 text-gray-600">
              Export your resume as a PDF or share it online instantly with a 
              unique link for employers to view.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-indigo-600">Cover Letter Generator</h3>
            <p className="mt-4 text-gray-600">
              Generate a personalized cover letter alongside your resume with 
              AI-driven content suggestions.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-indigo-600">Career Tips</h3>
            <p className="mt-4 text-gray-600">
              Access career advice and job interview tips to strengthen your 
              job applications and confidence.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-indigo-600">Resume Review</h3>
            <p className="mt-4 text-gray-600">
              Get instant feedback on your resume with AI-based scoring and 
              suggestions for improvement.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-gray-900">Our Pricing Plans</h3>
          <p className="mt-4 text-gray-600">
            Start for free, upgrade anytime as you grow.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 shadow rounded-2xl p-8">
              <h4 className="text-xl font-semibold">Free Plan</h4>
              <p className="text-gray-600 mt-2">Basic resume builder</p>
              <p className="mt-6 text-3xl font-bold text-indigo-600">$0</p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>✔ AI Resume Builder</li>
                <li>✔ 1 Free Template</li>
                <li>✘ PDF Export</li>
              </ul>
              <button onClick={() => navigate("/generate-resume")} className="mt-6 px-6 py-3 w-full bg-indigo-600 text-white rounded-xl hover:bg-indigo-700">
                Get Started
              </button>
            </div>

            <div className="bg-white border-2 border-indigo-600 shadow-lg rounded-2xl p-8">
              <h4 className="text-xl font-semibold">Pro Plan</h4>
              <p className="text-gray-600 mt-2">For job seekers</p>
              <p className="mt-6 text-3xl font-bold text-indigo-600">$9.99/mo</p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>✔ All Templates</li>
                <li>✔ Unlimited PDF Exports</li>
                <li>✔ Cover Letter Generator</li>
                <li>✔ Resume Feedback</li>
              </ul>
              <button className="mt-6 px-6 py-3 w-full bg-indigo-600 text-white rounded-xl hover:bg-indigo-700">
                Choose Pro
              </button>
            </div>

            <div className="bg-white border border-gray-200 shadow rounded-2xl p-8">
              <h4 className="text-xl font-semibold">Enterprise</h4>
              <p className="text-gray-600 mt-2">For organizations</p>
              <p className="mt-6 text-3xl font-bold text-indigo-600">Custom</p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>✔ Multiple Accounts</li>
                <li>✔ Dedicated Support</li>
                <li>✔ Custom Branding</li>
              </ul>
              <button onClick={() => navigate("/contact")} className="mt-6 px-6 py-3 w-full bg-indigo-600 text-white rounded-xl hover:bg-indigo-700">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-600 py-16 text-center text-white">
        <h3 className="text-3xl font-bold">Boost Your Career with AI</h3>
        <p className="mt-4 text-lg">Get started today and build a resume that employers love.</p>
        <button onClick={() => navigate("/generate-resume")} className="mt-6 px-8 py-3 bg-white text-indigo-600 rounded-xl shadow hover:bg-gray-100">
          Try Now
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <p>© {new Date().getFullYear()} AI Resume Maker. All rights reserved.</p>
          <div className="space-x-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Services;
