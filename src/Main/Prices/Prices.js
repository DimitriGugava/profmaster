import "./Prices.css";
import logo from "../../icons/logo.svg";
import { Link } from "react-router-dom";
import helmet from "../../icons/helmet.jpg";

const Prices = () => {
  return (
    <div className="pricesContainer">
      <img src={logo} className="PricesCompanyLogo" alt="profmaster logo" />
      <Link style={{ textDecoration: "none" }} to="/">
        <div className="pricesGoBackToMain">დაბრუნდი მთავარზე</div>
      </Link>
      <div className="priceListBox">
        {" "}
        <img src={helmet} className="priceImage" />
        <ul>
          <a className="priceHeaderText">ფასები:</a>

          <li className="priceNormalText"> ჭერის გაჭიმვა - 2000 ლარი</li>

          <li className="priceNormalText"> ჭერის გაჭიმვა - 2000 ლარი</li>

          <li className="priceNormalText"> ჭერის გაჭიმვა - 2000 ლარი</li>

          <li className="priceNormalText"> პროსტა გაჭიმვა - 2000 ლარი</li>
        </ul>
      </div>
    </div>
  );
};

export default Prices;
