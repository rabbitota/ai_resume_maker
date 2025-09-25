import React from "react";
import LandingPage from "./LandingPage";
import { useNavigate } from "react-router-dom";

function Home1() {
    const navigate = useNavigate();
  return (
     <div className="min-h-screen bg-gray-0 flex flex-col">
      
      {/* Hero Section */}
      
      <main className=" flex-1 flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-4xl font-extrabold text-indigo-600 sm:text-5xl">
          <br />
          Build Your Resume in Minutes with AI
        </h2>
        <p className="mt-4 text-lg text-gray-0 max-w-2xl">
          Our AI-powered resume maker helps you create professional, tailored resumes 
          instantly. Save time and land your dream job faster.
        </p>
        
      </main>

      {/* Features Section */}
      <section id="features" className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-indigo-600 mb-12">
            Why Choose Our Resume Maker?
          </h3>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-indigo-600">AI Suggestions</h4>
              <p className="mt-2 text-gray-0">
                Get personalized resume content suggestions powered by AI to match your skills and job role.
              </p>
            </div>

            <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-indigo-600">Custom Templates</h4>
              <p className="mt-2 text-gray-0">
                Choose from multiple modern and professional resume templates.
              </p>
            </div>

            <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-indigo-600">Job Optimization</h4>
              <p className="mt-2 text-gray-0">
                Tailor your resume for specific job descriptions to increase your chances of getting noticed.
              </p>
            </div>

            <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-indigo-600">Instant Export</h4>
              <p className="mt-2 text-gray-0">
                Download your resume as PDF or share it online instantly.
              </p>
            </div>

          </div>
        </div>

        <div className="flex justify-center">
          <div className="mt-6 space-x-4">
            <button onClick={() => navigate("/register")} className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700">
              Create Resume
            </button>
            <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-xl shadow hover:bg-gray-300">
              Learn More
            </button>
          </div>
      </div>

        

    
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

export default Home1;












