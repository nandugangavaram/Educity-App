import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/images/next-icon.png";
import back_icon from "../../assets/images/back-icon.png";
import user_1 from "../../assets/images/user-1.png";
import user_2 from "../../assets/images/user-2.png";
import user_3 from "../../assets/images/user-3.png";
import user_4 from "../../assets/images/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img
        src={next_icon}
        alt="Next Button"
        className="next-btn"
        onClick={slideForward}
      />
      <img
        src={back_icon}
        alt="Back Button"
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="User1 Image" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                eveniet dolorum illum, maiores distinctio quasi velit quod neque
                eligendi dolor, ad sapiente repellendus eius sit aliquid facilis
                porro totam blanditiis.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="User2 Image" />
                <div>
                  <h3>Trester Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                eveniet dolorum illum, maiores distinctio quasi velit quod neque
                eligendi dolor, ad sapiente repellendus eius sit aliquid facilis
                porro totam blanditiis.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="User3 Image" />
                <div>
                  <h3>Lucy Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                eveniet dolorum illum, maiores distinctio quasi velit quod neque
                eligendi dolor, ad sapiente repellendus eius sit aliquid facilis
                porro totam blanditiis.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="User4 Image" />
                <div>
                  <h3>Jack Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                eveniet dolorum illum, maiores distinctio quasi velit quod neque
                eligendi dolor, ad sapiente repellendus eius sit aliquid facilis
                porro totam blanditiis.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
