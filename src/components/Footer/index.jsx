import React from "react";
import { LowerFooter } from "./LowerFooter";
import { UpperFooter } from "./UpperFooter";

const Footer = () => {
  return (
    <footer id="global-footer" className="global-footer">
      <div className="global-footer-layout">
        <UpperFooter />
        <hr className=" global-footer__separator" />
        <LowerFooter />
      </div>
    </footer>
  );
};
export default Footer;
