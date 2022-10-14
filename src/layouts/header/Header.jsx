import React, { useContext, useState } from "react";
import logo from "../../assets/images/logo.png";
import headlight from "../../assets/images/head-light.png";
import notfiication from "../../assets/images/notifi.png";
import filterimg from "../../assets/images/filterimage.png";
import "./Header.css";
// import { provideContent } from "../../context/reducer/rootReducer";
import { Link, useLocation } from "react-router-dom";
import SideBar from "../sidebar/SideBar";
import { provideContent } from "../../context/reducer/rootReducer";
const Header = () => {
  const data = useContext(provideContent);
  // const [sidebarshow, setsidebarshow] = useState(false)
  const location = useLocation();
  return (
    <header>
      <div className="container-fluid p-0 disltop--header">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-8">
            <div className="header--lang--search--section  ">
              <div className="head--multi">
                <span className="language--name">ע</span>
                <span className="language--dopdown">
                  <i className="fa-solid fa-angle-down"></i>
                </span>
              </div>
              <div className="head--search">
                <input type="text" placeholder="...שפח" />
                <span className="seach--icon">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
              </div>
              <div className="head--left">
                <span className="lighting---icon">
                  <img src={headlight} alt="" />
                </span>
                <span className="head--left--filter" onClick={() => {
                  data.dispatch({
                    type: 'SIDEBARTOGGLE'
                  })
                }}>
                  <span>
                    {
                      data.state.sidebarToggle ? <img src={notfiication} alt="" /> : <img src={filterimg} alt="" className="filter--img" />
                    }
                  </span>

                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-4 ">
            <div className="header--logo d-flex justify-content-end align-items-center">
              <Link to="/">
                <img src={logo} alt="" className="img-fluid" />
              </Link>
              <h2 className="logo--name">
                <span>חללית</span> קאר
              </h2>
            </div>
          </div>
        </div>
      </div>

      <SideBar />
      <div className="container-fluid p-0 mobile--header">
        <div className="row align-items-center">
          <div className="col-sm-3 col-3 mobile--left">
            <div className="l--content">
              <span className="mobile--search--icon">
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
              {/* <img src={notfiication} alt="" /> */}
              <span className="head--left--filter" onClick={() => {
                data.dispatch({
                  type: 'SIDEBARTOGGLE'
                })
              }}>
                <span>
                  {
                    data.state.sidebarToggle ? <img src={notfiication} alt="" /> : <img src={filterimg} alt="" className="filter--img" />
                  }
                </span>

              </span>
            </div>
          </div>
          <div className="col-sm-6 col-6 p-0 mobile--center">
            <div className="mobile--logo d-flex justify-content-center align-items-center">
              <Link to={'/'}>
                <img src={logo} alt="" className="img-fluid" />
              </Link>
              <h2 className="logo--name">
                <span>חללית</span> קאר
              </h2>
            </div>
          </div>
          <div className="col-sm-3 col-3 mobile--right">
            <div className="mobile--multi">
              <span className="mobile--language--dopdown">
                <i className="fa-solid fa-angle-down"></i>
              </span>
              <span className="mobile--language--name">ע</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
