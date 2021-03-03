import { NavLink } from "react-router-dom";
import TBD from "../../assets/images/time-icon-TBD.png";
import { MenDropdown } from "./MenDropdown";
import { WomenDropDown } from "./WomenDropDown";
export const Navigation = () => {
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".navbar");
    header.classList.toggle("sticky", window.scrollY > 40);
  });
  return (
    <nav
      className='navbar navbar-expand-lg navbar-light bg-transparent position-fixed w-100'
      style={{ justifyContent: "space-evenly", zIndex: 1000 }}
    >
      <NavLink className='navbar-brand' to='/Home'>
        <img src={TBD} alt='' style={{ height: "4rem", width: "auto" }} />
      </NavLink>
      <button
        className='navbar-toggler bg-primary'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div
        className='collapse navbar-collapse  flex-grow-0'
        id='navbarSupportedContent'
      >
        <ul className='navbar-nav' style={{ fontSize: "1.7rem" }}>
          <li className='nav-item'>
            <NavLink className='nav-Navlink' to='/Home'>
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-Navlink' to='/Shop'>
              Shop
            </NavLink>
          </li>
          <li className='nav-item dropdown'>
            <NavLink
              className='nav-Navlink '
              to='#'
              data-toggle='dropdown-women'
            >
              Women
            </NavLink>
            <WomenDropDown />
          </li>
          <li className='nav-item dropdown'>
            <NavLink className='nav-Navlink' data-toggle='dropdown-men' to='#'>
              Men
            </NavLink>
            <MenDropdown />
          </li>

          <li className='nav-item'>
            <div className='nav-Navlink'>Search</div>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-Navlink' to='/Cart'>
              Cart
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-Navlink' to='#'>
              Account
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-Navlink' to='#'>
              Settings
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
