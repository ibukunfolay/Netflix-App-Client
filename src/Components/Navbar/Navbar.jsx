import React, { useState } from 'react';
import './navbar.scss';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { IoMdArrowDropdown } from 'react-icons/io';
import { MdNotifications } from 'react-icons/md';
import logo from '../../assets/Netflix-Logo.svg';
import profile from '../../assets/profile.jpg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className="navbar__container">
        <div className="navbar__container-left">
          <img src={logo} alt="logo" className="" />
          <span>Homepage</span>
          <Link to="/series" className="link">
            <span>Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span>Movies</span>
          </Link>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="navbar__container-right">
          <FiSearch className="navbar__icon" />
          <span>Kid</span>
          <MdNotifications className="navbar__icon" />
          <img src={profile} alt="" />
          <div className="navbar__profile">
            <IoMdArrowDropdown className="navbar__icon" />
            <div className="navbar__profile-options">
              <span>logout</span>
              <span>settings</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
