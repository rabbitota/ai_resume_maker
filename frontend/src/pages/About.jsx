import React from 'react'
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* About Hero */}
      <section className="flex-1 flex flex-col justify-center items-center text-center px-6 py-16 bg-gradient-to-r from-indigo-50 to-indigo-100">
        <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          About <span className="text-indigo-600">AI Resume Maker</span>
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-gray-0">
          We built AI Resume Maker to help job seekers save time and stand out with 
          professional, AI-powered resumes. Whether you’re a student, a fresher, or 
          an experienced professional — our tool is designed to make resume creation 
          effortless and effective.
        </p>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/sakibul.png"
            alt="Resume Illustration"
            className="w-full max-w-md mx-auto"
          />
          <div>
            <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
            <p className="mt-4 text-gray-600">
              Our mission is simple: make resume building faster, smarter, and 
              accessible to everyone. We use Artificial Intelligence to suggest 
              the best phrases, optimize formatting, and create resumes that 
              recruiters notice.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✅ AI-powered content suggestions</li>
              <li>✅ Easy-to-use templates</li>
              <li>✅ Instant PDF export</li>
              <li>✅ Edit your Resume</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-gray-900">Meet the Team</h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We’re a group of passionate developers and designers dedicated 
            to making job applications easier and smarter.
          </p>
          

          <div className="mt-10 grid md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-xl p-6">

              <img src= "/sakibul.jpg"
                alt="Team member"
                className="w-24 h-24 mx-auto rounded-full"
              />

              <h4 className="mt-4 text-lg font-semibold">Shakibul Islam</h4>
              <p className="text-gray-500">Founder & Developer</p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-6">
              <img
                src="/tota.jpg"
                alt="Team member"
                className="w-24 h-24 mx-auto rounded-full"
              />
              <h4 className="mt-4 text-lg font-semibold">M Abdur Rabbi Tota</h4>
              <p className="text-gray-500">UI/UX Designer</p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-6">
              <img
                src="/obidul.jpeg"
                alt="Team member"
                className="w-24 h-24 mx-auto rounded-full"
              />
              <h4 className="mt-4 text-lg font-semibold">Obidul Hasan</h4>
              <p className="text-gray-500">AI Engineer</p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6">
              <img
                src="/deb.jpeg"
                alt="Team member"
                className="w-24 h-24 mx-auto rounded-full"
              />
              <h4 className="mt-4 text-lg font-semibold">Debjyoti Das</h4>
              <p className="text-gray-500">AI Engineer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-600 py-16 text-center text-white">
        <h3 className="text-3xl font-bold">Ready to Build Your Resume?</h3>
        <p className="mt-4 text-lg">Start now and create your professional resume in minutes.</p>
        <button onClick={() => navigate("/generate-resume")} className="mt-6 px-8 py-3 bg-white text-indigo-600 rounded-xl shadow hover:bg-gray-100">
          Get Started
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

export default About