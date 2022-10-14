import React, { useEffect, useState } from "react";
import "./Home.css";
import Slider from "react-slick";
import cars from "../../assets/images/homeslidecar.png";
import car1 from "../../assets/images/h-cata-1.png";
import car2 from "../../assets/images/h-cata-2.png";
import car3 from "../../assets/images/h-cata-3.png";
import car4 from "../../assets/images/h-cata-4.png";
import car5 from "../../assets/images/h-cata-5.png";
import car6 from "../../assets/images/h-cata-6.png";
import car7 from "../../assets/images/h-cata-7.png";
import car8 from "../../assets/images/h-cata-8.png";
import { Link } from "react-router-dom";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 1000,
  };
  const [cate, setCate] = useState([
    {
      img: car1,
      title: "ירחסמ",
      pagelink: 'pricing'
    },
    {
      img: car2,
      title: "תויאשמ",
      pagelink: 'pricing'

    },
    {
      img: car3,
      title: "יטרפ",
      pagelink: 'pricing'

    },
    {
      img: car4,
      title: "יטרפ",
      pagelink: 'pricing'

    },
    {
      img: car5,
      title: "םידחוימ",
      pagelink: 'pricing'

    },
    {
      img: car6,
      title: "טייש ילכ",
      pagelink: 'pricing'

    },
    {
      img: car7,
      title: "םיעונפוא",
      pagelink: 'pricing'

    },
    {
      img: car8,
      title: "םיפי׳ג",
      pagelink: 'pricing'

    },
  ]);

  return (
    <section className="home--page">
      <div className="home--hero--section">
        <div className="container-fluid p-0 overflow-hidden">
          <div className="row">
            <div className="col">
              <Slider {...settings} className="heroo--custom--slider">
                <div className="slider--item">
                  <div className="slide--item--content">
                    <button className="btn custom--btn ">
                      <span className="slider-icon">
                        <i className="fa-solid fa-chevron-left"></i>
                      </span>
                      לפרטים
                    </button>
                    <h3 className="sli--item--title">
                      <span>שירות על</span> - מקבלים רק אצלנו
                    </h3>
                  </div>
                  <div className="slide--item--image">
                    <img src={cars} alt="cars" />
                  </div>
                </div>
                <div className="slider--item">
                  <div className="slide--item--content">
                    <button className="btn  custom--btn">
                      <span className="slider-icon">
                        <i className="fa-solid fa-chevron-left"></i>
                      </span>
                      לפרטים
                    </button>
                    <h3 className="sli--item--title">
                      <span>שירות על</span> - מקבלים רק אצלנו
                    </h3>
                  </div>
                  <div className="slide--item--image">
                    <img src={cars} alt="cars" />
                  </div>
                </div>
                <div className="slider--item">
                  <div className="slide--item--content">
                    <button className="btn  custom--btn">
                      <span className="slider-icon">
                        <i className="fa-solid fa-chevron-left"></i>
                      </span>
                      לפרטים
                    </button>
                    <h3 className="sli--item--title">
                      <span>שירות על</span> - מקבלים רק אצלנו
                    </h3>
                  </div>
                  <div className="slide--item--image">
                    <img src={cars} alt="cars" />
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <div className="home--cars--catagories">
        <div className="container-fluid">
          <div className="row categories--wrapper">
            {cate.map((element, index) => {
              return (
                <div
                  className="col-lg-3 col-md-4 col-sm-6 col-6 wrapper--item"
                  key={index}
                >
                  <div className="cata--tile">
                    <h3 className="title--heading">{element.title}</h3>
                    <Link to={element.pagelink}>
                      <div className="cate--img">
                        <img src={element.img} alt="car " className="img-fluid" />
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
