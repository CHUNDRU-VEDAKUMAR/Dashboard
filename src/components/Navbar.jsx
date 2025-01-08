import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material'; // Import the menu icon for the toggle button

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="navbar bg-base-100 w-100 border-bla">
      {/* Sidebar Toggle Button */}
      <div className="flex-none">
        <IconButton onClick={toggleSidebar} className="lg:hidden">
          <Menu />
        </IconButton>
      </div>

      <div className="flex-1">
        <a className="btn btn-ghost text-xl">College Dashboard</a>
      </div>

      <div className="flex-none gap-2">
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="User Avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
