import React, { useState, useRef } from "react";
import { links, social } from "./data";
import logo from "./logo.svg";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [showLink, setShowLink] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = ()=>{
    setShowLink(!showLink)
  }
  const linkStyles ={
    height: showLink ? `${linksRef.current.getBoundingClientRect().height}px`: "0px"
  }

 

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>

        <div
          className="links-container" ref={linksContainerRef}
          style={linkStyles}
        >
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { url, id, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        {/*social links*/}
        <ul className="social-icons">
            {social.map((socialIcon)=>{
                const {id, url, icon} = socialIcon
                return <li key={id}>
                    <a href={url}>{icon}</a>
                </li>
            })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
