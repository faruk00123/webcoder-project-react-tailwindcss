import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const {user, userLogout} = useAuth();
  console.log(user);
  const newPaga = useNavigate()


  // logout user
  const logout = async ()=>{
     try {
      await userLogout();
      newPaga("/")
     } catch (error) {
      console.log(error.message);
     }
  }
 const [isActiv, setIsActiv] = useState(false);
  return (
<div className="navbar max-w-screen-2xl container mx-auto px-5 bg-white shadow-sm">
  <div className="navbar-start -ml-6 sm:-ml-0">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link to="/">Home</Link></li>
      <li><Link to="/services">Servises</Link></li>
      <li><Link to="/blogs">Blogs</Link></li>
        <li>
          <details>
          <summary>Categories</summary>
          <ul className="p-2">
            <li><Link to="/">Web Design</Link></li>
            <li><Link to="/">App Development</Link></li>
            <li><Link to="/">UI/UX Design</Link></li>
            <li><Link to="/">Digital Marketing</Link></li>
          </ul>
        </details>
        </li>
      </ul>
    </div>
    <Link to="/" className="text-xl flex space-x-2 justify-center items-center">
      <img src="/logo.png" alt="Logo icon" />
      <span className="font-bold hidden sm:block text-[#697077]">OmCoder</span>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/services">Servises</Link></li>
      <li><Link to="/blogs">Blogs</Link></li>
      <li>
        <details>
          <summary>Categories</summary>
          <ul className="p-2 z-50">
            <li><Link to="/blogs">Web Design</Link></li>
            <li><Link to="/blogs">App Development</Link></li>
            <li><Link to="/blogs">UI/UX Design</Link></li>
            <li><Link to="/companyLogos">Digital Marketing</Link></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
  <div className="navbar-end space-x-4 flex flex-row">
    {
      user ? (<><Link to="/dashboard" className="btn btn-outline btn-accent">Dashboard</Link>
    <button onClick={logout} className="btn btn-outline btn-secondary">Logout</button></>):
    (<><Link to="/login" className="btn btn-outline btn-accent">Login</Link>
    <Link to="/pricing" className="btn btn-outline btn-secondary hidden sm:flex">Start Free Trial</Link></>)
    }
    
    
  </div>
</div>
 
  );
};

export default Navbar;
