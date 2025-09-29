import React from "react";
import { Menu, LogOut, FileText, LayoutDashboard, User, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Dashboard() {
  const navigate = useNavigate();

  const response=axios.get("http://localhost:8080/me", { withCredentials: true })
    .then(res => console.log(res.data))
    .catch(err => console.error(err));


    const handleLogout = () => {
      // You can also clear sessionStorage/localStorage here if you use them
      alert("Logout successfully");
      navigate("/login"); // Redirect to login page
    };



  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white shadow-lg">
        <nav className="flex-1 px-4 py-6 space-y-3">
          <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 font-medium">
            <LayoutDashboard className="w-5 h-5" />
            <span>Dashboard</span>
          </a>
          <a href="generate-resume" className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 font-medium">
            <FileText className="w-5 h-5" />
            <span>Resume Builder</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 font-medium">
            <User className="w-5 h-5" />
            <span>Profile</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 font-medium">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </a>
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t">
          <button
            type="button"
            onClick={handleLogout}
            className="flex items-center w-full justify-center bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition"
          >
            <LogOut className="w-5 h-5 mr-2" /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="md:hidden flex items-center justify-between p-4 bg-white shadow">
          <h1 className="text-xl font-bold text-indigo-600">Dashboard</h1>
          <button>
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Dashboard Content */}
        <div className="p-6 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Welcome Back {response.email}</h2>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-700">Resumes Created</h3>
              <p className="mt-2 text-3xl font-bold text-indigo-600">12</p>
            </div>
            <div className="bg-white shadow-md rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-700">Active Templates</h3>
              <p className="mt-2 text-3xl font-bold text-indigo-600">5</p>
            </div>
            <div className="bg-white shadow-md rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-700">Profile Completeness</h3>
              <p className="mt-2 text-3xl font-bold text-green-500">85%</p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white shadow-md rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Recent Activity</h3>
            <ul className="space-y-3">
              <li className="text-gray-600">✅ New resume created - <span className="font-semibold">Software Engineer</span></li>
              <li className="text-gray-600">🎨 Template updated - <span className="font-semibold">Modern Design</span></li>
              <li className="text-gray-600">🔒 Password changed successfully</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

