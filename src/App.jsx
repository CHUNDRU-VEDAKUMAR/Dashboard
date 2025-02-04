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
      <div className={`pt-16 flex-grow transition-all duration-300 ${isSidebarOpen ? 'ml-60' : 'ml-0'}`}> {/* Adjust padding based on your navbar height */}
        <Body />
        <div className='flex-col  mt-[10%] text-center'>
          <h1 className='font-500 bold'>Superset charts</h1>
          <div className='flex m-[10%]'>
            <div className='mr-[20px]'>

              <iframe
                className='mt-20px'
                width="600"
                height="400"
                seamless
                frameBorder="0"
                scrolling="no"
                src="http://localhost:8088/superset/explore/p/B6KW02Ql8EJ/?standalone=1&height=400"
              >
              </iframe>
            </div>


            <iframe
              width="600"
              height="400"
              seamless
              frameBorder="0"
              scrolling="no"
              src="http://localhost:8088/superset/explore/p/JnjXlY85bwW/?standalone=1&height=400"
            >
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
