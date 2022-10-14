import React, { useContext, useState } from "react";
import { provideContent } from "../../context/reducer/rootReducer";
import "./SideBar.css";
const SideBar = ({ setShowCar1, setShowCar2 }) => {
  const values = useContext(provideContent);

  const [list, setList] = useState([
    {
      id: 1,
      headings: "בכרה גוס*",
    },
    {
      id: 2,
      headings: "ןרצי*",
    },
    {
      id: 3,
      headings: "םגד",
    },
    {
      id: 4,
      headings: "הנש",
    },
    {
      id: 5,
      headings: "עונמ חפנ",
    },
    {
      id: 6,
      headings: "םיכוליה תבית",
    },
    {
      id: 7,
      headings: "םגד תת",
    },
  ]);

  return (
    <>
      <section
        className={"sidebar_wrapper "}
        style={{
          right: values.state.sidebarToggle ? "-450px" : "0",
        }}
      >
        <div className="overlay_sidebar" style={{
          visibility: values.state.sidebarToggle ? "hidden" : "visible",
        }} ></div>
        <div className="sidebar">
          <div className="container-xxl">
            <div className="row">
              <div className="col-lg-12">
                <div className="first_wrapper d-flex justify-content-between">
                  <p>
                    נקה הכל{" "}
                    <span
                      onClick={() => {
                        values.dispatch({
                          type: "SIDEBARTOGGLE",
                        });
                      }}
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </span>
                  </p>
                  <h5>ןוניס</h5>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12  main_margin">
                {list.map((element, index) => (
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle list_wrapper"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <p>
                        <i className="fa-sharp fa-solid fa-arrow-down"></i>
                      </p>
                      <h4>{element.headings}</h4>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Lorem lorem lorem
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Lorem lorem lorem
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Lorem lorem lorem
                        </a>
                      </li>
                    </ul>
                  </div>
                  // <div
                  //   className="list_wrapper d-flex justify-content-between align-items-center "
                  //   key={element.id}
                  // >
                  //   <p>
                  //     <i className="fa-sharp fa-solid fa-arrow-down"></i>
                  //   </p>
                  //   <h4>{element.headings}</h4>
                  // </div>
                ))}
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="plus_clock text-end">
                  <p>
                    םדקתמ שופיח
                    <span>
                      <i className="fa-regular fa-plus"></i>
                    </span>
                  </p>
                  <p>
                    םינורחא םישופיח
                    <span>
                      <i className="fa-regular fa-clock"></i>
                    </span>
                  </p>
                </div>
                <button className="sidebar_buton">חפש</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SideBar;
