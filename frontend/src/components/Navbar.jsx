import React from "react";
import { Link } from "react-router";
function Navbar() {
  return (
    <div className="navbar shadow bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to={"/home1"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/services"}>Services</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact Us</Link>
            </li>
            <li>
              <Link to={"/feature"}>Feature</Link>
            </li>
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl">
          <h1 className="text-2xl font-bold text-indigo-600">AI Resume Maker</h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
              <Link to={"/home1"}>Home</Link>
            </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/services"}>Services</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>
            <Link to={"/feature"}>Feature</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link className="btn" to={"/login"}>Login</Link>
      </div>
    </div>
  );
}

export default Navbar;
