import React, { useState } from 'react';
import Navbar from './components/Navbar'; // Import your Navbar component
import Sidebar from './components/sidebar/Sidebar'; // Sidebar component to show/hide

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle the sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className=" h-screen">
      {/* Sidebar component */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main content area */}
      <div
        className={`flex-grow transition-all duration-300 ${isSidebarOpen ? 'ml-60' : 'ml-0'}`}
      >
        {/* Navbar with the sidebar toggle button */}
        <Navbar
          toggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />
      </div>
    </div>
  );
};

export default App;
