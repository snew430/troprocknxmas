import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navigation = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <p>Trop Rock'n Christmas</p>
      </div>
      <ul className="app__navbar-links">
          <Nav.Link as={Link} to="/home"  className="app__flex p-text">
                Home
          </Nav.Link>
          <Nav.Link as={Link} to="/cookie"  className="app__flex p-text">
                Cookies
          </Nav.Link>
          <Nav.Link as={Link} to="/about"  className="app__flex p-text">
                About Us
          </Nav.Link>
       
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
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
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
