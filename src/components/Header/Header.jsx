import React, { useState } from 'react';
import './Header.css';
import headerimg from '../Images/ninja-logo.png';

const Header = () => {
  const nav = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' },
    { name: 'Records', link: '/records' },
    { name: 'Login', link: '/login' },
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <header className='header'>
      <div id='logodiv'>
        <img className='header-logo' src={headerimg} alt="" />
        <h1>MUDASIR</h1>
      </div>
      <div className='nav'>
        {nav.map((item, index) => (
          <a key={index} href={item.link}>{item.name}<span></span></a>
        ))}
      </div>

      
      {/* Menu button to toggle sidebar */}
      <div className="menubtn">
        <button className='menubutton' onClick={toggleSidebar}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </button>
      </div>
      
      {/* Sidebar menu */}
      {isSidebarOpen && (
        <div className="sidebar-menu">
          <button className='closebtn' onClick={closeSidebar}>
            CLOSE
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
            </svg>
          </button>
          <div className="sidebar-links">
            {nav.map((item, index) => (
              <a key={index} href={item.link}>{item.name} <span></span></a>
            ))}
          </div>
        </div>
      )}


    </header>
  );
};

export default Header;
