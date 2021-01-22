import TBD from "../../assets/images/time-icon-TBD.png";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaPinterestSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

export const LowerFooter = () => {
  return (
    <div className="global-footer__container">
      <Link to="#">
        {" "}
        <img src={TBD} alt="" className="global-footer-company-links__logo" />
      </Link>
      <div className="global-footer-company-links">
        <ul className="global-footer-company-links__list">
          <li className="global-footer-company-links__list-item">lorem</li>
          <li className="global-footer-company-links__list-item">lorem</li>
          <li className="global-footer-company-links__list-item">lorem</li>
          <li className="global-footer-company-links__list-item">llorem</li>
        </ul>
        <hr className="global-footer__separator mb-3 is-hidden-tablet" />

        <small className="global-footer-company-links__copyright">
          &copy; 2021 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Nobis iure, exercitationem nemo reiciendis iste voluptate nostrum
          voluptatem quisquam quis qui, esse maiores dicta ea excepturi.
        </small>
      </div>
      <div className="global-footer-social">
        <ul className="global-footer-social__list">
          <li className="global-footer-social__list-item">
            <Link className="global-footer__icon-link">
              <FaTwitterSquare />{" "}
            </Link>
          </li>
          <li className="global-footer-social__list-item">
            <Link className="global-footer__icon-link">
              <FaFacebookSquare />{" "}
            </Link>
          </li>
          <li className="global-footer-social__list-item">
            <Link className="global-footer__icon-link">
              <FaYoutubeSquare />{" "}
            </Link>
          </li>
          <li className="global-footer-social__list-item">
            <Link className="global-footer__icon-link">
              <FaPinterestSquare />
            </Link>
          </li>
          <li className="global-footer-social__list-item">
            <Link className="global-footer__icon-link">
              <FaInstagramSquare />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
