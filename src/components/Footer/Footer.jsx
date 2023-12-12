import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat,
            exercitationem debitis. Quis tenetur optio molestiae fugit omnis,
            natus pariatur architecto magni, iusto reiciendis excepturi nam
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
            laudantium saepe iste vitae, quam fuga optio exercitationem iure
            suscipit! Inventore rerum similique ducimus non obcaecati minus quo
            autem harum accusamus?
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">MotivateMe</span>
          <div className="copyright">
            &copy; Copyright 2023. All right reserved
          </div>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
