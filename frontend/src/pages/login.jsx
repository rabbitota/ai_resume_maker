import React from "react";
import LandingPage from "./LandingPage";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/login", {
        email,
        password,

      });

      if (response.status === 200) {
        alert("Login successful!");
        navigate("/dashboard"); // redirect after success
      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError("Invalid email or password");
      } else {
        setError("Something went wrong. Try again later.");
      }
    }
  };



  return (
    <div className="bg-[#2780F5] flex items-center justify-center min-h-screen text-white">
      <div className="bg-[#F527A3] w-full max-w-md p-8 rounded-lg shadow-lg">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-center mb-6">
          Sign in to your account
        </h2>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label className="block text-sm mb-1" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email} onChange={(e) => setEmail(e.target.value)}
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
              value={password} onChange={(e) => setPassword(e.target.value)}
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
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  )
}

export default Login;
