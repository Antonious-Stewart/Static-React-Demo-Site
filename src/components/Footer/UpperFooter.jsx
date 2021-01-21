import TBD from "../../assets/images/time-icon-TBD.png";
export const UpperFooter = () => {
  return (
    <div className="global-footer__container">
      <nav className="global-footer-info-links">
        <ul className="row global-footer-info-links__list">
          <li className="md-col-3 global-footer-info-links__list-item">
            <ul className="global-footer-sublist">
              <li className="global-footer-sublist__item-title">Lorem ipsum</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
          </li>
          <li className="md-col-3 global-footer-info-links__list-item">
            <ul className="global-footer-sublist">
              <li className="global-footer-sublist__item-title">Lorem ipsum</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
          </li>
          <li className="md-col-3 global-footer-info-links__list-item">
            <ul className="global-footer-sublist">
              <li className="global-footer-sublist__item-title">
                Lorem ipsum .
              </li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
          </li>
        </ul>
      </nav>
      <div className="global-footer-stats">
        <img src={TBD} alt="" srcset="" className="global-footer-stats__logo" />
        <ul className="global-footer-stats__list">
          <li className="global-footer-stats__list-item">Lorem, ipsum.</li>
          <li className="global-footer-stats__list-item">
            Lorem ipsum dolor sit.
          </li>
        </ul>
      </div>
    </div>
  );
};
