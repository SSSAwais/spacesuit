import React, { useContext } from "react";
import "./CarsCards.css";
import map from "../../assets/images/mappin.png";
import Slider from "react-slick";
import { provideContent } from "../../context/reducer/rootReducer";

const CarsCards = (props) => {
  const values = useContext(provideContent);
  const hanldeOpenSidebar = () => {
    console.log(values.state.sidebarToggle, props.id + 1);
    values.dispatch({
      type: "SIDEBARTOGGLE",
    });
  };
  const { carImage, cardName, location, heartFil } = props;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <>
      <div className="card_wrapper">
        <div className="card--cars--slider--dection">
          <span className="card--favourite--icon">
            {" "}
            <img src={heartFil} alt="" /> אסור לפספס
          </span>
          <Slider {...settings}>
            <div className="carImages">
              <img src={carImage} alt="img" />
            </div>
            <div className="carImages">
              <img src={carImage} alt="img" />
            </div>
            <div className="carImages">
              <img src={carImage} alt="img" />
            </div>
            <div className="carImages">
              <img src={carImage} alt="img" />
            </div>
          </Slider>
        </div>
        <div className="below_section">
          <div className="name_section">
            <h4>{cardName}</h4>
            <p>
              {location} <img src={map} alt="map icon" />{" "}
            </p>
          </div>
          <div className="detail d-flex justify-content-end">
            <div className="left_detail">
              <h6>תוספות לעיסקה:</h6>
              <ul>
                <li className="bullets-left">התחייבות לבדיקת גיר</li>
                <li className="bullets-left">מנוע ושילדה</li>
                <li className="bullets-left">אחריות יצרן</li>
              </ul>
            </div>
            <div className="right_detail">
              <h6>הצעה למימון</h6>
              <p>החל מהחזר חודשי</p>
              <p>
                של:<span> 300 ש״ח </span>
              </p>
            </div>
          </div>
          <div className="varient_model d-flex justify-content-between">
            <div className="first_item">
              <h5>ת.הילוכים</h5>
              <p>אוטומטי</p>
            </div>
            <div className="second_item">
              <h5>יד</h5>
              <p>2</p>
            </div>
            <div className="third_item">
              <h5>ק״מ</h5>
              <p>3,000</p>
            </div>
            <div className="fourth_item">
              <h5>שנת יצור</h5>
              <p>2022</p>
            </div>
          </div>
          <button className="card_button">יצירת קשר</button>
        </div>
      </div>
    </>
  );
};

export default CarsCards;
