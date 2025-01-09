import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material'; // Import the menu icon for the toggle button

const Navbar = ({ toggleSidebar }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleDropdownClose = () => {
    setDropdownOpen(false);
  };

  return (
    <div className="navbar bg-white shadow-md fixed top-0 left-0 right-0 z-10 flex items-center justify-between p-3"> {/* Decreased padding */}
      {/* Sidebar Toggle Button */}
      <div className="flex-none">
        <IconButton onClick={toggleSidebar} className="lg:hidden">
          <Menu />
        </IconButton>
      </div>

      <div className="flex-1">
        <a className="text-xl font-bold">College Dashboard</a>
      </div>

      <div className="flex-none gap-2">
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>
        <div className="relative">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar" onClick={handleDropdownToggle}>
            <div className="w-10 rounded-full">
              <img
                alt="User  Avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          {dropdownOpen && ( // Render dropdown only if open
            <ul
              className="menu menu-sm dropdown-content bg-white rounded-box z-20 mt-3 w-52 p-2 shadow-lg absolute right-0"
            >
              <li>
                <a className="justify-between" onClick={handleDropdownClose}>
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a onClick={handleDropdownClose}>Settings</a></li>
              <li><a onClick={handleDropdownClose}>Logout</a></li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;