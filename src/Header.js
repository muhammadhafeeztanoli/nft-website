import React from 'react';
import { Link } from "react-scroll";
import logo from './logo.svg';

import "./Header.css";

const Header = () => {
  return (
    <nav>
      <ul className="header">
        <li className="logos">
          <Link
            activeClass="active"
            to="logo"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
          <img src={logo} alt="Logo" />
          </Link>
        </li>
        <li  className="whats">
          <Link
            activeClass="active"
            to="Whats"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            What
          </Link>
        </li>
        <li className="Communitys">
          <Link
            activeClass="active"
            to="Community"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Community
          </Link>
        </li>
        <li className="Mints">
          <Link
            activeClass="active"
            to="Mint"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Mint
          </Link>
        </li>
        <li className="FAQS">
          <Link
            activeClass="active"
            to="FAQ"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            FAQ
          </Link>
        </li>
        <li className="Roadmaps">
          <Link
            activeClass="active"
            to="Roadmap"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Roadmap
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;