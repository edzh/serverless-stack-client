import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom'
import Routes from "./Routes";

function App() {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="container mx-auto mt-4">
      <nav className="p-3 bg-gray-200 border border-gray-300 w-full">
        <div className="relative flex">
          <div className="font-bold text-gray-600 flex-grow">
            <Link to="/">Scratch</Link>
          </div>
          <div className="absolute inset-y-0 flex items-center right-0 text-gray-600 md:hidden cursor-pointer" onClick={() => setShowNav(!showNav)}>
            <svg className="w-5 h-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </div>
          <div className="md:flex hidden items-center">
            <NavLink activeClassName="bg-gray-300" className="-my-3 p-3 text-gray-600" to="/signup">Sign Up</NavLink>
            <NavLink activeClassName="bg-gray-300" className="-my-3 p-3 text-gray-600" to="/login">Login</NavLink>
          </div>
        </div>
        {showNav &&
          <div className="md:hidden mt-3">
            <NavLink activeClassName="bg-gray-300" className="p-3 -mx-3 text-gray-600 block" to="/signup">Sign Up</NavLink>
            <NavLink activeClassName="bg-gray-300" className="p-3 -mx-3 text-gray-600 block" to="/login">Login</NavLink>
          </div>
        }
      </nav>
      <Routes />
    </div>
  );
}

export default App;
