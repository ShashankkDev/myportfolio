import React, { useState,useEffect } from 'react'
import "./Nav.css";
import { Link } from 'react-router-dom';
import {AiOutlineGithub, AiOutlineInstagram} from "react-icons/ai"


const Nav = () => {

  const [navOpen, setNavOpen] = useState(false);


  return (

    <div className='navv'>
      <div className="nav-container">
        <div className="navbarr">
            <div className='logo'>
             <h3>S.Dev</h3>
            </div>
            <div className="menu-toggle" onClick={() => {setNavOpen(!navOpen)}}>
                <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
                    <span className={navOpen ? "lineTop spin" : "lineTop"}></span>
                    <span className={navOpen ? "lineBottom spin" : "lineBottom"}></span>
                </div>
            </div>
        </div>
        <div className="nav-overlay" 
        style={{
          top: navOpen ? "0" : "-1000px",
          transitionDelay: navOpen ? "0s" : "0s",
        }}
        >
           <ul className="nav-links">
            <li className="nav-item">
              <Link to="/" onClick={() => { setNavOpen(!navOpen)}}
              style={{
                top: navOpen ? "0" : "120px",
                transitionDelay: navOpen ? "0.4s" : "0s",
              }}
              >
                Home
              </Link>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <Link to="/about" onClick={() => { setNavOpen(!navOpen)}}
              style={{
                top: navOpen ? "0" : "120px",
                transitionDelay: navOpen ? "0.5s" : "0s",
              }}
              >
                About
              </Link>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <Link to="/projects" onClick={() => { setNavOpen(!navOpen)}} 
              style={{
                top: navOpen ? "0" : "120px",
                transitionDelay: navOpen ? "0.6s" : "0s",
              }}
              >
                Projects
              </Link>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <Link to="/contact" onClick={() => { setNavOpen(!navOpen)}}
              style={{
                top: navOpen ? "0" : "120px",
                transitionDelay: navOpen ? "0.7s" : "0s",
              }}
              >
                Contact
              </Link>
              <div className="nav-item-wrapper"></div>
            </li>
           </ul>
           <div className="nav-footer">
            <div className="location"
            style={{
              bottom: navOpen ? "0" : "-20px",
              opacity: navOpen ? "1" : "0",
              transitionDelay: navOpen ? "1.2s" : "0s",
            }}
            >
              <span>Work ON</span>
            </div>
            <div className="nav-social-media">
              <ul>
              <li>
                  <Link to="https://github.com/JordonShank" target='blank'  
                  style={{
                    bottom: navOpen ? "0" : "-20px",
                    opacity: navOpen ? "1" : "0",
                    transitionDelay: navOpen ? "1.3s" : "0s",
                    fontSize: "30px",
                  }}><AiOutlineGithub/></Link>
                </li>
                <li>
                  <Link to="https://www.instagram.com/jordon_shank/" target='blank'
                  style={{
                    bottom: navOpen ? "0" : "-20px",
                    opacity: navOpen ? "1" : "0",
                    transitionDelay: navOpen ? "1.4s" : "0s",
                    fontSize: "30px",
                  }}
                  ><AiOutlineInstagram/></Link>
                </li>
              </ul>
            </div>
           </div>
        </div>
      </div>
    </div>

  
  )
}

export default Nav
