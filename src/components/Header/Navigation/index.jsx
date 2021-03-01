import { Link } from "react-router-dom";
import TBD from "../../../assets/images/time-icon-TBD.png";
import { MenDropdown } from "./MenDropdown";
import { WomenDropDown } from "./WomenDropDown";
export const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
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
        className=" global-header-navbar__navbar collapse navbar-collapse justify-content-around position-relative"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav global-header-navbar__nav">
          <li className="nav-item">
            <Link className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link">Shop</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link " href="#" data-toggle="dropdown-women">
              Women
            </Link>
            <WomenDropDown />
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link" data-toggle="dropdown-men">
              Men
            </Link>
            <MenDropdown />
          </li>

          <li className="nav-item">
            <Link className="nav-link">Search</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link">Cart</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link">Account</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link">Settings</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
