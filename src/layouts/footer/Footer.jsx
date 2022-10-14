import React from "react";
import "./Footer.css";
import footerlogo from "../../assets/images/footer--logo.png";
import footleft from "../../assets/images/foot--left.png";
import footright from "../../assets/images/foot-right.png";
import { NavLink, Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="container-fluid p-0 disktop--footer">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-3 col-md-3 col-sm-3">
            <div className="f--logo">
              <img src={footerlogo} alt="footerlogo" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-9">
            <div className="f--menu--section">
              <ul>
                <li>
                  <NavLink to="pricing">רישום לניוזלטר</NavLink>
                </li>
                <li>
                  <NavLink to="Gensil">פרסם מודעה</NavLink>
                </li>
                <li>
                  <NavLink to="Checkout">בדיקת מימון</NavLink>
                </li>
                <li>
                  <NavLink to="home">חיפוש רכב</NavLink>
                </li>
                <li>
                  <Link to="/">כל הזכויות שמורות</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mobile--footer">
        <div className="row">
          <div className="col">
            <div className="footer---btns">
              <button className="foot--btn--left">
                <span className="btn--icons">
                  <img src={footright} alt="" />
                </span>
                בכרל ןומימ
              </button>
              <button className="foot--btn--right">
                <span className="btn--icons">
                  <img src={footleft} alt="" />
                </span>
                בכרל חוטיב
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
