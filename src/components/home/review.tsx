import React from "react";
import { Carousel } from "antd";
import "../../assets/css/review.css";
import quote from "../../assets/images/review/quotes-left.png";

const ReviewCom: React.FC = () => (
  <>
    <h2 className="review-title">REVIEW</h2>
    <Carousel arrows infinite={false} className="review-section" dots={false}>
      <div className="review-item">
        <div className="review-content">
          <div className="quote-section">
            <div className="quote-element">
              <img src={quote} alt="" />
            </div>
            <p>
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still
            </p>
            <h3 className="quote-person">John Doe</h3>
          </div>
        </div>
        <div className="review-content">
          <div className="quote-section">
            <div className="quote-element">
              <img src={quote} alt="" />
            </div>
            <p>
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still
            </p>
            <h3 className="quote-person">John Doe</h3>
          </div>
        </div>
      </div>
      <div className="review-item">
        <div className="review-content">
          <div className="quote-section">
            <div className="quote-element">
              <img src={quote} alt="" />
            </div>
            <p>
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still
            </p>
            <h3 className="quote-person">John Doe</h3>
          </div>
        </div>
        <div className="review-content">
          <div className="quote-section">
            <div className="quote-element">
              <img src={quote} alt="" />
            </div>
            <p>
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still
            </p>
            <h3 className="quote-person">John Doe</h3>
          </div>
        </div>
      </div>
    </Carousel>
    <br />
  </>
);

export default ReviewCom;
