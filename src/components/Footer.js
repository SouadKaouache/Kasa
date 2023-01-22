import React from "react";
import logo from "../assets/transparentLogo.png";
import "../css/footer.css";

function Footer() {
  return (
    <div className="footercontainer">
      <div className="logo-white">
        <img src={logo} alt="logo de Kasa" />
        <p className="texte-font">© 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
