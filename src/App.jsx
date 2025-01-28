import React, { useState } from 'react';
import Navbar from './components/Navbar'; // Import your Navbar component
import Sidebar from './components/sidebar/Sidebar'; // Sidebar component to show/hide
import Body from './components/Body'

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Function to toggle the sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className=" h-screen">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div
        className={`flex-grow transition-all duration-300 ${isSidebarOpen ? 'ml-60' : 'ml-0'}`}
      >
        <Navbar
          toggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />
      </div>
     <div className={`pt-16 flex-grow transition-all duration-300 ${isSidebarOpen ? 'ml-60' : 'ml-0'}`}> 
          <Body />
        </div>
    </div>
  );
};

export default App;
