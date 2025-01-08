import React, { useState } from 'react';
import Navbar from './components/Navbar'; // Import your Navbar component
import Sidebar from './components/sidebar/Sidebar'; // Sidebar component to show/hide

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Function to toggle the sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar component */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main content area */}
      <div
        className={`flex-grow transition-all duration-300 
        }`} // Adjust content based on sidebar state
      >
        {/* Navbar with the sidebar toggle button */}
        <Navbar
          toggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />

        {/* Main content area */}
        <div className="p-4">
          <h1>Welcome to the College Dashboard</h1>
          <p>This is your main content area.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
