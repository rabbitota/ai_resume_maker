import React from "react";
import LandingPage from "./LandingPage";

function Login() {
    return (
      <div className="bg-[#2780F5] flex items-center justify-center min-h-screen text-white">
        <div className="bg-[#F527A3] w-full max-w-md p-8 rounded-lg shadow-lg">
          {/* Title */}
          <h2 className="text-2xl font-semibold text-center mb-6">
            Sign in to your account
          </h2>

          {/* Form */}
          <form className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm mb-1" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-[#1e293b] border border-gray-700 
                           focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm mb-1" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 rounded-md bg-[#1e293b] border border-gray-700 
                           focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Remember me & Forgot password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="rounded bg-gray-700 border-gray-600"
                />
                Remember me
              </label>
              <a href="#" className="text-indigo-400 hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Sign in button */}
            <button
              type="submit"
              className="w-full py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 transition-colors"
            >
              Sign in
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-700" />
            <span className="px-3 text-gray-400 text-sm">Or continue with</span>
            <hr className="flex-grow border-gray-700" />
          </div>

          {/* Social Buttons */}
          <div className="flex gap-4">
            <button className="w-1/2 flex items-center justify-center gap-2 py-2 bg-[#1e293b] rounded-md border border-gray-700 hover:bg-gray-800">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                className="w-5 h-5"
                alt="Google"
              />
              Google
            </button>
            <button className="w-1/2 flex items-center justify-center gap-2 py-2 bg-[#1e293b] rounded-md border border-gray-700 hover:bg-gray-800">
              <img
                src="https://www.svgrepo.com/show/475654/github-color.svg"
                className="w-5 h-5"
                alt="GitHub"
              />
              GitHub
            </button>
          </div>

          {/* Footer */}
          <p className="text-center text-sm text-gray-400 mt-6">
            Not a member?{" "}
            <a href="#" className="text-indigo-400 hover:underline">
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
  )
}

export default Login;
