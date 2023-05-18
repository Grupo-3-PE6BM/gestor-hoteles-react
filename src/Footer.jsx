import React from "react";

export const Footer = () => {
  return (
    <>
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            Inn<span>Sight</span>
          </h3>

    <br />
          <p className="footer-company-name">Inn Sight © 2023</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>6A Avenida 13-54</span> Ciudad de Guatemala, Guatemala
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>(+502) 5698-7841</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:info@innsight.com">info@innsight.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>Sobre Nosotros</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
            euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>

          <div className="footer-icons">
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="https://github.com/Grupo-3-PE6BM/gestor-hoteles-react.git">
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
