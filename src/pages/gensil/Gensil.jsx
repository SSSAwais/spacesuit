import React, { useState } from "react";
import "./Gensil.css";
import keyImg from "../../assets/images/key_img.png";
import right from "../../assets/images/right.png";
import CarsCards from "../../components/carsCard/CarsCards";
import car1 from "../../assets/images/car1.png";
import car2 from "../../assets/images/car2.png";
import car3 from "../../assets/images/car3.png";
import car4 from "../../assets/images/car4.png";
import car5 from "../../assets/images/car5.png";
import car6 from "../../assets/images/car6.png";
import car7 from "../../assets/images/car7.png";
import car8 from "../../assets/images/car8.png";
import car9 from "../../assets/images/car9.png";
import whiteArrow from "../../assets/images/whiteright.png";
const Gensil = () => {
  const [card, setCard] = useState([
    {
      carImage: car1,
      cardName: "Q5 DESIGN LMTD ידוא",
      location: "נתניה",
    },
    {
      carImage: car2,
      cardName: "TREND סוקופ דרו",
      location: "נשר",
    },
    {
      carImage: car3,
      cardName: "PRIME PLUS ןוסוט יאדנוי",
      location: "אילת",
    },
    {
      carImage: car4,
      cardName: "AMBITION היבטקוא הדוקס",
      location: "אשדוד",
    },
    {
      carImage: car5,
      cardName: "LT קראפס טלורבש",
      location: "נתניה",
    },
    {
      carImage: car6,
      cardName: "Q5 DESIGN LMTD ידואא",
      location: "חיפה",
    },
    {
      carImage: car7,
      cardName: "530E LINE 5 הרדס וו.מ.ב",
      location: "חדרה",
    },
    {
      carImage: car3,
      cardName: "CX-5 LUXURY הדזאמ",
      location: "תל אביב",
    },
    {
      carImage: car8,
      cardName: "INTENSE רו'צפק ונר",
      location: "נתניה",
    },
    {
      carImage: car9,
      cardName: "SPORT 3 הדזאמ",
      location: "נתניה",
    },
  ]);
  return (
    <>
      <section className="gensil_wrapper">
        <div className="gensl_wrap">
          <div className="container-fluid p-0">
            <div className="row">
              <div className="col-12">
                <div className="gensil_sec d-flex justify-content-between">
                  <div className="right_section d-flex align-items-center">
                    <h3>הרזח</h3>{" "}
                    <img src={right} alt="right icon" className="blue" />
                    <img src={whiteArrow} alt="" className="white" />
                  </div>
                  <div className="key_section d-flex align-items-center">
                    {" "}
                    <h3>גניסיל</h3>
                    <img src={keyImg} alt="keyImage" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid p-0 m-0 class_mon">
          <div className="row cards_">
            <div className="col-lg-12 cards_align">
              {card.map((e, idx) => (
                <CarsCards
                  key={idx}
                  carImage={e.carImage}
                  cardName={e.cardName}
                  location={e.location}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gensil;
