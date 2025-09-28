import React from "react";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaTelegram, FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  return ( 
    <div className="min-h-screen bg-gray-50 flex flex-col">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-50 to-indigo-100 py-16 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Get in <span className="text-indigo-600">Touch</span>
        </h2>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          Have questions or suggestions? We’d love to hear from you.  
          Fill out the form or use any of the contact methods below.
        </p>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Contact Information</h3>
            <p className="text-gray-600">Reach us directly through these platforms:</p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-indigo-600 text-xl" />
                <a href="mailto:resumeai@gmail.com" className="text-gray-700 hover:text-indigo-600">
                  resumeai@gmail.com
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <FaPhoneAlt className="text-indigo-600 text-xl" />
                <a href="tel:+880123456789" className="text-gray-700 hover:text-indigo-600">
                  +880 1234-567-89
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <FaWhatsapp className="text-green-600 text-xl" />
                <a href="https://wa.me/880123456789" target="_blank" rel="noreferrer" className="text-gray-700 hover:text-green-600">
                  WhatsApp Chat
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <FaTelegram className="text-sky-500 text-xl" />
                <a href="https://t.me/yourtelegramid" target="_blank" rel="noreferrer" className="text-gray-700 hover:text-sky-500">
                  Telegram
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <FaFacebook className="text-blue-600 text-xl" />
                <a href="https://facebook.com/yourpage" target="_blank" rel="noreferrer" className="text-gray-700 hover:text-blue-600">
                  Facebook Page
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl shadow-lg p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-left text-gray-700 font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-left text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-left text-gray-700 font-medium">Message</label>
                <textarea
                  placeholder="Write your message..."
                  rows="5"
                  className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow hover:bg-indigo-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-gray-900">Meet Our Team</h3>
          <p className="mt-4 text-gray-600">
            We are four passionate developers who built AI Resume Maker.
          </p>

          <div className="mt-12 grid md:grid-cols-4 gap-8">
            {/* Shakibul */}
            <div className="bg-white shadow-md rounded-xl p-6 border-2 border-indigo-600">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="Shakibul"
                className="w-24 h-24 mx-auto rounded-full"
              />
              <h4 className="mt-4 text-lg font-semibold">Md. Shakibul Islam</h4>
              <p className="text-gray-500">Lead Developer</p>
              <p className="mt-2 text-sm text-indigo-600 font-semibold">⭐ Hardworking Member</p>
            </div>

            {/* Rabbi */}
            <div className="bg-white shadow-md rounded-xl p-6 border-2 border-indigo-600">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
                alt="Rabbi"
                className="w-24 h-24 mx-auto rounded-full"
              />
              <h4 className="mt-4 text-lg font-semibold">Abbdur Rabbi Tota</h4>
              <p className="text-gray-500">Backend Specialist</p>
              <p className="mt-2 text-sm text-indigo-600 font-semibold">⭐ Hardworking Member</p>
            </div>

            {/* Obidul */}
            <div className="bg-white shadow-md rounded-xl p-6">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135789.png"
                alt="Obidul"
                className="w-24 h-24 mx-auto rounded-full"
              />
              <h4 className="mt-4 text-lg font-semibold">Obidul Hasan</h4>
              <p className="text-gray-500">Frontend Developer</p>
            </div>

            {/* Debjyoti */}
            <div className="bg-white shadow-md rounded-xl p-6">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
                alt="Debjyoti"
                className="w-24 h-24 mx-auto rounded-full"
              />
              <h4 className="mt-4 text-lg font-semibold">Debjyoti Das</h4>
              <p className="text-gray-500">UI/UX Designer</p>
            </div>
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

export default Contact;
