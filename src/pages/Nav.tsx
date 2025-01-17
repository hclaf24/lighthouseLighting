import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"

function Nav() {
  const [navActive, setNavActive] = useState
  (false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu;
      }
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu;
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div className="flex gap-2 items-center">
        <p>Lighthouse Lighting</p>
        <img src="./img/logo.svg" alt="Logo" className="h-8"  loading="lazy" />
      </div>
      <a className={`navHamburger ${navActive ? "active" : ""}`} onClick={toggleNav}>
        <span className="navHamburgerLine"></span>
        <span className="navHamburgerLine"></span>
        <span className="navHamburgerLine"></span>
      </a>
      <div className={`navbarItems ${navActive ? "active" : ""}`}>

            <NavLink 
              onClick={closeMenu}
              to="/"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              Home
            </NavLink>

            <NavLink 
              onClick={closeMenu}
              to="/lights"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              Lights
            </NavLink>

            <NavLink 
              onClick={closeMenu}
              to="/custom"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              Custom Designs
            </NavLink>

            <NavLink 
              onClick={closeMenu}
              to="/about"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              About
            </NavLink>

            <NavLink
              onClick={closeMenu}
              to="/contact"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              Contact
            </NavLink>

      </div>
    </nav>
  );
}

export default Nav;