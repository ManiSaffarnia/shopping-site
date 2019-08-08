import React from "react";
import { Link } from "react-router-dom";

/**Logo Image */
import { ReactComponent as Logo } from "../../assets/images/crown.svg";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="header-links-wrapper">
        <Link to="/shop" className="header-link">
          فروشگاه
        </Link>
      </div>
    </div>
  );
};

export default Header;
