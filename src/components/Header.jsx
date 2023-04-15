import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { FaQuestion } from "react-icons/fa";

// COMPONENT TO DISPLAY THE HEADER
const Header = ({ text, bgColor, textColor }) => {
  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <>
      <header style={headerStyle}>
        <div className="container about-link">
          <NavLink to="/" activeClassName="active">
            <h2>{text}</h2>
          </NavLink>
        </div>
        <div className="about-link" activeClassName="active">
          <NavLink to="/about">
            <FaQuestion size={20} />
          </NavLink>
        </div>
      </header>
      <div className="container">
        {/* Outlet: Indicates where the other component should start */}
        <Outlet />
      </div>
    </>
  );
};

Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
};

export default Header;
