

import React, { useState } from "react";

export default function Navbarcomponents() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar navbar-light bg-light px-3 d-flex justify-content-between align-items-center">
        <a className="navbar-brand fw-bold" href="#">
          
        </a>

        {/* Hamburger icon (Bootstrap) */}
        <button
          className="btn d-lg-none"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ border: "none", fontSize: "24px" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Desktop Menu */}
        {/* <ul className="d-none d-lg-flex list-unstyled mb-0">
          <li className="px-3">Home</li>
          <li className="px-3">Contact</li>
          <li className="px-3">Services</li>
          <li className="px-3">Blog</li>
        </ul> */}
      </nav>

      {/* Mobile Menu (slides from left) */}
      {/* <div className={`side-menu ${menuOpen ? "open" : ""}`}>
        <button
          className="btn-close ms-auto me-2 mt-2"
          onClick={() => setMenuOpen(false)}
        ></button>
        <ul className="list-unstyled mt-4">
          <li className="py-2 border-bottom" onClick={() => setMenuOpen(false)}>
            Home
          </li>
          <li className="py-2 border-bottom" onClick={() => setMenuOpen(false)}>
            Contact
          </li>
          <li className="py-2 border-bottom" onClick={() => setMenuOpen(false)}>
            Services
          </li>
          <li className="py-2 border-bottom" onClick={() => setMenuOpen(false)}>
            Blog
          </li>
        </ul>
      </div> */}


      {/* Banner Sectiioin  */}
      <div style={{ width: "100%", maxHeight: "500px", overflow: "hidden", background:'whitesmoke', border:'1px solid black', padding:"4px", position:'relative' }}> 
        <p>ABC</p>
</div>

<p style={{position:"absolute", top:'20px',left:"50%",  }}>xyz</p>
    </>
  );
}
