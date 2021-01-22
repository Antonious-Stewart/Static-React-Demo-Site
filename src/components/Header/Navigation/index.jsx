import { Link } from "react-router-dom";
import TBD from "../../../assets/images/time-icon-TBD.png";
export const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand">
        <img src={TBD} alt="" className="global-header-navbar__brand" />
      </Link>
      <button
        className="navbar-toggler bg-primary"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className=" global-header-navbar__navbar collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav global-header-navbar__nav">
          <li className="nav-item">
            <Link className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link">Blog</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
