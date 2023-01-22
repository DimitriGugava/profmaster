import "./Prices.css";
import logo from "../../icons/logo.svg";
import { Link } from "react-router-dom";
import helmet from "../../icons/helmet.jpg";
import pricesback from "../../icons/pricesback.jpg";

const Prices = () => {
  return (
    <div className="pricesContainer">
      <img src={logo} className="PricesCompanyLogo" alt="profmaster logo" />

      <Link style={{ textDecoration: "none" }} to="/">
        <div className="pricesGoBackToMain">დაბრუნდი მთავარზე</div>
      </Link>
      <div className="priceListBox">
        <img src={helmet} className="priceImage" />
        <div className="desktopPriceCover">
          <a className="priceHeaderTextDesktop">ფასები:</a>
        </div>
        <ul>
          <a className="priceHeaderText">ფასები:</a>

          <li className="priceNormalText"> ელექტროობა 15 ლარიდან</li>

          <li className="priceNormalText"> სანტექნიკა 50 ლარიდან</li>

          <li className="priceNormalText"> თაბაშირ მუყაო მ2 15 ლარიდან</li>

          <li className="priceNormalText"> კაფელ-მეტლახი მ2 40 ლარიდან</li>

          <li className="priceNormalText"> მოჭიმული იატაკი მ2 15 ლარიდან</li>

          <li className="priceNormalText"> გასაჭიმი ჭერი მ2 30 ლარიდან</li>

          <li className="priceNormalText"> გაჯით ლესვა მ2 15 ლარიდან</li>
        </ul>
      </div>
    </div>
  );
};

export default Prices;
