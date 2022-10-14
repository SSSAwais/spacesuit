import React from "react";
import "./Checkout.css";
import rightarrow from "../../assets/images/right.png";
import key from "../../assets/images/key_img.png";
import map from "../../assets/images/mappin.png";
import Slider from "react-slick";
import checkoutcar from "../../assets/images/checkoutcar.png";
import mail from "../../assets/images/email.png";
import whatsapp from "../../assets/images/whatsapp.png";
import hightlight from "../../assets/images/highlight.png";
import call from "../../assets/images/call.png";
import user from "../../assets/images/user.png";
const Checkout = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <>
      <section className="checkout ">
        <div className="container-fluid overflow-hidden" >
          <div className="row top_row justify-content-between">
            <div className="col-lg-4  col-md-4 col-sm-12">
              <div className="checkout_top_left">
                <h5>םיבכרל הרזח </h5> <img src={rightarrow} alt="" />
              </div>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-12">
              <div className="checkout_right_sections">
                <img src={key} alt="" className="logo_iamge" />

                <h5>LT קראפס טלורבש</h5>
              </div>
              <div className="d-flex align-items-center justify-content-end location_checkout">
                <h5>נתניה</h5>
                <img src={map} alt="" />
              </div>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-lg-7 col-md-7">
              <div className="checkout_slider">
                <Slider {...settings}>
                  <div className="img_width">
                    <img src={checkoutcar} alt="" />
                  </div>
                  <div className="img_width">
                    <img src={checkoutcar} alt="" />
                  </div>
                  <div className="img_width">
                    <img src={checkoutcar} alt="" />
                  </div>
                </Slider>
                <div className="d-flex text-center justify-content-center media_query">
                  <div className="email">
                    <img src={mail} alt="" />
                    <p>פנה במייל</p>
                  </div>
                  <div className="whatsapp">
                    <img src={whatsapp} alt="" />
                    <p>פנה בוואצ׳אפ</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-5">
              <div className="checkout_right_wrapper">
                <div className="check_model_running ">
                  <div className="model_left">
                    <h5>הצעת מימון</h5>
                    <p>החזר חודשי</p>
                    <div className="d-flex align-items-center justify-content-center hight">
                      <h5 className="m-0">₪865</h5>
                      <img src={hightlight} alt="" />
                    </div>
                  </div>
                  <div className="model_right ">
                    <h5>הצעה הסוכנות</h5>
                    <p>מחיר</p>
                    <h5 className="m2">₪62,900</h5>
                  </div>
                </div>
                <div className="tab_bar_section">
                  <div className="tab_sec_first d-flex justify-content-center">
                    <h5> 1399 סמ״ק</h5>
                    <p>:נפח מנוע</p>
                  </div>
                  <div className="tab_sec_second d-flex justify-content-around">
                    <div className="inner_tab_secod_left d-flex ">
                      <h5>3</h5>
                      <p>:יד</p>
                    </div>
                    <div className="inner_tab_seconfd_right d-flex">
                      <h5>2017</h5>
                      <p>:שנה</p>
                    </div>
                  </div>
                </div>
                <div className="address_phone for_tab">
                  <div className="d-flex align-items-center justify-content-end upper_phone_sectio">
                    <h5 className="m-0 inner_phone_section">
                      צור קשר: <span>052-6481888</span>
                    </h5>
                    <img src={call} alt="" />
                  </div>
                  <div className="d-flex align-items-center justify-content-end upper_phone_sectio">
                    <p className="m-0">שם: עידן קליסקי</p>
                    <img src={user} alt="" />
                  </div>
                </div>
                <div className="checkout_detail_section_ d-flex justify-content-between">
                  <div className="left_detail_">
                    <div className="ones">
                      <h5>:תוספות לעיסקה</h5>
                      <ul className="upper_list">
                        <li className="leftt_bullet">התחייבות לבדיקת גיר</li>
                        <li className="leftt_bullet">מנוע ושילדה </li>
                        <li className="leftt_bullet">אחריות יצרן</li>
                      </ul>
                    </div>
                    <div className="twos">
                      <h5>:הצעה למימון</h5>
                      <ul className="lower_list">
                        <li className="three_dot">החל מהחזר חודשי של:</li>
                      </ul>
                      <p> 300 ש״ח </p>
                    </div>
                  </div>
                  <div className="right_detail_">
                    <h5 className="headings">פרטי הרכב</h5>
                    <div className="d-flex justify-content-between list_Check">
                      <p>2017</p>
                      <h5>:שנה</h5>
                    </div>
                    <div className="d-flex justify-content-between list_Check">
                      <p>1399 ליטר בנזין</p>
                      <h5>:מנוע</h5>
                    </div>
                    <div className="d-flex justify-content-between list_Check">
                      <p> 95,000</p>
                      <h5>:קילומטר נוכחי</h5>
                    </div>
                    <div className="d-flex justify-content-between list_Check">
                      <p> 1</p>
                      <h5>:יד</h5>
                    </div>
                    <div className="d-flex justify-content-between list_Check">
                      <p> אוטומטי</p>
                      <h5>:תיבת הילוכים</h5>
                    </div>
                    <div className="d-flex justify-content-between list_Check">
                      <p> שחור </p>
                      <h5>:תיבת הילוכים</h5>
                    </div>
                    <div className="d-flex justify-content-between list_Check">
                      <p> השכרה </p>
                      <h5>:בעלות מקורית</h5>
                    </div>
                    <div className="d-flex justify-content-between list_Check">
                      <p> ₪1,102 </p>
                      <h5>:אגרת רישוי שנתית</h5>
                    </div>
                  </div>
                </div>
                <div className="d-flex text-center justify-content-center media_query">
                  <div className="whatsapp whats_tab">
                    <img src={whatsapp} alt="" />
                    <p>פנה בוואצ׳אפ</p>
                  </div>
                </div>
                <div className="address_phone for_tab2">
                  <div className="upper_phone_sectio">
                    <h5 className="m-0 inner_phone_section">
                      צור קשר: <span>052-6481888</span>
                    </h5>
                    <img src={call} alt="" />
                  </div>
                  <div className=" upper_phone_sectio">
                    <p className="m-0">שם: עידן קליסקי</p>
                    <img src={user} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
