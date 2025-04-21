import React from "react";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer id="footer-bar">
      <HashLink smooth to="#top"><button>Back to top?</button></HashLink>
    </footer>
  );
}

export default Footer;
