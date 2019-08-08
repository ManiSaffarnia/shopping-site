import React from "react";
import { Link } from "react-router-dom";

/**Logo Image */
import { ReactComponent as Logo } from "../../assets/images/crown.svg";

const Header = () => {
  return (
    <header className="header">
      {/* LOGO */}
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>

      {/* Navbar */}
      <nav className="header-links-wrapper">
        <Link to="/shop" className="header-link">
          فروشگاه
        </Link>
      </nav>
    </header>
  );
};

export default Header;
