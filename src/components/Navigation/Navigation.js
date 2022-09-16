import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/TropRockLogo.png';

import './Navigation.scss';

const Navigation = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <h2>A Trop Rockin Christmas</h2>
      <ul className="app__navbar-links">
          <li className="app__flex p-text">
            <Link as={Link} to="/home">
                  Home
            </Link>
          </li>
          <li className="app__flex p-text">
            <Link as={Link} to="/cookie">
                  Cookies
            </Link>
          </li>
          <li className="app__flex p-text">
            <Link as={Link} to="/about">
                  About Us
            </Link>
          </li>
      </ul>

      <div className="app__navbar-menu">

          <HiMenuAlt4 onClick={() => setToggle(true)} />
          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                <li className="app__flex p-text">
                  <Link as={Link} to="/home"  className="app__flex p-text">
                      Home
                  </Link>
                </li>
                <li className="app__flex p-text">
                  <Link as={Link} to="/cookie"  className="app__flex p-text">
                      Cookies
                  </Link>
                </li>
                <li className="app__flex p-text">
                  <Link as={Link} to="/about"  className="app__flex p-text">
                      About Us
                  </Link>
                </li>
                <li className='app__flex'>
                  <img src={logo} alt="trop rock logo"></img>
                </li>
                </ul>
            </motion.div>
          )}

      </div>
    </nav>
  );
};

export default Navigation;
